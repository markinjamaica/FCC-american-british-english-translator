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
                const timeRegex = /(?<=\d{1,2}):(?=\d{2})/g;

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

                // Replace english words & phrases with british
                string = string.replace(english, british);
                // Check for capitalized letter
                string = string.replace(englishCap, britishCap);
                // Check for time
                if (timeRegex.test(string)) {
                    string = string.replace(string.match(timeRegex)[0], '.');
                }
            }
        }
        return string;
    }
}

// const translator = new Translator();
// const result = translator.americanToBritish('Lunch is at 12:15 today.');
// console.log(result);
module.exports = Translator;
