const { Language, NlpManager } = require('node-nlp');
const { getFallbackAnswer, questionTypes } = require('./questions');

const languages = ['en', 'zh'];
const language = new Language();
const manager = new NlpManager({ languages });

questionTypes.forEach(questionType => {
  const { id, lang } = questionType;

  questionType.inputs.forEach(input => {
    manager.addDocument(lang, input, id);
  });

  questionType.outputs.forEach(output => {
    manager.addAnswer(lang, id, output);
  });
});

// Train and save the model.
manager.train();
manager.save();

module.exports = {
  getFortune: async question => {
    const guessedLanguage = language.guessBest(question, languages);
    const response = await manager.process(guessedLanguage.locale, question);
    return response.answer || getFallbackAnswer();
  }
};
