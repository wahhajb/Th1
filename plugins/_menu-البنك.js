  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/796cd08ec4d1bbc19dc20.jpg'
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
    video: { url: videoUrl },
    caption: str,
    mentions: [m.sender],
    gifPlayback: true,
    gifAttribution: 0
  }, { quoted: m });
};

handler.help = ['main']
handler.tags = ['group']
handler.command = ['اوامر-البنك']

export default handler