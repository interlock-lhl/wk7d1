module.exports = function(bookshelf) {
  var User = bookshelf.Model.extend({
    tableName: 'users'
  });
  return User;
};
