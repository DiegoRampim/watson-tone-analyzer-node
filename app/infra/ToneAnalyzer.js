var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({
    username: "5c51bc08-5fd5-4eee-980b-d3004bfca781",
    password: "bq7NdReNXta8",
    version_date: '2016-05-19'
});

var params = {
    // Get the text from the JSON file.
    text: 'Eu estou muito nervoso',
    tones: 'emotion' //Filtro de retornos
};

function ToneAnalyzer() {}

ToneAnalyzer.prototype.analizar = function (params, callback) {
    tone_analyzer.tone(params, callback);
}

module.exports = function () {
    return ToneAnalyzer;
}