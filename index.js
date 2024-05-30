const http = require("http");
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type, text/html");
    res.write('Hello World');
    res.end();

});
server.listen(port: 3000,'localhost', () => {
    console.log('listening for request on port 3000');
});