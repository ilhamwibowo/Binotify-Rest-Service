const express = require('express')
const mysql = require('mysql');
import getUsers from "./controller/user";

const app = express();
const port = 8000;

app.get('/', getUsers)

app.get('/hello', function(req,res) {
  res.send("hello bang");
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});