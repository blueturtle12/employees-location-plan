const path = require('path');
const port = process.env.PORT || 8080;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist', 'index.html'));
});

// Bodyparser middleware
app.use(bodyParser.json());

app.listen(port);