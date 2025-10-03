const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins (good for testing locally)
app.use(cors());

// Root route
app.get("/", (req, res) => {
  res.send("Dice Roller API is running! Use /roll?count=1 to roll dice.");
});

// Route to roll dice
app.get("/roll", (req, res) => {
  const count = parseInt(req.query.count) || 1;

  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(Math.floor(Math.random() * 6) + 1);
  }

  res.json({
    diceCount: count,
    results: results,
    total: results.reduce((a, b) => a + b, 0),
  });
});

app.listen(port, () => {
  console.log(`Dice Roller API running at http://localhost:${port}`);
});
