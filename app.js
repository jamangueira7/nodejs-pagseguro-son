const express = require('express');
const bodyParser = require('body-parser');
const pgs = require('./pagseguro');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/pay', (req, res) => {
    pgs.sender({
       name: 'João Antônio Mangueira',
       email: 'jamjs7@gmail.com',
       phone: {
           areaCode: '11',
           number: '988898889'
       }
    });

    pgs.addItem({
        id: '10',
        description: 'Payment test',
        amount: '20.00',
        quantity: '1'
    });

    pgs.shipping({
        type: 3
    });

    pgs.checkout((data, response) => {
        if (data) {
            return res.json({ data });
        }

        return res.json({ response });
    });
});

app.listen(3000, () => console.log(`Express has been started... env: ${process.env.NODE_ENV}`));
