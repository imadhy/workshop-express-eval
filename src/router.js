const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/bingo', function (req, res) {
    fs.readFile('./src/numbers.txt', "utf8", function read(err, data) {
        if (err) {
            throw err;
        }
        numbers = data.split('\n').join(',');
        res.send(numbers);
    });
});

module.exports = router;