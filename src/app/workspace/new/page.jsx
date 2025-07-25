"use client";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { HomeIcon, LayoutIcon, SaveIcon, MenuIcon, XIcon } from "lucide-react";


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
  const gridRef = useRef();

   useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("lex-all-layouts") || "{}");
    setAllLayouts(saved);
  }, []);

  

  const saveAllLayouts = (obj) => {
    localStorage.setItem("lex-all-layouts", JSON.stringify(obj));
  };
  const handleQuit = async () => {
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

  const handleSave = () => {
    if (!layoutName.trim()) return;
    const newLayouts = { ...allLayouts, [layoutName.trim()]: panels };
    setAllLayouts(newLayouts);
    saveAllLayouts(newLayouts);
    setShowModal(false);
    showToast("Layout saved!");
  };

  const loadNamed = (name) => {
    setPanels(allLayouts[name]);
    setShowDropdown(false);
    showToast(`Loaded layout "${name}"`);
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
                <button onClick={openSaveModal} className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
                    <SaveIcon size={16} />
                    <span>Save layout</span>
                </button>
                <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
                    <LayoutIcon size={16} />
                    <span>All Saved Layouts</span>
                </button>
                <button onClick={handleQuit} className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded">
                    <HomeIcon size={16} />
                    <span>Quit to home</span>
                </button>
            </div>
            {showDropdown && (
                <div className="origin-top-right absolute right-4 mt-10 bg-white text-black rounded shadow-lg z-50">
                    {Object.keys(allLayouts).length === 0 ? (
                        <div className="p-2">No layouts saved</div>
                    ) : (
                        Object.entries(allLayouts).map(([name]) => (
                            <div key={name} onClick={() => loadNamed(name)} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">{name}</div>
                        ))
                    )}
                </div>
            )}
        </div>

        <div className="flex flex-grow overflow-hidden">
            <div 
                className={`bg-gray-800 p-3 border-r border-gray-700 overflow-y-auto transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}
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
            </div>

            <div 
                ref={gridRef} 
                onDrop={onDrop} 
                onDragOver={(e) => e.preventDefault()} 
                className="flex-grow relative p-4"
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
            </div>
        </div>

        {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white text-black rounded-lg p-6 w-80 relative">
                    <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">×</button>
                    <h2 className="text-lg font-semibold mb-4">Save Layout</h2>
                    <input value={layoutName} onChange={(e) => setLayoutName(e.target.value)} placeholder="Layout name" className="w-full border px-3 py-2 mb-4 rounded" />
                    <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Save</button>
                    <button onClick={() => setShowModal(false)} className="ml-2 text-gray-600">Cancel</button>
                </div>
            </div>
        )}

        {toast && <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg text-sm z-50">{toast}</div>}
    </div>
  );
}
