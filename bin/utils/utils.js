const boxen = require("boxen");
const chalk = require("chalk");
const data = require('../data');

class Utils {

    static isCamelCase = (str) => {
        return /^([a-z]+)(([A-Z]([a-z]+))+)$/.test(str) && !str.includes('_')
    }

    static formatCmdObj = (file, cmdName) => {
        let newFile = file.replace(/\}/g, '');
        newFile = newFile.replace(/\n/g, '');
        newFile = newFile.replace(/ /g, "");
        newFile += `,${cmdName}:require('./content/${cmdName}')}`;
        return newFile;
    }

    static formatCmdHandler = (file, methodBody) => {
        let posEnd = file.indexOf('//---');
        let newFile = file.slice(0, posEnd);
        newFile += `${methodBody} ${data.methodTemplate.methodFooter}`;
        return newFile;
    }

    static boxedMsg = (objCrafted, name) => {
        console.info(boxen(chalk.hex('#5765f2')(`${objCrafted} ${chalk.hex('#619937')(name)} crafted !`), {
            padding: 1,
            borderColor: 'green',
            dimBorder: true
        }));
    }

    static setCmdBody = (answers, cmdName) => {
        let cmdBody = answers.isAsync ?
            (answers.hasArgs ? data.cmdBody.bodyAsyncWithArgs : data.cmdBody.bodyAsync)
            :
            (answers.hasArgs ? data.cmdBody.bodyWithArgs : data.cmdBody.body);
        cmdBody = cmdBody.replace('handlerName', answers.methodName);
        cmdBody = cmdBody.replace('DESC', answers.desc);
        cmdBody = cmdBody.replace('****', cmdName);
        return cmdBody;
    }

    static setMethodBody = (answers, cmdName) => {
        let methodBody = answers.isAsync ?
            (answers.hasArgs ? data.methodTemplate.methodAsyncWithArg : data.methodTemplate.methodAsync)
            :
            (answers.hasArgs ? data.methodTemplate.methodWithArg : data.methodTemplate.method);
        methodBody = methodBody.replace('methodName', answers.methodName);
        methodBody = methodBody.replace('****', cmdName);
        return methodBody;
    }
}

module.exports = Utils;