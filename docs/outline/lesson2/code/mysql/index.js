var mysql = require('mysql');
var config = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'limo'
}
var pool = mysql.createPool(config)
/**
 * [连接mysql进行查询的方法]
 * @param <String> sql [sql语句]
 * @param <Array> query [查询参数]
 * @param <Function> fn [查询成功的回调函数]
 */
module.exports = function(sql,query,fn){
    fn = query ? fn : query;
    query = query || [];
    var getConnectionCallBack = function(err,con){
        if(err){
            fn(err);
        }else{
            con.query(sql,query,function(err,results){
                con.release();
                queryCallBack(err,results);
            });
        }
    }
    var queryCallBack = function(err,results){
        if(err){
            fn(err);
        }else{
            fn(null,results);
        }
    }
    pool.getConnection(getConnectionCallBack);
}