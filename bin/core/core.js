const fs = require('fs');
const boxen = require('boxen');
const chalk = require('chalk');
const simpleGit = require('simple-git');
const git = simpleGit();

function craftBot(argv) {
    console.info(chalk.hex('#5765f2')(`Crafting the awesome bot ${chalk.hex('#619937')(argv.appName)}...`))

    git.clone('git@github.com:benoitlamonica/easydiscordbot.git').then(r => {

        fs.rename('easydiscordbot', argv.appName, (err) => {
            if (err) {
                throw err;
            }
            fs.rmdir(`${argv.appName}/.git`, { recursive: true }, (err) => {
                if (err) {
                    throw err;
                }
            });

            fs.writeFile(`${argv.appName}/README.md`, `# Tell the world how your ${argv.appName} works !`, (err) => {
                if (err) {
                    throw err;
                }
                console.info(boxen(chalk.hex('#5765f2')(`Bot ${chalk.hex('#619937')(argv.appName)} crafted !`),
                    {
                        padding: 1,
                        borderColor: 'green',
                        dimBorder: true
                    }))
            })
        })
    })
}

exports.craftBot = craftBot