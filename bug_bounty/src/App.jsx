import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuestBoard from './pages/QuestBoard';
import History from './pages/History';
import Leaderboard from './pages/Leaderboard';

function App() {
  const [userXP, setUserXP] = useState(0);
  const [completedQuests, setCompletedQuests] = useState([]);

  // The Quest Data
  const quests = [
    { id: 1, title: "Fix Navigation Bug", xp: 100, difficulty: "Easy", tags: ["CSS", "Tailwind"] },
    { id: 2, title: "API Connection Error", xp: 500, difficulty: "Medium", tags: ["React", "Node.js"] },
    { id: 3, title: "Database Optimization", xp: 1000, difficulty: "Hard", tags: ["MongoDB", "Backend"] }
  ];

  // The Logic
  const handleQuestComplete = (amount, id) => {
    if (completedQuests.includes(id)) return;
    setUserXP(userXP + amount);
    setCompletedQuests([...completedQuests, id]);
    alert(`🎉 Quest Completed! +${amount} XP`);
  };

  return (
    <div className="min-h-screen text-white font-sans">
      {/* Pass XP to Navbar so the score updates */}
      <Navbar currentXP={userXP} />
      
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={
            <QuestBoard 
              quests={quests} 
              onComplete={handleQuestComplete} 
              completedQuests={completedQuests} 
            />
          } />
          <Route path="/history" element={
            <History quests={quests} completedQuests={completedQuests} />
          } />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App