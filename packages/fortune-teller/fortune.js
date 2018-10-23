const { Language, NlpManager } = require('node-nlp');

const languages = ['en', 'cmn', 'zh'];
const language = new Language();
const manager = new NlpManager({ languages });

// Adds the utterances and intents for the NLP
manager.addDocument('en', 'goodbye for now', 'greetings.bye');
manager.addDocument('en', 'bye bye take care', 'greetings.bye');
manager.addDocument('en', 'okay see you later', 'greetings.bye');
manager.addDocument('en', 'bye for now', 'greetings.bye');
manager.addDocument('en', 'i must go', 'greetings.bye');
manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'howdy', 'greetings.hello');
manager.addDocument('en', 'what is your name', 'conversation.name');
manager.addDocument('en', 'what are you', 'conversation.name');
manager.addDocument('zh', '你叫什么名字', 'conversation.name');

// Train also the NLG
manager.addAnswer('en', 'greetings.bye', 'Till next time');
manager.addAnswer('en', 'greetings.bye', 'see you soon!');
manager.addAnswer('en', 'greetings.hello', 'Hey there!');
manager.addAnswer('en', 'greetings.hello', 'Greetings!');
manager.addAnswer('en', 'conversation.name', "I'm Zoltar, a creepy bot.");
manager.addAnswer('en', 'conversation.name', 'Your worst nightmare');
manager.addAnswer('zh', 'conversation.name', '我叫Zoltar');

// Train and save the model.
manager.train();
manager.save();

module.exports = {
  getFortune: question => {
    const guessedLanguage = language.guessBest(question, languages);
    // HACK: temporary workaround for https://github.com/axa-group/nlp.js/issues/99
    const questionLanguage =
      guessedLanguage === undefined ? 'zh' : guessedLanguage.locale;
    return manager.process(questionLanguage, question);
  }
};
