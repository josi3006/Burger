var connection = require("../config/connection.js");


// This code sets up the orm object
// 

var orm = {
    selectAll: function() {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(newBurger) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES ?";
      console.log(queryString);
      connection.query(queryString, [newBurger], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(id) {
      var queryString =
        "UPDATE burgers SET devoured = true WHERE id = ?";
  
      connection.query(
        queryString, [id], function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;
  

