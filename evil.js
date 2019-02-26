'use strict';
const express = require('express');
const app = express();

// key value pair "database"
const db = [];

app.use(express.static('static'));

app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.get('/hello', function (req, res) {
  if (db.length > 0) {
    res.send(`<html><body>I've seen you before! <br>${JSON.stringify(db)}</body></html>`);
  } else {
    res.send('Hello new one!');
  }
});

app.get('/set', function (req, res) {
  //  read query parametrs key and val
  const key = req.query.key;
  const val = req.query.val;

  db.push({key: key, val: val});

  console.log(`storing... ${key},${val} in database`);
  res.send(`<html><body>YAY! We set ${key}=${val}<p><a href="/">Go home!</a></p></body></html>`);
});
 
app.listen(3001);
console.log('http://evil.lvh.me:3001/');
