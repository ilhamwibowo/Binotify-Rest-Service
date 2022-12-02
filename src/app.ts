import { getUsers, register, login } from "./controller/user";
import {
  getPremiumSongs,
  createSong,
  updateSong,
  deleteSong,
} from "./controller/song";
import { 
  acceptSubscribe, 
  getSubscriptionByStatus, 
  rejectSubscribe, 
  getSubscriptionBySubscriber,
  addSubscription } from "./controller/soap";
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

app.post("/subscribe/accept", acceptSubscribe);
app.post("/subscribe/reject", rejectSubscribe);
app.post("/subscribe", getSubscriptionByStatus);
app.post("/subscribe/add", addSubscription);
app.post("/subscribe/:id", getSubscriptionBySubscriber);

app.get("/song/:id", getPremiumSongs);
app.put("/song", updateSong);
app.post("/song", createSong);
app.post("/song/delete", deleteSong);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
