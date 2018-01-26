let chalk = require('chalk');

const app = require('./src/app');

// port
let port = 3000;

console.log(process.argv[2]);

if (process.argv[2] && !isNaN(process.argv[2])) {
    port = +process.argv[2];
}

// start server here
app.listen(port, function () {
    console.log(chalk.green('Server listening on port : ' + port));
});