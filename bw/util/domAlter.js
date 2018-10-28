/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-10-26 22:20:51 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-10-28 14:33:12
 */
define(['core'],function(BaWei){
    /**
     * [操作标签中的innerHTML]
     * @param {String | undefined}
     * @return {undefined | String}
     */
    BaWei.fn.html = function(content){
        if(content){
            this.each(function(key,value){
                value.innerHTML = content;
            });
            return this;
        }else{
            return this[0].innerHTML;
        }
    }
    /**
     * [操作css样式]
     * @param {String} propName [设置或者获取的css属性名]
     * @param {String} propValue [设置属性名对应的属性值]
     * @return {Objct | String} [返回对应的实例或者属性值]
     */
    BaWei.fn.css = function(propName,propValue){
        if(!propValue){
            return getComputedStyle(this[0])[propName];
        }else{
            this.each(function(key,value){
                value.style[propName] = propValue;
            });
            return this;
        }
    }
    /**
     * @param {String} [要操作的html的属性名]
     * @param {String} [要操作的html的属性值]
     * @return {Object | String} [返回对应的属性值]
     */
    BaWei.fn.attr = function(attrName,attrValue){
        if(!attrValue){
            return this[0].getAttribute(attrName);
        }else{
            this.each(function(key,value){
                value.setAttribute(attrName,attrValue);
            });
            return this;
        }
    }
    /**
     * @param {Document | BaWei} [dom节点或者BaWei实例]
     * @return {BaWei} [返回BaWei实例]
     */
    BaWei.fn.append = function(dom){
        if(dom.nodeType){
            this.each(function(key,value){
                value.appendChild(dom);
            })
        }else if(dom instanceof BaWei){
            this.each(function(key,value){
                value.appendChild(dom[0]);
            })
        }
        return this;
    }
    /**
     * @param {Document | BaWei} [dom节点或者BaWei实例]
     * @return {BaWei} [返回BaWei实例]
     */
    BaWei.fn.prepend = function(dom){
        if(dom.nodeType){
            this.each(function(key,value){
                value.insertBefore(value.firstElementChild,dom);
            })
        }else if(dom instanceof BaWei){
            this.each(function(key,value){
                value.insertBefore(value.firstElementChild,dom[0]);
            })
        }
        return this;
    }
    /**
     * [删除节点] 
     * @return {BaWei} [返回被删除的dom节点实例]
     */
    BaWei.fn.remove = function(){
        this.each(function(key,value){
            BaWei(value).parent().get(0).removeChild(value);
        });
        return this;
    }
});