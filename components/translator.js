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
                const british = dictionary[property];
                const britishCap = british[0].toUpperCase() + british.slice(1);

                // String that needs to be replaced cannot have letters before or after
                let english = new RegExp(`\\b${property}\\b`, 'g');
                let englishCap = new RegExp(`\\b${property}\\b`, 'ig');

                // If dictionary is titles, ok to end in a period
                if (dictionary === americanToBritishTitles) {
                    english = new RegExp(`\\b${property}(?!\S)`, 'g');
                    englishCap = new RegExp(`\\b${property}(?!\S)`, 'ig');
                }

                string = string.replace(english, british);
                // Check for capitalized letter
                string = string.replace(englishCap, britishCap);
            }
        }
        return string;
    }
}

// const translator = new Translator();
// const result = translator.americanToBritish(
//     'No Mr. Bond, I expect you to die.'
// );
// console.log(result);
module.exports = Translator;
