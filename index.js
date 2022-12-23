const fs = require('fs')
const args = process.argv
const command = args[2]

const models = require('./functions/models')

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

switch (action) {
  case 'createComponent':
    fileName = pathNameArray[pathNameArray.length -1] + 'Component'
  break
  case 'createModel':
    fileName = pathNameArray[pathNameArray.length -1] + 'Model'
  break
  case 'createService':
    fileName = pathNameArray[pathNameArray.length -1] + 'Service'
  break
}

if (!fs.existsSync(pathName)) {
  fs.mkdirSync(pathName, { recursive: true })
} else {
  console.error('This file already exists!')
  return
}

switch (action) {
  case 'createComponent':
    fs.writeFileSync(`${pathName}/${fileName}.html`, models.htmlModel(), { encoding: 'utf-8' })
    fs.writeFileSync(`${pathName}/${fileName}.sass`, models.sassModel(), { encoding: 'utf-8' })
    fs.writeFileSync(`${pathName}/${fileName}.js`, models.scriptModel(fileName), { encoding: 'utf-8' })
  break
  case 'createModel':
    fs.writeFileSync(`${pathName}/${fileName}.js`, models.modelComponentModel(fileName), { encoding: 'utf-8' })
  break
  case 'createService':
    fs.writeFileSync(`${pathName}/${fileName}.js`, models.serviceModel(fileName), { encoding: 'utf-8' })
  break
}