const express = require('express');
const router = express.Router();
const bookModel = require('../modules/books');

router.get('/', (req,res) => {
     res.render('index');
});

module.exports = router;