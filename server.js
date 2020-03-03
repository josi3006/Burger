const express = require('express');




// Established default directory (where index is located)




// Parse application body as JSON

const PORT = process.env.PORT || 8080;



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

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
