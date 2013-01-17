// Generated by CoffeeScript 1.4.0
var FastLegS, FastLegSBase, User, config;

FastLegSBase = require('FastLegS');

FastLegS = new FastLegSBase('mysql');

config = require('../config');

FastLegS.connect(config.db);

User = FastLegS.Base.extend({
  tableName: 'user_info',
  primaryKey: 'id'
});

/*
User findById
*/


exports.findById = function(id, callback) {
  return User.find(id, function(err, results) {
    return callback(err, results);
  });
};

/*
*/
