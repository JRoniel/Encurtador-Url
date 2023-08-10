const urlEncoded = require('../middlewares/urlEncoded');

module.exports = (app) => {
    app.get('/', (req, res) => {
        console.log('GET /');
        res.render('index');
    });

    app.post('/encoder', (req, res) => {
        console.log('POST /encoder');
        console.log('req.body:', req.body);
        urlEncoded.encode(req, res); 
    });
};
