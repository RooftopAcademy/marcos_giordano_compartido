const express = require("express");
const path = require("path");
const usersRoutes = require("./src-back-end/users.routes");
const Cors = require("cors");

const app = express();

app.use(express.static("public"));
app.use(Cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

usersRoutes(app);

app.get("/*", (req, res) => {
  res.send("Error 404");
  res.status(404);
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
