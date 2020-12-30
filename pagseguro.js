const PagSeguro = require('pagseguro-nodejs');

const mode = PagSeguro.MODE_SANDBOX;
const token = '269DDA715C044994B88BE189307D0F9D';

const pag = new PagSeguro({
    email: 'jamjs7@gmail.com',
    token,
    mode
});

pag.currency('BRL');
pag.reference('JOAO123');

module.exports = pag;
