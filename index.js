const fs = require('fs')
const models = require('./src/functions/models')
const utils = require('./src/functions/utils')
const args = process.argv
const command = args[2]

if (args[2] === undefined) {
  return utils.message('danger', `No commands were entered.`)
}
if (args[3] === undefined) {
  return utils.message('danger', `Enter a name for the element.`)
}

let pathName = ''
let action = ''

if (command === 'new-component' || command === 'nc' ) {
  pathName = './src/components/' + args[3]
  action = 'createComponent'
} else 
if (command === 'new-model' || command === 'nm' ) {
  pathName = './src/models/' + args[3]
  action = 'createModel'
} else
if (command === 'new-service' || command === 'ns' ) {
  pathName = './src/services/' + args[3]
  action = 'createService'
}

const pathNameArray = pathName.split('/')
let fileName = ''
let tempName = pathNameArray[pathNameArray.length -1]

switch (action) {
  case 'createComponent':
    fileName = tempName.charAt(0).toUpperCase() + tempName.slice(1)
  break
  case 'createModel':
    fileName = tempName.charAt(0).toUpperCase() + tempName.slice(1) + '-model'
  break
  case 'createService':
    fileName = tempName.charAt(0).toUpperCase() + tempName.slice(1) + '-service'
  break
}

if (!fs.existsSync(pathName)) {
  fs.mkdirSync(pathName, { recursive: true })
} else {
  utils.message('warning', `This file already exists in ${pathName}`)
  return
}

switch (action) {
  case 'createComponent':
    fs.writeFileSync(`${pathName}/${fileName.toLowerCase()}-element.html`, models.htmlModel(), { encoding: 'utf-8' })
    fs.writeFileSync(`${pathName}/${fileName.toLowerCase()}-element.sass`, models.sassModel(), { encoding: 'utf-8' })
    fs.writeFileSync(`${pathName}/${fileName.toLowerCase()}-element.js`, models.scriptModel(fileName), { encoding: 'utf-8' })
    utils.message('success',`Component created in ${pathName}`)
  break
  case 'createModel':
    fs.writeFileSync(`${pathName}/${fileName}.js`, models.modelComponentModel(fileName), { encoding: 'utf-8' })
    utils.message('success',`Model created in ${pathName}`)
  break
  case 'createService':
    fs.writeFileSync(`${pathName}/${fileName}.js`, models.serviceModel(fileName), { encoding: 'utf-8' })
    utils.message('success',`Service created in ${pathName}`)
  break
}