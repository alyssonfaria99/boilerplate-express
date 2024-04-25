require('dotenv').config();
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use('/public', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    let metodo = req.method
    let caminho = req.path
    let ip = req.ip
    console.log(metodo + ' ' + caminho + ' ' + ' - ' + ip);
    next()
});

app.use(bodyParser.urlencoded({ extended: false }));

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
    next();
}, (req, res) => {
    res.json({ time: req.time });
});

app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word });
})

app.route('/name').get((req, res) => {
    let firstname = req.query.first
    let lastname = req.query.last
    res.json({ name: firstname + ' ' + lastname });
}).post((req, res) => {
    let firstname = req.query.first
    let lastname = req.query.last
    res.json({ name: firstname + ' ' + lastname });
})




































module.exports = app;
