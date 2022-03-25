'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
    const translator = new Translator();

    app.route('/api/translate').post((req, res) => {
        const text = req.body.text;
        const locale = req.body.locale;

        let error = false;
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

        res.json({ translation: translation });
    });
};
