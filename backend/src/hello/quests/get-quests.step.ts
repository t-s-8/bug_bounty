// backend/src/quests/get-quests.step.ts
import { ApiRouteConfig, StepHandler } from 'motia';

// 1. THE CONFIG
// This defines the API endpoint rules
export const config: ApiRouteConfig = {
  name: 'get-quests',
  type: 'api',
  path: '/quests',  // This creates http://localhost:3000/api/quests
  method: 'GET',
  emits: []
};

// 2. THE LOGIC
// This function runs when the Frontend calls the API
export const handler: StepHandler = async (req, { logger }) => {
  logger.info('🔍 Frontend requested quest data...');

  // The Mock Database
  const quests = [
    { id: 1, title: "Fix Navigation Bug", xp: 100, difficulty: "Easy", tags: ["CSS", "Tailwind"] },
    { id: 2, title: "API Connection Error", xp: 500, difficulty: "Medium", tags: ["React", "Node.js"] },
    { id: 3, title: "Database Optimization", xp: 1000, difficulty: "Hard", tags: ["MongoDB", "Backend"] },
    { id: 4, title: "Dark Mode Glitch", xp: 200, difficulty: "Easy", tags: ["UI/UX", "CSS"] },
    { id: 5, title: "Fix Login Timeout", xp: 800, difficulty: "Hard", tags: ["Auth", "Security"] }
  ];

  return {
    status: 200,
    body: quests
  };
};