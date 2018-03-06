//Project Name:
//Client Name:
//Author: Lilly Percival
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
//
// We need rock paper scissors using ES6 JavaScript - no jquery!
// We need to put inline js in the html file because that is the only file
    //..the server has been given permission to read
//
//
//
//
//
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///

    const http = require('http');
    const fs = require('fs');
    http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    });
    }).listen(8000);
