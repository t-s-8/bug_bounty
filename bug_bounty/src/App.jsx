import React from 'react'

// src/App.jsx
import Navbar from './components/Navbar'; // <--- Importing the file you just made
import QuestCard from './components/questcards';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans">
      <Navbar />

      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 pl-2 border-l-4 border-indigo-500">
          Available Quests
        </h1>
        
        {/* The Grid Layout: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
           {/* Card 1 */}
           <QuestCard 
             title="Fix Navigation Bug" 
             xp={100} 
             difficulty="Easy"
             tags={['CSS', 'Tailwind']}
           />

           {/* Card 2 */}
           <QuestCard 
             title="API Connection Error" 
             xp={500} 
             difficulty="Medium" 
             tags={['React', 'Node.js']}
           />

           {/* Card 3 */}
           <QuestCard 
             title="Database Optimization" 
             xp={1000} 
             difficulty="Hard" 
             tags={['MongoDB', 'Backend']}
           />

        </div>
      </div>
    </div>
  )
}

export default App
