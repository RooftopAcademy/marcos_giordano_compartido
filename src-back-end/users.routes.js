const shortid = require("shortid");

module.exports = function UserRoutes(app) {
  users = require("./data/users.json");

  app.get("/users", (req, res) => {
    res.json(users);
  });

  app.post("/users", (req, res) => {
    console.log(req.body);
    const userInput = req.body;

    const existsUser = users.find(
      (user) => user._mailAdress == userInput._mailAdress
    );
    if (existsUser) {
      return res.status(409).json({ message: "The user already exists" });
    }

    if (
      userInput._firstName &&
      userInput._lastName &&
      userInput._mailAdress &&
      userInput._password
    ) {
      userInput._id = shortid.generate();
      users.push(userInput);
      return res.status(201).json({ _id: userInput._id });
    }

    return res.status(400).json({ message: "Email or password missing" });
  });

  app.get("/users/:mail", (req, res) => {
    if (!req.params.mail) {
      return res.status(404);
    }

    const user = users.find((user) => user._mailAdress === req.params.mail);

    return res.status(200).json(user);
  });

  app.put("/users/:id", (req, res) => {
    if (!req.params.id) {
      return res.status(404);
    }

    const user = users.find((user) => user._id === req.params.id);

    if (!user) {
      return res.status(404);
    }

    user._firstName = req.body._firstName;
    user._lastName = req.body._lastName;
    user._mailAdress = req.body._mailAdress;
    user._password = req.body._password;
    user._privilege = req.body._privilege;

    const index = users.findIndex((u) => u.id === user.id);
    users[index] = user;

    return res.status(200);
  });

  app.delete("/users/:id", (req, res) => {
    //   if (!req.params.id) {
    //     return res.status(404);
    //   }
    //   users = users.filter((u) => u.id !== req.params.id);
    //   return res.status(204);
  });
};
