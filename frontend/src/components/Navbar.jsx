import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ currentXP }) {
  // Calculate level: 1000 XP per level
  const level = Math.floor(currentXP / 1000) + 1;
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {/* GLASS NAVBAR */}
      <nav className="flex justify-between items-center p-4 sticky top-0 z-50 
        bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 flex items-center gap-2 drop-shadow-sm">
          🛡️ BUG BOUNTY
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-blue-100 font-semibold hidden sm:flex text-sm tracking-wide">
          <Link to="/" className="hover:text-white transition-all hover:scale-105">QUESTS</Link>
          <Link to="/history" className="hover:text-white transition-all hover:scale-105">HISTORY</Link>
          <Link to="/leaderboard" className="hover:text-white transition-all hover:scale-105">LEADERBOARD</Link>
        </div>

        {/* Right Side: XP & Avatar */}
        <div className="flex items-center gap-4">
           <div className="text-right hidden md:block">
              <div className="text-[10px] text-blue-200 uppercase tracking-widest">Total XP</div> 
              <div className="text-lg font-black text-amber-400 leading-none drop-shadow-md">{currentXP}</div>
           </div>
           
           {/* Avatar Ring */}
           <button 
             onClick={() => setShowProfile(true)}
             className="w-10 h-10 rounded-full flex items-center justify-center 
               bg-gradient-to-tr from-indigo-600 to-purple-600 
               border-2 border-white/20 shadow-lg hover:shadow-indigo-500/50 hover:scale-110 transition-all"
           >
              <span className="text-white font-bold text-sm">U</span>
           </button>
        </div>
      </nav>

      {/* GLASS PROFILE MODAL */}
      {showProfile && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity" onClick={() => setShowProfile(false)}>
           
           {/* The Card itself - UPDATED TO BE LIGHTER GLASS */}
           <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl w-full max-w-md border border-white/20 shadow-2xl relative overflow-hidden" onClick={e => e.stopPropagation()}>
              
              {/* Decorative Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-indigo-500/30 rounded-full blur-[80px] -z-10"></div>

              <button onClick={() => setShowProfile(false)} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2">✕</button>
              
              <div className="relative text-center z-10">
                 {/* Big Avatar */}
                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center rounded-full 
                   bg-gradient-to-br from-indigo-600 to-purple-700 border-4 border-white/20 shadow-xl ring-4 ring-white/5">
                    <span className="text-5xl font-bold text-white">U</span>
                 </div>
                 
                 <h2 className="text-3xl font-black text-white mb-1 tracking-tight drop-shadow-lg">User Name</h2>
                 <p className="text-blue-200 mb-8 text-sm font-medium tracking-wide uppercase">Full Stack Bug Hunter</p>
                 
                 {/* Stats Grid */}
                 <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm">
                       <div className="text-[10px] text-blue-300 uppercase font-bold tracking-wider mb-1">Level</div>
                       <div className="text-3xl font-black text-amber-400 drop-shadow-sm">{level}</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm">
                       <div className="text-[10px] text-blue-300 uppercase font-bold tracking-wider mb-1">XP</div>
                       <div className="text-3xl font-black text-white drop-shadow-sm">{currentXP}</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm">
                       <div className="text-[10px] text-blue-300 uppercase font-bold tracking-wider mb-1">Rank</div>
                       <div className="text-3xl font-black text-emerald-400 drop-shadow-sm">#42</div>
                    </div>
                 </div>

                 {/* Actions - GLASS BUTTONS */}
                 <div className="space-y-3">
                    <button className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wider text-white 
                      bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all shadow-lg">
                      EDIT PROFILE
                    </button>
                    <button className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wider text-blue-100
                      bg-black/20 border border-white/10 hover:bg-black/30 hover:text-white transition-all">
                      CONTACT SUPPORT
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </>
  );
}

export default Navbar;