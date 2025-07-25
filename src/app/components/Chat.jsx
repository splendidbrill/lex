// 'use client'
// import { useState } from 'react'

// export default function Chat() {
//   const [messages, setMessages] = useState([])
//   const [input, setInput] = useState('')
//   const [loading, setLoading] = useState(false)

//   const handleSend = async () => {
//     if (!input.trim()) return
//     const newMessages = [...messages, { from: 'user', text: input }]
//     setMessages(newMessages)
//     setInput('')
//     setLoading(true)

//     try {
//       const res = await fetch('/api/agent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: input }),
//       })

//       const data = await res.json()
//       setMessages([...newMessages, { from: 'bot', text: data.output }])
//     } catch (err) {
//       setMessages([...newMessages, { from: 'bot', text: 'Error contacting AI agent.' }])
//     }

//     setLoading(false)
//   }

//   return (
//     <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
//       <h2>Chat with AI</h2>
//       <div style={{ marginBottom: '1rem', maxHeight: '300px', overflowY: 'auto' }}>
//         {messages.map((msg, i) => (
//           <div key={i} style={{ textAlign: msg.from === 'user' ? 'right' : 'left' }}>
//             <p><strong>{msg.from === 'user' ? 'You' : 'AI'}:</strong> {msg.text}</p>
//           </div>
//         ))}
//         {loading && <p>AI is typing...</p>}
//       </div>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//         placeholder="Type your message..."
//         style={{ width: '80%', padding: '0.5rem' }}
//       />
//       <button onClick={handleSend} style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>
//         Send
//       </button>
//     </div>
//   )
// }
// "use client"
// import { useState, useEffect, useRef } from 'react';

// export default function Chat() {
//   // State for managing widget visibility (open/closed)
//   const [isOpen, setIsOpen] = useState(false);
//   // State for storing chat messages
//   const [messages, setMessages] = useState([]);
//   // State for the current input field value
//   const [input, setInput] = useState('');
//   // State to indicate if an AI response is being loaded
//   const [isLoading, setIsLoading] = useState(false);
//   // Ref for the chat body to enable auto-scrolling
//   const chatBodyRef = useRef(null);
//   // Ref for the chat ID, initialized once per session
//   const chatIdRef = useRef(null);

//   // Configuration for the chat widget (can be moved to props for more flexibility)
//   const config = {
//     webhook: {
//       url: 'https://n8nlex-edcrcmbyc3epc5e0.canadacentral-01.azurewebsites.net/webhook/9cf400c3-2fd1-4828-9b27-76a01ffd463d/chat',
//       route: 'general'
//     },
//     style: {
//       primaryColor: '#854fff',
//       secondaryColor: '#6b3fd4',
//       backgroundColor: '#ffffff',
//       fontColor: '#1f2937'
//     }
//   };

//   // Effect to apply custom CSS variables from config
//   useEffect(() => {
//     const root = document.documentElement;
//     root.style.setProperty('--chat-primary-color', config.style.primaryColor);
//     root.style.setProperty('--chat-secondary-color', config.style.secondaryColor);
//     root.style.setProperty('--chat-bg-color', config.style.backgroundColor);
//     root.style.setProperty('--chat-font-color', config.style.fontColor);
//   }, [config.style]); // Re-run if config style changes (unlikely in this setup)

//   // Effect to manage chat ID and load history on component mount
//   useEffect(() => {
//     // Get or create a unique chat ID for the session
//     let id = sessionStorage.getItem("chatWidgetId");
//     if (!id) {
//       id = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
//       sessionStorage.setItem("chatWidgetId", id);
//     }
//     chatIdRef.current = id;

//     // Load chat history from session storage
//     const history = sessionStorage.getItem('chatWidgetHistory');
//     if (history) {
//       setMessages(JSON.parse(history));
//     } else {
//       // Add initial welcome message if no history exists
//       setMessages([{ sender: 'bot', text: 'Hi 👋, how can we help you today?' }]);
//     }
//   }, []); // Empty dependency array ensures this runs only once on mount

//   // Effect to scroll to the bottom of the chat body whenever messages change or widget opens
//   useEffect(() => {
//     if (chatBodyRef.current) {
//       chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
//     }
//   }, [messages, isOpen]); // Scroll when messages update or when widget opens/closes

//   // Function to save chat history to session storage
//   const saveHistory = (currentMessages) => {
//     sessionStorage.setItem('chatWidgetHistory', JSON.stringify(currentMessages));
//   };

//   // Function to handle sending a message
//   const handleSendMessage = async () => {
//     const messageText = input.trim();
//     if (messageText === '' || isLoading) return; // Prevent sending empty messages or multiple messages while loading

