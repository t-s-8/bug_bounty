import React from 'react'
// src/components/Navbar.jsx
function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 bg-slate-800 border-b border-slate-700">
        {/* 1. The Logo Section */}
        <div className="text-xl font-bold text-green-400 flex items-center gap-2">
          🛡️ BugBounty
        </div>
  
        {/* 2. The Navigation Links */}
        <div className="flex gap-6 text-gray-300 font-medium">
          <button className="hover:text-green-300 transition-colors">Quests</button>
          <button className="hover:text-green-300 transition-colors">Leaderboard</button>
        </div>
  
        {/* 3. The User Profile Placeholder (Level & XP) */}
        <div className="flex items-center gap-3">
           <div className="text-right hidden md:block">
              <div className="text-xs text-slate-400">NEXT REWARD</div>
              <div className="text-sm font-bold text-yellow-400">LVL 1</div>
           </div>
           {/* Simple Avatar Circle */}
           <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-indigo-400 shadow-lg">
              <span className="text-white font-bold">U</span>
           </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;