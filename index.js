"use strict";

const fs = require('fs');
const http = require('http');

const staticServe = (req, res) => {
    fs.readFile('./index.html', function(err, data) {
       if (err) {
           res.write('index.html not found');
           return res.end();
       }
       res.statusCode = 200;
       res.write(data);
       return res.end();
   });
};

const httpServer = http.createServer(staticServe);

httpServer.listen(3000);
