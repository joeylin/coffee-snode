// Generated by CoffeeScript 1.4.0
var Blog, BlogTags, FastLegS, FastLegSBase, config, dateUtil;

FastLegSBase = require('FastLegS');

FastLegS = new FastLegSBase('mysql');

dateUtil = require('../util/dateUtil');

config = require('../config');

FastLegS.connect(config.db);

Blog = FastLegS.Base.extend({
  tableName: 'blog',
  primaryKey: 'id'
});

BlogTags = FastLegS.Base.extend({
  tableName: 'blog_tags',
  primaryKey: 'id'
});

/*
Blog create
*/


exports.save = function(obj, callback) {
  obj.user_id = 1;
  obj.create_time = dateUtil.time();
  obj.update_time = dateUtil.time();
  return Blog.create(obj, function(err, results) {
    console.log(err || results);
    return callback(err, results);
  });
};

/*
Blog findById
*/


exports.findById = function(id, callback) {
  return Blog.find(id, function(err, results) {
    return callback(err, results);
  });
};