// backend/src/hello/quests/accept-quest.step.ts
import { ApiRouteConfig, StepHandler } from 'motia';

export const config: ApiRouteConfig = {
  name: 'accept-quest',
  type: 'api',
  path: '/quest/accept',
  method: 'POST',
  // 👇 CRITICAL CHANGE: This tells Motia "I trigger the quest-started event"
  emits: ['quest-started'] 
};

export const handler: StepHandler = async (req: any, { logger }) => {
  try {
    let body;

    // Handle data parsing (Pre-parsed or Stream)
    if (req.body) {
      body = req.body;
    } else {
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const rawData = Buffer.concat(buffers).toString();
      if (!rawData) throw new Error("Empty body");
      body = JSON.parse(rawData);
    }

    const { questId, questTitle } = body;
    logger.info(`⚔️ API: User accepted quest [${questId}]`);

    return {
      status: 200,
      body: { success: true, message: "Quest Started" },
      // 👇 EMIT THE EVENT HERE
      emits: {
        'quest-started': { questId, title: questTitle }
      }
    };

  } catch (error: any) {
    logger.error('❌ Error:', error.message);
    return { status: 400, body: { success: false } };
  }
};