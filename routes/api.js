'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      const validLocale = ['american-to-british', 'british-to-american'];

      if (text === undefined || !locale) {
        return res.json({ error: 'Required field(s) missing' });
      }
      
      if (text === '') {
        return res.json({ text: text, translation: '', error: 'No text to translate' });
      }

      if (!validLocale.includes(locale)) {
        return res.json({ error: 'Invalid value for locale field' });
      }

      let translatedText = locale === validLocale[0] ? translator.americanToBritish(text) : translator.britishToAmerican(text);

      res.json({ text: text, translation: translatedText });
    });
};