//     // Add user message to state and clear input
//     const newUserMessage = { sender: 'user', text: messageText };
//     setMessages(prevMessages => {
//       const updated = [...prevMessages, newUserMessage];
//       saveHistory(updated); // Save history immediately
//       return updated;
//     });
//     setInput('');
//     setIsLoading(true); // Show typing indicator

//     try {
//       // Make API call to n8n webhook
//       const response = await fetch(config.webhook.url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           chatId: chatIdRef.current, // Use the session chat ID
//           message: messageText,
//           route: config.webhook.route
//         })
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       // Assume n8n returns the response in 'data.output'
//       const botReply = data.output || "Sorry, I couldn't process your request.";

//       // Add bot's response to state
//       setMessages(prevMessages => {
//         const updated = [...prevMessages, { sender: 'bot', text: botReply }];
//         saveHistory(updated); // Save history
//         return updated;
//       });

//     } catch (error) {
//       console.error("Chat Widget Error:", error);
//       // Display error message to the user
//       setMessages(prevMessages => {
//         const updated = [...prevMessages, { sender: 'bot', text: "Oops! Something went wrong. Please try again later." }];
//         saveHistory(updated); // Save history with error message
//         return updated;
//       });
//     } finally {
//       setIsLoading(false); // Hide typing indicator
//     }
//   };

//   // JSX for the chat widget
//   return (
//     <div className="fixed bottom-5 right-5 z-50 font-['Inter',_sans-serif]">
//       {/* Chat Bubble Button */}
//       {!isOpen && (
//         <button
//           id="chat-open-button"
//           onClick={() => setIsOpen(true)}
//           className="bg-[var(--chat-primary-color)] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200"
//           aria-label="Open chat widget"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
//         </button>
//       )}

//       {/* Chat Widget Window */}
//       {isOpen && (
//         <div
//           id="chat-window"
//           className="w-[calc(100vw-40px)] h-[70vh] sm:w-96 sm:h-[60vh] bg-[var(--chat-bg-color)] rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform origin-bottom-right"
//         >
//           {/* Header */}
//           <div id="chat-header" className="flex items-center justify-between p-4 bg-[var(--chat-primary-color)] text-white rounded-t-2xl">
//             <h3 className="font-bold text-lg">Chat with us</h3>
//             <button
//               id="chat-close-button"
//               onClick={() => setIsOpen(false)}
//               className="hover:opacity-75"
//               aria-label="Close chat widget"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
//             </button>
//           </div>

//           {/* Message Body */}
//           <div id="chat-body" ref={chatBodyRef} className="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-4">
//             {messages.map((msg, index) => (
//               <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`max-w-[80%] p-3 rounded-xl ${
//                   msg.sender === 'user'
//                     ? 'bg-[var(--chat-primary-color)] text-white rounded-br-none'
//                     : 'bg-gray-200 text-gray-800 rounded-bl-none'
//                 }`}>
//                   <p className="font-semibold text-sm mb-1">{msg.sender === 'user' ? 'You' : 'Support Bot'}</p>
//                   <p className="text-base">{msg.text}</p>
//                 </div>
//               </div>
//             ))}
//             {/* Typing Indicator */}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="max-w-[80%] p-3 rounded-xl bg-gray-200 text-gray-800 rounded-bl-none">
//                   <p className="text-base animate-pulse">Bot is typing...</p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Footer / Input Area */}
//           <div id="chat-footer" className="p-4 border-t border-gray-200">
//             <div className="flex items-center space-x-2">
//               <input
//                 type="text"
//                 id="chat-input"
//                 placeholder="Type your message..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
//                 className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chat-primary-color)] transition-shadow"
//                 disabled={isLoading}
//                 aria-label="Type your message"
//               />
//               <button
//                 id="chat-send-button"
//                 onClick={handleSendMessage}
//                 className="p-3 bg-[var(--chat-primary-color)] text-white rounded-lg shadow-md hover:bg-[var(--chat-secondary-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--chat-primary-color)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 disabled={isLoading}
//                 aria-label="Send message"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Custom scrollbar style for better appearance */}
//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar { width: 6px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
//       `}</style>
//     </div>
//   );
// }
import { useState, useEffect, useRef } from 'react';

