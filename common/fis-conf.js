fis.config.merge({
	namespace : 'common',
    pack : {
        'static/pkg/common.js' : 'static/lib/*.js'
    }
});
var CONFIG = {
    deploy: {
        receiver: 'http://localhost/receiver.php',
        root: 'D:/xampp/htdocs/'
    }
};

fis.config.merge({
    namespace: 'common',

    // 采用百度的前端模板
    // 语法文档: http://baidufe.github.io/BaiduTemplate/
    tmpl: 'bdtmpl',

    // 部署配置
    deploy: {
        //使用fis release --dest project 来使用这个配置
        project : [
            {
                receiver: CONFIG.deploy.receiver,
                from: '/template',
                to: CONFIG.deploy.root + 'views/',
            },
            {
                receiver: CONFIG.deploy.receiver,
                from: '/static',
                to: CONFIG.deploy.root,
            },
            {
                receiver: CONFIG.deploy.receiver,
                from: '/config',
                to: CONFIG.deploy.root,
            }
        ]
    }
});