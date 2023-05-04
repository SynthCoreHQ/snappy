import chalk from 'chalk';
import moment from 'moment';

class Logger {
    #log(level, message) {
        const t = moment().format('hh:mm:ss');
        const greyBold = chalk.grey.bold;

        const o = [
            level,
            greyBold('|'),
            greyBold(t),
            greyBold('|'),
            chalk.white(message),
        ];

        console.log(o.join(' '));
    }

    info(msg) {
        const l = chalk.blueBright.bold('INFO ');

        this.#log(l, msg);
    }
    warn(msg) {
        const l = chalk.yellowBright.bold('WARN ');

        this.#log(l, msg);
    }
    error(msg) {
        const l = chalk.bgRed.bold('ERROR');

        this.#log(l, msg);
    }
}

export { Logger };
