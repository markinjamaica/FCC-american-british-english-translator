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
        test('Rube Goldberg', () => {
            assert.equal(
                translator.americanToBritish(
                    'Like a high tech Rube Goldberg machine.'
                ),
                'Like a high tech Heath Robinson device.'
            );
        });
        test('play hooky', () => {
            assert.equal(
                translator.americanToBritish(
                    'To play hooky means to skip class or work.'
                ),
                'To bunk off means to skip class or work.'
            );
        });
        test('Mr', () => {
            assert.equal(
                translator.americanToBritish(
                    'No Mr. Bond, I expect you to die.'
                ),
                'No Mr Bond, I expect you to die.'
            );
        });
        test('Dr.', () => {
            assert.equal(
                translator.americanToBritish('Dr. Grosh will see you now.'),
                'Dr Grosh will see you now.'
            );
        });
        test('12:15', () => {
            assert.equal(
                translator.americanToBritish('Lunch is at 12:15 today.'),
                'Lunch is at 12.15 today.'
            );
        });
    });

    suite('British to American', () => {
        test('footie', () => {
            assert.equal(
                translator.britishToAmerican(
                    'We watched the footie match for a while.'
                ),
                'We watched the soccer match for a while.'
            );
        });
        test('Paracetamol', () => {
            assert.equal(
                translator.britishToAmerican(
                    'Paracetamol takes up to an hour to work.'
                ),
                'Tylenol takes up to an hour to work.'
            );
        });
        test('caramelise', () => {
            assert.equal(
                translator.britishToAmerican('First, caramelise the onions.'),
                'First, caramelize the onions.'
            );
        });
        test('bank, funfair', () => {
            assert.equal(
                translator.britishToAmerican(
                    'I spent the bank holiday at the funfair.'
                ),
                'I spent the public holiday at the carnival.'
            );
        });
        test('bicky, chippy', () => {
            assert.equal(
                translator.britishToAmerican(
                    'I had a bicky then went to the chippy.'
                ),
                'I had a cookie then went to the fish-and-chip shop.'
            );
        });
        test('bit and bobs, bum bag', () => {
            assert.equal(
                translator.britishToAmerican(
                    "I've just got bits and bobs in my bum bag."
                ),
                "I've just got odds and ends in my fanny pack."
            );
        });
        test('car boot sale', () => {
            assert.equal(
                translator.britishToAmerican(
                    'The car boot sale at Boxted Airfield was called off.'
                ),
                'The swap meet at Boxted Airfield was called off.'
            );
        });
        // test('footie', () => {
        //     assert.equal(
        //         translator.britishToAmerican(
        //             'We watched the footie match for a while.'
        //         ),
        //         'We watched the soccer match for a while.'
        //     );
        // });
        // test('footie', () => {
        //     assert.equal(
        //         translator.britishToAmerican(
        //             'We watched the footie match for a while.'
        //         ),
        //         'We watched the soccer match for a while.'
        //     );
        // });
        // test('footie', () => {
        //     assert.equal(
        //         translator.britishToAmerican(
        //             'We watched the footie match for a while.'
        //         ),
        //         'We watched the soccer match for a while.'
        //     );
        // });
        // test('footie', () => {
        //     assert.equal(
        //         translator.britishToAmerican(
        //             'We watched the footie match for a while.'
        //         ),
        //         'We watched the soccer match for a while.'
        //     );
        // });
    });
});
