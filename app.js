var express = require('express');
var app = express();


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7'
});




app.get('/', function (req, res) {

connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
    res.send(rows[0]);
  });

  connection.end();


});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
