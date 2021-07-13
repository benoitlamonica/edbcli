const boxen = require("boxen");
const chalk = require("chalk");

class Utils {
    static formatCmdObj = (file, cmdName) => {
        let newFile = file.replace(/\}/g, '');
        newFile = newFile.replace(/\n/g, '');
        newFile = newFile.replace(/ /g, "");
        newFile += `,${cmdName}:require('./content/${cmdName}')}`;
        return newFile;
    }

    static boxedMsg = (objCrafted, name) => {
        console.info(boxen(chalk.hex('#5765f2')(`${objCrafted} ${chalk.hex('#619937')(name)} crafted !`), {
            padding: 1,
            borderColor: 'green',
            dimBorder: true
        }));
    }
}

module.exports = Utils;