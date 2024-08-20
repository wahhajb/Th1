let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/796cd08ec4d1bbc19dc20.jpg'
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
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['اوامر-الايدت']

export default handler
