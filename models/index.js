var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'jamessapara',
    // password : 'your_database_password',
    database : 'clocktower2_development',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports = {
  User: require('./user')(bookshelf)
  // TimeEntry: require('./time_entry')(bookshelf)
};
