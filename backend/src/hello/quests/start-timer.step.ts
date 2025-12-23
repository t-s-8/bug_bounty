import { StepHandler, EventRouteConfig } from 'motia';

export const config: EventRouteConfig = {
  name: 'start-timer',
  type: 'event',
  subscribes: ['quest-started'],
  emits: []
};

export const handler: StepHandler = async (event, { logger }) => {
  // 👇 LOG IMMEDIATELY (Before checking data)
  logger.info("🤖 BACKGROUND WORKER WOKE UP!");

  try {
    // Safety check for data
    const data = event.data || {}; 
    const { questId, title } = data;

    logger.info(`⏳ STARTING TIMER for Quest [${questId}]: ${title}`);

    // Simulate 3 second wait
    await new Promise(resolve => setTimeout(resolve, 3000));

    logger.info(`✅ TIMER FINISHED: XP Awarded!`);
    return { success: true };

  } catch (err) {
    logger.error("❌ Background Worker Failed:", err);
    return { success: false };
  }
};