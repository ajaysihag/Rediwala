import app from "./app.js";
import { connectDatabase } from "./config/database.js";
import { env } from "./config/env.js";

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(env.port, () => {
      console.log(`Rediwala API is running on port ${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start Rediwala API:", error.message);
    process.exit(1);
  }
};

startServer();
