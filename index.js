const express = require("express");
const app = express();
const port = 5050;
const userRouter = require["./routes/users.js"];
const postsRouter = require[];

const users = require('./data/users.js');
const posts = require('./data/posts.js');

app.listen(port,() => {

    console.log(`Server listening on port:${port}.`);

})

/////////// get routes for the different pages//////
app.get("/",(req,res) => {
res.send("Welcome to the first page!");
});

app.get("/about",(req,res) => {
 res.send("About me");
    });
