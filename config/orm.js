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
    updateOne: function(id, state, cb) {         // correct is (id, cb)

      console.log('------------------------');
      console.log('id in orm is: ', id);
      console.log('cb in orm is: ', cb);
      console.log('states: ', state);


      var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
  
      connection.query(queryString, [state, id], function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result);
        }
      );
    }
  };
  
  module.exports = orm;
  

