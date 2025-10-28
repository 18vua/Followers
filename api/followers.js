import fetch from "node-fetch";

export default async function handler(req, res) {
  const { userId, key } = req.query;
  const authKey = req.headers.authorization || key;

  if (!userId) {
    return res.status(400).json({ error: "Missing userId" });
  }

  if (!authKey || authKey !== process.env.SECRET_KEY) {
    return res.status(403).json({ error: "Forbidden" });
  }

  try {
    const response = await fetch(`https://users.roblox.com/v1/users/${userId}/followers/count`);
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch followers" });
    }

    const data = await response.json();
    res.status(200).json({ userId, followers: data.count });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
}
