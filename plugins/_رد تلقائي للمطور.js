import { Sticker, StickerTypes } from 'wa-sticker-formatter';
import fetch from 'node-fetch';

let handler = m => m;

handler.all = async function (m, conn) {
    let developerImgs = [
        "https://telegra.ph/file/581e6160af36def7872da.png", // الصورة الأولى للمطور
        "https://telegra.ph/file/4e84292a76a07ab824228.png"  // الصورة الثانية للمطور
    ];
    let botImg = "https://telegra.ph/file/6f4ad00e3b76b229e82d2.jpg"; // صورة البوت

    let developerNum = "201225655220"; // رقم المطور
    let botNum = "201016948771"; // رقم البوت

    if (m.mentionedJid && m.mentionedJid[0]) {
        let phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');

        let imgToSend;
        if (phoneNumber === developerNum) {
            // اختيار صورة عشوائية من صور المطور
            imgToSend = developerImgs[Math.floor(Math.random() * developerImgs.length)];
        } else if (phoneNumber === botNum) {
            imgToSend = botImg;
        }

        if (imgToSend) {
            // تحميل الصورة
            let response = await fetch(imgToSend);
            let buffer = await response.buffer();

            // تحويل الصورة إلى ملصق
            let sticker = new Sticker(buffer, {
                pack: 'Sticker Pack',
                author: 'Your Name',
                type: StickerTypes.FULL,
                quality: 50
            });

            let stickerBuffer = await sticker.toBuffer();

            // إرسال الملصق
            return this.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
        }
    } else {
        return;
    }
}

export default handler;