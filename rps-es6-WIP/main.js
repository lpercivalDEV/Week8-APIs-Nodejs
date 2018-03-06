//Project Name: Node Rock Paper Scissors
//Client Name: Leon Noel
//Author: Lilly Percival
//Dev @ RC in Boston


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
