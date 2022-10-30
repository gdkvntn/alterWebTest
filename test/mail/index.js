const express = require("express");
const bodyParser = require("body-parser");
const mailer = require("./mailer");

const app = express();
const PORT = 3001;
let user = undefined;
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/index", (req, res) => {
  if (!req.body.text) {
    res.sendStatus(400);
  }
  const message = {
    from: "xaxaxa2_66@mail.ru",
    to: "antonhudkou@gmail.com",
    subject: `${req.body.title}`,
    text: `login:${req.body.mail}
    text:${req.body.text}`,
  };
  mailer(message);
  user = req.body;
  res.redirect("/index");
});

app.get("/index", (req, res) => {
  if (typeof user !== "object") return res.sendFile(__dirname + "/index.html");
  res.send("good");
  user = undefined;
});

app.listen(PORT, () =>
  console.log(`server listening http://localhost:${PORT}/index`)
);
