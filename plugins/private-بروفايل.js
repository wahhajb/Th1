import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, usedPrefix, command}) => {

    // تحقق مما إذا كانت الرسالة مرسلة من البوت نفسه
    if (m.fromMe) return; // إذا كانت الرسالة مرسلة من البوت نفسه، لا ترد

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    if (!(who in global.db.data.users)) throw `✳️ المستخدم غير موجود في قاعدة البيانات`
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/sinfoto.jpg')
    let user = global.db.data.users[who]
    let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let { name, exp, credit, lastclaim, registered, regTime, age, level, role, wealth, warn } = global.db.data.users[who]
    let { min, xp, max } = xpRange(user.level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp 
    let prem = global.prems.includes(who.split`@`[0])
    let sn = createHash('md5').update(who).digest('hex')

    // • @${who.replace(/@.+/, '')}
    let str = `*🪪 الإسم:* ${username}${about ? '\n\n 🎌 *السيرة:* ' + about : ''}

*⚠️ التحذيرات:* ${warn}/5

*💰 الذهب :* ${credit}

*✨ المستوى* : ${level}

*⬆️ الخبرة* : إجمالي ${exp} (${user.exp - min} / ${xp})\n${math <= 0 ? `جاهز لـ *${usedPrefix}تطوير*` : `*${math}xp* ناقصة للتطوير`}

*🏆 الترتيب:* ${role}

*📇 مسجل :* ${registered ? 'نعم': 'لا'}

*⭐ بريميوم* : ${prem ? 'نعم' : 'لا'}
`
    await conn.sendMessage(m.chat, { react: { text: '🌚', key: m.key } })

    conn.sendFile(m.chat, pp, 'profil.jpg', str, m, false, { mentions: [who] })

}
handler.help = ['profile']
handler.tags = ['group']
handler.command = ['بروفايل', 'انا', 'بروفايلي'] 

export default handler