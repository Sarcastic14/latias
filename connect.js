
const { WAConnection } = require('@adiwajshing/baileys');
const fs = require('fs');

const auth = './session.json'

const client = new WAConnection()
exports.client = client

exports.connect = async() => {
client.logger.level = 'warn'
client.version = [2, 2143, 3]

client.on('qr', () => {
console.log('Escanee el Qr Code')
})

fs.existsSync(auth) && client.loadAuthInfo(auth)

client.on('connecting', () => {
console.log('Conectando')
})

client.on('open', () => {
console.log('Conectado exitosamente')
const authInfo = client.base64EncodedAuthInfo()
fs.writeFileSync(auth, JSON.stringify(authInfo, null, '\t'))
})

await client.connect({timeoutMs: 30 * 1000})
return
}
