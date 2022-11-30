const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.cookies.token;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    console.log(decoded);
  } catch (err) {
    return res.status(401).json({ msg: "Invalid Token" });
  }
  return next();
};

export default verify;
