export async function all(m) {
// عندما يرسل شخص ما رابط مجموعة إلى رسائل الخاصة للبوت/
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {

m.reply(`*دعوة البوت للانضمام إلى مجموعة*

*مرحبًا*
*هذا هو رقم المطور, اذا كان لديك 30عضو وأكثر قم بتواصل مع المطور ليقبل طلب الدخول ارسل رابط الجروب اللي مطوري حتي يدخلني للجروب ويقبل دعوتك الي الجروب*
*wa.me/+201225655220 هذا هو رقم مطوري*
`)
m.react('💎')
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}

return !0
}