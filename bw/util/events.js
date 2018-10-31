/*
 * @Author: tao 
 * @Date: 2018-10-27 11:43:47 
 * @Last Modified by: tao
 * @Last Modified time: 2018-10-27 11:48:39
 */
define(['core'],function($){
    $.fn.on = function (type) {
        var str, data, callback, argv = Array.prototype.slice.call(arguments,1);
        argv.forEach((item) => {
            typeof item == "string" ? str = item : item.toString() == "[object Object]" ? data =
                item :
                typeof item == "function" ? callback = item : null;
        });
        function run(e) {
            if (data) {
                e.data = data
            }
            if (str) {
                if (e.target.tagName == str.toUpperCase()) {
                    callback && callback.call(e.target, e)
                    return;
                }

            } else {
                callback && callback.call(this, e);
            }
        }
        if (Object.prototype.toString.call(this) === "[object Array]") {
            this.each((index, item) => {
                item.addEventListener(type, run);
            })
        } else {
            throw new Error('对象不属于数组')
        }
    },
    $.fn.trigger = function (type) {

        if (Object.prototype.toString.call(this) === "[object Array]") {
            this.each((index, item) => {
                var ev = document.createEvent('Events');
                ev.initEvent(type, true, true);
                item.dispatchEvent(ev);
            })
        } else {
            throw new Error('对象不属于数组')
        }

    }

});
