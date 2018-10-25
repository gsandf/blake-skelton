const { Language, NlpManager } = require('node-nlp');
const path = require('path');
const pathExists = require('path-exists');
const player = require('play-sound')();

const { getFallbackAnswer, questionTypes } = require('./questions');

const languages = ['en', 'zh'];
const language = new Language();
const manager = new NlpManager({ languages });

const trainedModelFile = path.resolve(__dirname, 'model.nlp');

if (pathExists.sync(trainedModelFile)) {
  console.log('using previously created model');
  manager.load(trainedModelFile);
} else {
  console.log('creating new model');

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
}

module.exports = {
  getFortune: async question => {
    const guessedLanguage = language.guessBest(question, languages);
    const intent = await manager.process(guessedLanguage.locale, question);
    const response = intent.answer || getFallbackAnswer();
    const audioFilePath = `${path.resolve(__dirname, 'audio', response)}.wav`;
    let played = false;

    if (await pathExists(audioFilePath)) {
      player.play(audioFilePath);
      played = true;
    }

    return { played, response };
  }
};
