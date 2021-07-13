module.exports = {
    gitRepo: 'https://github.com/benoitlamonica/easydiscordbot.git',
    cmdHeader: `// Automaticaly generated on the ${new Date().toLocaleDateString('fr-FR')}`,
    cmdBody: {
        body: `module.exports = {
                name: '****',
                description: 'Sample description',
                execute: (msg, arg) => {
                    new ReponseBot(msg).useCommandHandler('handlerName', arg);
                }
            }`,
        require: `const { ReponseBot } = require("../../vendor/config/response")`
    }
}