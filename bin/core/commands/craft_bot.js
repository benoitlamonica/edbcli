const fs = require('fs');
const fsPromises = require('fs').promises;
const chalk = require('chalk');
const { exec } = require("child_process");
const data = require('../../data');
const Utils = require('../../utils/utils');

function craftBot(argv) {
    console.info(chalk.hex('#5765f2')(`Crafting the awesome bot ${chalk.hex('#619937')(argv.appName)}...`))

    fsPromises.mkdir(`./${argv.appName}`, { recursive: true }).then((path) => {

        exec(`git clone ${data.gitRepo} ${argv.appName}`, (error, stdout, stderr) => {

            if (error) {
                console.log(`error: ${error.message}`);
                return;
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
                Utils.boxedMsg('Bot', argv.appName);
            })
        })

    })

}

module.exports = craftBot;