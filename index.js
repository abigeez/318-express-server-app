const express = require("express");
const app = express();
const port = 5050;
const userRouter = require["./routes/users.js"];
const postsRouter = require["./routes/posts.js"]

const users = require('./data/users.js');
const posts = require('./data/posts.js');

app.listen(port,() => {

    console.log(`Server listening on port:${port}.`);

});
app.get('/',(req,res)=> {
    res.send('Welcome to the Homepage!');
})


// get route for the html form, login page
app.get('/login',(req,res) => {
    res.sendFile('./views/index.html',{root: __dirname});
});
