import React from 'react'
function Leaderboard() {
  return (
    <div className="p-8 text-center relative z-10">
      <h1 className="text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500 drop-shadow-sm">
        🏆 Global Leaderboard
      </h1>
      
      {/* GLASS CARD START */}
      <div className="inline-block text-left w-full max-w-3xl 
          bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
         
         {/* Header Row */}
         <div className="flex justify-between bg-black/20 p-5 text-blue-200 text-sm font-bold uppercase tracking-widest border-b border-white/10">
           <span>User</span>
           <div className="flex gap-12">
             <span>Level</span>
             <span>XP</span>
           </div>
         </div>

         {/* User Row 1 (Top Player) */}
         <div className="flex justify-between p-5 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
           <span className="text-amber-400 font-bold text-lg flex items-center gap-2">
             <span className="text-2xl">🥇</span> CodeMaster99
           </span>
           <div className="flex gap-12 text-white font-bold">
             <span className="text-blue-200">LVL 50</span>
             <span className="text-amber-300">54,000</span>
           </div>
         </div>

         {/* User Row 2 (YOU) - Highlighted */}
         <div className="flex justify-between p-5 border-b border-white/5 bg-indigo-500/20 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-indigo-400">
           <span className="text-white font-black text-lg flex items-center gap-2">
             <span className="text-2xl">🥈</span> YOU
           </span>
           <div className="flex gap-12 text-white font-bold">
             <span>LVL 1</span>
             <span>0</span>
           </div>
         </div>

         {/* User Row 3 */}
         <div className="flex justify-between p-5 hover:bg-white/5 transition-colors items-center text-blue-100/80">
           <span className="flex items-center gap-2">
             <span className="text-2xl grayscale opacity-50">🥉</span> BugHunter
           </span>
           <div className="flex gap-12">
             <span>LVL 40</span>
             <span>42,000</span>
           </div>
         </div>

      </div>
      {/* GLASS CARD END */}

    </div>
  );
}
export default Leaderboard;