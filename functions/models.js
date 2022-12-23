module.exports = {
    htmlModel: function() {
        return(`<div>
    <h1>Hello World!</h1>
</div>
        `
        )
    },
    scriptModel: function(fileName) {
        return(
            `import { blots } from 'blots'
import './${fileName}.sass'
import html from './${fileName}.html'

export default class ${fileName} {

    constructor() {
        this.init()
    }

    init() {
        this.render()
    }

    render() {
        blots.draw('#content', html)
    }
}`
        )
    },
    modelComponentModel: function(fileName) {
        return(
            ``
        )
    },
    serviceModel: function(fileName) {
        return(
            ``
        )
    },
    sassModel: function() {
        return(
            ``
        )
    }
}