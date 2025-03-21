"use client"
import React from 'react';

const NeoFetchHeader = () => {
  // Custom ASCII art for VIJAY VENKAT
  const customLogo = [
    "██╗   ██╗██╗     ██╗ █████╗ ██╗   ██╗",
    "██║   ██║██║     ██║██╔══██╗╚██╗ ██╔╝",
    "██║   ██║██║     ██║███████║ ╚████╔╝ ",
    "╚██╗ ██╔╝██║     ██║██╔══██║  ╚██╔╝  ",
    " ╚████╔╝ ██ ███████║██║  ██║   ██║   ",
    "  ╚═══╝  ╚═ ═════╚═╝╚═╝  ╚═╝   ╚═╝   ",
    "                                      ",
    "██╗   ██╗███████╗███╗   ██╗██╗  ██╗ █████╗ ████████╗",
    "██║   ██║██╔════╝████╗  ██║██║ ██╔╝██╔══██╗╚══██╔══╝",
    "██║   ██║█████╗  ██╔██╗ ██║█████╔╝ ███████║   ██║   ",
    "╚██╗ ██╔╝██╔══╝  ██║╚██╗██║██╔═██╗ ██╔══██║   ██║   ",
    " ╚████╔╝ ███████╗██║ ╚████║██║  ██╗██║  ██║   ██║   ",
    "  ╚═══╝  ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ",
  ];


  return (
    <div className="hidden sm:block p-8 bg-transparent text-green-400 font-mono rounded-lg shadow-lg max-w-6xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 md:mr-12">
          <div className="text-cyan-500">
            {customLogo.map((line, i) => (
              <pre key={i} className="leading-none text-sm md:text-base">{line}</pre>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for displaying system info lines
const InfoLine = ({ label, value }: any) => (
  <div className="flex">
    <span className="text-cyan-500 font-bold w-32">{label}:</span>
    <span className="text-white">{value}</span>
  </div>
);

// Helper component for the colorful blocks at the bottom of neofetch
const ColorBlocks = () => {
  const colors = [
    "bg-black", "bg-red-600", "bg-green-600", "bg-yellow-600",
    "bg-blue-600", "bg-purple-600", "bg-cyan-600", "bg-gray-300",
    "bg-gray-600", "bg-red-400", "bg-green-400", "bg-yellow-400",
    "bg-blue-400", "bg-purple-400", "bg-cyan-400", "bg-white"
  ];
  
  return (
    <div className="flex">
      {colors.map((color, index) => (
        <div key={index} className={`${color} w-8 h-8`}></div>
      ))}
    </div>
  );
};

export default NeoFetchHeader;