const express = require('express');


const PORT = process.env.PORT || 8080;

const app = express();

// Established default directory (where index is located)

app.use(express.static("public"));


// Parse application body as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Require handlebars

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Requires the routes file

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Spin up the server

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
