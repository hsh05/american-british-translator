const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

// Declare each words collection
const american = Object.keys(americanToBritishSpelling);
const british = Object.values(americanToBritishSpelling);
const onlyFromAmerican = Object.keys(americanOnly);
const onlyToBritish = Object.values(americanOnly);
const onlyFromBritish = Object.keys(britishOnly);
const onlyToAmerican = Object.values(britishOnly);
const americanTitles = Object.keys(americanToBritishTitles);
const britishTitles = Object.values(americanToBritishTitles);

// Replacement function
const replacer = (str, words, replaced, toHighlight = []) => {
    words.forEach((word, i) => {
        const regex = new RegExp(`(?<=^|[.'"\\s])${word}(?=[.'"\\s]|$)`, 'gi');
        str = str.replace(regex, (match) => {
            // Preserve original case
            if (match[0] === match[0].toUpperCase()) {
                return `<span class="highlight">${replaced[i][0].toUpperCase()}${replaced[i].slice(1)}</span>`;
            } else {
                return `<span class="highlight">${replaced[i]}</span>`;
            }
        });
    });

    return str;
};


const replacerClock = (str, sym, replaced) => {
    const regex = new RegExp(`(\\d{1,2})${sym}(\\d{1,2})`, 'g');
    return str.replace(regex, `<span class="highlight">$1${replaced}$2</span>`);
};

class Translator {
    americanToBritish(str) {
        let newStr = str;
        newStr = replacer(newStr, american, british);
        newStr = replacer(newStr, onlyFromAmerican, onlyToBritish);
        newStr = replacer(newStr, americanTitles, britishTitles);
        newStr = replacerClock(newStr, ':', '.');
        return newStr !== str ? newStr : "Everything looks good to me!";
    }

    britishToAmerican(str) {
        let newStr = str;
        newStr = replacer(newStr, british, american);
        newStr = replacer(newStr, onlyFromBritish, onlyToAmerican);
        newStr = replacer(newStr, britishTitles, americanTitles);
        newStr = replacerClock(newStr, '.', ':');
        return newStr !== str ? newStr : "Everything looks good to me!";
    }
}

module.exports = Translator;
