const fs = require('fs');
const Utils = require('../../utils/utils');
const data = require('../../data');


function addCommand(cmdName) {

    let goodFile = data.cmdHeader + '\n\n' + data.cmdBody.require + '\n\n' + data.cmdBody.body.replace('****', cmdName);

    fs.writeFile(`./commands/content/${cmdName}.js`, goodFile, (err) => {
        if (err) { console.error(err); return }
    });

    fs.readFile('./commands/index.js', 'utf8', (err, file) => {
        if (err) { console.error(err); return }
        let newFile = Utils.formatCmdObj(file, cmdName);
        fs.writeFile('./commands/index.js', newFile, (err) => {
            if (err) { console.error(err); return }
            Utils.boxedMsg('Command', cmdName);
        })
    })

}

module.exports = addCommand;
