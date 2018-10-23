/*
 * @Author: tao 
 * @Date: 2018-10-23 15:32:07 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-10-23 21:47:05
 * @func: 获取元素的宽高和位置
 */

define(['core'],function(BaWei){
    /**
     * @return {Number} [元素内宽 = content + padding]
     */
    BaWei.fn.innerWidth = function(){
        var oStyle = getComputedStyle(this[0]);
        var bordL = parseFloat(oStyle.borderLeft);
        var bordR = parseFloat(oStyle.borderRight);
        return this[0].offsetWidth - bordL - bordR;
    };
    /**
     * @return {Number} [元素的内高 = content + padding]
     */
    BaWei.fn.innerHeight = function(){
        var oStyle = getComputedStyle(this[0]);
        var bordT = parseFloat(oStyle.borderTop);
        var bordB = parseFloat(oStyle.borderBottom);
        return this[0].offsetHeight - bordT - bordB;
    };
    /**
     * @param {Boolean} [获取元素的宽，是否计算margin]
     * @return {Number} [if true = content+padding+border+margin else content+padding+border]
     */
    BaWei.fn.outerWidth = function(deep){
        if(!deep){
            return this[0].offsetWidth;
        }else{
            var oStyle = getComputedStyle(this[0]);
            var marginL = parseFloat(oStyle.marginLeft);
            var marginR = parseFloat(oStyle.marginRight);
            return this[0].offsetWidth + marginL + marginR;
        }
    };
    /**
     * @param {Boolean} [获取元素的高，是否计算margin]
     * @return {Number} [if true = content+padding+border+margin else content+padding+border]
     */
    BaWei.fn.outerHeight = function(deep){
        if(!deep){
            return this[0].offsetHeight;
        }else{
            var oStyle = getComputedStyle(this[0]);
            var marginT = parseFloat(oStyle.marginTop);
            var marginB = parseFloat(oStyle.marginBottom);
            return this[0].offsetHeight + marginT + marginB;
        }
    };
    /**
     * @return {Object} [表示元素距离父元素的偏移量，目标元素的border外边到其父元素(如果是定位元素，按照定位父级计算)border的内边的距离]
     */
    BaWei.fn.position = function(){
        return {
            left:this[0].offsetLeft,
            top:this[0].offsetTop
        }
    };
    /**
     * @return {Object} [表示元素距离文档的偏移量]
     */
    BaWei.fn.offset = function(){
        var oView = this[0].getBoundingClientRect();
        var vl = oView.left;
        var vt = oView.top;
        var st = document.documentElement.scrollTop || document.body.scrollTop;
        var sl = document.documentElement.scrollLeft || document.body.scrollLeft;
        return {
            left:vl + sl,
            top:vt + st
        }
    }
});
