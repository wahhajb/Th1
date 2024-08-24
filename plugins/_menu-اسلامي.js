let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/72d83cb6c5c3ab72ba4f7.jpg'
  let { name } = global.db.data.users[who]
  m.react('🕌')
  let str = `*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*🐉✬⃝╿↵ مرحبا يا ➻@${name}*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
> *╮───[ الاوامــر الاسـلامـيـة]───✧*
> *┤ 〚 .الله 〛*
> *┤ 〚 .القران 〛*  
> *┤ 〚 .قران 〛*  
> *┤ 〚 .سوره 〛*
> *┤ 〚 .ايات 〛*  
> *┤ 〚 .حديث 〛*
> *┤ 〚 .احاديث 〛*  
> *┤ 〚 .اذكار الصباح 〛*  
> *┤ 〚 .اذكار المساء 〛*  
> *┤ 〚 .اذكار النوم 〛*  
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
handler.command = ['الاوامر-الدينية']

export default handler
