const express = require("express");
const app = express();
//register view engine
app.set('view engine', 'ejs');

const port = 5050;
const userRouter = require["./routes/users.js"];
const postsRouter = require["./routes/posts.js"]

const users = require('./data/users.js');
const posts = require('./data/posts.js');

app.listen(port,() => {

    console.log(`Server listening on port:${port}.`);

});
//get route for html home page//

// app.get('/',(req,res)=> {
//     res.sendFile('./views/homepage.html',{root: __dirname});
// })

// get route for the html form, login page
// app.get('/login',(req,res) => {
//     res.sendFile('./views/index.html',{root: __dirname});
// });

//establishing route using view engine for homepage///
app.get('/',(req,res) => {
    res.render('index',{title: 'Homepage'});
});

// route using view engine for login page//

app.get('/login',(req,res) => {
    res.render('login');
})


//redirect for homepage back to root
app.get('/homepage', (req,res) => {
    res.redirect('/');
})

//404 page
app.use((req,res) => {
    res.status(404).send(" 404 - Sorry, can't find that!");
});