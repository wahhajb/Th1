
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
    const tradutor = _translate.plugins._antiprivado

  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply('ممنوع مراسلة البوت خاص حتي لايتم تبنيد الرقم سيتم حظرك الان\n\nجروب الدعم لو حابب تستخدم البوت\nhttps://chat.whatsapp.com/CcQr4yKaYOL6R6608bDdKp', false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
