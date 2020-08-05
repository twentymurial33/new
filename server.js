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
var mongoose= require ('mongoose');
mongoose.connect();

//Handle the connection event

//API routes 
var router=express.Router();

router.use(function(req,res,next){
    console.log("Something is happening");
    next();
});

//test the route to make sure everything is working 
router.get("/",function(req,res){
    res.json({message:"hooray welcome to our API!"})
});

//Start the server

app.listen(port);
console.log('We are live')