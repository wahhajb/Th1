let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/b0314594c3c22aa55f2ba.jpg'
  let { name } = global.db.data.users[who]
  m.react('📥')
  let str = `*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*🐉✬⃝╿↵ مرحبا يا ➻@${name}*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
> *╮───[  اوامـر التحميل ]───✧*
> *┤ 〚 .اغنيه 〛*
> *┤ 〚 .حملي 〛*  
> *┤ 〚 .ابحث 〛*  
> *┤ 〚 .يوتيوب 〛*
> *┤ 〚 .انستا 〛*  
> *┤ 〚 .تيك 〛*
> *┤ 〚 .صور-تيك 〛* 
> *┤ 〚 .بينترست 〛*  
> *┤ 〚 .صوره 〛* 
> *┤ 〚 .صور 〛* 
> *┤ 〚 .تصفح 〛* 
> *┤ 〚 .خلفيه 〛* 
> *┤ 〚 .خلفيات 〛* 
> *┤ 〚 .مود 〛* 
> *┤ 〚 .كروم 〛*      
> *┤ 〚 .ميديافاير 〛*  
> *┤ 〚 .مود 〛* 
> *┤ 〚 .بيك 〛* 
> *┤ 〚 .جيتهاب 〛*  
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
handler.command = ['اوامر-التحميل']

export default handler
