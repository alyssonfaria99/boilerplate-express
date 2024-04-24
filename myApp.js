require('dotenv').config();
let express = require('express');
let app = express();

console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    const mySecret = process.env['MESSAGE_STYLE'];
    let message = "Hello json"
    if (mySecret === 'uppercase' && mySecret.toLowerCase() === 'uppercase') {
        message = message.toUpperCase()
    }
    res.json({ message });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});




































module.exports = app;
