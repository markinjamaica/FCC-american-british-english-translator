const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('Translation with text and locale fields', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
                text: 'Paracetamol takes up to an hour to work.',
                locale: 'british-to-american',
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(
                    res.body.translation,
                    '<span class="highlight">Tylenol</span> takes up to an hour to work.'
                );
                done();
            });
    });
});
