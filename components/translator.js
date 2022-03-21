const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
    americanToBritish(string) {
        // Loop over each word in string
        const dictionaries = [
            americanOnly,
            americanToBritishSpelling,
            americanToBritishTitles,
        ];

        for (const dictionary of dictionaries) {
            for (const property in dictionary) {
                const english = property;
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
