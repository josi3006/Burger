const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();


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
        res.redirect("/");

    });
});


// This code changes burger state to 'devoured' on button click

router.put("/api/burgers/:id", function (req, res) {
    const id = req.params.id;
    const devState = req.body.devoured;

    burger.updateOne(id, devState, function (result) {

        if (result.changedRows == 0) {

            return res.status(404).end();

        } else {

            return res.status(200).end();
        }

    });
});

// This exports the routes 

module.exports = router;
