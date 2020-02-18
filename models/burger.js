var orm = require("../config/orm.js");


//This code calls the orm functions

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (newBurger, cb) {
        orm.insertOne(newBurger, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {      // correct is id, cb

        console.log('------------------------');
        console.log('id in burger.js is: ', id);
        console.log('cb in burger.js is: ', cb);

        orm.updateOne(id, cb, function (res) {
            cb(res);
        });
    }
};

// This exports the functions for the controller 

module.exports = burger;
