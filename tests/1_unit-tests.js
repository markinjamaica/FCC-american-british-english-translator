const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    suite('American to British', () => {
        test('favorite', () => {
            assert.equal(
                translator.americanToBritish('Mangoes are my favorite fruit'),
                'Mangoes are my favourite fruit.'
            );
        });
    });
});
