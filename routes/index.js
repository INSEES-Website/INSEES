const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    // res.send('hello!! this is express from node js')
    const params = { 'title': 'home' }
    res.render('index', params);
});

router.get('/intern_section', (req, res) => {
    // res.send('hello!! this is express from node js')
    const params = { 'title': 'intern_section' }
    res.render('intern_section', params)
});


module.exports = router;