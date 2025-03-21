"use client";
import { useState, useRef, useEffect } from "react";
import { help,about,contact, skills, projects, ls } from "./commands";

export default function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([
        { text: "Welcome to Vijay's terminal portfolio! Type 'help' to see available commands.", type: "system" },
    ]);
    const [autoComplete, setAutoComplete] = useState(0);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const terminalRef = useRef<HTMLDivElement | null>(null);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const commands: { [key: string]: () => string|void } = {
        help,
        about,
        skills,
        projects,
        ls,
        contact,
        gui: () => {window.location.href = "https://vijayvenkatj.me/"; return "Redirecting to GUI..."},
        clear: () => {
            setHistory([{ text: "Welcome to Vijay's terminal portfolio! Type 'help' to see available commands.", type: "system" }]);
            return "";
        },
        whoami: () => "You are exploring Vijay's portfolio terminal.",
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === "") return;
        
        const trimmedInput = input.trim();
        setHistory((prev) => [...prev, { text: trimmedInput, type: "command" }]);
        
        setCommandHistory((prev) => [...prev, trimmedInput]);
        setHistoryIndex(-1);
        
        const commandParts = trimmedInput.toLowerCase().split(" ");
        const command = commandParts[0];
        setInput("");
        
        setTimeout(() => {
            setHistory((prev) => {
                const response = commands[command] 
                    ? commands[command]() 
                    : `Command not found: ${command}. Type 'help' to see available commands.`;
                return [...prev, { text: response || "", type: commands[command] ? "system" : "error" }];
            });
        }, 100);
    };

    const handleAutoComplete = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Tab"){
            e.preventDefault();
            const inputCommand = input.toLowerCase();
            const keys = Object.keys(commands);
            
            if (inputCommand === "") {
                setInput(keys[autoComplete]);
                setAutoComplete((prev) => (prev + 1) % keys.length);
                return;
            }
            
            const availableCommands = keys.filter((key) => key.startsWith(inputCommand));
            
            if (availableCommands.length === 1) {
                setInput(availableCommands[0]);
                setAutoComplete(0);
            }
            else if (availableCommands.length > 1) {
                setInput(availableCommands[autoComplete]);
                setAutoComplete(prev => (prev + 1) % availableCommands.length);
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[commandHistory.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput('');
            }
        } else if (e.key === 'Tab') {
            handleAutoComplete(e);
        }
    };

    useEffect(() => {
        inputRef.current?.focus(); 
    }, [history]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);


    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div 
            className="min-h-screen w-full bg-transparent font-mono p-4 flex items-center justify-center"
        >
            <div 
                className="w-full max-w-4xl h-full rounded-lg bg-gray-900/60 border border-gray-950/90 overflow-hidden"
                onClick={handleTerminalClick}
            >
                {/* Terminal Header */}
                <div className="bg-gray-900/60 border-b border-gray-950 px-4 py-3 flex items-center">
                    <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"></div>
                    </div>
                    <div className="hidden sm:flex flex-1 text-center text-lg text-gray-300 font-semibold items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        terminal@vijay ~
                    </div>
                    <div className="flex space-x-3">
                        <a 
                            href="https://vijayvenkatj.me/" 
                            className="flex items-center justify-center px-3 py-1 rounded-md bg-purple-600 hover:bg-purple-500 text-white transition-colors text-sm"
                        >
                            GUI Website
                        </a>
                    </div>
                </div>
                
                {/* Terminal Content */}
                <div 
                    ref={terminalRef} 
                    className="h-[600px] bg-transparent p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800/40"
                >
                    {history.map((item, index) => (
                        <div key={index} className="mb-4">
                            {item.type === "command" ? (
                                <div className="break-words">
                                    <span className="hidden sm:inline text-cyan-400 text-lg group-hover:text-blue-300 transition-colors">visitor@portfolio:</span><span className="text-green-400 group-hover:text-green-300 transition-colors">~</span>$
                                    <span className="text-gray-200/70 text-lg ml-2">{item.text}</span>
                                </div>
                            ) : (
                                <div className={`${item.type === "error" ? "text-red-400" : "text-green-300"} whitespace-pre-wrap text-lg break-words ml-2 sm:ml-6 border-l-2 border-purple-500/30 pl-4 mt-1`}>
                                    {item.text}
                                </div>
                            )}
                        </div>
                    ))}
                    
                    {/* Terminal Input */}
                    <form onSubmit={handleSubmit} className="flex mt-3 items-center group">
                        <span className="hidden sm:inline text-cyan-400 text-lg group-hover:text-blue-300 transition-colors">visitor@portfolio:</span><span className="text-green-400 group-hover:text-green-300 transition-colors">~</span>$
                        <div className="flex-1 ml-2 flex items-center">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-1 bg-transparent outline-none text-purple-400 border-none text-lg w-full"
                                autoFocus
                                aria-label="Terminal input"
                            />
                            
                        </div>
                    </form>
                </div>
                
                {/* Terminal Footer */}
                <div className="bg-gray-800/80 border-t border-gray-950 px-4 py-2 text-xs text-gray-400 flex justify-between">
                    <div>Press Tab for autocomplete</div>
                    <div>© Vijay Venkat</div>
                </div>
            </div>
        </div>
    );
}