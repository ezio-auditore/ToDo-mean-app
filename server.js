var express = require("express");
var path = require('path');
var app = express();
var port = process.env.PORT || 3000 ;

/*app.all('/*',function(req,res){

	res.send('\
		<!DOCTYPE html>\
		<html>\
			<head>\
				<title>ToDO App</title>\
				<base href ="/">\
			</head>\
			<body>\
			<div ng-view></div>\
				<script src = "bundle.js"  ></script>\
			</body>\
		</html>\
		');
});*/
app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(port,function(){
	console.log('Server runing on port :'+port);
});