let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/b0314594c3c22aa55f2ba.jpg'
  let { name } = global.db.data.users[who]
  m.react('🎨')
  let str = `*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*🐉✬⃝╿↵ مرحبا يا ➻@${name}*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
> *╮───[  اوامـر الايدت ]───✧*
> *┤ 〚 .جودة 〛*
> *┤ 〚 .توضيح 〛*  
> *┤ 〚 .تحسين 〛*  
> *┤ 〚 .إعادة_تلوين 〛*
> *┤ 〚 .إزالة_الضباب 〛*  
> *┤ 〚 .تمويه 〛*
> *┤ 〚 .جمل 〛* 
> *┤ 〚 .لون 〛*  
> *┤ 〚 .نضف 〛*      
> *┤ 〚 .تفريغ 〛*  
> *┤ 〚 .تنقيح 〛* 
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
handler.command = ['اوامر-الايدت']

export default handler
