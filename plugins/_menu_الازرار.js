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
                        text: `> ╮━━━━━━━━━━━━━━╭
        ┃    【 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 】    ┃
> ╯━━━━━━━━━━━━━━╰
> *┤ *مرحبا يا ${name}*
> *┤ 🤴🏻 المطور: Mahmoud Mahmed*
> *┤ #️⃣ الرقم: 01225655220*
> *┤ ✅ الاصدار: 1.2.0*
> *┤ 🎳 البادئة: •*
> *┤ 🧜🏽‍♂️ المستخدمين: ${rtotalreg}*  
> *┤────────────···*
> *✧────[الـﻤـسـتـخـدم]────╮*
> *┤ 🎩 *الاسـم: ${name}*
> *┤ 🔃 المستوي: ${level}*
> *┤ 🏆 *الـرتبة: ${role}*
> *┤ 🎮 *الخبـرة: ${exp}* 
> *┤ 💎 *الألـماس: ${diamond}* 
> *┤ 🪙 *تربو كوينز: ${money}*
> *┤ 🎟️ *الرموز: ${joincount}*
> *┤ 🌟 *الـبـرﯾـمـيـوم: ${user.premiumTime > 0 ? 'مـمـيز✅' : (isPrems ? 'مـمـيز ✅' : 'عـادي ❌') || ''}* 
> *┤────────────···* 
> *✧────[ الـوقـت ]────╮*
> *┤ 📆 التاريخ: ${date}*
> *┤ 📅 اليوم: ${week}*
> *┤ 🚀 وقت النشاط: ${uptime}*
> *┤────────────···*`
                    },
                    footer: {
                        text: '✪┋𝐁𝐘┋❥ 𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓 ┋✪'
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
        title: '『』اوامر البوت《',
        sections: [
            {
                title: '『』قسم المالك《',
                rows: [
{
    header: 'DEVELOPER NUMBER',
    title: '⌬ ❛╏المطور',
    description: 'تواصل مع المطور',
    id: '.المطور'
    },
{
    header: 'DEVELOPER INFO',
    title: '⌬ ❛╏تعريف المطور',
    description: 'تعرف على المطور',
    id: '.المعرف',
},
{
    header: 'LIST OF OWNER',
    title: '⌬ ❛╏قائمه المطور',
    description: 'قسم خاص بالمطور فقط',
    id: '.قائمتي',
}
                ]
            },
            {
                title: '『』قسم الادوات《',
                rows: [
{
    header: 'LIST OF DOWNLOADS',
    title: '⌬ ❛╏التنزيلات',
    description: 'جميع التحميلات هنا',
    id: '.اوامر-التحميل',
},
{
    header: 'LIST OF SEARCH',
    title: '⌬ ❛╏قائمه البحث',
    description: 'بحث في مختلف المواقع',
    id: '.اوامر-البحث',
}, 
{
    header: 'LIST OF AI',
    title: '⌬ ❛╏قائمة الذكاء الاصطناعي',
    description: 'قسم الذكاء الاصطناعي',
    id: '.اوامر-الذكاء',
}
                ]
            },
            {
                title: '『』قسم التحويلات 《',
                rows: [
{
    header: 'LIST OF DESIGN',
    title: '⌬ ❛╏اوامر التصميم',
    description: 'اوامر التصميم والتحويلات',
    id: '.اوامر-التصميم',
},
{
    header: 'LIST OF EDIT',
    title: '⌬ ❛╏الايديت',
    description: 'اوامر الايديت واتعديل علي الصور',
    id: '.اوامر-الايدت',
},
{
    header: 'LIST OF AUDIO',
    title: '⌬ ❛╏الصوتيات',
    description: 'قائمة التعديل علي الصوت',
    id: '.اوامر-الصوت',
} 
                ]
            },
            {
                title: '『』قسم الجروبات والاعضاء《',
                rows: [
{
    header: 'LIST OF GROUPS ',
    title: '⌬ ❛╏اوامر الرومات',
    description: 'قسم خاص بالمجموعات',
    id: '.اوامرالرومات',
},
{
    header: 'LIST OF MEMBERS',
    title: '⌬ ❛╏اوامر الاعضاء',
    description: 'قسم خاص بالاعضاء',
    id: '.اوامر-الاعضاء',
}
                ]
            },
            {
                title: '『』القسم الاسلامي 《',
                rows: [
{ 
header: 'LIST OF GROUPS ',
    title: '⌬ ❛╏القائمة الدينية',
    description: 'قسم خاص بالاوامر الاسلامية',
    id: '.الاوامر-الدينية',
}
            ]
            },
            { 
                title: '『』قسم الصور والفيديوهات 《',
                rows: [
{
    header: 'LIST OF ANIME',
    title: '⌬ ❛╏قائمة الانمي',
    description: 'قائمة صور انمي متنوعة',
    id: '.الانمي',
},
{ 
    header: 'LIST OF WALLPAPER',
    title: '⌬ ❛╏قائمة الخلفيات',
    description: 'قائمة خلفيات متنوعة',
    id: '.الخلفيات',
},
{
    header: 'LIST OF VIDEOS',
    title: '⌬ ❛╏قائمة الفيديوهات',
    description: 'قائمة فديوهات متنوعة',
    id: '.الفيديوهات',
},
{
    header: 'LIST OF ALL',
    title: '⌬ ❛╏قائمة الانمي والخلفيات والفيديوهات',
    description: 'كل قوائم الانمي والخلفيات والفيديوهات',
    id: '.الانمي2',
} 
                ]
            },
            {
                title: '『』قسم المرح والجيمز《',
                rows: [
{ 
header: 'LIST OF GAMES',
    title: '⌬ ❛╏قائمة الالعاب',
    description: 'قائمة متنوعة من الالعاب',
    id: '.اوامرالجيمز',
},
{ 
header: 'LIST OF GAMES 2 ',
    title: '⌬ ❛╏قائمة الالعاب 2',
    description: 'قائمة خاصة بأوامر الفاعليات',
    id: '.اوامرالالعاب',
},
{
    header: 'LIST OF ENTERTAINMENT ',
    title: '⌬ ❛╏قائمة الترفية',
    description: 'قائمة خاصة بأوامر التسلية مع الاصدقاء',
    id: '.اوامرالمرح',
},
{
    header: 'LIST OF FUN',
    title: '⌬ ❛╏قائمة المرح',
    description: 'قائمة المزاح والتسلية',
    id: '.مرح',
}
                ]
            }
        ]
    }), 
        messageParamsJson: 'TARBOO bot'
},
{
    "name": "single_select",
"buttonParamsJson": JSON.stringify({
    "title": "『』المعلومات《",
    "sections": [
        {
            "title": "『』قسم المالك《",
            "rows": [
                {
                    "header": "DEVELOPER NUMBER",
                    "title": "⌬ ❛╏المطور",
                    "description": "تعريف المطور",
                    "id": ".المعرف"
                }
            ]
        },
        {
            "title": "『』قسم الدعم والمعلومات《",
            "rows": [
                {
                    "header": "USER GUIDELINE",
                    "title": "⌬ ❛╏السورس",
                    "description": "معلومات عن البوت",
                    "id": ".السورس"
                },
                {
                    "header": "SUPPORT",
                    "title": "⌬ ❛╏الدعم",
                    "description": "مجموعات الدعم",
                    "id": ".الدعم"
                     },
                {
                    "header": "SUPPORT",
                    "title": "⌬ ❛╏الشروط",
                    "description": "شروط استخدام البوت",
                    "id": ".الشروط"
                }
            ]
        },
        {
            "title": "『』قسم معلومات البوت《",
            "rows": [
                {
                    "header": "SERVER",
                    "title": "⌬ ❛╏معلومات السيرفر",
                    "description": "تفاصيل السيرفر المستخدم",
                    "id": ".تست"
                },
                {
                    "header": "PING",
                    "title": "⌬ ❛╏معلومات البنج والسرعه",
                    "description": "سرعة البنج",
                    "id": ".بنج"
                    },
                {
                    "header": "Users",
                    "title": "⌬ ❛╏المستخدمين",
                    "description": "عدد مستخدمين البوت",
                    "id": ".المستخدمين" 
                    },
                {
                    "header": "Users now",
                    "title": "⌬ ❛╏اللذين يستخدمون البوت حاليل",
                    "description": "المستخدمين الان ",
                    "id": ".الان" 
                    }
            ]
        },
        {
            "title": "『』قسم المعلومات《",
            "rows": [
                {
                    "header": "INFO",
                    "title": "⌬ ❛╏المعلومات",
                    "description": "كل المعلومات",
                    "id": ".اوامر-اامعلومات"
                }
            ]
        }
    ]
}),
    "messageParamsJson": "TARBOO bot"
},
                            {
                                name: "quick_reply",
                                buttonParamsJson: "{\"display_text\":\"『』تقييم《\",\"id\":\".تقييم\"}"
                            },
                            {
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: "『』المطور《",
        url: "https://wa.me/201225655220",
        merchant_url: "https://wa.me/201225655220"
    })
},
{

    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: "『』قناة البوت《",
        url: "https://whatsapp.com/channel/0029VagKvPX4dTnNxfbTnR45",
        merchant_url: "https://whatsapp.com/channel/0029VagKvPX4dTnNxfbTnR45"
    })
}, 
{
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: "『』موقع المطور 《",
        url: "https://linkbio.co/el-tarboo",
        merchant_url: "https://linkbio.co/el-tarboo"
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