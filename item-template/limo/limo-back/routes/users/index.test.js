/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-10-21 08:46:09 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-10-21 11:14:20
 * @Func: 测试用户接口的正确性
 */
var createUser = require('./index').createUser;
var takeName = require('./index').takeName;

function testCreateUser(){
    createUser({body:''},{
        send:function(content){
            content = JSON.stringify(content);
            console.log(`未传递uid的测试结果：${content}`);
        }
    });
    createUser({body:{uid:'fghjk-bjnkm-g78'}},{
        send:function(content){
            content = JSON.stringify(content);
            console.log(`uid不存在数据库的测试结果：${content}`);
        }
    });
    
    //40d84e00-d4ca-11e8-8ac1-0371fdf40aeb
    createUser({body:{uid:'40d84e00-d4ca-11e8-8ac1-0371fdf40aeb'}},{
        send:function(content){
            content = JSON.stringify(content);
            console.log(`uid存在数据库的测试结果：${content}`);
        }
    });
}

function testTakeName(){
    takeName({body:{uid:'',username:''}},{send:function(content){
        content = JSON.stringify(content);
        console.log(`参数不正确的测试结果：${content}`);
    }});
    takeName({body:{uid:'fewfew7890-ghujikl',username:''}},{send:function(content){
        content = JSON.stringify(content);
        console.log(`uid不存在的测试结果：${content}`);
    }});
    // 40d84e00-d4ca-11e8-8ac1-0371fdf40aeb
    takeName({body:{uid:'40d84e00-d4ca-11e8-8ac1-0371fdf40aeb',username:'张三'}},{send:function(content){
        content = JSON.stringify(content);
        console.log(`参数正确的测试结果：${content}`);
    }});
}


var oTest = {
    testCreateUser,testTakeName
}
oTest[process.env.TEST_NAME] && oTest[process.env.TEST_NAME]();

