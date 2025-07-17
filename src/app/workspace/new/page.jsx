"use client";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { HomeIcon, LayoutIcon, SaveIcon, MenuIcon, XIcon } from "lucide-react";
import Spinner from "../../components/Spinner";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";


const initialPanels = [
  { id: 1, title: "Follow up email", content: "Auto Generated ✨", x: 1, y: 2, z: 1, width: 200, height: 160 },
  { id: 2, title: "Client Information", content: "", x: 2, y: 2, z: 2, width: 200, height: 160 },
  { id: 3, title: "Web scraper", content: "", x: 3, y: 1, z: 3, width: 200, height: 160 },
  { id: 4, title: "Multi-post agent", content: "", x: 3, y: 2, z: 4, width: 200, height: 160 },
  { id: 5, title: "Main - Lex", content: "Thank You!", x: 1, y: 1, z: 5, width: 200, height: 160 },
];

const aiAgents = [
    { id: "a1", label: "Agent 1", icon: "/file.svg" },
    { id: "a2", label: "Agent 2", icon: "/globe.svg" },
    { id: "a3", label: "Agent 3", icon: "/window.svg" },
    { id: "a4", label: "Agent 4", icon: "/next.svg" },
    { id: "a5", label: "Agent 5", icon: "/vercel.svg" },
];

