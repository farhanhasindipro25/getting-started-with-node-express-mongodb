const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple Node Server Running");
});

const users = [
  { id: 1, name: "A", email: "a@gmail.com" },
  { id: 2, name: "B", email: "b@gmail.com" },
  { id: 3, name: "C", email: "c@gmail.com" },
  { id: 4, name: "D", email: "d@gmail.com" },
  { id: 5, name: "E", email: "e@gmail.com" },
  { id: 6, name: "F", email: "f@gmail.com" },
  { id: 7, name: "G", email: "g@gmail.com" },
  { id: 8, name: "H", email: "h@gmail.com" },
  { id: 9, name: "I", email: "i@gmail.com" },
  { id: 10, name: "J", email: "j@gmail.com" },
  { id: 11, name: "K", email: "k@gmail.com" },
  { id: 12, name: "L", email: "l@gmail.com" },
  { id: 13, name: "M", email: "m@gmail.com" },
  { id: 14, name: "N", email: "n@gmail.com" },
  { id: 15, name: "O", email: "o@gmail.com" },
  { id: 16, name: "P", email: "p@gmail.com" },
  { id: 17, name: "Q", email: "q@gmail.com" },
  { id: 18, name: "R", email: "r@gmail.com" },
  { id: 19, name: "S", email: "s@gmail.com" },
  { id: 20, name: "T", email: "t@gmail.com" },
  { id: 21, name: "U", email: "u@gmail.com" },
  { id: 22, name: "V", email: "v@gmail.com" },
  { id: 23, name: "W", email: "w@gmail.com" },
  { id: 24, name: "X", email: "x@gmail.com" },
  { id: 25, name: "Y", email: "y@gmail.com" },
  { id: 26, name: "Z", email: "z@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("POST API Called!");
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  console.log(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("Simple Node Server Running on Port:", port);
});
