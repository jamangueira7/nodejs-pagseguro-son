const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/pay', (req, res) => {

});

app.listen(3000, () => console.log('Express has been started...'));