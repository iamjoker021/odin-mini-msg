const path = require("node:path");
const express = require('express');
const { title } = require("node:process");
const app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

app.get('/', (req, res) => {
    res.render('index', { title: "Mini Messageboard", messages: messages });
})

app.get('/new', (req, res) => {
    res.render('form');
})

app.post('/new', (req, res) => {
    messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
    res.redirect('/');
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));