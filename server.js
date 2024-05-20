 const express = require('express');

 const app = express();

 app.get("/", function(req, res) {
    //console.log(request);
    res.send("<h1>Hello World!</h1>");
 });

app.get("/contact", function(req, res) {
    res.send("Contact me at: paridhi@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("My name is paridhi and I love beer and code.");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>coffe</li><li>code</li><li>beer</li></ul>");
});

 app.listen(3000, function(){
    console.log("Server started on port 3000");
 });
