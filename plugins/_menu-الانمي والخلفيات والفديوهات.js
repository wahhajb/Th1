let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/e9250484e971400e5d65c.jpg'
  let { name } = global.db.data.users[who]
  m.react('🕹')
  let str = `*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*🐉✬⃝╿↵ مرحبا يا ➻@${name}*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
> *╮───[ قسم الانمي ]───✧*
> *┤ 〚 .فانرت 〛*
> *┤ 〚 .هوسبو 〛*
> *┤ 〚 .كانا 〛*
> *┤ 〚 .ميغومين 〛*
> *┤ 〚 .نيكو 〛*
> *┤ 〚 .شوتا 〛*
> *┤ 〚 .وايف 〛*
> *┤ 〚 .الينا 〛*
> *┤ 〚 .مراتي 〛*
> *┤ 〚 .بنت 〛*
> *┤ 〚 .وايفو 〛*
> *┤ 〚 .لولي 〛*
> *┤ 〚 .لولي2 〛*
> *┤ 〚 .كوسبلاي 〛*
> *┤ 〚 .ساكورا 〛*
> *┤ 〚 .ساسكي 〛*
> *┤ 〚 .ساجيري 〛*
> *┤ 〚 .نيزوكو 〛*
> *┤ 〚 .ناروتو 〛*
> *┤ 〚 .ميناتو 〛*
> *┤ 〚 .ميكو 〛*
> *┤ 〚 .ميكاسا 〛*
> *┤ 〚 .مادارا 〛*
> *┤ 〚 .جوزو 〛*
> *┤ 〚 .كوترو 〛*
> *┤ 〚 .كانيكي 〛*
> *┤ 〚 .كاوري 〛*
> *┤ 〚 .كاجيرو 〛*
> *┤ 〚 .كاجا 〛*
> *┤ 〚 .ايتوري 〛*
> *┤ 〚 .ايتاتشي 〛*
> *┤ 〚 .ايسوزي 〛*
> *┤ 〚 .اينوري 〛*
> *┤ 〚 .هيناتا 〛*
> *┤ 〚 .هيستيا 〛*
> *┤ 〚 .ايميليا 〛*
> *┤ 〚 .ايبا 〛*
> *┤ 〚 .ايرزا 〛*
> *┤ 〚 .ديدارا 〛*
> *┤ 〚 .شيتوجي 〛*
> *┤ 〚 .تشيهو 〛*
> *┤ 〚 .بوروتو 〛*
> *┤ 〚 .أيوزاوا 〛*
> *┤ 〚 .اسونا 〛*
> *┤ 〚 .اناا 〛*
> *┤ 〚 .اكياما 〛*
> *┤ 〚 .اكيرا 〛*
> *╯────────────···*
> *╮───[ قسم الخلفيات ]───✧*
> *┤ 〚 .منوع 〛*
> *┤ 〚 .انميشن 〛*
> *┤ 〚 .حقيقي 〛*
> *┤ 〚 .مراتي 〛*
> *┤ 〚 .بنت 〛*
> *┤ 〚 .خلفية-اولاد 〛*
> *┤ 〚 .خلفية-بنات 〛*
> *┤ 〚 .مانهوو 〛*
> *┤ 〚 .خلفيه-كوسبلاي 〛*
> *┤ 〚 .جوزني 〛*
> *┤ 〚 .تطقيم 〛*
> *┤ 〚 .طقم-اولاد 〛*
> *┤ 〚 .طقم_بنات 〛*
> *┤ 〚 .كرتون 〛*
> *┤ 〚 .كريستيانو 〛*
> *┤ 〚 .ليو 〛*
> *┤ 〚 .قط 〛*
> *┤ 〚 .قطة 〛*
> *┤ 〚 .كلب 〛*
> *┤ 〚 .جبل 〛*
> *┤ 〚 .فضاء 〛*
> *┤ 〚 .كوكب 〛*
> *┤ 〚 .ببجي 〛*
> *┤ 〚 .جيمينج 〛*
> *┤ 〚 .استايل 〛*
> *┤ 〚 .استايل2 〛*
> *┤ 〚 .بروفايل-عشوائي 〛*
> *┤ 〚 .خلفية-موبايل 〛*
> *┤ 〚 .بنتول 〛*
> *┤ 〚 .درايمون 〛*
> *┤ 〚 .كوفي 〛*
> *┤ 〚 .قهوه 〛*
> *┤ 〚 .تكنولوجيا 〛*
> *┤ 〚 .هكر 〛*
> *┤ 〚 .عربية 〛*
> *┤ 〚 .عربية2 〛*
> *┤ 〚 .موتسيكل 〛*
> *┤ 〚 .عشوائي 〛*
> *┤ 〚 .ميمز 〛*
> *╯────────────···*
> *╮───[ قسم الفيديوهات ]───✧*
> *┤ 〚 .ايدت-انمي 〛*
> *┤ 〚 .انمي2 〛*
> *┤ 〚 .ايديت1 〛*
> *┤ 〚 .ايديت5 〛*
> *┤ 〚 .ستيت-انمى 〛*
> *┤ 〚 .دراغون-بول 〛*
> *┤ 〚 .اهداف 〛*
> *┤ 〚 .ايديت3 〛*
> *┤ 〚 .ايديت-اغنيه 〛*
> *┤ 〚 .ايديت2 〛*
> *┤ 〚 .لصديق 〛*
> *┤ 〚 .ايديت4 〛*
> *┤ 〚 .ايديت-مختلط 〛*
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

handler.help = ['info']
handler.tags = ['main']
handler.command = ['الانمي2', 'الخلفيات2', 'الفيديوهات2']

export default handler