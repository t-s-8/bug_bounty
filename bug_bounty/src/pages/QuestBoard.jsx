import React from 'react'

import { useState } from 'react';
import QuestCard from '../components/QuestCard';

function QuestBoard({ quests, onComplete, completedQuests }) {
  const [filter, setFilter] = useState('All');

  // logic to filter quests based on selection
  const filteredQuests = quests.filter(quest => {
    if (filter === 'All') return true;
    // Check difficulty OR tags
    return quest.difficulty === filter || quest.tags.includes(filter);
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Quests</h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8 flex-wrap">
        {['All', 'Easy', 'Medium', 'Hard', 'React', 'Backend'].map(f => (
           <button 
             key={f}
             onClick={() => setFilter(f)}
             className={`px-4 py-2 rounded-full border ${filter === f ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-600 text-slate-400 hover:border-indigo-400'}`}
           >
             {f}
           </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuests.map(quest => (
          <QuestCard 
            key={quest.id}
            {...quest} // Passes title, xp, difficulty, tags automatically
            onComplete={() => onComplete(quest.xp, quest.id)}
            isCompleted={completedQuests.includes(quest.id)}
          />
        ))}
      </div>
    </div>
  );
}
export default QuestBoard;