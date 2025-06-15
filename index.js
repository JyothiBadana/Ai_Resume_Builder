const express = require("express");
const app = express();
app.use(express.json());
app.post("/suggest", async (req, res) => {
  res.json({ suggestion: "Improve bullet points and be more specific." });
});
app.listen(5000, () => console.log("Server running on port 5000"));