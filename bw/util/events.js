/*
 * @Author: tao 
 * @Date: 2018-10-27 11:43:47 
 * @Last Modified by: tao
 * @Last Modified time: 2018-10-27 11:48:39
 */
define(['core'],function($){
    $.fn.on = function (type) {
        if(typeof arguments[1] === 'function'){
            this.each(function(index,item){
                item.addEventListener(type,arguments[i],false);
            });
        }else if(typeof arguments[1] === 'string' && arguments.length === 3){
            
            //记录事件逻辑
            var cb = arguments[2];
            // 需要委托事件的节点
            var eventDom = $(arguments[1],this[0]);
            // 遍历节点，记录每个节点的事件
            eventDom.each(function(index,item){
                item.index = index;
                if(!(typeof item.events === 'object')){
                    item.events = {};
                }
                if(!(item.events[type] instanceof Array)){
                    item.events[type] = [];
                }
                item.events[type].push(cb);
            })
            // 委托在父元素的事件监听器
            function rootListener(ev){
                // 执行添加的函数
                ev.target.events[type] && ev.target.events[type].forEach(function(item,index){
                    item(ev,ev.target.index);
                });
            }
            if(!this[0].isAddRoot){
                this[0].addEventListener(type,rootListener,false);
                this[0].isAddRoot = true;
            }
            
        }

    };
    $.fn.off = function(type){
        if(type){
            this.each(function(index,item){
                item.events[type] = null;
            })
        }else{
            this.each(function(index,item) {
                item.events = null;
            })
        }
    }

});
