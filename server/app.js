/*
    后台接口
*/
const express = require('express');
const router = require('./router.js');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : false }));

// 注册路由
app.use(router);

app.listen(3000, () => {
    console.log('running...');
});