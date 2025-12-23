import React from 'react';
import { useEffect, useState } from 'react';
import QuestCard from '../components/QuestCard';

function QuestBoard({ onComplete, completedQuests }) {
  const [quests, setQuests] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH DATA FROM YOUR NEW MOTIA BACKEND
  useEffect(() => {
    // Check your Workbench "Endpoints" tab to confirm this URL!
    // It is usually /api/quests, but if that fails, try /quests
    fetch('/api/quests')
      .then(res => {
        if (!res.ok) throw new Error("Server not found");
        return res.json();
      })
      .then(data => {
        setQuests(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to connect to Motia:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="text-xl font-bold text-white animate-pulse flex flex-col items-center gap-4">
        <span>📡 Contacting Headquarters...</span>
        <span className="text-sm font-normal text-white/50">(Make sure backend is running on port 3000)</span>
      </div>
    </div>
  );
// ... existing code ...

const handleAcceptQuest = async (questId, questTitle) => {
  try {
    console.log("Contacting Server...");
    
    const response = await fetch('/api/quest/accept', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questId, questTitle })
    });

    const data = await response.json();
    
    if (data.success) {
      alert(`🚀 ${data.message}`);
      // Here you could update local state to show it as "Active"
    }
  } catch (error) {
    console.error("Error accepting quest:", error);
    alert("❌ Failed to accept quest. Server might be offline.");
  }
};

// ... existing code ...

  return (
    <div className="p-8 relative z-10">
      <h1 className="text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500 drop-shadow-sm">
        🛡️ Active Bounties
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quests.map((quest) => (
          <QuestCard 
            key={quest.id} 
            {...quest} 
            isCompleted={completedQuests.includes(quest.id)}
            onComplete={() => handleAcceptQuest(quest.id, quest.title)} 
          />
        ))}
      </div>
    </div>
  );
}

export default QuestBoard;