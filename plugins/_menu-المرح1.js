let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/de0c9360e05e9989bd348.jpg'
  let { name } = global.db.data.users[who]
  m.react('🎉')
  let str = `*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*🐉✬⃝╿↵ مرحبا يا ➻@${name}*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
> *╮───[ اوامـر الـﻤـرح ]───✧*
> *┤ 〚 .هل 〛*   
> *┤ 〚 .كومنت 〛*  
> *┤ 〚 .تغريده 〛*  
> *┤ 〚 .بايدن 〛*
> *╯────────────···*   
> *╮──[ اوامـر الـﻤـنـشـن ]──✧* 
> *┤ 〚 .جميل 〛* 
> *┤ 〚 .جنس 〛* 
> *┤ 〚 .صفع 〛*  
> *┤ 〚 .شاذ 〛*      
> *┤ 〚 .شاذ2 〛*  
> *┤ 〚 .ليزبيان 〛*   
> *┤ 〚 .ليسبين 〛*   
> *┤ 〚 .شرموطة 〛* 
> *┤ 〚 .عاهرة 〛*    
> *┤ 〚 .شرموط 〛*   
> *┤ 〚 .رجوله 〛*   
> *┤ 〚 .انوثه 〛*   
> *┤ 〚 .مراهق 〛* 
> *┤ 〚 .مراهقة 〛* 
> *┤ 〚 .خلبوص 〛* 
> *┤ 〚 .خلبوصة 〛*   
> *┤ 〚 .فاشل 〛* 
> *┤ 〚 .فاشلة 〛*  
> *┤ 〚 .فار 〛* 
> *┤ 〚 .جبن 〛* 
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
handler.command = ['اوامرالمرح']

export default handler
