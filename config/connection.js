var mysql = require("mysql");
var connection;
// This code sets up the connection


if (process.env.JAWSDB_URL) {

connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  connection = mysql.createConnection({
  host: "localhost",
  // port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

};


// This code starts the connection

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// This code exports the connection for use

module.exports = connection;