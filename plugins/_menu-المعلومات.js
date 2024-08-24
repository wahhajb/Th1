let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/f22d01ffb9bbeed508958.jpg'
  let { name } = global.db.data.users[who]
  m.react('ℹ')
  let str = `*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*🐉✬⃝╿↵ مرحبا يا ➻@${name}*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
> *╮───[ اوامر المعلومات ]───✧*
> *┤ 〚 .اللغة 〛*    
> *┤ 〚 .التوقيت 〛*  
> *┤ 〚 .الوقت 〛*    
> *┤ 〚 .الطقس 〛*   
> *┤ 〚 .الدعم 〛*
> *┤ 〚 .السورس 〛*   
> *┤ 〚 .الشروط 〛*
> *┤ 〚 .المالك 〛*
> *┤ 〚 .بنج 〛* 
> *┤ 〚 .ليمت 〛* 
> *┤ 〚 .المعرف 〛* 
> *┤ 〚 .تست 〛*
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
handler.command = ['اوامر-اامعلومات']
export default handler
