/*
 * @Author: tao 
 * @Date: 2018-10-23 15:31:07 
 * @Last Modified by: tao
 * @Last Modified time: 2018-10-23 15:37:47
 * @func: 核心方法，返回构造器方法
 */
define(function(){
    // 创建BaWei构造函数
    // 返回BaWei.fn.init的实例
    var BaWei = function(selector){
        return new BaWei.fn.init(selector);
    } 
    // BaWei.fn是BaWei的原型对象
    // 对BaWei的原型对象进行重写
    BaWei.fn = BaWei.prototype = {
        constructor:BaWei,
        /**
         * [字符串中某个字符出现的次数]
         * @param {String} str 
         * @param {String} char
         * @return {Number} [返回char在str中出现的次数] 
         */
        strNum:function(str,char){
            var num = 0
            for(var i = 0;i < str.length;i++){
                if(str[i] === char){
                    num ++;
                }
            }
            return num;
        },
        // 遍历实例对象
        each:function(fn){
            for(var i = 0; i < this.length; i++){
                fn(i,this[i],this);
            }
        },
        // 获取对应的dom节点
        get:function(index){
            return this[index];
        }
    }

    // 编写BaWei.fn.init方法
    BaWei.fn.init = function(selector,context){
        context = context || document;
        context = context.nodeType ? context : context[0];
        // 没有传递选择器字符串则直接返回当前实例；
        if(!selector){
            return this
        }
        if(typeof selector === 'string'){
            if(selector[0] === '<' && selector.length >= 3 && selector[selector.length - 1] === '>'){
                var oDiv = document.createElement('div');
                oDiv.innerHTML = selector;
                this[0] = oDiv.firstElementChild || oDiv.firstChild;
            }else{
                if(selector[0] === '#' && this.strNum(selector,'#') === 1){
                    this[0] = context.getElementById(selector.slice(1));
                }else{
                    var elems = context.querySelectorAll(selector);
                    for(var i = 0;i < elems.length; i++){
                        this[i] = elems[i];
                    }
                }
            }
        }else if(selector.nodeType){
            // 传入dom节点时
            this[0] = selector;
        }else if(selector instanceof BaWei){
            // 传入实例对象的时候
            return selector;
        }else{
            return this;
        }
    } 
    // 设置BaWei.fn.init的原型对象
    BaWei.fn.init.prototype = BaWei.fn;

    // 把对象挂在window对象上
    window.bw = window.BaWei = BaWei;
    return BaiWei;
});
