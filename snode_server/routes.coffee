index = require './controllers/index'
upload = require './controllers/upload'
###
signup = require './controllers/signup'
login = require './controllers/login'
user = require './controllers/user'
file = require './controllers/file'
mail = require './controllers/mail'
socket = require './controllers/socket.io'
blog = require './controllers/blog'
demo = require './controllers/demo'
xml = require './controllers/xmlTest'
admin = require './controllers/admin'
###

###
  admin
###
adminLogin = require './controllers/admin/login'
adminBlog = require './controllers/admin/blog'

module.exports = (app) ->
    # 配置session 页面中使用 user 获取
    # app.all '*', index.auth
    # home page
    app.get '/', index.get
    
    app.get '/mail', index.mail
    
    ###
    editor图片上传
    ###
    app.post '/upload/editor', upload.validator, upload.editor
    
    ###
    admin
    ###
    app.get '/admin', adminLogin.get
    app.get '/admin/logout', adminLogin.logout
    app.post '/admin/session', adminLogin.post
    app.all '/admin/*', adminLogin.auth
    app.get '/admin/blog/add', adminBlog.get
    app.post '/admin/blog/add', adminBlog.post

###
    # 注册
    app.get '/signup', signup.get
    app.post '/signup', signup.validator, signup.post
    app.get '/finish', signup.finish

    # 登陆
    app.get '/login', login.get
    app.post '/login', login.validator, login.post
    # 登出
    app.get '/logout', login.logout

    # user
    app.get '/users', user.list

    # blog 相关
    app.get "/blog", blog.get
    app.get "/blog", blog.get

    app.get "/demo", demo.get

    # 上传相关
    app.get '/upload', file.get
    app.post '/upload', file.post
    app.post '/upload/editor', file.validator, file.editor

    # 邮件相关
    app.get '/mail', mail.get
    app.post '/mail', mail.post

    # xml test
    app.get "/xml", xml.get

    # test
    app.get "/test", xml.test
    app.get "/jadetest", xml.jadetest

    # socket.io chat room
    app.get '/socket', socket.index

    # admin
    app.get '/admin', admin.get
    app.all '/admin/*', admin.auth
    app.post '/admin/session', admin.post
###