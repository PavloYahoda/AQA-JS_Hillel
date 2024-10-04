import chalk from "chalk";

const log = console.log;
log(chalk.green.bgBlack.bold('Hello everybody!'));
log(chalk.red('I need', chalk.underline.bgBlue('your help') + '!'));
log(chalk.yellowBright("because " + chalk.blue.underline.italic("of ") + "this:"));
log(`
    CPU: ${chalk.red.bold('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
    `);