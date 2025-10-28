import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;

app.get("/followers/:userId", async (req, res) => {
  const { userId } = req.params;
  const key = req.headers.authorization;

  if (!key || key !== SECRET_KEY) {
    return res.status(403).json({ error: "Forbidden" });
  }

  try {
    const response = await fetch(`https://users.roblox.com/v1/users/${userId}/followers/count`);
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch followers" });
    }

    const data = await response.json();
    res.json({ userId, followers: data.count });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});
export default app;
