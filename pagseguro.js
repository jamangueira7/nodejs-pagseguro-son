const PagSeguro = require('pagseguro-nodejs');

const pag = new PagSeguro({
    email: 'jamjs7@gmail.com',
    token: '269DDA715C044994B88BE189307D0F9D',
    mode: process.env.NODE_ENV === 'development' ? PagSeguro.MODE_SANDBOX : PagSeguro.MODE_PAYMENT,
});

pag.currency('BRL');
pag.reference('JOAO123');

module.exports = pag;
