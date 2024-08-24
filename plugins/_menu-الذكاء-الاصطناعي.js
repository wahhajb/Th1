let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/796cd08ec4d1bbc19dc20.jpg'
  let { name } = global.db.data.users[who]
  m.react('🧠')
  let str = `*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*🐉✬⃝╿↵ مرحبا يا ➻@${name}*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
> *╮───[ اوامـر الــذکـاء]───✧*
> *┤ 〚 .بوت 〛*
> *┤ 〚 .تربو 〛*
> *┤ 〚 .شات 〛*  
> *┤ 〚 .بلاك 〛*
> *┤ 〚 .سمسم 〛*  
> *┤ 〚 .تخيل 〛* 
> *┤ 〚 .ارسم 〛*  
> *┤ 〚 .احسب 〛* 
> *┤ 〚 .عمري 〛*
> *╯────────────···*
*✪┋𝐁𝐘┋❥ 𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓 ┋✪*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢* 
`
  conn.sendMessage(m.chat, {
    image: { url: imageUrl },
    caption: str,
    mentions: [m.sender],
  }, { quoted: m });
};

handler.help = ['main']
handler.tags = ['group']
handler.command = ['اوامر-الذكاء']

export default handler
