const express = require('express');
const router = express.Router();

router.get('/bingo', function (req, res) {
    res.send('Bingo');
});

module.exports = router;