var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//This function goes before the .get function//
/* Example of Middleware
var logger = function(req, res, next){
	console.log('Logging...');
	next();
}

app.use(logger);
*/

////npm install nodemon -g (install globally) 
////Enter 'nodemon' instead of 'node app'.
////it updates the server without having to restart it.

//View Engine Middleware (npm install ejs --save)
//Create a folder 'views' with 'index.ejs' file.
// Ejs ex:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path (Static resources ex: CSS, Jquery)
app.use(express.static(path.join(__dirname, 'public')))

/*Parsing Ex 1 using an object
var person ={
	name: 'John',
	age: 30
}
*/
/*Parsing Ex 2 using an array*/
var people = [
	{
		name: 'Juan',
		age: 30
	},
	{
		name: 'Juana',
		age: 35
	},
	{
		name: 'Jose',
		age: 24
	}
]

app.get('/', function(req, res){
 	//res.send('Hello!!');
 	//Ex 1: res.json(person);
 	//Ex 2: res.json(people);
 	res.render('index',{
 		title: 'Customers',
 		users: people
 	});
});

app.listen(4000, function(){
	console.log('Server started on Port 4000...');
})