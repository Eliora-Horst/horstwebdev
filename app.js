var express = require('express')
var bodyParser = require('body-parser')

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

app.get('/poe', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/poe/home-page.html', {root: './public'})
});

app.get('/adams-for-president', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/adams-for-president/public/html/home.html', {root: './public'})
});

app.get('/dhjournal', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/journal/main.html', {root: './public'})
});

app.get('/dhlabreports', function(req, res){
	console.log(res.sendFile)
  res.sendFile('/labs/main.html', {root: './public'})
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


var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);
})