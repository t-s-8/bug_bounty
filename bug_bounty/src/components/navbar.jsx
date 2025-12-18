import React from 'react'
import { Link } from 'react-router-dom'; // <--- Import Link
import { useState } from 'react'; // For the modal later

function Navbar({ currentXP }) {
  const level = Math.floor(currentXP / 1000) + 1;
  const [showProfile, setShowProfile] = useState(false); // Modal state

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <Link to="/" className="text-xl font-bold text-green-400 flex items-center gap-2">
          🛡️ BugSlayer
        </Link>

        <div className="flex gap-6 text-gray-300 font-medium hidden sm:flex">
          <Link to="/" className="hover:text-green-300 transition-colors">Quests</Link>
          <Link to="/history" className="hover:text-green-300 transition-colors">History</Link>
          <Link to="/leaderboard" className="hover:text-green-300 transition-colors">Leaderboard</Link>
        </div>

        <div className="flex items-center gap-3">
           <div className="text-right hidden md:block">
              <div className="text-xs text-slate-400">TOTAL XP: {currentXP}</div> 
              <div className="text-sm font-bold text-yellow-400">LVL {level}</div>
           </div>
           
           {/* Avatar Button - Triggers Modal */}
           <button 
             onClick={() => setShowProfile(true)}
             className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-indigo-400 shadow-lg hover:scale-105 transition-transform"
           >
              <span className="text-white font-bold">U</span>
           </button>
        </div>
      </nav>

      {/* --- STAGE 2: THE PROFILE MODAL --- */}
      {showProfile && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm" onClick={() => setShowProfile(false)}>
           {/* Modal Content (Stop click from closing) */}
           <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-md border border-slate-600 relative shadow-2xl transform scale-100" onClick={e => e.stopPropagation()}>
              
              <button onClick={() => setShowProfile(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
              
              <div className="text-center">
                 <div className="w-24 h-24 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-yellow-400 text-4xl shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                    U
                 </div>
                 <h2 className="text-2xl font-bold text-white mb-1">User Name</h2>
                 <p className="text-indigo-400 mb-6">Full Stack Developer</p>
                 
                 <div className="flex justify-center gap-8 mb-8 bg-slate-900/50 p-4 rounded-xl">
                    <div>
                       <div className="text-xs text-slate-400 uppercase">Level</div>
                       <div className="text-2xl font-bold text-yellow-400">{level}</div>
                    </div>
                    <div>
                       <div className="text-xs text-slate-400 uppercase">XP</div>
                       <div className="text-2xl font-bold text-white">{currentXP}</div>
                    </div>
                    <div>
                       <div className="text-xs text-slate-400 uppercase">Rank</div>
                       <div className="text-2xl font-bold text-green-400">#42</div>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold transition-colors">Edit Profile</button>
                    <button className="w-full py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-bold transition-colors">Contact Support</button>
                 </div>
              </div>

           </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
