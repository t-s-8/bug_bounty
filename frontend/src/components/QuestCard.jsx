import React from 'react'
// src/components/QuestCard.jsx
function QuestCard({ title, xp, difficulty, tags, onComplete, isCompleted }) {
  
  const handleAccept = () => {
    onComplete();
  };

  // 1. Define the Neon Colors here
  const difficultyStyles = {
    Easy: "bg-emerald-400/10 text-emerald-300 border-emerald-400/50 shadow-[0_0_10px_rgba(52,211,153,0.15)]",
    Medium: "bg-orange-400/10 text-orange-300 border-orange-400/50 shadow-[0_0_10px_rgba(251,146,60,0.15)]",
    Hard: "bg-rose-400/10 text-rose-300 border-rose-400/50 shadow-[0_0_10px_rgba(251,113,133,0.15)]"
  };

  // Fallback if difficulty is missing
  const badgeStyle = difficultyStyles[difficulty] || difficultyStyles.Easy;

  return (
    <div className={`
        relative p-6 rounded-2xl flex flex-col h-full transition-all duration-300 group
        bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl
        hover:bg-white/20 hover:scale-[1.02] hover:border-white/30
        ${isCompleted ? 'opacity-75 grayscale' : ''}
      `}>
      
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
         {/* 2. Apply the dynamic badgeStyle here */}
         <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${badgeStyle}`}>
            {difficulty}
         </span>
         <span className="text-amber-300 font-black text-lg flex items-center gap-1 drop-shadow-sm">
            💰 {xp} XP
         </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-2 text-white tracking-tight drop-shadow-md">
        {title}
      </h3>

      {/* Description */}
      <p className="text-blue-100/80 text-sm mb-6 flex-grow font-light leading-relaxed">
        Help the community by fixing this issue...
      </p>

      {/* Footer */}
      <div className="mt-auto">
        <div className="flex gap-2 mb-6 flex-wrap">
           {tags.map((tag) => (
             <span key={tag} className="text-[10px] font-bold bg-indigo-500/20 text-indigo-200 px-2 py-1 rounded border border-indigo-400/30">
               #{tag}
             </span>
           ))}
        </div>

        {/* UIVERSE Button */}
        <button 
          className="uiverse" 
          onClick={handleAccept}
          disabled={isCompleted}
        >
          <div className="wrapper">
            <span>{isCompleted ? "✅ COMPLETED" : "⚔️ ACCEPT QUEST"}</span>
            <div className="circle circle-12"></div>
            <div className="circle circle-11"></div>
            <div className="circle circle-10"></div>
            <div className="circle circle-9"></div>
            <div className="circle circle-8"></div>
            <div className="circle circle-7"></div>
            <div className="circle circle-6"></div>
            <div className="circle circle-5"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-1"></div>
          </div>
        </button>

      </div>
    </div>
  );
}

export default QuestCard;