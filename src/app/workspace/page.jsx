// "use client";
// import { useState, useRef } from "react";

// const initialPanels = [
//   { id: 1, title: "Follow up email", content: "Auto Generated ✨", x: 0, y: 0 },
//   { id: 2, title: "Client Information", content: "", x: 1, y: 0 },
//   { id: 3, title: "Web scraper", content: "", x: 2, y: 0 },
//   { id: 4, title: "Multi-post agent", content: "", x: 3, y: 0 },
// ];

// export default function WorkspacePage() {
//   const [panels, setPanels] = useState(initialPanels);
//   const gridRef = useRef();

//   const onDragStart = (e, id) => {
//     e.dataTransfer.setData("text/plain", id);
//   };

//   const onDrop = (e) => {
//     e.preventDefault();
//     const id = +e.dataTransfer.getData("text/plain");
//     const rect = gridRef.current.getBoundingClientRect();
//     const x = Math.floor((e.clientX - rect.left) / (rect.width / 4));
//     const y = Math.floor((e.clientY - rect.top) / (rect.height / 4));
//     setPanels((p) =>
//       p.map((panel) =>
//         panel.id === id ? { ...panel, x: Math.max(0, x), y: Math.max(0, y) } : panel
//       )
//     );
//   };

//   const closePanel = (id) => {
//     setPanels((p) => p.filter((panel) => panel.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-blue-950 text-white p-6">
//       <h1 className="text-3xl font-bold mb-4">Lex-enhanced workspace</h1>
//       <div
//         ref={gridRef}
//         onDrop={onDrop}
//         onDragOver={(e) => e.preventDefault()}
//         className="w-full h-[600px] bg-blue-900 grid grid-cols-4 grid-rows-4 gap-2 p-4 relative rounded-md shadow-lg"
//       >
//         {panels.map((panel) => (
//           <div
//             key={panel.id}
//             draggable
//             onDragStart={(e) => onDragStart(e, panel.id)}
//             style={{ gridColumnStart: panel.x + 1, gridRowStart: panel.y + 1 }}
//             className="bg-white text-black rounded shadow-md flex flex-col cursor-grab"
//           >
//             <div className="bg-gray-200 px-2 py-1 flex justify-between items-center text-sm font-semibold">
//               {panel.title}
//               <button
//                 className="text-red-500 hover:text-red-700"
//                 onClick={() => closePanel(panel.id)}
//               >
//                 ×
//               </button>
//             </div>
//             <div className="p-2 text-sm overflow-auto h-full">{panel.content}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useState, useRef } from "react";

// const initialPanels = [
//   { id: 1, title: "Follow up email", content: "Auto Generated ✨", x: 1, y: 2 },
//   { id: 2, title: "Client Information", content: "", x: 2, y: 2 },
//   { id: 3, title: "Web scraper", content: "", x: 3, y: 1 },
//   { id: 4, title: "Multi-post agent", content: "", x: 3, y: 2 },
//   { id: 5, title: "Main - Lex", content: "Thank You!", x: 1, y: 1 },
// ];

// const aiAgents = [
//   { id: "a1", label: "Dropdown item", status: "running" },
//   { id: "a2", label: "Dropdown item", status: "background" },
//   { id: "a3", label: "Dropdown item", status: "running" },
//   { id: "a4", label: "Dropdown item", status: "offline" },
//   { id: "a5", label: "Dropdown item", status: "idle" },
// ];

// export default function WorkspacePage() {
//   const [panels, setPanels] = useState(initialPanels);
//   const [selectedAgents, setSelectedAgents] = useState(["a1", "a3"]);
//   const gridRef = useRef();

//   const onDragStart = (e, id) => {
//     e.dataTransfer.setData("text/plain", id);
//   };

//   const onDrop = (e) => {
//     e.preventDefault();
//     const id = +e.dataTransfer.getData("text/plain");
//     const rect = gridRef.current.getBoundingClientRect();
//     const x = Math.floor((e.clientX - rect.left - 200) / (rect.width / 4));
//     const y = Math.floor((e.clientY - rect.top - 50) / (rect.height / 4));
//     setPanels((p) =>
//       p.map((panel) =>
//         panel.id === id ? { ...panel, x: Math.max(0, x), y: Math.max(0, y) } : panel
//       )
//     );
//   };

//   const closePanel = (id) => {
//     setPanels((p) => p.filter((panel) => panel.id !== id));
//   };

//   const toggleAgent = (id) => {
//     setSelectedAgents((prev) =>
//       prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="min-h-screen bg-blue-950 text-white flex flex-col">
//       {/* Navbar */}
//       <div className="bg-blue-800 px-4 py-2 flex justify-between items-center text-sm font-semibold border-b border-blue-700">
//         <div>www.lexbot.tech</div>
//         <div className="flex space-x-2">
//           <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Save layout</button>
//           <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Open layout</button>
//           <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded">Quit to home</button>
//           <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded">Saved layout 1</button>
//           <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded">Saved layout 2</button>
//         </div>
//       </div>

