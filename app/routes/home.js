module.exports = function (app) {

    app.get('/', function (req, res) {

        res.render('home/index', {info : {}});
    }); //app.get ('/')

    app.post('/', function (req, res) {

        var item = req.body;

        var toneAnalyzer = new app.infra.ToneAnalyzer();

        toneAnalyzer.analizar(item, function (err, results) {

            // console.log(JSON.stringify(results));

            if(err){
                item.retorno = false;
            }else {
                item.retorno = true;

                for(var i = 0; i <= 4; i++){

                    var sentimento = results.document_tone.tone_categories[0].tones[i].tone_id;

                    // console.log(sentimento);

                    switch (sentimento){
                        case "anger" :
                                item.raiva = ((results.document_tone.tone_categories[0].tones[i].score) * 100).toFixed(0);
                            break;

                        case "fear" :
                                item.medo = ((results.document_tone.tone_categories[0].tones[i].score) * 100).toFixed(0);
                            break;

                        case "joy" :
                                item.alegria = ((results.document_tone.tone_categories[0].tones[i].score) * 100).toFixed(0);
                            break;

                        case "sadness" :
                                item.tristeza = ((results.document_tone.tone_categories[0].tones[i].score) * 100).toFixed(0);
                            break;

                        case "disgust" :
                                item.disgosto = ((results.document_tone.tone_categories[0].tones[i].score) * 100).toFixed(0);
                            break;
                    }
                }


                // item.medo = ((results.document_tone.tone_categories[0].tones[1].score) * 100).toFixed(0);
                // item.alegria = ((results.document_tone.tone_categories[0].tones[2].score) * 100).toFixed(0);
                // item.tristeza = ((results.document_tone.tone_categories[0].tones[3].score) * 100).toFixed(0);
                // item.disgosto = ((results.document_tone.tone_categories[0].tones[4].score) * 100).toFixed(0);


            }



            res.render('home/index', {info : item});

        });
    }); //app.post('/')

}