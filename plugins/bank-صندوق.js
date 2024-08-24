let handler = async (m, {conn, usedPrefix}) => {
    let done = '🧰';
    m.react(done);

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    if (!(who in global.db.data.users)) throw `✳️ لـم يـتـم العـثـور عـلـى الـمـسـتـخـدم فـي قـاعـدة الـبـيـانـات الـخـاصـة بـي`;

    let user = global.db.data.users[who];
    let username = conn.getName(who);

    conn.reply(m.chat, `
*┌───⊷「الــصــنــاديــق🧰」⊶*
*▢ 📦 شــائــع : _${user.common}_*
*▢ 📦 نــادر : _${user.uncommon}_*
*▢ 📦 اســطــوري : _${user.legendary}_*
*▢ 📦 خــرافــي : _${user.mythic}_*
*└──────────────⊷*
┌───⊷ *ملاحظة📝* ⊶
*يمكنك تحويل الذهب 🪙 لنقود 💵 باستخدام الأوامر*  
*❏ .نــقــود <الــعــدد>*
*❏ .نــقــود*
*└──────────────⊷*
*┌───⊷*
*يمكنك تحويل الذهب 🪙 لخبرة 🧬 باستخدام الأوامر*  
*❏ .صــفــقــة <الــعــدد>*
*❏ .صــفــقــة*
*└──────────────⊷*`, m, { mentions: [who] });
}

handler.help = ['صندوق', 'الصناديق'];
handler.tags = ['econ'];
handler.command = ['الصندوق', 'الصناديق', 'صندوق', 'صناديق'];

export default handler;