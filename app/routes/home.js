module.exports = function (app) {

    app.get('/', function (req, res) {

        var info = {'retorno':{'raiva': 0.25,
                                'alegria': 0.40} };

        res.render('home/index', {info : info});
    }); //app.get ('/')

    app.post('/', function (req, res) {

        var item = req.body;

        var toneAnalyzer = new app.infra.ToneAnalyzer();

        toneAnalyzer.analizar(item, function (err, results) {

        });
    }); //app.post('/')

}