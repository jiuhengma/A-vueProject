/*
     api 路由模块
    restsful api 
    get        http://localhost:8080/books
    get        http://localhost:8080/books/book
    post       http://localhost:8080/books/book
    get        http://localhost:8080/books/book/1
    put        http://localhost:8080/books/book
    delete     http://localhost:8080/books/book/2
*/

const express = require('express');
const router = express.Router();
const service = require('./service.js');

// 提交表单
router.post('/check', service.checked);


module.exports = router;