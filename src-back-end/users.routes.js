const shortid = require("shortid");

module.exports = function UserRoutes(app) {
  users = [
    {
      id: "ZmNQ4ux9k",
      firstName: "Marcos",
      lastName: "Giordano",
      mailAdress: "marcos_l14@hotmail.com",
      password: "111111",
      privilege: "admin",
    },
  ];

  app.get("/users", (req, res) => {
    return res.json(users);
  });

  app.post("/users", (req, res) => {
    const user = req.body;

    if (user.name && user.lastname && user.email && user.password) {
      user.id = shortid.generate();
      users.push(user);
      return res.status(201).json({ id: user.id });
    }

    return res.status(400).json({ message: "Email or password missing" });
  });

  app.get("/users/:id", (req, res) => {
    if (!req.params.id) {
      return res.status(404);
    }

    const user = users.find((u) => u.id === req.params.id);

    return res.status(200).json(user);
  });

  app.put("/users/:id", (req, res) => {
    if (!req.params.id) {
      return res.status(404);
    }

    const user = users.find((u) => u.id === req.params.id);

    if (!user) {
      return res.status(404);
    }

    user.email = req.body.email;
    user.password = req.body.password;

    const index = users.findIndex((u) => u.id === user.id);
    users[index] = user;

    return res.status(200);
  });

  app.delete("/users/:id", (req, res) => {
    if (!req.params.id) {
      return res.status(404);
    }

    users = users.filter((u) => u.id !== req.params.id);

    return res.status(204);
  });
};
