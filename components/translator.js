const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
    americanToBritish(string) {
        const dictionaries = [
            americanOnly,
            americanToBritishSpelling,
            americanToBritishTitles,
        ];

        for (const dictionary of dictionaries) {
            for (const property in dictionary) {
                // String that needs to be replaced cannot have letters before or after
                const english = new RegExp(`\\b${property}\\b`, 'gi');
                const british = dictionary[property];
                string = string.replace(english, british);
            }
        }
        return string;
    }
}

const translator = new Translator();
const result = translator.americanToBritish('Mangoes are my favorite fruit');
console.log(result);
module.exports = Translator;
