const fs = require('fs');
const Utils = require('../../utils/utils');

function setToken(token) {
    fs.readFile('./.env', 'utf8', (err, file) => {
        if (err) { console.error(err); return }
        let newFile = file.replace(/yourdiscordtoken/g, token);
        fs.writeFile('./.env', newFile, (err) => {
            if (err) { console.error(err); return }
            Utils.boxedMsg('Token', token);
        })
    });
}

module.exports = setToken;