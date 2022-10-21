const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from Home");
});
app.get("/contact", (req, res) => {
  res.send("Hello from Contact");
});
app.get("/user/", (req, res) => {
  res.send("Hello from User main");
});
app.get("/user/:id", (req, res) => {
  const { params, query } = req;
  console.log(params, query);
  res.send("Hello from User" + " " + params.id + " " + query.q);
});
app.post("/contact", (req, res) => {
  //   res.json({ requestBody: req.body });
  res.send({ name: "Vishal" });
  //   res.send("Hello from Contact POST");
});

app.listen(8000);
