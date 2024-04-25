require('dotenv').config();
let express = require('express');
let app = express();

console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    let metodo = req.method
    let caminho = req.path
    let ip = req.ip
    console.log(metodo + ' ' + caminho + ' ' + ' - ' + ip);
    next()
});

app.get('/json', (req, res) => {
    let message = { message: 'Hello json' };
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        message.message = message.message.toUpperCase();
    }
    res.json(message);
}
);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
}, (req, res) => {
    res.json({ time: req.time });
})




































module.exports = app;
