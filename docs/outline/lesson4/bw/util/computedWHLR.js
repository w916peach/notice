/*
 * @Author: tao 
 * @Date: 2018-10-23 15:32:07 
 * @Last Modified by: tao
 * @Last Modified time: 2018-10-23 15:42:34
 * @func: 获取元素的宽高和位置
 */

define(['core'],function(BaWei){
    BaWei.fn.innerWidth = function(){
        var oStyle = getComputedStyle(this[0]);
        var bordL = parseFloat(oStyle.borderLeft);
        var bordR = parseFloat(oStyle.borderRight);
        return this[0].offsetWidth - bordL - bordR;
    };
    BaWei.fn.innerHeight = function(){
        var oStyle = getComputedStyle(this[0]);
        var bordT = parseFloat(oStyle.borderTop);
        var bordB = parseFloat(oStyle.borderBottom);
        return this[0].offsetHeight - bordT - bordB;
    };
    // 获取元素的宽度  false content+padding+border true content+padding+border+margin
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
    BaWei.fn.outerHeight= function(deep){
        if(!deep){
            return this[0].offsetHeight;
        }else{
            var oStyle = getComputedStyle(this[0]);
            var marginT = parseFloat(oStyle.marginTop);
            var marginB = parseFloat(oStyle.marginBottom);
            return this[0].offsetHeight + marginT + marginB;
        }
    }
});
