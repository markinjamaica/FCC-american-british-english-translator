'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
    const translator = new Translator();

    app.route('/api/translate').post((req, res) => {
        if (req.body.text === '') {
            return res.json({ error: 'No text to translate' });
        }
        if (!req.body.text || !req.body.locale) {
            return res.json({ error: 'Required field(s) missing' });
        }

        const text = req.body.text;
        const locale = req.body.locale;

        let translationObj;

        if (locale === 'american-to-british') {
            translationObj = translator.americanToBritish(text);
        } else if (locale === 'british-to-american') {
            translationObj = translator.britishToAmerican(text);
        } else {
            return res.json({ error: 'Invalid value for locale field' });
        }

        let translation = translationObj.string;

        for (const translatedWords of translationObj.highlight) {
            translation = translation.replace(
                translatedWords,
                `<span class="highlight">${translatedWords}</span>`
            );
        }

        if (translation === text) {
            translation = 'Everything looks good to me!';
        }

        res.json({ translation: translation });
    });
};
