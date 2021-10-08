const express = require('express');
// our module
const moduleToFetch = require('./index');
// our function
const getDatabase = moduleToFetch.getDatabase;

const port = 8000;
const app = express();

// this last command will log a message on your terminal when you do `npm start`
app.listen(port, console.log(`Server started on ${port}`));
