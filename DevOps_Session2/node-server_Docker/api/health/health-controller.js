const service = require('./health-service');
const constants = require('../../utils/contrants')

const _health = (req, res) => {

    service.health.then((resolve) => {
        if (resolve) {
            return res.status(200).send({
                code: 2000,
                messageKey: constants.messageKeys.code_2000,
                data: JSON.stringify(resolve)
            });
        }
        else {
            return res.status(500).send({
                code: 5000,
                messageKey: constants.messageKeys.code_5000,
                data: JSON.stringify(resolve)
            });
        }
    })
}

const _home = (req, res) => {

    service.home.then((resolve) => {
        if (resolve) {
            return res.status(200).send({
                code: 2000,
                messageKey: constants.messageKeys.code_2000,
                data: JSON.stringify(resolve)
            });
        }
        else {
            return res.status(500).send({
                code: 5000,
                messageKey: constants.messageKeys.code_5000,
                data: JSON.stringify(resolve)
            });
        }
    })
}


module.exports = {
    health: _health,
    home: _home
}