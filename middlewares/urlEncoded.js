module.exports = {
  encode: (req, res) => {
    const { url, url_short } = req.body;
    console.log('url:', url);
    console.log('url_short:', url_short);
    console.log(req.body);
    res.render('dashboard', { urlEncoded: url, urlShort: url_short });
  }
};
