var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
	multer   	= require("multer"),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

router.post('/uploadImage', multer({dest: "./uploads/"}).array("uploads", 12), function(req, res){
	res.send(req.files);
});


app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});