#! /usr/bin/env node

const yargs = require("yargs");
const { hideBin } = require('yargs/helpers')
const chalk = require('chalk');
const commands = require("./core");


yargs(hideBin(process.argv))
    .command('new [appName]', 'create new Easy discord bot app', (yargs) => {
        return yargs.positional('appName', {
            describe: "Name of the app",
            default: "MySuperBot"
        })

    }, (argv) => {
        commands.craftBot(argv);
    })
    .command('add:command [cmdName]', 'Create new command', (yargs) => {
        return yargs.positional('cmdName', {
            describe: "Name of cmd",
            default: "mycmd"
        })

    }, (argv) => {
        commands.addCommand(argv.cmdName);
    })
    .command('set:dtoken [token]', 'Set the discord token of your bot', (yargs) => {
        return yargs.positional('token', {
            describe: "Name of cmd",
            default: "mycmd"
        })

    }, (argv) => {
        commands.addCommand(argv.token);
    })
    .usage(chalk.hex('#5765f2')('\n Easy Discord bot CLI'))
    .argv


