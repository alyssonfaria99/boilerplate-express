let express = require('express');
let app = express();

console.log('Hello World');

app.use('/public', (req, res, next) => {
    express.static(__dirname + '/public;');
    next();
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})




































module.exports = app;
