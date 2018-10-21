var util = require('../util');
var relativePath = util.relativePath;
var query = require(relativePath('./mysql'));
query('select * from users',function(err,results){
    if(!err){
        console.log(results);
    }
});