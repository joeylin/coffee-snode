// Generated by CoffeeScript 1.4.0
var dao;

dao = require('../models/BlogDao');

exports.get = function(req, res) {
  return dao.findById(req.params.id, function(err, blog) {
    return dao.all(function(err, blogs) {
      return res.render('blog', {
        title: 'snode',
        blog: blog,
        blogs: blogs
      });
    });
  });
};