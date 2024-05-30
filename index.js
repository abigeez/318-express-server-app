const http = require("http");

.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type, text/html");
    res.write('Hello World');
    res.end();

}).listen(3000, () => {
    console.log('server GOOD')
}
)