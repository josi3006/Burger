const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();


console.log('top of burgers_controller.js');


// This code selects all burgers

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);

    });
});


// This code posts a new burger

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        console.log('in controller: ' + result)
        // res.redirect({ id: result.insertId });
        res.redirect("/");

    });
});


// This code changes burger state to 'devoured' on button click

router.put("/api/burgers/:id", function (req, res) {
    const id = req.params.id;

console.log('params/id in controller is: ', id);
        burger.updateOne(id, function (result) {

        if (result.changedRows == 0) {

            return res.status(404).end();

        } else {
            res.status(200).end();
        }
        // res.redirect("/");

    });
});

// This exports the routes 

module.exports = router;
