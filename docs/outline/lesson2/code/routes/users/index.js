var uuid = require('node-uuid');
var query = require('../../mysql');
var sqls = require('../../mysql/sql');
var SELECT_USERS_UID = sqls.SELECT_USERS_UID;
var INSERT_USERS_UID = sqls.INSERT_USERS_UID;
var UPDATE_USERS_USERNAME = sqls.UPDATE_USERS_USERNAME;
// 若用户已经存在则不用生成，若用户不存在就生成
// 根据客户端传入的uid进行判断
function createUser(req,res,next){
    var uid = req.body.uid;
    function createUser(){
      uid = uuid.v1();
      query(INSERT_USERS_UID,[uid],function(err){
        if(!err){
          res.send({code:1,msg:'已生成新用户并成功登陆',uid:uid});
        }else{
          res.send({code:0,msg:'服务端错误',err});
        }
      });
    }
    if(!uid){
      //生成新用户
      createUser();
      return;
    }
    var callback = function(err,results){
      if(!err){
        if(results.length === 0){
          createUser();
        }else{
          res.send({code:2,msg:'用户登陆成功'});
        }
      }else{
        res.send({code:0,msg:'服务端错误',err});
      }
    }
    query(SELECT_USERS_UID,[uid],callback);
}
// 修改昵称

function takeName(req,res,next){
    var username = req.body.username;
    var uid = req.body.uid;
    if(!username || !uid){
        res.send({code:0,msg:'没有找到username 或者 uid'});
        return;
    }
    var callback = function(err,results){
        if(err){
            res.send({code:2,msg:'服务器错误',err});
        }else{
            if(results.length === 0){
                res.send({code:0,msg:'没有找到 uid'});
            }else{
                query(UPDATE_USERS_USERNAME,[username,uid],function(err){
                    if(!err){
                        res.send({code:1,msg:'名字修改成功'});
                    }else{
                        res.send({code:2,msg:'服务器错误'});
                    }
                })
            }
        }
    }
    query(SELECT_USERS_UID,[uid],callback);

}
module.exports = {
    createUser:createUser,
    takeName:takeName
}