const chalk = require('chalk');
const log = console.log;
day1chalkExample = {

    chalkDisplay: function () {
        log(chalk.white.bgCyan("Welocme to NodeJs learning"));
        log(chalk.white.bgGreen.bold("Succcess"));
        log(chalk.bgGrey.white(`student list:
        Amol :${'engg'},
        Amit :${'MBA'}    
        `))
    }
}

module.exports = day1chalkExample;

