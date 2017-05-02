var express = require('express');
 
var server = express();
server.use(express.static(__dirname));
 
var port = 8080;
server.listen(8080, "0.0.0.0", function() {
    console.log('server listening on port ' + port);
});