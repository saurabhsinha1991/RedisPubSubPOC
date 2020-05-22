const express = require('express');
const redis = require('redis');
const path = require('path');
const SSE = require('express-sse');
const sse = new SSE([]);

const subscriber = redis.createClient();

const app = express();

app.get('/stream', sse.init);
app.post('/message', () => {
    
})
subscriber.on('message',(channel,message) => {
    console.log("Received data :"+message);
    if (message.length > 0) {
        sse.send(message);
    }
    else {
        sse.send(message);
    }
})

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+'/index3.html'));
})

subscriber.subscribe("user-notify");

app.get('/data',(req,res) => {
    res.status(200).send(['a']);
})

app.listen(3007,() => {
    console.log("server is listening to port 3007");
});