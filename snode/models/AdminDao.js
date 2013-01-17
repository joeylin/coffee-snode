// Generated by CoffeeScript 1.4.0
var Admin, FastLegS, FastLegSBase, config;

FastLegSBase = require('FastLegS');

FastLegS = new FastLegSBase('mysql');

config = require('../config');

FastLegS.connect(config.db);

Admin = FastLegS.Base.extend({
  tableName: 'admin',
  primaryKey: 'id'
});

/*
Admin findById
*/


exports.findById = function(id, callback) {
  return Admin.find(id, function(err, results) {
    return callback(err, results);
  });
};

/*
Admin login
*/


exports.login = function(obj, callback) {
  return Admin.find(obj, function(err, results) {
    return callback(err, results);
  });
};