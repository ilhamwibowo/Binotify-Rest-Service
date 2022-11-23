const Sequelize = require('sequelize')
require("dotenv").config();

const db = new Sequelize("restdb", "MYSQL_USER", "MYSQL_PASSWORD", {
    host: "db",
    dialect: "mysql"
  });
  
db
    .authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch(err => console.error("Unable to connect to the database:", err));
  
export default db;