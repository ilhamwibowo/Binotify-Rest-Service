import User from "../models/user";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (req, res) => {
  const { name, username, email, password, confirm_password } = req.body;

  if (!name || !username || !email || !password || !confirm_password) {
    res.status(400).json({ msg: "cant be empty" });
  }

  const user_exist = await User.findOne({
    where: {
      email: email,
    },
  });

  //check if email already used
  if (user_exist) {
    console.log("email exist");
    return res.status(400).json({ msg: "Email already used!" });
  }

  //match password
  if (password !== confirm_password) {
    console.log("password does not match");
    return res.status(400).json({ msg: "Password does not match!" });
  }

  const hash = await bcrypt.hash(password, 10);
  try {
    await User.create({
      name: name,
      email: email,
      password: hash,
      username: username,
    });

    //create token
    const accessToken = jwt.sign(
      { username, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "2h",
      }
    );

    const usr = await User.findOne({
      where: {
        username: username,
      },
    });

    res.status(200).json({
      msg: "Logged In!",
      accessToken: accessToken,
      user_id: usr.user_id,
      isAdmin: 0,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    //validate password
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });

    //create token
    const username = user.username;
    const email = user.email;
    const accessToken = jwt.sign(
      { username, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "2h",
      }
    );

    //there are 2 choices here, for later,
    //token is saved in cookie (easier logout) or token saved in idk
    res.cookie("token", accessToken, { maxAge: 7200 * 1000 });
    res.json({
      msg: "Logged In!",
      accessToken: accessToken,
      user_id: user.user_id,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(404).json({ msg: "Invalid credentials" });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { maxAge: 0 });
  res.end();
};
