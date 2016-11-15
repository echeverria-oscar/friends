var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
require(path.join(__dirname, 'server/config/mongoose.js'));
require(path.join(__dirname, 'server/config/routes.js'))(app);

app.listen(5000, function(){
  console.log("listening on port 5000");
});
