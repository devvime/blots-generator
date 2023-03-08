const fs = require('fs')

module.exports = {
    htmlModel: function() {
        const file = fs.readFileSync('./src/templates/html.txt', 'utf8')
        return file
    },
    scriptModel: function (fileName) {
        const file = fs.readFileSync('./src/templates/script.txt', 'utf8')
        return file.replaceAll('${fileName}', fileName)
    },
    modelComponentModel: function (fileName) {
        const file = fs.readFileSync('./src/templates/model.txt', 'utf8')
        return file.replaceAll('${fileName}', fileName)
    },
    serviceModel: function (fileName) {
        const file = fs.readFileSync('./src/templates/service.txt', 'utf8')
        return file.replaceAll('${fileName}', fileName)
    },
    sassModel: function (fileName) {
        const file = fs.readFileSync('./src/templates/sass.txt', 'utf8')
        return file.replaceAll('${fileName}', fileName)
    }
}