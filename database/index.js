const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
// const db = mongoose.connection;

let repoSchema = mongoose.Schema({
  id: Number,
  login: String,
  repo_url: String,
  stargazers_count: String

});
//html_url is the repo url
// this allows model to be accessed
let Repo = mongoose.model('Repo', repoSchema);

const repoData = (array) => {
  let userRepo = {}; //object for individual repo
  let userRepos = []; // array for all user repos
  for (var i = 0; i < array.length; i++) {
    for (var key in array[i]) {
      userRepo.id = array[i]['owner']['id'];
      userRepo.login = array[i]['owner']['login']
      userRepo.url = array[i]['url'];
      userRepo.stargazers_count = array[i]["stargazers_count"];
    }
    userRepos.push(userRepo);
  }
  return userRepos;
};

//function to save the repos to the db
let save = (repos, callback) => {
  // X format repos
  let formattedRepos = repoData(repos);
  // X test that the repos are formatted
  // X pass sample data (data.json) to "save"

  // X save repos to database

  // provide a way to do stuff AFTER "save"
    // after I'm done saving, run the callback

  // insert repos into database
  Repo.insertMany(formattedRepos, function (err) {
    if (err)  {
      return console.log(err);
    } else  {
      callback('complete!');
    }
  })

}
let data = require('../data.json');

console.log(save(data, function() {console.log('complete')} ));

//save some repos to the database and then console log "complete!"

// // getting-started.js
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

module.exports.save = save;