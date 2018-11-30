/*
    业务逻辑处理页面
*/
const db = require('./db.js');


// 验证登录
exports.checked = (req, res) => {
    let param = req.body;
    let sql = 'select count(*) as total from user where username=? and password=?';
    let data = [param.username, param.password];
    db.base(sql, data, (result) => {
        if(result[0].total == 1){
            res.send('login success!');
        }else{
            res.send('login failure!');
        }
    });
};


