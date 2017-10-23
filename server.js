// server.js
// where your node app starts

// init project
var express = require('express');
var getos = require('getos');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

var os;
  
getos(
  (e, o) => {
    if(e) console.log(e);
    os = o.dist +" " +o.release;
  }
);

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (request, response) {
  //console.log('api working');
  
  response.json({
    ipaddress: request.ip,
    Language: request.acceptsLanguages()[0],
    os: os
  });
  
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
