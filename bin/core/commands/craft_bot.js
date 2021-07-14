const fs = require('fs');
const fsPromises = require('fs').promises;
const { exec } = require("child_process");
const Utils = require('../../utils/utils');
const chalk = require('chalk');
const data = require('../../data');
const inquirer = require('inquirer');

function craftBot(argv) {
    inquirer
        .prompt(data.craftBotQuestion)
        .then((answers) => {
            console.info(chalk.hex('#5765f2')(`Crafting the awesome bot ${chalk.hex('#619937')(answers.botName)}...`))

            fsPromises.mkdir(`./${answers.botName}`, { recursive: true }).then((path) => {

                exec(`git clone ${data.gitRepo} ${answers.botName}`, (error, stdout, stderr) => {

                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }

                    fs.rmdir(`${answers.botName}/.git`, { recursive: true }, (err) => {
                        if (err) {
                            throw err;
                        }
                    });

                    fs.readFile(`${answers.botName}/.env`, 'utf8', (err, file) => {
                        let newFile = file.replace(/botcommand/g, answers.cmdName);
                        newFile = newFile.replace(/yourdiscordtoken/g, answers.dToken);
                        fs.writeFile(`${answers.botName}/.env`, newFile, (err) => {
                            if (err) { console.error(err); return }
                        })
                    });

                    fs.writeFile(`${answers.botName}/README.md`, `# Tell the world how your ${answers.botName} works !`, (err) => {
                        if (err) {
                            throw err;
                        }
                        Utils.boxedMsg('Bot', answers.botName);
                    })
                })

            })
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error(error);
            } else {
                console.error(error);
            }
        });

}

module.exports = craftBot;