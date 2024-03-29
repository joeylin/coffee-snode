// Generated by CoffeeScript 1.4.0
var cloudPort, cloudServices, env;

cloudPort = process.env.VCAP_APP_PORT;

cloudServices = process.env.VCAP_SERVICES;

exports.port = cloudPort || 3000;

exports.domain = cloudPort ? 'http://snode.hp.af.cm' : 'http://localhost:3000';

if (cloudServices) {
  env = JSON.parse(process.env.VCAP_SERVICES);
  exports.db = env['mysql-5.1'][0]['credentials'];
} else {
  exports.db = {
    url: "localhost",
    port: "3306",
    database: "snode",
    user: "root",
    password: "root"
  };
}

exports.secret = "snode";

exports.maxAge = 1000 * 60 * 60 * 24 * 31;

exports.email = {
  user: "q596392912",
  password: "6693722",
  host: "smtp.126.com",
  ssl: true
};

exports.rss = {
  title: 'Snode：Node.js博客',
  link: 'http://snode.hp.af.cm/',
  language: 'zh-cn',
  description: 'Snode：Node.js博客',
  author: 'admin',
  max_items: 20
};
