var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({

    username: process.env.USER_TONE_ANALYZER,
    password: process.env.PASS_TONE_ANALYZER,
    version_date: '2016-05-19'

});

// var params = {'text': 'Eu estou muito nervoso', 'tones': 'emotion'};

function ToneAnalyzer() {}

ToneAnalyzer.prototype.analizar = function (item, callback) {
    tone_analyzer.tone({text: item.txtEntrada, tones: 'emotion'}, callback);
}

module.exports = function () {
    return ToneAnalyzer;
}