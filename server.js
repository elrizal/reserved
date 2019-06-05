const express = require("express");
const app = express();
const PORT = process.env.PORT || 4300;
//add our node package, then we create a port with back up for our heroku deploying

//Setting up middleware: app object is instantiated on creation of the Express server.
//Each layer is essentially adding a function that specifically handles something to your flow through the middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Then we create a connection of the exported routes for our apis and html
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
