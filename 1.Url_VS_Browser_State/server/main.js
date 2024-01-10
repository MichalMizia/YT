// src/index.js
const express = require("express");
const path = require("path");

const app = express();
const port = 7777;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const tab = req.query.tab;
  res.render("index", { tab: tab || "team" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
