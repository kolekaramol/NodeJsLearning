day1chalk()
{
    const chalk=require('chalk');
const log=console.log;
log(chalk.blue('Welcome'));
log(chalk.white.bgRed.bold('Hello world!'));
log(`Student Marks
Amol : ${chalk.white.bgRedBright.bold('(95 %)')}
Anwar : ${chalk.white.bgGreen.bold('(78 %)')}
`)

}
module.export=day1chalk