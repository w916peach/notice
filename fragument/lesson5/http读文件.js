var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    if (req.url === '/favicon.ico') {
        return;
    }
    switch (pathname) {
        case '/':
            readFile('./src/index.html', function(data) {
                res.end(data);
            })
            break;
        default:
            readFile(path.join(__dirname, 'src', pathname), function(data) {
                res.end(data);
            })
    };
});

function readFile(paths, ck) {
    if (fs.existsSync(paths)) {
        fs.readFile(paths, 'utf8', function(err, data) {
            if (err) {
                throw err;
            };
            ck && ck(data);
        })
    }
}

server.listen(8081, function() {
    console.log('8081 start');
})