const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    suite('American to British', () => {
        test('favorite', () => {
            assert.include(
                translator.americanToBritish('Mangoes are my favorite fruit.'),
                { string: 'Mangoes are my favourite fruit.' }
            );
        });
        test('yogurt', () => {
            assert.include(
                translator.americanToBritish('I ate yogurt for breakfast.'),
                { string: 'I ate yoghurt for breakfast.' }
            );
        });
        test('condo', () => {
            assert.include(
                translator.americanToBritish(
                    "We had a party at my friend's condo."
                ),
                { string: "We had a party at my friend's flat." }
            );
        });
        test('trashcan', () => {
            assert.include(
                translator.americanToBritish(
                    'Can you toss this in the trashcan for me?'
                ),
                { string: 'Can you toss this in the bin for me?' }
            );
        });
        test('parking lot', () => {
            assert.include(
                translator.americanToBritish('The parking lot was full.'),
                { string: 'The car park was full.' }
            );
        });
        test('Rube Goldberg', () => {
            assert.include(
                translator.americanToBritish(
                    'Like a high tech Rube Goldberg machine.'
                ),
                { string: 'Like a high tech Heath Robinson device.' }
            );
        });
        test('play hooky', () => {
            assert.include(
                translator.americanToBritish(
                    'To play hooky means to skip class or work.'
                ),
                { string: 'To bunk off means to skip class or work.' }
            );
        });
        test('Mr', () => {
            assert.include(
                translator.americanToBritish(
                    'No Mr. Bond, I expect you to die.'
                ),
                { string: 'No Mr Bond, I expect you to die.' }
            );
        });
        test('Dr.', () => {
            assert.include(
                translator.americanToBritish('Dr. Grosh will see you now.'),
                { string: 'Dr Grosh will see you now.' }
            );
        });
        test('12:15', () => {
            assert.include(
                translator.americanToBritish('Lunch is at 12:15 today.'),
                { string: 'Lunch is at 12.15 today.' }
            );
        });
    });

    suite('British to American', () => {
        test('footie', () => {
            assert.include(
                translator.britishToAmerican(
                    'We watched the footie match for a while.'
                ),
                { string: 'We watched the soccer match for a while.' }
            );
        });
        test('Paracetamol', () => {
            assert.include(
                translator.britishToAmerican(
                    'Paracetamol takes up to an hour to work.'
                ),
                { string: 'Tylenol takes up to an hour to work.' }
            );
        });
        test('caramelise', () => {
            assert.include(
                translator.britishToAmerican('First, caramelise the onions.'),
                { string: 'First, caramelize the onions.' }
            );
        });
        test('bank, funfair', () => {
            assert.include(
                translator.britishToAmerican(
                    'I spent the bank holiday at the funfair.'
                ),
                { string: 'I spent the public holiday at the carnival.' }
            );
        });
        test('bicky, chippy', () => {
            assert.include(
                translator.britishToAmerican(
                    'I had a bicky then went to the chippy.'
                ),
                {
                    string: 'I had a cookie then went to the fish-and-chip shop.',
                }
            );
        });
        test('bit and bobs, bum bag', () => {
            assert.include(
                translator.britishToAmerican(
                    "I've just got bits and bobs in my bum bag."
                ),
                { string: "I've just got odds and ends in my fanny pack." }
            );
        });
        test('car boot sale', () => {
            assert.include(
                translator.britishToAmerican(
                    'The car boot sale at Boxted Airfield was called off.'
                ),
                { string: 'The swap meet at Boxted Airfield was called off.' }
            );
        });
        test('Mrs', () => {
            assert.include(
                translator.britishToAmerican('Have you met Mrs Kalyani?'),
                { string: 'Have you met Mrs. Kalyani?' }
            );
        });
        test('Prof', () => {
            assert.include(
                translator.britishToAmerican(
                    "Prof Joyner of King's College, London."
                ),
                { string: "Prof. Joyner of King's College, London." }
            );
        });
        test('4.30', () => {
            assert.include(
                translator.britishToAmerican(
                    'Tea time is usually around 4 or 4.30.'
                ),
                { string: 'Tea time is usually around 4 or 4:30.' }
            );
        });
    });
    suite('Highlight Translation', () => {
        test('favorite', () => {
            assert.deepInclude(
                translator.americanToBritish('Mangoes are my favorite fruit.'),
                { highlight: ['favourite'] }
            );
        });
        test('yogurt', () => {
            assert.deepInclude(
                translator.americanToBritish('I ate yogurt for breakfast'),
                { highlight: ['yoghurt'] }
            );
        });
        // test('favorite', () => {
        //     assert.deepInclude(
        //         translator.americanToBritish('Mangoes are my favorite fruit.'),
        //         { highlight: ['favourite'] }
        //     );
        // });
        // test('favorite', () => {
        //     assert.deepInclude(
        //         translator.americanToBritish('Mangoes are my favorite fruit.'),
        //         { highlight: ['favourite'] }
        //     );
        // });
    });
});
