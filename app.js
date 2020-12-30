const express = require('express');
const bodyParser = require('body-parser');
const pgs = require('./pagseguro');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/pay', (req, res) => {
    return res.send('ok');
});

app.listen(3000, () => console.log(`Express has been started... env: ${process.env.NODE_ENV}`));
