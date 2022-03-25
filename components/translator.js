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

        // Time Regex
        const timeRegex = /(?<=\d{1,2}):(?=\d{2})/g;

        let changedWords = [];

        for (const dictionary of dictionaries) {
            for (const property in dictionary) {
                const british = dictionary[property];
                const britishCap = british[0].toUpperCase() + british.slice(1);

                // Use originalString to look for any changes to string
                const originalString = string;

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
                if (originalString !== string) {
                    changedWords.push(british);
                }
            }
        }
        return { string: string, highlight: changedWords };
    }

    britishToAmerican(string) {
        const dictionaries = [
            britishOnly,
            americanToBritishSpelling,
            americanToBritishTitles,
        ];

        // Time Regex
        const timeRegex = /(?<=\d{1,2}).(?=\d{2})/g;

        let changedWords = [];

        for (const dictionary of dictionaries) {
            for (const property in dictionary) {
                // Dictionary Regex
                const britishOnlyRegex = new RegExp(`\\b${property}\\b`, 'g');
                const britishOnlyCapitalizedRegex = new RegExp(
                    `\\b${property}\\b`,
                    'ig'
                );
                const britishTitleRegex = new RegExp(
                    `\\b${dictionary[property]}(?!\S)`,
                    'g'
                );
                const britishTitleCapitalizedRegex = new RegExp(
                    `\\b${dictionary[property]}(?!\S)`,
                    'ig'
                );
                const britishSpellingRegex = new RegExp(
                    `\\b${dictionary[property]}\\b`,
                    'g'
                );
                const britishSpellingCapitalizedRegex = new RegExp(
                    `\\b${dictionary[property]}\\b`,
                    'ig'
                );

                // Use originalString to look for any changes to string
                const originalString = string;

                let british = null;
                let english = null;

                // If array contains word already changed that matches regex of new word to be changed, skip

                if (dictionary === britishOnly) {
                    english = dictionary[property];
                    const englishCap =
                        english[0].toUpperCase() + english.slice(1);

                    if (britishOnlyRegex.test(string)) {
                        british = britishOnlyRegex;
                    } else {
                        british = britishOnlyCapitalizedRegex;
                        english = englishCap;
                    }
                } else {
                    english = property;
                    const englishCap =
                        english[0].toUpperCase() + english.slice(1);

                    if (dictionary === americanToBritishTitles) {
                        if (britishTitleRegex.test(string)) {
                            british = britishTitleRegex;
                        } else {
                            british = britishTitleCapitalizedRegex;
                            english = englishCap;
                        }
                    } else {
                        if (britishSpellingRegex.test(string)) {
                            british = britishSpellingRegex;
                        } else {
                            british = britishSpellingCapitalizedRegex;
                            english = englishCap;
                        }
                    }
                }
                // Check for time
                if (timeRegex.test(string)) {
                    string = string.replace(string.match(timeRegex)[0], ':');
                }

                // Check that previously changed word not being changed again
                if (!changedWords.includes(english)) {
                    // Replace english words & phrases with british
                    string = string.replace(british, english);
                }

                if (originalString !== string) {
                    changedWords.push(english);
                }
            }
        }
        // console.log(changedWords);
        return { string: string, highlight: changedWords };
    }
}

const translator = new Translator();
const result = translator.americanToBritish('Mangoes are my favorite fruit.');
console.log(result);
module.exports = Translator;
