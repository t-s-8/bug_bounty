import React from 'react'
function History({ quests, completedQuests }) {
    // Filter the master list to only show ones we have finished
    const myHistory = quests.filter(q => completedQuests.includes(q.id));
  
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Quest History</h1>
        {myHistory.length === 0 ? (
          <p className="text-slate-500">You haven't completed any quests yet. Go fix some bugs!</p>
        ) : (
          <div className="space-y-4">
            {myHistory.map(q => (
              <div key={q.id} className="bg-slate-800 p-4 rounded-lg border border-green-900 flex justify-between items-center">
                 <div>
                   <h3 className="font-bold text-lg">{q.title}</h3>
                   <span className="text-green-400 text-sm">Completed</span>
                 </div>
                 <div className="font-mono text-yellow-400">+{q.xp} XP</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  export default History;