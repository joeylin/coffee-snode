// Generated by CoffeeScript 1.4.0
/*
  mailUtil
*/

var config, email, fs, message, server;

email = require('emailjs/email');

config = require('../config');

fs = require('fs');

server = email.server.connect(config.email);

message = {
  text: "i hope this works",
  from: "q596392912@126.com",
  to: "596392912@qq.com",
  subject: "testing emailjs",
  attachment: [
    {
      data: "<html>i <i>hope</i> this works!</html>",
      alternative: true
    }
  ]
};

exports.sendSignup = function(user, code) {
  var actual, baseUrl, fn, path, str, verifyUrl;
  path = __dirname + '/../../views/mail_template/signup_send.coffee';
  str = fs.readFileSync(path, 'utf8');
  fn = jade.compile(str, {
    filename: path,
    pretty: true
  });
  baseUrl = config.domain;
  verifyUrl = baseUrl + '/finish?code=' + code;
  actual = fn({
    user: user.nick_name,
    baseUrl: baseUrl,
    verifyUrl: verifyUrl
  });
  message.to = user.email;
  message.text = "欢迎加Snode社区";
  message.subject = "欢迎加Snode社区";
  message.attachment[0].data = actual.trim();
  return server.send(message, function(err, message) {
    return console.log(err || message);
  });
};

exports.emailUrl = function(mail) {
  var url;
  url = 'http://';
  if (mail.indexOf('mail') !== -1) {
    url += mail.substr(mail.indexOf('@') + 1, mail.length);
  } else {
    url += 'mail.' + mail.substr(mail.indexOf('@') + 1, mail.length);
  }
  return url;
};