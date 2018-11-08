define(['core'],function($){
    // 对象转字符
    $.ajax.formsParams = function(data){
        var arr = [];
        for(var prop in data){
            arr.push(prop + "=" + data[prop]);
        }
        return arr.join("&");
    };
    $.ajax = function(options){
        // 处理传入的参数
        options = options || {};
        options.method = options.method.toUpperCase() || 'POST';
        options.url = options.url || '';
        options.async = options.async || true;
        options.type = options.type || 'urlencoded';
        options.data = options.data || null;
        options.success = options.success || function () {};
        options.error = options.error || function () {};
    
        //创建对象
        var xhr = null;
        var params = this.formsParams(options.data);
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest()
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    
        // 连接
        if(options.method == "GET"){
            xhr.open(options.method, options.url + "?"+ params, options.async);
            xhr.send(null)
        } else if(options.method == "POST"){
            xhr.open(options.method,options.url,options.async);
            if (options.type == 'urlencoded'){
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            }else if(options.type == 'json'){
                xhr.setRequestHeader("Content-Type","application/json");
            }
        
            xhr.send(params);
        }
    
        // 处理ajax响应
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if (xhr.status == 200){
                    options.success(xhr.responseText);
                }else{
                    options.error();
                }
            }
        }
    };
    $.jsonp = function(options){
        // 处理传入的参数
        options = options || {};
        options.url = options.url || '';
        options.data = options.data || null;
        options.success = options.success || function () {};
    
        // 记录当前jsonp callback的名字
        this.index = this.index?this.index+1:0;
    
        var hm = document.createElement("script");
            hm.src = options.url + (/\?/.test(options.url) ? '&' : '?') + 
            this.formsParams(options.data)+ '&callback=jsonp' + this.index;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
        window['jsonp' + this.index] = function (res) {
            hm.parentNode.removeChild(hm);
            options.success(res);
        };
    }

})
