"use client";

import Terminal from "../terminal/terminal";
import { useState, useEffect, useRef } from "react";
import React from "react";
import PortfolioBackground from "../background";
import NeoFetchHeader from "../background/kali";
import Draggable from "react-draggable";

export default function HomePage() {
    const [isMobileView, setIsMobileView] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => setIsMobileView(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    
    return (
        <div className="relative min-h-full w-full">
            {/* Background component */}
            <div className="absolute min-h-full inset-0 z-0">
                <PortfolioBackground />
            </div>

            {/* Foreground content */}
            <div className="relative bg-transparent min-h-screen w-full z-10">
                <NeoFetchHeader />
                <DraggableTerminal isMobileView={isMobileView} />
            </div>
        </div>
    );
}

const DraggableTerminal = ({ isMobileView }: { isMobileView: boolean }) => {
    const nodeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLElement>; // 🔥 Prevents `findDOMNode` error

    if (isMobileView) {
        return (
            <div className="w-full h-full fixed inset-0 p-2 z-20">
                <Terminal />
            </div>
        );
    }

    return (
        <Draggable nodeRef={nodeRef} handle=".drag-handle">
            <div ref={nodeRef as React.RefObject<HTMLDivElement>} className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-move select-none">
                <div className="p-2 terminal-container drag-handle">
                    <div className="terminal-body">
                        <Terminal />
                    </div>
                </div>
            </div>
        </Draggable>
    );
};
