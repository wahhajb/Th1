let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/796cd08ec4d1bbc19dc20.jpg'
  let { name } = global.db.data.users[who]
  m.react('🎉')
  let str = `*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*🐉✬⃝╿↵ مرحـبـا ➻@${name}*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
> *╮───[ اوامـر المرح ]───✧*
> *┤ 〚 .تهكير 〛* 
> *┤ 〚 .تفجير 〛* 
> *╯────────────···*
> *╮────────────···*     
> *┤ 〚 .اسئلني 〛* 
> *┤ 〚 .اسئلة 〛* 
> *┤ 〚 .أختبرني 〛* 
> *┤ 〚 .احرجني 〛* 
> *┤ 〚 .تحدانى 〛* 
> *┤ 〚 .الصراحه 〛* 
> *┤ 〚 .لوخيروك 〛* 
> *┤ 〚 .اقتباس 〛* 
> *┤ 〚 .اقتباس2 〛* 
> *┤ 〚 .شعر 〛* 
> *┤ 〚 .حكمة 〛* 
> *┤ 〚 .نصيحة 〛* 
> *┤ 〚 .بوستات 〛* 
> *┤ 〚 .غزل 〛* 
> *┤ 〚 .هبد 〛* 
> *┤ 〚 .تجرؤ 〛* 
> *┤ 〚 .العدوان 〛* 
> *┤ 〚 .فلسطين 〛* 
> *╯────────────···*
> *╮────────────···*     
> *┤ 〚 .اصحاب 〛* 
> *┤ 〚 .الحب 〛* 
> *┤ 〚 .قلب 〛* 
> *┤ 〚 .بيحبني 〛* 
> *┤ 〚 .خطوبه 〛* 
> *┤ 〚 .زواج 〛* 
> *┤ 〚 .طلاق 〛* 
> *┤ 〚 .بيكرهني 〛* 
> *┤ 〚 .بيبضني 〛* 
> *┤ 〚 .قتل 〛* 
> *┤ 〚 .جريمه 〛* 
> *┤ 〚 .اعدام 〛* 
> *┤ 〚 .حياه 〛* 
> *┤ 〚 .وفاتي 〛* 
> *╯────────────···*
*✪┋𝐁𝐘┋❥ 𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓 ┋✪*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender, global.conn.user.jid],
     gifPlayback: true, gifAttribution: 0
       }, { quoted: m });
};

handler.help = ['info']
handler.tags = ['main']
handler.command = ['اوامرالمرح2']

export default handler