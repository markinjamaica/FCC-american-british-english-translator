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

    britishToAmerican(string) {
        const dictionaries = [
            britishOnly,
            americanToBritishSpelling,
            americanToBritishTitles,
        ];

        for (const dictionary of dictionaries) {
            for (const property in dictionary) {
                const timeRegex = /(?<=\d{1,2}).(?=\d{2})/g;

                // if britishOnly dictionary, british is property, and english is property value
                if (dictionary === britishOnly) {
                    const english = dictionary[property];
                    const englishCap =
                        english[0].toUpperCase() + english.slice(1);

                    // String that needs to be replaced cannot have letters before or after
                    let british = new RegExp(`\\b${property}\\b`, 'g');
                    let britishCap = new RegExp(`\\b${property}\\b`, 'ig');

                    // Replace english words & phrases with british
                    string = string.replace(british, english);
                    // Check for capitalized letter
                    string = string.replace(britishCap, englishCap);

                    // British is property value, and English is property
                } else {
                    const english = property;
                    const englishCap =
                        english[0].toUpperCase() + english.slice(1);

                    // String that needs to be replaced cannot have letters before or after
                    let british = new RegExp(
                        `\\b${dictionary[property]}\\b`,
                        'g'
                    );
                    let britishCap = new RegExp(
                        `\\b${dictionary[property]}\\b`,
                        'ig'
                    );

                    // If dictionary is titles, ok to end in a period
                    if (dictionary === americanToBritishTitles) {
                        british = new RegExp(
                            `\\b${dictionary[property]}(?!\S)`,
                            'g'
                        );
                        britishCap = new RegExp(
                            `\\b${dictionary[property]}(?!\S)`,
                            'ig'
                        );
                    }

                    // Replace english words & phrases with british
                    string = string.replace(british, english);
                    // Check for capitalized letter
                    string = string.replace(britishCap, englishCap);
                    // Check for time
                    if (timeRegex.test(string)) {
                        string = string.replace(
                            string.match(timeRegex)[0],
                            ':'
                        );
                    }
                }
            }
        }
        return string;
    }
}

// const translator = new Translator();
// const result = translator.britishToAmerican(
//     'We watched the footie match for a while.'
// );
// console.log(result);
module.exports = Translator;
