var express = require('express');

var app = express();

app.get("/",function(req,res){
    console.log('ip',req.ip)
    res.end("Your IP address is " + req.ip);
    
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port number" + PORT);
})