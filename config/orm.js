var connection = require("../config/connection.js");


// This code sets up the orm object

var orm = {
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(value, cb) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
      connection.query(queryString, [value], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: function(x, id, cb) {
      var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";

      console.log('id in orm is: ', id);
  
      connection.query(queryString, id, function(err, result) {
          if (err) throw err;
          console.log('id after query is:', id);
          cb(result);
        }
      );
    }
  };
  
  module.exports = orm;
  

