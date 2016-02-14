var express = require('express');
var app = express();
var port = process.env.PORT || 3001;

app.get('/',function(req,res){

	res.send("Root folder");
})

app.listen(port,function (){
	console.log("server is running..");
})