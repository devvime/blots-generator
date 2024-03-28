const colors = require('colors')

colors.enable()

const success = (message) => console.log(`${message}`.green)
const warning = (message) => console.log(`${message}`.yellow)
const danger = (message) => console.log(`${message}`.red)
const loadingMessage = `▁▂▃▄▅▆▇█ 𝙇𝙤𝙖𝙙𝙞𝙣𝙜… `
const baseMessage = (message) => (`
  ＢＬＯＴＳ
 ( 
  )
c[] ${message.toUpperCase()}
`)

module.exports = {
  message: function (type, message) {
    switch (type) {
      case 'success':
        success('\n' + loadingMessage)
        setTimeout(() => {
          success(baseMessage(message))
        }, 500);
        break
      case 'warning':
        success('\n' + loadingMessage)
        setTimeout(() => {
          warning(baseMessage(message))
        }, 500);
        break
      case 'danger':
        success('\n' + loadingMessage)
        setTimeout(() => {
          danger(baseMessage(message))
        }, 500);
        break
      case 'loading':
        success('\n' + loadingMessage + '\n')
        break
    }
  }
}