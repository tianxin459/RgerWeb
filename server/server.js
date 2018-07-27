var express = require('express');
var app = express();
var fs = require('fs');



app.get('/*', function (req, res) {
    
    res.send(res.req.originalUrl);
  });
  
  app.listen(3000);