//       <div className="flex flex-grow overflow-hidden">
//         {/* Left Sidebar */}
//         <div className="w-[200px] bg-blue-800 p-3 border-r border-blue-700 overflow-y-auto">
//           <h2 className="text-lg font-semibold mb-2">AI Agents</h2>
//           <ul className="space-y-2 text-sm">
//             {aiAgents.map((agent) => (
//               <li key={agent.id} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={selectedAgents.includes(agent.id)}
//                   onChange={() => toggleAgent(agent.id)}
//                   className="mr-2"
//                 />
//                 <span className={`${agent.status === "offline" ? "text-gray-400" : ""}`}>
//                   {agent.label}
//                 </span>
//                 {agent.status === "background" && (
//                   <span className="ml-1 text-xs text-yellow-400">(Running in background)</span>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Workspace Grid */}
//         <div
//           ref={gridRef}
//           onDrop={onDrop}
//           onDragOver={(e) => e.preventDefault()}
//           className="flex-grow grid grid-cols-4 grid-rows-4 gap-2 p-4 relative"
//         >
//           {panels.map((panel) => (
//             <div
//               key={panel.id}
//               draggable
//               onDragStart={(e) => onDragStart(e, panel.id)}
//               style={{
//                 gridColumnStart: panel.x + 1,
//                 gridRowStart: panel.y + 1,
//               }}
//               className="bg-white text-black rounded shadow-md flex flex-col cursor-grab"
//             >
//               <div className="bg-gray-200 px-2 py-1 flex justify-between items-center text-sm font-semibold">
//                 {panel.title}
//                 <button
//                   className="text-red-500 hover:text-red-700"
//                   onClick={() => closePanel(panel.id)}
//                 >
//                   ×
//                 </button>
//               </div>
//               <div className="p-2 text-sm overflow-auto h-full">{panel.content}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useRef } from "react";

const initialPanels = [
  { id: 1, title: "Follow up email", content: "Auto Generated ✨", x: 1, y: 2, z: 1 },
  { id: 2, title: "Client Information", content: "", x: 2, y: 2, z: 2 },
  { id: 3, title: "Web scraper", content: "", x: 3, y: 1, z: 3 },
  { id: 4, title: "Multi-post agent", content: "", x: 3, y: 2, z: 4 },
  { id: 5, title: "Main - Lex", content: "Thank You!", x: 1, y: 1, z: 5 },
];

const aiAgents = [
  { id: "a1", label: "Dropdown item", status: "running" },
  { id: "a2", label: "Dropdown item", status: "background" },
  { id: "a3", label: "Dropdown item", status: "running" },
  { id: "a4", label: "Dropdown item", status: "offline" },
  { id: "a5", label: "Dropdown item", status: "idle" },
];

export default function WorkspacePage() {
  const [panels, setPanels] = useState(initialPanels);
  const [zIndexCounter, setZIndexCounter] = useState(initialPanels.length);
  const [selectedAgents, setSelectedAgents] = useState(["a1", "a3"]);
  const gridRef = useRef();

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
    const rect = gridRef.current.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left - 200) / (rect.width / 4));
    const y = Math.floor((e.clientY - rect.top - 50) / (rect.height / 4));

    if (x >= 0 && y >= 0 && !isOccupied(x, y, id)) {
      setPanels((p) =>
        p.map((panel) =>
          panel.id === id ? { ...panel, x, y } : panel
        )
      );
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

  return (
    <div className="min-h-screen bg-blue-950 text-white flex flex-col">
      {/* Navbar */}
      <div className="bg-blue-800 px-4 py-2 flex justify-between items-center text-sm font-semibold border-b border-blue-700">
        <div>www.lexbot.tech</div>
        <div className="flex space-x-2">
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Save layout</button>
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">Open layout</button>
          <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded">Quit to home</button>
          <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded">Saved layout 1</button>
          <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded">Saved layout 2</button>
        </div>
      </div>

      <div className="flex flex-grow overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-[200px] bg-blue-800 p-3 border-r border-blue-700 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-2">AI Agents</h2>
          <ul className="space-y-2 text-sm">
            {aiAgents.map((agent) => (
              <li key={agent.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedAgents.includes(agent.id)}
                  onChange={() => toggleAgent(agent.id)}
                  className="mr-2"
                />
                <span className={`${agent.status === "offline" ? "text-gray-400" : ""}`}>
                  {agent.label}
                </span>
                {agent.status === "background" && (
                  <span className="ml-1 text-xs text-yellow-400">(Running in background)</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Workspace Grid */}
        <div
          ref={gridRef}
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          className="flex-grow grid grid-cols-4 grid-rows-4 gap-2 p-4 relative"
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
              }}
              className="absolute w-[calc(25%-0.5rem)] h-[calc(25%-0.5rem)] bg-white text-black rounded shadow-md flex flex-col cursor-grab"
            >
              <div className="bg-gray-200 px-2 py-1 flex justify-between items-center text-sm font-semibold">
                {panel.title}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => closePanel(panel.id)}
                >
                  ×
                </button>
              </div>
              <div className="p-2 text-sm overflow-auto h-full">{panel.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
