  let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/744bc3124eaa81176347a.jpg'
  let { name } = global.db.data.users[who]
  m.react('🏦')
  let str = `*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*🐉✬⃝╿↵ مرحبا يا ➻@${name}*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
> *╮───[ اوامــر الــبــنــك]───✧*
> *┤ 〚 .البنك 〛*
> *┤ 〚 .ايداع 〛*
> *┤ 〚 .سحب 〛*  
> *┤ 〚 .تحويل 〛*
> *╯────────────···* 
> *╮────────────···*    
> *┤ 〚 .اهداء 〛*  
> *┤ 〚 .عمل 〛*  
> *┤ 〚 .راتب 〛*  
> *┤ 〚 .عملات 〛*  
> *┤ 〚 .عملاتي 〛*  
> *┤ 〚 .تعدين 〛*  
> *┤ 〚 .تعدين2 〛*
> *┤ 〚 .هجوم 〛*  
> *┤ 〚 .صندوق 〛*  
> *┤ 〚 .يومي 〛* 
> *┤ 〚 .اسبوعي 〛*
> *╯────────────···* 
> *╮────────────···*    
> *┤ 〚 .المحفظة 〛*  
> *┤ 〚 .الرتبة 〛* 
> *┤ 〚 .المتصدرين 〛*   
> *╯────────────···* 
> *╮────────────···*    
> *┤ 〚 .تسوق 〛*  
> *┤ 〚 .شراء 〛* 
> *┤ 〚 .شراء-الماس 〛*  
> *┤ 〚 .شراء_الدجاج 〛*  
> *┤ 〚 .لجواهر 〛*
> *╯────────────···*
*✪┋𝐁𝐘┋❥ 𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓 ┋✪*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*`

  conn.sendMessage(m.chat, {
    image: { url: imageUrl },
    caption: str,
    mentions: [m.sender],
  }, { quoted: m });
};

handler.help = ['main']
handler.tags = ['group']
handler.command = ['اوامر-البنك']

export default handler