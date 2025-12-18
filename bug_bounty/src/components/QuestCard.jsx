import React from 'react'
// src/components/QuestCard.jsx
function QuestCard({ title, xp, difficulty, tags, onComplete, isCompleted }) {
  
    // A simple function to handle the button click
    const handleAccept = () => {
      onComplete(xp);
    };
  
    // Color logic based on difficulty
    const difficultyColors = {
      Easy: "text-green-400 border-green-700 bg-green-900/30",
      Medium: "text-yellow-400 border-yellow-700 bg-yellow-900/30",
      Hard: "text-red-400 border-red-700 bg-red-900/30"
    };
  
    return (
      <div className={`bg-slate-800 p-6 rounded-xl border border-slate-700 transition-all shadow-lg flex flex-col h-full group ${isCompleted ? 'opacity-50 border-slate-600' : 'hover:border-indigo-500 hover:shadow-indigo-500/20'}`}>
        
        {/* Card Header: Difficulty & XP */}
        <div className="flex justify-between items-start mb-4">
           <span className={`text-xs px-2 py-1 rounded border font-bold uppercase ${difficultyColors[difficulty] || difficultyColors.Easy}`}>
              {difficulty}
           </span>
           <span className="text-yellow-400 font-bold text-sm flex items-center gap-1">
              💰 {xp} XP
           </span>
        </div>
  
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
  
        {/* Description Placeholder */}
        <p className="text-gray-400 text-sm mb-6 grow">
          Help the community by fixing this issue. Click to view full details on GitHub...
        </p>
  
        {/* Footer: Tags & Button */}
        <div className="mt-auto">
          <div className="flex gap-2 mb-4 flex-wrap">
             {tags.map((tag) => (
               <span key={tag} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                 {tag}
               </span>
             ))}
          </div>
  
          <button 
            onClick={handleAccept}
            disabled={isCompleted} // <--- Disables click
            className={`w-full py-2 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 
              ${isCompleted 
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed' // Gray Style
                : 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95' // Active Style
              }`}
          >
           {isCompleted ? "✅ Completed" : "⚔️ Accept Quest"}
          </button>
        </div>
  
      </div>
    );
  }
  
  export default QuestCard;