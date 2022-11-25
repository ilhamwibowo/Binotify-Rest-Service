import { getUsers, register, login } from "./controller/user";
import { getSongs } from "./controller/song";
import verify from "./middleware/verify"
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', getSongs)
app.post('/register', register)
app.post('/login', login)

app.get("/protected-stuff", verify, (req, res) => {
  res.status(200).json( { msg:" p bang token anda berhasil yeyeeyy " });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});