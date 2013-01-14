html ->
    div style="height: 100%; background: #444; padding: 80px 0; margin: 0; font-size: 14px; line-height: 1.7; font-family: 'Helvetica Neue', Arial, sans-serif; color: #444;"
        div style="margin: 0 auto; width: 580px; background: #FFF; box-shadow: 0 0 10px #333;"
            div style="margin: 0 40px; color: #999; border-bottom: 1px dotted #DDD; padding: 40px 0 30px; font-size: 13px; text-align: center;"
                h2
                    a href="#{baseUrl}", style="color: #009A61; text-decoration: none;", target="_blank", 'Snode社区'
            div style="padding: 30px 40px 40px;", '#{user} 您好，感谢您注册 Snode 社区'
                br
                br
                '请在24小时内点击此链接以完成注册'
                a style="color: #009A61; text-decoration: none;", href="#{verifyUrl}", target="_blank", '#{verifyUrl}'
                br
                br
                'Snode 敬上'
                br
                a style="color: #009A61; text-decoration: none;", href="http://weibo.com/lcm596392912", target="_blank", '新浪微博'
                '·'
                a style="color: #009A61; text-decoration: none;", href="http://t.qq.com/lcm-596392912", target="_blank", '腾讯微博'
            div style="background: #EEE; border-top: 1px solid #DDD; text-align: center; height: 90px; line-height: 90px;"
                a href="#{verifyUrl}", style="padding: 8px 18px; background: #009A61; color: #FFF; text-decoration: none; border-radius: 3px;", target="_blank", '完成注册'
                '&nbsp;'
                a href="#{baseUrl}", style="padding: 8px 18px; background: #009A61; color: #FFF; text-decoration: none; border-radius: 3px;", target="_blank", '访问网站 ➔'