export default function NewWorkspacePage() {
  const session = useSession();
  const router = useRouter();
  const supabase = useSupabaseClient();
  
  const [panels, setPanels] = useState(initialPanels);
  const [zIndexCounter, setZIndexCounter] = useState(initialPanels.length);
  const [toast, setToast] = useState("");
  const [allLayouts, setAllLayouts] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [layoutName, setLayoutName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLayoutName, setCurrentLayoutName] = useState("Default");
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [layoutToDelete, setLayoutToDelete] = useState(null);
  const gridRef = useRef();

   useEffect(() => {
    const fetchLayouts = async () => {
        if (session) {
            const { data, error } = await supabase
                .from('layouts')
                .select('*')
                .eq('user_id', session.user.id);

            if (error) {
                console.error('Error fetching layouts:', error);
                showToast('Error fetching layouts.');
            } else {
                const fetched = data.reduce((acc, layout) => {
                    acc[layout.layout_name] = layout.panels;
                    return acc;
                }, {});
                setAllLayouts(fetched);
            }
        } else {
            setAllLayouts({}); // Clear layouts if no session
        }
    };

    fetchLayouts();
  }, [session, supabase]);

  

  
  const handleQuit = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const openSaveModal = () => {
    setLayoutName("");
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!layoutName.trim()) return;
    if (!session) {
        showToast("Please log in to save layouts.");
        return;
    }

    console.log("Session:", session);

    const newLayout = {
        user_id: session.user.id,
        layout_name: layoutName.trim(),
        panels: panels,
    };

    console.log("New layout data:", newLayout);

    // Check if layout already exists
    const { data: existingLayout, error: fetchError } = await supabase
        .from('layouts')
        .select('id')
        .eq('user_id', session.user.id)
        .eq('layout_name', layoutName.trim())
        .single();

    if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 means no rows found
        console.error('Error checking existing layout:', fetchError);
        showToast('Error saving layout.');
        return;
    }

    console.log("Existing layout check result:", { existingLayout, fetchError });

    if (existingLayout) {
        // Update existing layout
        const { error } = await supabase
            .from('layouts')
            .update(newLayout)
            .eq('id', existingLayout.id);

        if (error) {
            console.error('Error updating layout:', error);
            showToast('Error updating layout.');
        } else {
            const newLayouts = { ...allLayouts, [layoutName.trim()]: panels };
            setAllLayouts(newLayouts);
            showToast("Layout updated!");
        }
    } else {
        // Insert new layout
        const { error } = await supabase
            .from('layouts')
            .insert([newLayout]);

        if (error) {
            console.error('Error inserting layout:', error);
            showToast('Error saving layout.');
        } else {
            const newLayouts = { ...allLayouts, [layoutName.trim()]: panels };
            setAllLayouts(newLayouts);
            showToast("Layout saved!");
        }
    }
    setShowModal(false);
  };

  const loadNamed = async (name) => {
    if (!session) {
        showToast("Please log in to load layouts.");
        return;
    }
    setIsLoading(true); // Start loading
    const { data, error } = await supabase
        .from('layouts')
        .select('panels')
        .eq('user_id', session.user.id)
        .eq('layout_name', name)
        .single();

    if (error) {
        console.error('Error loading layout:', error);
        showToast('Error loading layout.');
    } else if (data) {
        setPanels(data.panels);
        setShowDropdown(false);
        setCurrentLayoutName(name); // Update current layout name
        showToast(`Loaded layout "${name}"`);
    } else {
        showToast(`Layout "${name}" not found.`);
    }
    setIsLoading(false); // End loading
  };

  const handleDeleteLayout = (e, name) => {
    e.stopPropagation(); // Prevent triggering loadNamed
    if (!session) {
        showToast("Please log in to delete layouts.");
        return;
    }
    setLayoutToDelete(name);
    setShowDeleteConfirmModal(true);
  };

  const confirmDeleteLayout = async () => {
    if (!session || !layoutToDelete) return;

    console.log("Attempting to delete layout:", layoutToDelete);
    console.log("Session user ID:", session.user.id);

    const { error } = await supabase
        .from('layouts')
        .delete()
        .eq('user_id', session.user.id)
        .eq('layout_name', layoutToDelete);

    if (error) {
        console.error('Error deleting layout:', error);
        showToast('Error deleting layout.');
    } else {
        const newLayouts = { ...allLayouts };
        delete newLayouts[layoutToDelete];
        setAllLayouts(newLayouts);
        showToast(`Layout "${layoutToDelete}" deleted.`);

        // If the deleted layout was the currently active one, revert to default
        if (currentLayoutName === layoutToDelete) {
            setPanels(initialPanels);
            setCurrentLayoutName("Default");
        }
    }
    setShowDeleteConfirmModal(false);
    setLayoutToDelete(null);
  };
    const onDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
    setZIndexCounter((z) => z + 1);
    setPanels((prev) =>
      prev.map((panel) =>
        panel.id === id ? { ...panel, z: zIndexCounter + 1 } : panel
      )
    );
  };

  const isOccupied = (x, y, currentId) =>
    panels.some((p) => p.x === x && p.y === y && p.id !== currentId);

  const onDrop = (e) => {
    e.preventDefault();
    const id = +e.dataTransfer.getData("text/plain");
    const gridEl = gridRef.current;
    const gridRect = gridEl?.getBoundingClientRect();
    if (!gridRect) return;

    const cellW = gridRect.width / 4;
    const cellH = gridRect.height / 4;
    const x = Math.floor((e.clientX - gridRect.left) / cellW);
    const y = Math.floor((e.clientY - gridRect.top) / cellH);
    if (x >= 0 && y >= 0 && x < 4 && y < 4 && !isOccupied(x, y, id)) {
      setPanels((prev) =>
        prev.map((p) => (p.id === id ? { ...p, x, y } : p))
      );
    }
  };

  const closePanel = (id) => {
    setPanels((p) => p.filter((panel) => panel.id !== id));
  };

  const handleResizeStart = (e, id) => {
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;
    const target = panels.find((p) => p.id === id);
    const startW = target.width;
    const startH = target.height;

    const move = (e) => {
      const w = Math.max(120, startW + e.clientX - startX);
      const h = Math.max(100, startH + e.clientY - startY);
      setPanels((prev) =>
        prev.map((p) => (p.id === id ? { ...p, width: w, height: h } : p))
      );
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <div 
            className="bg-gray-800 px-4 py-2 flex justify-between items-center text-sm font-semibold border-b border-gray-700"
        >
            <div className="flex items-center space-x-4">
                <button onClick={() => setSidebarCollapsed(!isSidebarCollapsed)} className="p-2 rounded-md hover:bg-gray-700">
                    {isSidebarCollapsed ? <MenuIcon size={20} /> : <XIcon size={20} />}
                </button>
            </div>
            <div className="flex space-x-2 relative">
                <span className="text-sm font-medium mr-5 "> {currentLayoutName}</span>
                <button onClick={openSaveModal} className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
                    <SaveIcon size={16} />
                    <span>Save layout</span>
                </button>
                <div className="relative">
                    <button onClick={()=> setShowDropdown(!showDropdown)} className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
                        <LayoutIcon size={16} />
                        <span>All Saved Layouts</span>
                    </button>
                    {showDropdown && (
                        <div className="origin-top-right absolute top-full right-0 mt-2 bg-white text-black rounded shadow-lg z-50">
                            {Object.keys(allLayouts).length === 0 ? (
                                <div className="p-2">No layouts saved</div>
                            ) : (
                                Object.entries(allLayouts).map(([name]) => (
                                    <div key={name} className="flex justify-between items-center px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                        <span onClick={() => loadNamed(name)} className="flex-grow">{name}</span>
                                        <button
                                            onClick={(e) => handleDeleteLayout(e, name)}
                                            className="ml-4 text-red-500 hover:text-red-700"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
                <button onClick={handleQuit} className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded">
                    <HomeIcon size={16} />
                    <span>Quit to home</span>
                </button>
            </div>
        </div>

        <div className="flex flex-grow overflow-hidden">
            <div 
                className={`bg-gray-800 p-3 border-r border-gray-700 overflow-y-auto transition-all duration-300 flex flex-col ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}
            >
                <h2 className={`text-lg font-semibold mb-2 ${isSidebarCollapsed ? 'hidden' : ''}`}>AI Agents</h2>
                <ul className="space-y-2 text-sm">
                    {aiAgents.map((a) => (
                        <li key={a.id} className="flex items-center space-x-2">
                            <img src={a.icon} alt={a.label} className="w-8 h-8" />
                            {!isSidebarCollapsed && <span>{a.label}</span>}
                        </li>
                    ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-700">
                    {session?.user?.email ? (
                        <div className="flex items-center space-x-2 text-sm">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                                {session.user.email[0].toUpperCase()}
                            </div>
                            {!isSidebarCollapsed && (
                                <div className="relative">
                                    <span>{session.user.email}</span>
                                    <button
                                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                                        className="ml-2 p-1 rounded-full hover:bg-gray-700 focus:outline-none"
                                    >
                                        ...
                                    </button>
                                    {showUserDropdown && (
                                        <div className="absolute bottom-full left-0 mb-2 w-32 bg-white text-black rounded shadow-lg z-50">
                                            <button
                                                onClick={handleLogout}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : (
                        !isSidebarCollapsed && (
                            <button
                                onClick={() => router.push('/signin')}
                                className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white text-sm"
                            >
                                Login
                            </button>
                        )
                    )}
                </div>
            </div>

            <div 
                ref={gridRef} 
                onDrop={onDrop} 
                onDragOver={(e) => e.preventDefault()} 
                className="flex-grow relative grid grid-cols-4 grid-rows-4 gap-2 p-4"
                style={{
                    backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                }}
            >
                {panels.map((panel) => (
                    <div key={panel.id} draggable onDragStart={(e) => onDragStart(e, panel.id)}
                        style={{ gridColumnStart: panel.x + 1, gridRowStart: panel.y + 1, zIndex: panel.z || 1, width: panel.width, height: panel.height, position: "absolute" }}
                        className="bg-white text-black rounded shadow-md flex flex-col">
                        <div className="bg-gray-200 px-2 py-1 flex justify-between items-center text-sm font-semibold cursor-move">
                            {panel.title}
                            <button onClick={() => closePanel(panel.id)} className="text-red-500 hover:text-red-700">×</button>
                        </div>
                        <div className="p-2 text-sm overflow-auto flex-grow">{panel.content}</div>
                        <div onMouseDown={(e) => handleResizeStart(e, panel.id)} className="w-3 h-3 bg-gray-400 absolute bottom-0 right-0 cursor-se-resize" />
                    </div>
                ))}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                        <Spinner />
                    </div>
                )}
            </div>
        </div>

        {showModal && (
            <AlertDialog open={showModal} onOpenChange={setShowModal}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Save Layout</AlertDialogTitle>
                        <AlertDialogDescription>
                            <input value={layoutName} onChange={(e) => setLayoutName(e.target.value)} placeholder="Layout name" className="w-full border px-3 py-2 mb-4 rounded text-black" />
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Save</AlertDialogAction>
                        <AlertDialogAction onClick={() => setShowModal(false)} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-black">Cancel</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        )}

        {toast && <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg text-sm z-50">{toast}</div>}
        {isLoading && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                <Spinner />
            </div>
        )}
        {showDeleteConfirmModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white text-black rounded-lg p-6 w-80 relative">
                    <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                    <p>Do you really want to delete the layout "{layoutToDelete}"?</p>
                    <div className="mt-4 flex justify-end space-x-2">
                        <button onClick={() => setShowDeleteConfirmModal(false)} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
                        <button onClick={confirmDeleteLayout} className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white">Delete</button>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}
