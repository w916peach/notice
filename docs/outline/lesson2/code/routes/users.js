/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-10-21 11:32:22 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-10-21 11:32:57
 * @func: 根用户相关的接口
 */
var express = require('express');
var router = express.Router();
var userApi = require('./users');
var createUser = userApi.createUser;
var takeName = userApi.takeName;
// 生成用户
router.post('/createUser',createUser);

// 更新用户名

router.post('/takeName',takeName);

module.exports = router;
