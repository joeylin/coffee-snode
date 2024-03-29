// Generated by CoffeeScript 1.4.0
var dao;

dao = require('../models/BlogDao');

exports.get = function(req, res) {
  return dao.findOne({
    id: req.params.id,
    del_status: 0
  }, function(err, blog) {
    return dao.all({
      del_status: 0
    }, {
      only: ['id', 'title'],
      order: ['id']
    }, function(err, blogs) {
      if (typeof blog === 'undefined' || typeof blogs === 'undefined') {
        return res.render('error/404');
      } else {
        return res.render('blog', {
          title: 'snode',
          blog: blog,
          blogs: blogs
        });
      }
    });
  });
};
