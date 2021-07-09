#! /usr/bin/env node

const yargs = require("yargs");
const { hideBin } = require('yargs/helpers')
const chalk = require('chalk');
const { craftBot } = require("./core/core");


yargs(hideBin(process.argv))
    .command('create [appName]', 'create new Easy discord bot app', (yargs) => {
        return yargs.positional('appName', {
            describe: "Name of the app",
            default: "MySuperBot"
        })

    }, (argv) => {
        craftBot(argv);
    })
    .usage(chalk.hex('#5765f2')('\n CLI of Easy Discord bot'))
    .argv


