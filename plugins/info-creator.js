import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; FahriXz\nNICKNAME: FahriXz\nORG: FahriXz\nTITLE:\nitem1.TEL;waid=6288286768082:+62 882 8676 8082\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://saweria.co/FahriXz\nitem2.EMAIL;type=INTERNET: fahrixz56@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Hay Kak Itu Ownerku, Jangan Macam~Macam Ya`)
}
if (command == 'owner2') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; vynachan\nNICKNAME: VynaChan\nORG: VynaChan\nTITLE:\nitem1.TEL;waid=6285896161738:+62 858 9616 1738\nitem1.X-ABLabel: Nomor Owner\nitem2.URL: NOTHING\nitem2.EMAIL;type=INTERNET: NOTHING\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Hay Kak Itu Ownerku, Jangan Macam~Macam Ya`)
}
if (command == 'creator') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; VynaChan\nNICKNAME: VynaChan\nORG: VynaChan\nTITLE:\nitem1.TEL;waid=6285769727113:+62 857 6972 7113\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://saweria.co/FahriXz\nitem2.EMAIL;type=INTERNET: fahrixz56@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Hai Kak Itu Nomor Developerku Yang Memprogram Aku, Mohon Jangan Di Spam Ya >,<`)
}
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner|owner2)$/i

export default handler