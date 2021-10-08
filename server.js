const express = require('express');
// our module
const moduleToFetch = require('./index');
// our function
const getDatabase = moduleToFetch.getDatabase;

const port = 8000;
const app = express();

// the code line we just added
app.use(express.static('public'));

app.get('/users', async (req, res) => {
  const users = await getDatabase();
  res.json(users);
});

app.listen(port, console.log(`Server started on ${port}`));
