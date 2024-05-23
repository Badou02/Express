const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); // Si vous utilisez un moteur de template
    // res.sendFile('index.html'); // Si vous utilisez simplement des fichiers HTML
});

router.get('/services', (req, res) => {
    res.render('services');
    // res.sendFile('services.html');
});

router.get('/contact', (req, res) => {
    res.render('contact');
    // res.sendFile('contact.html');
});

module.exports = router;
