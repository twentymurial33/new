var express = require("express");
var bodyParser= require ("body-parser");
var app= express();
var morgan= require("morgan");

//configure app

app.use(morgan('dev'));

//body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

//DATABASE setup 
// var mongoose= require ('mongoose');
// mongoose.connect();

//Handle the connection event

