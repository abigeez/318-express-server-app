const http = require("http");
const server=http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type, text/html");
    res.write('Hello World');
    res.end();

});
server.listen(3000,'local host', () => {
    console.log('listening for request on port 3000');
});