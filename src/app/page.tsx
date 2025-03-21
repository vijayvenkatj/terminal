"use client"
import HomePage from '@/components/homepage/homepage';


export default function Home() {
  return (
    <div className='min-h-full min-w-full '>
      <HomePage />
    </div>
  )
}

// export default function Home() {
//   const [input, setInput] = useState('');
//   const [history, setHistory] = useState([
//     { text: "Welcome to my terminal portfolio! Type 'help' to see available commands.", type: 'system' }
//   ]);
//   const [commandHistory, setCommandHistory] = useState<string[]>([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const inputRef = useRef<HTMLInputElement | null>(null);
//   const terminalRef = useRef<HTMLDivElement | null>(null);

//   // Available commands and their responses
//   const commands = {
//     help: () => ({
//       text: `
// Available commands:
//   help - Show this help message
//   about - Learn about me
//   skills - View my technical skills
//   projects - See my projects
//   experience - View my work experience
//   contact - Get my contact information
//   clear - Clear the terminal
//       `,
//       type: 'system'
//     }),
//     about: () => ({
//       text: `
// Hi, I'm [Your Name]!

// I'm a [Your Title/Role] with a passion for building innovative solutions.
// I specialize in [Your Specializations] and love working with [Technologies].

// When I'm not coding, you can find me [Your Hobbies/Interests].
//       `,
//       type: 'system'
//     }),
//     skills: () => ({
//       text: `
// Technical Skills:
// • Frontend: React, Next.js, TypeScript, HTML/CSS
// • Backend: Node.js, Express, Python, Django
// • Database: MongoDB, PostgreSQL, MySQL
// • DevOps: Docker, Kubernetes, AWS, GitHub Actions
// • Other: GraphQL, RESTful APIs, WebSockets
//       `,
//       type: 'system'
//     }),
//     projects: () => ({
//       text: `
// Projects:
// 1. Project Name - Brief description of the project
//    Tech stack: React, Node.js, MongoDB
//    GitHub: https://github.com/yourusername/project
//    Live: https://project-url.com

// 2. Project Name - Brief description of the project
//    Tech stack: Python, Django, PostgreSQL
//    GitHub: https://github.com/yourusername/project
//    Live: https://project-url.com

// 3. Project Name - Brief description of the project
//    Tech stack: Next.js, TypeScript, Firebase
//    GitHub: https://github.com/yourusername/project
//    Live: https://project-url.com
//       `,
//       type: 'system'
//     }),
//     experience: () => ({
//       text: `
// Work Experience:
// • Senior Developer at Company (2022-Present)
//   - Led development of [Project/Product]
//   - Implemented [Features/Technologies]
//   - Managed team of X developers

// • Developer at Company (2020-2022)
//   - Built and maintained [Project/Product]
//   - Collaborated with design team on [Project]
//   - Improved performance by X%

// • Junior Developer at Company (2018-2020)
//   - Assisted in development of [Project/Product]
//   - Created internal tools for [Purpose]
//       `,
//       type: 'system'
//     }),
//     contact: () => ({
//       text: `
// Contact Information:
// • Email: your.email@example.com
// • GitHub: https://github.com/yourusername
// • LinkedIn: https://linkedin.com/in/yourusername
// • Portfolio: https://yourportfolio.com
//       `,
//       type: 'system'
//     }),
//     clear: () => {
//       setHistory([]);
//       return null;
//     },
//     '': () => null
//   };

//   // Execute command
//   const executeCommand = (cmd: string) => {
//     const commandLower = cmd.trim().toLowerCase();
    
//     // Add command to history
//     setHistory(prev => [...prev, { text: cmd, type: 'command' }]);
    
//     // Check if command exists
//     if (commandLower in commands) {
//       const result = commands[commandLower as keyof typeof commands]();
//       if (result) {
//         setHistory(prev => [...prev, result]);
//       }
//     } else {
//       setHistory(prev => [...prev, { 
//         text: `Command not found: ${cmd}. Type 'help' to see available commands.`, 
//         type: 'error' 
//       }]);
//     }
    
//     // Add to command history for up/down keys
//     setCommandHistory((prev: string[]) => [...prev, cmd]);
//     setHistoryIndex(-1);
//   };

//   // Handle form submission
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (input.trim()) {
//       executeCommand(input);
//       setInput('');
//     }
//   };

//   // Handle key navigation through command history
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       if (historyIndex < commandHistory.length - 1) {
//         const newIndex = historyIndex + 1;
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[commandHistory.length - 1 - newIndex]);
//       }
//     } else if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       if (historyIndex > 0) {
//         const newIndex = historyIndex - 1;
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[commandHistory.length - 1 - newIndex]);
//       } else if (historyIndex === 0) {
//         setHistoryIndex(-1);
//         setInput('');
//       }
//     }
//   };

//   // Auto-scroll to bottom when new content is added
//   useEffect(() => {
//     if (terminalRef.current) {
//       if (terminalRef.current) {
//         terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//       }
//     }
//   }, [history]);

//     inputRef.current?.focus();
//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   const focusInput = () => {
//     inputRef.current?.focus();
//   };

//   return (
//     <>
//       <Head>
//         <title>Terminal Portfolio</title>
//         <meta name="description" content="Terminal-style portfolio website" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="min-h-screen bg-gray-900 text-green-400 font-mono p-4">
//         <div 
//           className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg border border-green-500/30 overflow-hidden"
//           onClick={focusInput}
//         >
//           {/* Terminal Header */}
//           <div className="bg-gray-800 px-4 py-2 flex items-center">
//             <div className="flex space-x-2">
//               <div className="w-3 h-3 rounded-full bg-red-500"></div>
//               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//               <div className="w-3 h-3 rounded-full bg-green-500"></div>
//             </div>
//             <div className="flex-1 text-center text-sm text-gray-400">
//               terminal@portfolio ~ 
//             </div>
//           </div>
          
//           {/* Terminal Content */}
//           <div 
//             ref={terminalRef}
//             className="p-4 h-96 overflow-y-auto bg-black"
//           >
//             {history.map((item, index) => (
//               <div key={index} className="mb-2">
//                 {item.type === 'command' ? (
//                   <div>
//                     <span className="text-blue-400">visitor@portfolio:~$</span> <span className="text-white">{item.text}</span>
//                   </div>
//                 ) : (
//                   <div className={`${item.type === 'error' ? 'text-red-400' : 'text-green-300'} whitespace-pre-wrap`}>
//                     {item.text}
//                   </div>
//                 )}
//               </div>
//             ))}
            
//             {/* Input form */}
            // <form onSubmit={handleSubmit} className="flex">
            //   <span className="text-blue-400">visitor@portfolio:~$</span>
            //   <input
            //     ref={inputRef}
            //     type="text"
            //     value={input}
            //     onChange={(e) => setInput(e.target.value)}
            //     onKeyDown={handleKeyDown}
            //     className="flex-1 ml-2 bg-transparent outline-none text-white border-none"
            //     autoFocus
            //     aria-label="Terminal input"
            //   />
            // </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }