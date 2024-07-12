const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    // American to British English tests
    test('Translate Mangoes are my favorite fruit. to British English', () => {
        const translator = new Translator();
        const input = 'Mangoes are my favorite fruit.';
        const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        assert.equal(translator.americanToBritish(input), expected);
    });

    test('Translate I ate yogurt for breakfast. to British English', () => {
        const translator = new Translator();
        const input = 'I ate yogurt for breakfast.';
        const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        assert.equal(translator.americanToBritish(input), expected);
    });

    test('Translate We had a party at my friend\'s condo. to British English', () => {
        const translator = new Translator();
        const input = 'We had a party at my friend\'s condo.';
        const expected = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
        assert.equal(translator.americanToBritish(input), expected);
    });

    test('Translate Can you toss this in the trashcan for me? to British English', () => {
        const translator = new Translator();
        const input = 'Can you toss this in the trashcan for me?';
        const expected = 'Can you toss this in the <span class="highlight">bin</span> for me?';
        assert.equal(translator.americanToBritish(input), expected);
    });

    test('Translate The parking lot was full. to British English', () => {
        const translator = new Translator();
        const input = 'The parking lot was full.';
        const expected = 'The <span class="highlight">car park</span> was full.';
        assert.equal(translator.americanToBritish(input), expected);
    });

    test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
        const translator = new Translator();
        const input = 'Like a high tech Rube Goldberg machine.';
        const expected = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
        assert.equal(translator.americanToBritish(input), expected);
    });

    test('Translate To play hooky means to skip class or work. to British English', () => {
        const translator = new Translator();
        const input = 'To play hooky means to skip class or work.';
        const expected = 'To <span class="highlight">bunk off</span> means to skip class or work.';
        assert.equal(translator.americanToBritish(input), expected);
    });

    test('Translate No Mr. Bond, I expect you to die. to British English', () => {
        const translator = new Translator();
        const input = 'No Mr. Bond, I expect you to die.';
        const expected = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
        assert.equal(translator.americanToBritish(input), expected);
    });

    test('Translate Dr. Grosh will see you now. to British English', () => {
        const translator = new Translator();
        const input = 'Dr. Grosh will see you now.';
        const expected = '<span class="highlight">Dr</span> Grosh will see you now.';
        assert.equal(translator.americanToBritish(input), expected);
    });

    test('Translate Lunch is at 12:15 today. to British English', () => {
        const translator = new Translator();
        const input = 'Lunch is at 12:15 today.';
        const expected = 'Lunch is at <span class="highlight">12.15</span> today.';
        assert.equal(translator.americanToBritish(input), expected);
    });

    // British to American English tests
    test('Translate We watched the footie match for a while. to American English', () => {
        const translator = new Translator();
        const input = 'We watched the footie match for a while.';
        const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
        assert.equal(translator.britishToAmerican(input), expected);
    });

    test('Translate Paracetamol takes up to an hour to work. to American English', () => {
        const translator = new Translator();
        const input = 'Paracetamol takes up to an hour to work.';
        const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        assert.equal(translator.britishToAmerican(input), expected);
    });

    test('Translate First, caramelise the onions. to American English', () => {
        const translator = new Translator();
        const input = 'First, caramelise the onions.';
        const expected = 'First, <span class="highlight">caramelize</span> the onions.';
        assert.equal(translator.britishToAmerican(input), expected);
    });

    test('Translate I spent the bank holiday at the funfair. to American English', () => {
        const translator = new Translator();
        const input = 'I spent the bank holiday at the funfair.';
        const expected = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
        assert.equal(translator.britishToAmerican(input), expected);
    });

    test('Translate I had a bicky then went to the chippy. to American English', () => {
        const translator = new Translator();
        const input = 'I had a bicky then went to the chippy.';
        const expected = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
        assert.equal(translator.britishToAmerican(input), expected);
    });

    test('Translate I\'ve just got bits and bobs in my bum bag. to American English', () => {
        const translator = new Translator();
        const input = 'I\'ve just got bits and bobs in my bum bag.';
        const expected = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
        assert.equal(translator.britishToAmerican(input), expected);
    });

    test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
        const translator = new Translator();
        const input = 'The car boot sale at Boxted Airfield was called off.';
        const expected = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
        assert.equal(translator.britishToAmerican(input), expected);
    });

    test('Translate Have you met Mrs Kalyani? to American English', () => {
        const translator = new Translator();
        const input = 'Have you met Mrs Kalyani?';
        const expected = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
        assert.equal(translator.britishToAmerican(input), expected);
    });

    test('Translate Prof Joyner of King\'s College, London. to American English', () => {
        const translator = new Translator();
        const input = 'Prof Joyner of King\'s College, London.';
        const expected = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
        assert.equal(translator.britishToAmerican(input), expected);
    });

    test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
        const translator = new Translator();
        const input = 'Tea time is usually around 4 or 4.30.';
        const expected = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
        assert.equal(translator.britishToAmerican(input), expected);
    });

    // Highlight translation tests
    test('Highlight translation in Mangoes are my favorite fruit.', () => {
        const translator = new Translator();
        const input = 'Mangoes are my favorite fruit.';
        const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        translator.americanToBritish(input); // Perform translation to trigger highlighting
        assert.equal(translator.americanToBritish(input), expected);
    });

    test('Highlight translation in I ate yogurt for breakfast.', () => {
        const translator = new Translator();
        const input = 'I ate yogurt for breakfast.';
        const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        translator.americanToBritish(input); // Perform translation to trigger highlighting
        assert.equal(translator.americanToBritish(input), expected);
    });

    test('Highlight translation in We watched the footie match for a while.', () => {
        const translator = new Translator();
        const input = 'We watched the footie match for a while.';
        const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
        translator.britishToAmerican(input); // Perform translation to trigger highlighting
        assert.equal(translator.britishToAmerican(input), expected);
    });

    test('Highlight translation in I spent the bank holiday at the funfair.', () => {
        const translator = new Translator();
        const input = 'I spent the bank holiday at the funfair.';
        const expected = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
        translator.britishToAmerican(input); // Perform translation to trigger highlighting
        assert.equal(translator.britishToAmerican(input), expected);
    });
});
