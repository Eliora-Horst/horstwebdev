var express = require('express')
var bodyParser = require('body-parser')
// var apiKey = require('./apiKey.js')
var googleTranslate = require('google-translate')('AIzaSyDOL93Qn7zhUgimDo-P0PyfQD_tzTd8SWs ')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

// Home Page
app.get('/', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/html/home.html', {root: './public'})
});
// //Lingo App
// app.get('/lingo', function(req, res){
//   res.sendFile('html/lingo.html', {root : './public'});
// });

// app.post('/lingo', function(req, res) {
//   console.log(req.body);
//   googleTranslate.translate(req.body.text, req.body.toLang, function(err, translation) {
//   res.send(translation.translatedText);
//   });
// })
app.get('/adams', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/adams4pres/public/html/home.html', {root: './public'})
});

var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);
})