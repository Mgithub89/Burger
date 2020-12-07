const mysql = require("mysql");
require("dotenv").config();
var connection;
//create database connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DB
    });
};
//connect to mysql server
connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("connected as id " + connection.threadId);

    }
});



module.exports = connection;