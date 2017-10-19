const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// This is redirecting to paths
var routes_setter = require('./config/routes.js');
routes_setter(app);





// Server message on terminal window
app.listen(port, function() {
  console.log('Howdy!', port);
});
