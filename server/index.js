const express = require('express');
let app = express();
const getReposByUsername = require('../helpers/github.js');

app.use(express.static(__dirname + '/../client/dist'));

//repos is the endpoint for our post request
app.post('/repos', function (req, res) {
  console.log('this right here works' )
  // This route should take the github username provided
  getReposByUsername(gitHubUsername);
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  res.send('Hello World');
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

