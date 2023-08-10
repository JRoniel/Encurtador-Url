const express = require('express');
const consign = require('consign');
const path = require('path');

const app = express();
const port = '3000';

app.use(express.json());

consign().include('routes').into(app);

app.use('/public', express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
    console.log(`[LOG-START] servidor rodando em http://localhost:${port}`);
});
