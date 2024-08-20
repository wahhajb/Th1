import fs from 'fs';

const handler = async (m, { conn, args }) => {
    const group = m.chat;
    
    // تحقق من أن المستخدم هو مشرف
    if (!m.isGroup) {
        return conn.reply(m.chat, 'عذراً، يجب أن تكون في مجموعة لاستخدام هذا الأمر.', m);
    }
    
    // تحقق من أن البوت هو مشرف
    const groupMetadata = await conn.groupMetadata(group);
    const botNumber = conn.user.jid;
    const botAdmin = groupMetadata.participants.find(participant => participant.id === botNumber && participant.admin !== null);
    
    if (!botAdmin) {
        return conn.reply(m.chat, 'عذراً، يجب أن أكون مشرفاً في المجموعة لأتمكن من إرسال رابط الدعوة.', m);
    }

    // تحقق من وجود رابط للدعوة
    try {
        const inviteLink = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);
        const responses = [
            'إليك رابط الدعوة للمجموعة: ' + inviteLink,
            'تفضل، إليك رابط الدعوة: ' + inviteLink,
            'ها هو رابط المجموعة: ' + inviteLink,
            'رابط الدعوة للمجموعة هو: ' + inviteLink,
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        conn.reply(m.chat, randomResponse, m, {
            contextInfo: {
                externalAdReply: {
                    mediaUrl: null,
                    mediaType: 1,
                    description: null,
                    title: 'لينك الجروب',
                    body: 'ƚᥲᖇხ᥆᥆_ხ᥆ƚ',
                    previewType: 0,
                    thumbnail: fs.readFileSync('./Menu4.png'),
                    sourceUrl: `https://chat.whatsapp.com/Bu7cwDjLYwLJ93yyUD1tE1`
                }
            }
        });
    } catch (error) {
        console.error(error);
        let errorMessage = 'حدث خطأ غير متوقع أثناء محاولة الحصول على رابط الدعوة. يرجى المحاولة لاحقاً.';
        
        if (error.message.includes('not found')) {
            errorMessage = 'عذراً، لم أتمكن من إيجاد المجموعة. تأكد من أنني في المجموعة.';
        } else if (error.message.includes('permission')) {
            errorMessage = 'عذراً، ليس لدي إذن للحصول على رابط الدعوة. تأكد من أنني مشرف.';
        }

        conn.reply(m.chat, errorMessage, m);
    }
};

handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^لينك|link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;

export default handler;