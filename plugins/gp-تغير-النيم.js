import Presence from '@adiwajshing/baileys'

let handler = async (m, { conn, args, text }) => {
    if (!text) throw `*يا نجم، لازم تقوللي الاسم الجديد زي كده: .تغير-الاسم تربو*`

    try {
        let text = args.join` `
        if (!args || !args[0]) {
            // مفيش حاجة هتحصل هنا لو مفيش اسم جديد
        } else {
            conn.groupUpdateSubject(m.chat, text)
            m.reply(`*تمام يا معلم! الاسم الجديد للجروب بقى "${text}".*`)
        }
    } catch (e) {
        throw '*يا نجم، مش عارف أغير الاسم، حاول تاني بالمثال ده: .تغير-الاسم تربو*'
    }
}

handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(تغير-الاسم|تغيرالنيم|تغير-النيم|الاسم|تغيرالاسم)$/i
handler.group = true
handler.admin = true

export default handler