const Sequelize = require('sequelize')
const express = require('express')
const mysql = require('mysql');

const app = express();
const port = 3000;


// var con = mysql.createConnection({
//   host: "db",
//   user: "MYSQL_USER",
//   password: "MSYQL_PASSWORD",
//   database: "restdb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected! JASLDKFJASEJFOPWIQNCKJSADKFHEQIUWFH;OHJNO;");
// });

const db = new Sequelize('restdb', 'MYSQL_USER', 'MYSQL_PASSWORD', {
    host: "db",
    dialect: "mysql"
});
 
db
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch(err => console.error("Unable to connect to the database:", err));

app.get('/', (req, res) => {
  console.log("owo")
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});