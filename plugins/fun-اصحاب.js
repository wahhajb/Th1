import fetch from 'node-fetch';

let toM = a => '@' + a.split('@')[0];

async function handler(m, { conn, groupMetadata }) {
    // لن يتم التحقق من الجواهر ولن يتم خصم أي شيء

    // قم بإرسال رسالة تأكيد الجريمة
    let ps = groupMetadata.participants.map(v => v.id);
    let a = ps[Math.floor(Math.random() * ps.length)];
    let b;
    do {
        b = ps[Math.floor(Math.random() * ps.length)];
    } while (b === a);

    // رابط الصورة الذي تريده
    const fgytSrdf = 'https://telegra.ph/file/ba5966fff95f002f817d1.jpg';

    // إرسال الصورة مع الكابشن
    await conn.sendFile(m.chat, fgytSrdf, 'image.jpg', 
    `*👥 اعــلـان عـن اصــحــاب 👥*
*❯🫶🏻 ╎انــت : ${toM(a)}*
*❯👥 ╎وانــت : ${toM(b)}*
*انـتـو الـاتـنـيـن افـضـل اصـحـاب 🥹💗*
> الأمر للمزاح فقط`, 
    m, false, { mentions: [a, b] });
}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['صحبه', 'اصحاب','اصدقاء'];
handler.group = true;

export default handler;