export default function Chat() {
  // State for storing chat messages
  const [messages, setMessages] = useState([]);
  // State for the current input field value
  const [input, setInput] = useState('');
  // State to indicate if an AI response is being loaded
  const [isLoading, setIsLoading] = useState(false);
  // Ref for the chat body to enable auto-scrolling
  const chatBodyRef = useRef(null);
  // Ref for the chat ID, initialized once per session
  const chatIdRef = useRef(null);

  // Configuration for the chat widget (can be moved to props for more flexibility if needed)
  const config = {
    webhook: {
      url: 'https://n8nlex-edcrcmbyc3epc5e0.canadacentral-01.azurewebsites.net/webhook/9cf400c3-2fd1-4828-9b27-76a01ffd463d/chat',
      route: 'general'
    },
    style: {
      primaryColor: '#854fff',
      secondaryColor: '#6b3fd4',
      backgroundColor: '#ffffff',
      fontColor: '#1f2937'
    }
  };

  // Effect to apply custom CSS variables from config
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--chat-primary-color', config.style.primaryColor);
    root.style.setProperty('--chat-secondary-color', config.style.secondaryColor);
    root.style.setProperty('--chat-bg-color', config.style.backgroundColor);
    root.style.setProperty('--chat-font-color', config.style.fontColor);
  }, [config.style]);

  // Effect to manage chat ID and load history on component mount
  useEffect(() => {
    // Get or create a unique chat ID for the session
    let id = sessionStorage.getItem("chatWidgetId");
    if (!id) {
      id = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem("chatWidgetId", id);
    }
    chatIdRef.current = id;

    // Load chat history from session storage
    const history = sessionStorage.getItem('chatWidgetHistory');
    if (history) {
      setMessages(JSON.parse(history));
    } else {
      // Add initial welcome message if no history exists
      setMessages([{ sender: 'bot', text: 'Hi 👋, how can we help you today?' }]);
    }
  }, []);

  // Effect to scroll to the bottom of the chat body whenever messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to save chat history to session storage
  const saveHistory = (currentMessages) => {
    sessionStorage.setItem('chatWidgetHistory', JSON.stringify(currentMessages));
  };

  // Function to handle sending a message
  const handleSendMessage = async () => {
    const messageText = input.trim();
    if (messageText === '' || isLoading) return;

    // Add user message to state and clear input
    const newUserMessage = { sender: 'user', text: messageText };
    setMessages(prevMessages => {
      const updated = [...prevMessages, newUserMessage];
      saveHistory(updated);
      return updated;
    });
    setInput('');
    setIsLoading(true); // Show typing indicator

    try {
      // Make API call to n8n webhook
      const response = await fetch(config.webhook.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatId: chatIdRef.current,
          message: messageText,
          route: config.webhook.route
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Assume n8n returns the response in 'data.output'
      const botReply = data.output || "Sorry, I couldn't process your request.";

      // Add bot's response to state
      setMessages(prevMessages => {
        const updated = [...prevMessages, { sender: 'bot', text: botReply }];
        saveHistory(updated);
        return updated;
      });

    } catch (error) {
      console.error("Chat Widget Error:", error);
      // Display error message to the user
      setMessages(prevMessages => {
        const updated = [...prevMessages, { sender: 'bot', text: "Oops! Something went wrong. Please try again later." }];
        saveHistory(updated);
        return updated;
      });
    } finally {
      setIsLoading(false); // Hide typing indicator
    }
  };

  // JSX for the chat interface
  return (
    // The main chat window container, now without fixed positioning or open/close buttons
    <div
      id="chat-window"
      className="w-full h-full bg-[var(--chat-bg-color)] rounded-2xl shadow-2xl flex flex-col font-['Inter',_sans-serif]"
    >
      {/* Header */}
      {/* <div id="chat-header" className="flex items-center justify-between p-4 bg-[var(--chat-primary-color)] text-white rounded-t-2xl"> */}
        {/* <h3 className="font-bold text-lg">Chat with us</h3> */}
        {/* Close button is now handled by the Drawer component itself, if desired, or can be added here */}
        {/* For this integration, we assume the Drawer has its own close mechanism */}
      {/* </div> */}

      {/* Message Body */}
      <div id="chat-body" ref={chatBodyRef} className="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-xl ${
              msg.sender === 'user'
                ? 'bg-[var(--chat-primary-color)] text-white rounded-br-none'
                : 'bg-gray-200 text-gray-800 rounded-bl-none'
            }`}>
              <p className="font-semibold text-sm mb-1">{msg.sender === 'user' ? 'You' : 'Support Bot'}</p>
              <p className="text-base">{msg.text}</p>
            </div>
          </div>
        ))}
        {/* Typing Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-xl bg-gray-200 text-gray-800 rounded-bl-none">
              <p className="text-base animate-pulse">Bot is typing...</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer / Input Area */}
      <div id="chat-footer" className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            id="chat-input"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--chat-primary-color)] transition-shadow"
            disabled={isLoading}
            aria-label="Type your message"
          />
          <button
            id="chat-send-button"
            onClick={handleSendMessage}
            className="p-3 bg-[var(--chat-primary-color)] text-white rounded-lg shadow-md hover:bg-[var(--chat-secondary-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--chat-primary-color)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
            aria-label="Send message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
      {/* Custom scrollbar style for better appearance */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
      `}</style>
    </div>
  );
}
