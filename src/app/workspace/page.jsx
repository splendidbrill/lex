"use client";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Chat from "@/app/components/Chat.jsx";

const initialPanels = [
  {
    id: 1,
    title: "Follow up email",
    content: "Auto Generated ✨",
    x: 1,
    y: 2,
    z: 1,
    width: 200,
    height: 160,
  },
  {
    id: 2,
    title: "Client Information",
    content: "",
    x: 2,
    y: 2,
    z: 2,
    width: 200,
    height: 160,
  },
  {
    id: 3,
    title: "Web scraper",
    content: "",
    x: 3,
    y: 1,
    z: 3,
    width: 200,
    height: 160,
  },
  {
    id: 4,
    title: "Multi-post agent",
    content: "",
    x: 3,
    y: 2,
    z: 4,
    width: 200,
    height: 160,
  },
  {
    id: 5,
    title: "Main - Lex",
    content: "Thank You!",
    x: 1,
    y: 1,
    z: 5,
    width: 200,
    height: 160,
  },
];

const aiAgents = [
  { id: "a1", label: "Dropdown item", status: "running" },
  { id: "a2", label: "Dropdown item", status: "background" },
  { id: "a3", label: "Dropdown item", status: "running" },
  { id: "a4", label: "Dropdown item", status: "offline" },
  { id: "a5", label: "Dropdown item", status: "idle" },
];

export default function WorkspacePage() {
  const session = useSession();
  const router = useRouter();
  const supabase = useSupabaseClient();

  const [panels, setPanels] = useState(initialPanels);
  const [zIndexCounter, setZIndexCounter] = useState(initialPanels.length);
  const [selectedAgents, setSelectedAgents] = useState(["a1", "a3"]);
  const [toast, setToast] = useState("");
  const [allLayouts, setAllLayouts] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showChatBox, setShowChatBox] = useState(false);
  const [layoutName, setLayoutName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const gridRef = useRef();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("lex-all-layouts") || "{}");
    setAllLayouts(saved);
  }, []);
  //   useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem("lex-all-layouts") || "{}");
  //   setAllLayouts(saved);
  // }, []);

  // if (!session) return null;
  // if (session === undefined) return null; // session is still loading
  // if (!session) {
  //   router.replace("/signin");
  //   return null;
  // }
  useEffect(() => {
    if (session === null) {
      router.replace("/");
    }
  }, [session, router]);

  if (session === undefined || session === null) {
    return null; // Optional: add spinner
  }

  // useEffect(() => {
  //   if (session === undefined) return; // session still loading
  //   if (!session) router.replace("/signin");
  // }, [session, router]);

  // if (!session) {
  //   // Show nothing while redirecting/loading
  //   return null;
  // }

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
      setPanels((prev) => prev.map((p) => (p.id === id ? { ...p, x, y } : p)));
    }
  };

  const closePanel = (id) => {
    setPanels((p) => p.filter((panel) => panel.id !== id));
  };

  const toggleAgent = (id) => {
    setSelectedAgents((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
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
    <div className="min-h-screen bg-blue-950 text-white flex flex-col">
      <div className="bg-blue-800 px-4 py-2 flex justify-between items-center text-sm font-semibold border-b border-blue-700">
        <div className="flex items-center space-x-4">
          <span>www.lexbot.tech</span>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="text-xl focus:outline-none"
          >
            {showSidebar ? "×" : "≡"}
          </button>
        </div>
        <div className="flex space-x-2 relative">
          <button
            onClick={openSaveModal}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
          >
            Save layout
          </button>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
          >
            All Saved Layouts
          </button>
          <button
            onClick={handleQuit}
            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
          >
            Quit to home
          </button>
        </div>
        {showDropdown && (
          <div className="origin-top-right absolute right-4 mt-10 bg-white text-black rounded shadow-lg z-50">
            {Object.keys(allLayouts).length === 0 ? (
              <div className="p-2">No layouts saved</div>
            ) : (
              Object.entries(allLayouts).map(([name]) => (
                <div
                  key={name}
                  onClick={() => loadNamed(name)}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {name}
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div className="flex flex-grow overflow-hidden">
        {showSidebar && (
          <div className="w-[200px] bg-blue-800 p-3 border-r border-blue-700 overflow-y-auto transition-all duration-300">
            <h2 className="text-lg font-semibold mb-2">AI Agents</h2>
            <ul className="space-y-2 text-sm">
              {aiAgents.map((a) => (
                <li key={a.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedAgents.includes(a.id)}
                    onChange={() => toggleAgent(a.id)}
                    className="mr-2"
                  />
                  <span
                    className={a.status === "offline" ? "text-gray-400" : ""}
                  >
                    {a.label}
                  </span>
                  {a.status === "background" && (
                    <span className="ml-1 text-xs text-yellow-400">
                      (Running in background)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div
          ref={gridRef}
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          className="flex-grow relative grid grid-cols-4 grid-rows-4 gap-2 p-4 bg-blue-900"
        >
          {panels.map((panel) => (
            <div
              key={panel.id}
              draggable
              onDragStart={(e) => onDragStart(e, panel.id)}
              style={{
                gridColumnStart: panel.x + 1,
                gridRowStart: panel.y + 1,
                zIndex: panel.z || 1,
                width: panel.width,
                height: panel.height,
                position: "absolute",
              }}
              className="bg-white text-black rounded shadow-md flex flex-col"
            >
              <div className="bg-gray-200 px-2 py-1 flex justify-between items-center text-sm font-semibold cursor-move">
                {panel.title}
                <button
                  onClick={() => closePanel(panel.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
              <div className="p-2 text-sm overflow-auto flex-grow">
                {panel.content}
              </div>
              <div
                onMouseDown={(e) => handleResizeStart(e, panel.id)}
                className="w-3 h-3 bg-gray-400 absolute bottom-0 right-0 cursor-se-resize"
              />
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-6 w-80 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-4">Save Layout</h2>
            <input
              value={layoutName}
              onChange={(e) => setLayoutName(e.target.value)}
              placeholder="Layout name"
              className="w-full border px-3 py-2 mb-4 rounded"
            />
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
            >
              Save
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="ml-2 text-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg text-sm z-50">
          {toast}
        </div>
      )}
      {/* <Drawer>
        <DrawerTrigger asChild>
          <button className={`fixed bottom-4 ${showSidebar ? 'left-[216px]' : 'left-4'} bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-lg z-50`}>
            Chat
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="h-[33vh]">
            <Chat />
          </div>
        </DrawerContent>
      </Drawer> */}
      {!showChatBox && (
        <button
          className={`fixed bottom-4 ${showSidebar ? "left-[216px]" : "left-4"} bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-lg z-50`}
          onClick={() => setShowChatBox(true)}
        >
          Chat
        </button>
      )}
      {showChatBox && (
        <div
          className={`fixed bottom-4 ${showSidebar ? "left-[216px]" : "left-4"} w-[350px] h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col z-50`}
        >
          <div className="flex justify-between items-center p-2 bg-blue-600 text-white rounded-t-2xl">
            <span className="font-bold">Chat</span>
            <button
              onClick={() => setShowChatBox(false)}
              className="text-xl font-bold hover:text-gray-200"
            >
              ×
            </button>
          </div>
          <div className="flex-1 min-h-0">
            <Chat />
          </div>
        </div>
      )}
    </div>
  );
}
