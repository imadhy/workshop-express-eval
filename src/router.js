const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/bingo', function (req, res) {

    fs.readFile('./src/numbers.txt', "utf8", function read(err, data) {

        numbers = data.split('\n');
        printNumbers = data.split('\n').join(',');

        if (err) {
            throw err;
        }

        if (req.query.mynumbers) {
            receivedNumbers = req.query.mynumbers.split(',');
            let bingo = true;

            if (receivedNumbers.length < 5) {
                bingo = false;
            } else {
                for (let v of receivedNumbers) {
                    if (!numbers.includes(v)) {
                        bingo = false;
                        break;
                    }
                }
            }

            if (bingo) {
                res.send('Bingo');
            } else {
                res.send(`The bingo game is already started, sorry your numbers doesn't match with known numbers ${printNumbers} ; so you can not say Bingo`);
            }

        } else {
            res.send(`The bingo game is already started and known numbers are ${printNumbers}`);
        }
    });
});

module.exports = router;