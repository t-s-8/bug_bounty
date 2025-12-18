import React from 'react'
function Leaderboard() {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">🏆 Global Leaderboard</h1>
        <div className="bg-slate-800 p-6 rounded-xl inline-block text-left w-full max-w-2xl">
           <div className="flex justify-between border-b border-slate-700 pb-2 mb-2 text-slate-400">
             <span>User</span>
             <span>Level</span>
             <span>XP</span>
           </div>
           {/* Fake Data for visual */}
           <div className="flex justify-between py-3 border-b border-slate-700/50">
             <span className="text-yellow-400 font-bold">1. 🥇 CodeMaster99</span>
             <span>LVL 50</span>
             <span>54,000</span>
           </div>
           <div className="flex justify-between py-3 border-b border-slate-700/50 bg-indigo-900/20 px-2 -mx-2 rounded">
             <span className="text-white font-bold">2. 🥈 YOU</span>
             <span>LVL 1</span>
             <span>0</span>
           </div>
           <div className="flex justify-between py-3 text-slate-500">
             <span>3. 🥉 BugHunter</span>
             <span>LVL 40</span>
             <span>42,000</span>
           </div>
        </div>
      </div>
    );
  }
  export default Leaderboard;