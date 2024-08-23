import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms % 3600000 / 60000);
    let s = Math.floor(ms % 60000 / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
    let d = new Date(new Date() + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let { money, joincount, diamond } = user;
    let { exp, limit, level, role } = user;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered === true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

    await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } });

    // الكود الخاص بالـ fakegif
    let fakegif = {
        key: { participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: m.chat } : {}) },
        message: {
            "videoMessage": {
                "title": '🐱⸽⃕❬ 𝒃𝒐𝒕 𝒆𝒍 𝒕𝒂𝒓𝒃𝒐𝒐 ❭ - MD🍁⃨፝⃕✰',
                "h": `Hmm`,
                'seconds': '99999',
                'gifPlayback': 'true',
                'caption': '🐱⸽⃕❬ 𝒃𝒐𝒕 𝒆𝒍 𝒕𝒂𝒓𝒃𝒐𝒐 ❭ - MD🍁⃨፝⃕✰',
                'jpegThumbnail': false
            }
        }
    };

    const images = [
        'https://telegra.ph/file/bd87aef51ebbbba4901c8.jpg',
        'https://telegra.ph/file/b9c7242b2ea534c9fea51.jpg',
        'https://telegra.ph/file/0e611ef0f5898f84e06ff.jpg',
        'https://telegra.ph/file/e40751a79e8f69137c772.jpg',
        'https://telegra.ph/file/81ef617af171d1263bca4.jpg', 
        'https://telegra.ph/file/9ece2dc7647c5bc552f7a.jpg', 
        'https://telegra.ph/file/5a22e9d6a3db8a26c2a8d.jpg', 
        'https://telegra.ph/file/5122cb52f3d3e6a15d27d.jpg', 
        'https://telegra.ph/file/7d69133c3dae7d2cb988e.jpg', 
        'https://telegra.ph/file/7af98c215f23a0c7bfc6a.jpg', 
        'https://telegra.ph/file/e704ae1c0637553a0bff0.jpg', 
        'https://telegra.ph/file/f4fe5a6340ca9f5890cb4.jpg'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];

    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });

    await conn.sendMessage(m.chat, { text: '*جاري تحضير قائمة الاوامر*' }, { quoted: fakegif });

    await new Promise(resolve => setTimeout(resolve, 1000));

    conn.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: `> *✧────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────╮*
> *┤ *مرحبا يا ${taguser}*
> *┤ 🤴🏻 المطور: Mahmoud Mahmed*
> *┤ #️⃣ الرقم: wa.me/201225655220*
> *┤ ✅ الاصدار: 1.2.0*
> *┤ 🎳 البادئة: •*
> *┤ 🧜🏽‍♂️ المستخدمين: ${rtotalreg}*  
> *┤────────────···*
> *✧────[معـلـومـات الـمسـتـخـدم]────╮*
> *┤ 🎩 *الاسـم: ${name}*
> *┤ 🔃 المستوي: ${level}*
> *┤ 🏆 *الـرتبة: ${role}*
> *┤ 🎮 *الخبـرة: ${exp}* 
> *┤ 💎 *الألـماس: ${diamond}* 
> *┤ 🪙 *تربو كوينز: ${money}*
> *┤ 🎟️ *الرموز: ${joincount}*
> *┤ 🌟 *الـبـرﯾـمـيـوم: ${user.premiumTime > 0 ? 'مـمـيز✅' : (isPrems ? 'مـمـيز ✅' : 'عـادي ❌') || ''}* 
> *┤────────────···* 
> *✧────[ الـوقـت والـتـاريـخ ]────╮*
> *┤ 📆 التاريخ: ${date}*
> *┤ 📅 اليوم: ${week}*
> *┤ 🚀 وقت النشاط: ${uptime}*
> *┤────────────···*`
                    },
                    footer: {
                        text: 'ᴹᴿ᭄𝒁𝒆𝒛𝒐ᴹᴿ᭄'
                    },
                    header: {
                        title: '',
                        hasMediaAttachment: true,
                        imageMessage: messa.imageMessage,
                    },
                    nativeFlowMessage: {
                        buttons: [
{
    name: 'single_select',
    buttonParamsJson: JSON.stringify({
        title: '『』CLICK《',
        sections: [
            {
                title: '『』معلومات المطور《',
                rows: [
{
    header: 'Developer Info',
    title: '⌬ ❛╏المطور',
    description: 'تعرف على المطور',
    id: '.المطور'
}
                ]
            },
            {
                title: '『』قوائم البرامج《',
                rows: [
{
    header: 'Downloads',
    title: '⌬ ❛╏التنزيلات',
    description: 'جميع التحميلات هنا',
    id: '.4',
},
{
    header: 'Group Management',
    title: '⌬ ❛╏قائمه الجروب',
    description: 'إدارة الجروب',
    id: '.5',
},
{
    header: 'Games',
    title: '⌬ ❛╏الالعاب',
    description: 'ألعاب وترفيه',
    id: '.6',
}
                ]
            },
            {
                title: '『』الصور والادوات《',
                rows: [
{
    header: 'Images',
    title: '⌬ ❛╏الصور',
    description: 'جميع الصور هنا',
    id: '.2',
},
{
    header: 'Tools',
    title: '⌬ ❛╏الــادوات',
    description: 'أدوات مفيدة',
    id: '.7',
}
                ]
            },
            {
                title: '『』أخرى《',
                rows: [
{
    header: 'Guide',
    title: '⌬ ❛╏شـرح الـالـقـاب',
    description: 'شرح الألقاب',
    id: '.3',
},
{
    header: 'Terms',
    title: '⌬ ❛╏شروط',
    description: 'الشروط والأحكام',
    id: '.20',
},
{
    header: 'Support',
    title: '⌬ ❛╏الدعم',
    description: 'الدعم الفني والمساعدة',
    id: '.الدعم',
},
{
    header: 'All Commands',
    title: '⌬ ❛╏قائمة الاوامر',
    description: 'عرض جميع الأوامر المتاحة',
    id: '.10',
}
                ]
            }
        ]
    }),
    messageParamsJson: 'TARBOO bot'
},
{
    name: "quick_reply",
    buttonParamsJson: "{\"display_text\":\"『』OWNER《\",\"id\":\".المطور\"}"
},
{
    name: "quick_reply",
    buttonParamsJson: '{"display_text":"⌈🚀╎الدردشه المجهوله╎🚀⌋","id":".chathom"}'
},
{
    name: "cta_url",
    buttonParamsJson: "{\"display_text\":\"『』GROUP《\",\"url\":\"https://chat.whatsapp.com/Gvj15Uocf6KDc2OUzgx06g\",\"merchant_url\":\"https://chat.whatsapp.com/Gvj15Uocf6KDc2OUzgx06g\"}"
},
{
    name: "cta_url",
    buttonParamsJson: "{\"display_text\":\"『』WEBSITE《\",\"url\":\"https://atom.bio/zyad_yasser\",\"merchant_url\":\"https://atom.bio/zyad_yasser\"}"
},
{
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: "『』CHANNEL《",
        url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a",
        merchant_url: "https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a"
    })
}
                        ]
                    }
                }
            }
        }
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['اوامر','الاوامر','menu','المهام'];

export default handler;