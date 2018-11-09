const WebSocket = require('ws');
const WebSocketServer = new WebSocket.Server({
    port:3000
});
let sockets = [];
WebSocketServer.on('connection',(socket)=>{
    // 把新加入的客户端保存起来
    let client = {
        socket,
        date:Date.now(),
        index:sockets.length,
        messages:[],
        newMsg:''
    }
    sockets.push(client);
    console.log(sockets.length);
    // 为每个用户监听浏览器端的消息
    socket.on('message',message=>{
        client.newMsg = message;
        client.messages.push(message);
        sockets.forEach(item=>{
            if(item.socket === socket){return}
            if(item.socket.readyState !== 1){return}
            item.socket.send(message);
        })
    })
})