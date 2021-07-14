module.exports = {
    gitRepo: 'https://github.com/benoitlamonica/easydiscordbot.git',
    cmdHeader: `// Automaticaly generated on the ${new Date().toLocaleDateString('fr-FR')}`,
    cmdBody: {
        bodyWithArgs: `module.exports = {
    name: '****',
    description: 'Sample description',
    execute: (msg, arg) => {
        new ReponseBot(msg).useCommandHandler('handlerName', {arg: arg});
    }
}`,
        body: `module.exports = {
    name: '****',
    description: 'Sample description',
    execute: (msg, arg) => {
        new ReponseBot(msg).useCommandHandler('handlerName');
    }
}`,
        bodyAsync: `module.exports = {
    name: '****',
    description: 'Sample description',
    execute: (msg, arg) => {
        new ReponseBot(msg).useCommandHandler('handlerName', {async: true});
    }
}`,
        bodyAsyncWithArgs: `module.exports = {
    name: '****',
    description: 'Sample description',
    execute: (msg, arg) => {
        new ReponseBot(msg).useCommandHandler('handlerName', {arg: arg, async: true});
    }
}`,
        require: `const { ReponseBot } = require("../../vendor/config/response")`
    }
}