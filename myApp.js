require('dotenv').config();
let express = require('express');
let app = express();

console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    let message = 'Hello json';
    let mySecret = process.env.MESSAGE_STYLE
    console.log(mySecret);
    if (mySecret === 'uppercase') {
        message = message.toUpperCase();
    }
    console.log({ message });
    res.json({ message: process.env.MESSAGE_STYLE });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});




































module.exports = app;
