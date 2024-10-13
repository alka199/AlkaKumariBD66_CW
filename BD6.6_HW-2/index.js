const cors = require("cors");
const express = require("express");
const { getAllGames, getGamesById } = require("./controllers");

const app = express();

app.use(cors());
app.use(express.json());

//Exercise 1: Retrieve All Employees
app.get("/games", async (req, res) => {
  const games = getAllGames();
  res.json({ games });
});

//Exercise 2: Retrieve Employee by ID
app.get("/games/details/:id", async (req, res) => {
  let game = getGamesById(parseInt(req.params.id));
  res.json({
    game,
  });
});

module.exports = { app };
