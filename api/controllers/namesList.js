module.exports = () => {
    const namesListDB = require('../../data/namesList.json')
    const controller = {}

    controller.listNames = (req, res) => res.status(200).json(namesListDB)

    return controller
}