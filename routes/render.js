module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('index');
    });

    app.post('/encoder', (req, res) => {
        res.render('dashboard');
    })

}