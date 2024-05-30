const express = require("express");
const app = express();
const port = 5050;

app.listen(port,() => {

    console.log(`Server listening on port:${port}.`);

})


app.get("/",(req,res) => {
res.send("Welcome to the first page!");
});

app.get("/about",(req,res) => {
 res.send("About me");
    });
