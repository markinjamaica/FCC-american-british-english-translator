const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    suite('American to British', () => {
        test('favorite', () => {
            assert.equal(
                translator.americanToBritish('Mangoes are my favorite fruit.'),
                'Mangoes are my favourite fruit.'
            );
        });
        test('yogurt', () => {
            assert.equal(
                translator.americanToBritish('I ate yogurt for breakfast.'),
                'I ate yoghurt for breakfast.'
            );
        });
        test('condo', () => {
            assert.equal(
                translator.americanToBritish(
                    "We had a party at my friend's condo."
                ),
                "We had a party at my friend's flat."
            );
        });
        test('trashcan', () => {
            assert.equal(
                translator.americanToBritish(
                    'Can you toss this in the trashcan for me?'
                ),
                'Can you toss this in the bin for me?'
            );
        });
        test('parking lot', () => {
            assert.equal(
                translator.americanToBritish('The parking lot was full.'),
                'The car park was full.'
            );
        });
    });
});
