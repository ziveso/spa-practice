require("dotenv").config({ path: "../.env" });

console.log(process.env);
const express = require("express");
const db = require("./database");
const { streaming } = require("./logic/Twitter");

const app = express();
const PORT = 8080;
const HOST = "0.0.0.0";
console.log(process.env);
app.get("/", (req, res) => {
  res.send("SPA practice API");
});

app.get("/readDb", async (req, res) => {
  const jsonDb = await db.read();
  res.send(jsonDb);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

streaming("guy");
