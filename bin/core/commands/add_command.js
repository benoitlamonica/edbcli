const fs = require('fs');
const Utils = require('../../utils/utils');
const data = require('../../data');
const inquirer = require('inquirer');



function addCommand(cmdName) {
    inquirer
        .prompt(data.addCmdQuestion)
        .then((answers) => {
            let cmdBody = Utils.setCmdBody(answers, cmdName);
            let goodFile = data.cmdHeader + '\n\n' + data.cmdBody.require + '\n\n' + cmdBody;

            let methodBody = Utils.setMethodBody(answers, cmdName);

            fs.writeFile(`./commands/content/${cmdName}.js`, goodFile, (err) => {
                if (err) { console.error(err); return }
            });

            fs.readFile('./commands/index.js', 'utf8', (err, file) => {
                if (err) { console.error(err); return }
                let newFile = Utils.formatCmdObj(file, cmdName);
                fs.writeFile('./commands/index.js', newFile, (err) => {
                    if (err) { console.error(err); return }
                })
            })
            fs.readFile('./modules/CommandHandler.js', 'utf8', (err, file) => {
                if (err) { console.error(err); return }
                let newFile = Utils.formatCmdHandler(file, methodBody);
                fs.writeFile('./modules/CommandHandler.js', newFile, (err) => {
                    if (err) { console.error(err); return }
                    Utils.boxedMsg('Command', cmdName);
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

module.exports = addCommand;
