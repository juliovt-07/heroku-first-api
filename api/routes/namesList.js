module.exports = rota => {
    const controller = require('../api/controllers/namesList')()

    rota.route('names-list')
        .get(controller.listNames)
}