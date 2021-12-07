const { WAConnection } = require('@adiwajshing/baileys');
const fs = require('fs');

const conn = require('./connect');
const connect = require('./connect');

conn.connect()
const client = conn.client

client.on('chat-update', async (mek) => {
try{
if (!mek.hasNewMessage) return
if (!mek.messages) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return

mek = mek.messages.all()[0]

} catch (e) {
console.log(e)
}
