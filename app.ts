const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const users = [
  {
    name: "Mojtaba Razaghi",
    phone: "09379118854",
    address: "Rash, city of rain",
    gender: "male",
  },
];

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send({ data: users });
});

app.post("/users", (req, res) => {
  const { name, phone, address, gender } = req.body;
  users.push({ name, phone, address, gender });
  res.send({ data: users });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
