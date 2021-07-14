const StringUtils = require("../utils/string")

module.exports = {
    gitRepo: 'https://github.com/benoitlamonica/easydiscordbot.git',
    cmdHeader: `// Automaticaly generated on the ${new Date().toLocaleDateString('fr-FR')}`,
    addCmdQuestion: [
        {
            type: 'confirm',
            name: 'isAsync',
            message: 'Should the command be Async ?',
            default: false,
        },
        {
            type: 'confirm',
            name: 'hasArgs',
            message: 'Should the command have Args ?',
            default: false,
        },
        {
            type: 'input',
            name: 'methodName',
            message: 'Name of the method in CommandHandler ?',
            validate(value) {
                if (StringUtils.isCamelCase(value)) {
                    return true
                }
                return 'Method should be in camel case ! (likeThis 🙂)'
            },
            default: 'handlerName',
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Describe your command :',
            default: 'Sample description...',
        }
    ],
    craftBotQuestion: [
        {
            type: 'input',
            name: 'botName',
            message: 'Name of the bot ?',
            default: 'mysuperbot',
        },
        {
            type: 'input',
            name: 'cmdName',
            message: 'What the command to activate the bot should be ? (ex : !bot) :',
            default: '!bot',
        },
        {
            type: 'input',
            name: 'dToken',
            message: 'What\'s your discord token ? :',
            default: 'mydiscordtoken',
        },

    ],
    cmdBody: {
        bodyWithArgs: `module.exports = {
    name: '****',
    description: 'DESC',
    execute: (msg, arg) => {
        new ReponseBot(msg).useCommandHandler('handlerName', {arg: arg});
    }
}`,
        body: `module.exports = {
    name: '****',
    description: 'DESC',
    execute: (msg, arg) => {
        new ReponseBot(msg).useCommandHandler('handlerName');
    }
}`,
        bodyAsync: `module.exports = {
    name: '****',
    description: 'DESC',
    execute: (msg, arg) => {
        new ReponseBot(msg).useCommandHandler('handlerName', {async: true});
    }
}`,
        bodyAsyncWithArgs: `module.exports = {
    name: '****',
    description: 'DESC',
    execute: (msg, arg) => {
        new ReponseBot(msg).useCommandHandler('handlerName', {arg: arg, async: true});
    }
}`,
        require: `const { ReponseBot } = require("../../vendor/config/response")`
    },

    methodTemplate: {
        methodFooter: `\n\n    //--- /!\\ Do not touch this line /!\\

}
    
exports.CommandHandler = CommandHandler;`,

        methodAsync: `methodName = async () => {
        // Logic goes here ...
        return 'Hello command **** !'
    }`,
        methodAsyncWithArg: `methodName = async (arg) => {
        // Logic goes here ...
        return 'Hello command **** !'
    }`,
        methodWithArg: `methodName = (arg) => {
        // Logic goes here ...
        return 'Hello command **** !'
    }`,
        method: `methodName = () => {
        // Logic goes here ...
        return 'Hello command **** !'
    }`,
    }
}