const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.get("/*", (req, res) => {
  res.send("Error 404");
  res.status(404);
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
