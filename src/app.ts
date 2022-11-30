import { getUsers, register, login } from "./controller/user";
import {
  getPremiumSongs,
  createSong,
  updateSong,
  deleteSong,
} from "./controller/song";
import verify from "./middleware/verify";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/user", getUsers);
app.post("/register", register);
app.post("/login", login);
app.post("/verify", verify, (req, res) => {
  console.log("qwajpeoidjlh");
  res.status(200).json({ msg: " p bang token anda berhasil yeyeeyy " });
});

app.get("/song/:id", getPremiumSongs);
app.put("/song", updateSong);
app.post("/song", createSong);
app.delete("/song", deleteSong);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
