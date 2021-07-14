const fs = require('fs');
const Utils = require('../../utils/utils');

function setToken(token) {
    fs.readFile('./.env', (file) => {
        let newFile = file.replace('yourdiscordtoken', token);
        fs.writeFile('./.env', newFile, (err) => {
            if (err) { console.error(err); return }
            Utils.boxedMsg('token', token);
        })
    });
}

module.exports = setToken;