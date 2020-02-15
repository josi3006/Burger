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
        console.log("Here\'s the stuff: " + hbsObject);
        res.render("index", hbsObject);
        res.redirect("/");

    });
});


// This code posts a new burger

router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.insertOne(req.body.burger_name, function (result) {
            console.log('in controller: ' + result)
            // res.redirect({ id: result.insertId });
            res.redirect("/");

        });
});


// This code changes burger state to 'devoured' on button click

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows == 0) {

            return res.status(404).end();

        } else {
            res.status(200).end();
        }
        res.redirect("/");

    });
});

// This exports the routes 

module.exports = router;
