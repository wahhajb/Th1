import { createHash } from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import { canLevelUp, xpRange } from '../lib/levelling.js';
import fetch from 'node-fetch';
import fs from 'fs';
import moment from 'moment-timezone';
import { promises } from 'fs';
import { join } from 'path';
const time = moment.tz('Africa/Egypt').format('HH');
let wib = moment.tz('Africa/Egypt').format('HH:mm:ss');
// import db from '../lib/database.js';

let handler = async (m, { conn, usedPrefix, command }) => {
    let d = new Date(new Date() + 3600000);
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات`;

    let user = global.db.data.users[who];
    let { money, joincount } = global.db.data.users[m.sender];
    let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who];
    let { min, xp, max } = xpRange(user.level, global.multiplier);
    let username = conn.getName(who);
    let rtotal = Object.entries(global.db.data.users).length || '0';
    let math = max - xp;
    let prem = global.prems.includes(who.split`@`[0]);
    let sn = createHash('md5').update(who).digest('hex');
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let taguser = conn.getName(m.sender); // تعديل هنا للحصول على الاسم بدلاً من الرقم
    global.fcontact = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}};

    // إرسال تفاعل React
    await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    // الانتظار لمدة ثانيتين
    await new Promise(resolve => setTimeout(resolve, 300));

    await conn.sendMessage(m.chat, { text: '*جاري تحضير قائمة الاوامر*' }, { quoted: global.fcontact });
    await new Promise(resolve => setTimeout(resolve, 1000));
    const img = './Menu3.png';
    const str = `
> *✧────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────╮*
> *┤ *مرحبا يا ${taguser}*
> *┤ 🤴🏻 المطور: Mahmoud Mahmed*
> *┤ #️⃣ الرقم: wa.me/201225655220*
> *┤ ✅ الاصدار: 1.2.0*
> *┤ 🎳 البادئة: •*
> *┤ 🧜🏽‍♂️ المستخدمين: ${rtotalreg}*  
> *╯────────────···*   
> *✧────[معـلـومـات الـمسـتـخـدم]────╮*
> *┤ 🎩 *الاسـم: ${name}*
> *┤ 🔃 المستوي: ${level}*
> *╯────────────···*    
> *✧────[ الـوقـت والـتـاريـخ ]────╮*
> *┤ 📆 التاريخ: ${date}*
> *┤ 📅 اليوم: ${week}*
> *┤ 🚀 وقت النشاط: ${uptime}*
> *╯────────────···*   
> ✪┋𝐁𝐘┋❥ 𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓┋✪
> *╮───[ اوامر الرومات ]───✧*
> *┤ 〚 .الجروب 〛*  
> *┤ 〚 .جروبي 〛*   
> *┤ 〚 .معلومات-الجروب 〛*   
> *┤ 〚 .اعدادات 〛*
> *┤ 〚 .لينك 〛*   
> *┤ 〚 .تغير-الاسم 〛*
> *┤ 〚 .تغير-الوصف 〛*
> *┤ 〚 .تغير-الخلفيه 〛* 
> *┤ 〚 .تغيير_اللينك 〛* 
> *┤ 〚 .تغيرالترحيب 〛* 
> *┤ 〚 .تغيرالوداع 〛*
> *╯────────────···*   
> *╮────────────···*   
> *┤ 〚 .ضيف 〛*
> *┤ 〚 .دعوه 〛*   
> *┤ 〚 .طرد 〛* 
> *┤ 〚 .شوت 〛* 
> *┤ 〚 .طرد_الاشباح 〛*
> *┤ 〚 .طرد_الارقام 〛* 
> *┤ 〚 .ترقيه 〛* 
> *┤ 〚 .تخفيض 〛* 
> *┤ 〚 .امسح 〛*   
> *┤ 〚 .فضح 〛*   
> *┤ 〚 .انذار 〛*   
> *┤ 〚 .حذف_انذار 〛*   
> *┤ 〚 .حذف_الانذارات 〛*   
> *┤ 〚 .الانذارات 〛*   
> *╯────────────···*   
> *╮────────────···*   
> *┤ 〚 .المشرفين 〛*   
> *┤ 〚 .منشن 〛*
> *┤ 〚 .لمنشن 〛*   
> *┤ 〚 .منشنلي 〛* 
> *┤ 〚 .مخفي 〛* 
> *┤ 〚 .وهمي 〛* 
> *┤ 〚 .فيك 〛*
> *┤ 〚 .عاهرة 〛*   
> *┤ 〚 .توب 〛* 
> *┤ 〚 .الاشباح 〛* 
> *╯────────────···*   
> *╮───[ اوامر الالقاب ]───✧*
> *┤ .تسجيل.* 
> *┤ { تضع القب بعد الامر للادمن فقط }*
> *┤ .لقبي.*
> *┤ { لمعرفة لقبك المسجل }*
> *┤ .لقبه.* 
> *┤ { لمعرفة لقب شخص للادمن فقط }*
> *┤ .الالقاب.* 
> *┤ { لمعرفة الالقاب المسجله }*
> *┤ .حذف_لقب.*
> *┤ { لحذف لقب من الالقاب المسجله }*
> *╯────────────···* 
> *╮───[ الاوامــر الاسـلامـيـة]───✧*
> *┤ 〚 .الله 〛*
> *┤ 〚 .القران 〛*  
> *┤ 〚 .قران 〛*  
> *┤ 〚 .سوره 〛*
> *┤ 〚 .ايات 〛*  
> *┤ 〚 .حديث 〛*
> *┤ 〚 .احاديث 〛*  
> *┤ 〚 .اذكار الصباح 〛*  
> *┤ 〚 .اذكار المساء 〛*  
> *┤ 〚 .اذكار النوم 〛*  
> *╯────────────···*  
> *╮───[ اوامـر الــتــصـﻤـيـم ]───✧*
> *┤ 〚 .تصميم1 〛*
> *┤ 〚 .تصميم2 〛*  
> *┤ 〚 .تصميم3 〛*  
> *┤ 〚 .تصميم4 〛*
> *┤ 〚 .زخرفه 〛*  
> *┤ 〚 .خط 〛*
> *╯────────────···*  
> *╮──[ اوامـر الــتـحـوﯾـلات ]──✧* 
> *┤ 〚 .حقوق 〛* 
> *┤ 〚 .ملصق 〛*  
> *┤ 〚 .مكس 〛*      
> *┤ 〚 .لستيكر 〛*  
> *┤ 〚 .لصوره 〛* 
> *┤ 〚 .لفديو 〛* 
> *┤ 〚 .لجيف 〛* 
> *┤ 〚 .لصوت 〛*   
> *┤ 〚 .لريك 〛* 
> *┤ 〚 .لانمي 〛*  
> *┤ 〚 .لكرتون 〛* 
> *┤ 〚 .لجيف 〛* 
> *┤ 〚 .لرابط 〛*  
> *┤ 〚 .اختصار 〛* 
> *┤ 〚 .حذف-الخلفية 〛* 
> *┤ 〚 .باركود 〛* 
> *┤ 〚 .اقرء 〛* 
> *┤ 〚 .نسخ 〛*    
> *┤ 〚 .ترجم 〛*    
> *╯────────────···* 
 *╮───[ اوامـر الالـعـاب ]───✧*
> *┤ 〚 .ألعاب 〛*  
> *┤ 〚 .ثقافة 〛*  
> *┤ 〚 .لوجوهات 〛*  
> *┤ 〚 .أحزر 〛*  
> *┤ 〚 .ألغاز 〛*  
> *┤ 〚 .إيموجي 〛*  
> *┤ 〚 .أنميات 〛*  
> *┤ 〚 .سؤال_أنمي 〛*  
> *┤ 〚 .رياضة 〛*  
> *┤ 〚 .كرة 〛*  
> *┤ 〚 .ذكاء 〛*  
> *┤ 〚 .علم 〛*  
> *┤ 〚 .عين 〛*  
> *┤ 〚 .فكك 〛*  
> *┤ 〚 .كت 〛*  
> *┤ 〚 .دين 〛*  
> *┤ 〚 .مسابقة 〛*  
> *┤ 〚 .مسابقة-صور 〛*  
> *╯────────────···*
> *╮───[ اوامـر الـجـيـﻤـز ]───✧*
> *┤ 〚 .اكس_او 〛*   
> *┤ 〚 .كنسل 〛*  
> *┤ 〚 .تحدي 〛*  
> *┤ 〚 .لاعبني 〛*   
> *┤ 〚 .جنيه 〛*   
> *┤ 〚 .المتفجرات 〛*   
> *┤ 〚 .سلم-وثعبان 〛*   
> *┤ 〚 .شطرنج 〛*   
> *┤ 〚 .رياضيات 〛*
> *╯────────────···*   
> *╮────────────···*    
> *┤ 〚 .بلاك-جاك 〛*    
> *┤ 〚 .دوران 〛*    
> *┤ 〚 .رهان 〛*    
> *┤ 〚 .روليت 〛*    
> *┤ 〚 .روليت_حظر 〛*    
> *┤ 〚 .مغامره 〛*    
> *╯────────────···*   
> *╮───[ اوامـر الـﻤـرح ]───✧*
> *┤ 〚 .هل 〛*   
> *┤ 〚 .كومنت 〛*  
> *┤ 〚 .تغريده 〛*  
> *┤ 〚 .بايدن 〛*
> *╯────────────···*   
> *╮────────────···*     
> *┤ 〚 .جميل 〛* 
> *┤ 〚 .جنس 〛* 
> *┤ 〚 .صفع 〛*  
> *┤ 〚 .شاذ 〛*      
> *┤ 〚 .شاذ2 〛*  
> *┤ 〚 .ليزبيان 〛*   
> *┤ 〚 .ليسبين 〛*   
> *┤ 〚 .شرموطة 〛* 
> *┤ 〚 .عاهرة 〛*    
> *┤ 〚 .شرموط 〛*   
> *┤ 〚 .رجوله 〛*   
> *┤ 〚 .انوثه 〛*   
> *┤ 〚 .مراهق 〛* 
> *┤ 〚 .مراهقة 〛* 
> *┤ 〚 .خلبوص 〛* 
> *┤ 〚 .خلبوصة 〛*   
> *┤ 〚 .فاشل 〛* 
> *┤ 〚 .فاشلة 〛*  
> *┤ 〚 .فار 〛* 
> *┤ 〚 .جبن 〛* 
> *╯────────────···* 
> *╮────────────···*     
> *┤ 〚 .تهكير 〛* 
> *┤ 〚 .تفجير 〛* 
> *╯────────────···*
> *╮────────────···*     
> *┤ 〚 .اسئلني 〛* 
> *┤ 〚 .اسئلة 〛* 
> *┤ 〚 .أختبرني 〛* 
> *┤ 〚 .احرجني 〛* 
> *┤ 〚 .تحدانى 〛* 
> *┤ 〚 .الصراحه 〛* 
> *┤ 〚 .لوخيروك 〛* 
> *┤ 〚 .اقتباس 〛* 
> *┤ 〚 .اقتباس2 〛* 
> *┤ 〚 .شعر 〛* 
> *┤ 〚 .حكمة 〛* 
> *┤ 〚 .نصيحة 〛* 
> *┤ 〚 .بوستات 〛* 
> *┤ 〚 .غزل 〛* 
> *┤ 〚 .هبد 〛* 
> *┤ 〚 .تجرؤ 〛* 
> *┤ 〚 .العدوان 〛* 
> *┤ 〚 .فلسطين 〛* 
> *╯────────────···*
> *╮────────────···*     
> *┤ 〚 .اصحاب 〛* 
> *┤ 〚 .الحب 〛* 
> *┤ 〚 .قلب 〛* 
> *┤ 〚 .بيحبني 〛* 
> *┤ 〚 .خطوبه 〛* 
> *┤ 〚 .زواج 〛* 
> *┤ 〚 .طلاق 〛* 
> *┤ 〚 .بيكرهني 〛* 
> *┤ 〚 .بيبضني 〛* 
> *┤ 〚 .قتل 〛* 
> *┤ 〚 .جريمه 〛* 
> *┤ 〚 .اعدام 〛* 
> *┤ 〚 .حياه 〛* 
> *┤ 〚 .وفاتي 〛* 
> *╯────────────···* 
> *╮───[ اوامـر الــذکـاء]───✧*
> *┤ 〚 .بوت 〛*
> *┤ 〚 .تربو 〛*
> *┤ 〚 .شات 〛*  
> *┤ 〚 .بلاك 〛*
> *┤ 〚 .سمسم 〛*  
> *┤ 〚 .تخيل 〛* 
> *┤ 〚 .ارسم 〛*  
> *┤ 〚 .احسب 〛* 
> *┤ 〚 .عمري 〛*
> *╯────────────···*
> *╮───[  اوامـر التحميل ]───✧*
> *┤ 〚 .اغنيه 〛*
> *┤ 〚 .حملي 〛*  
> *┤ 〚 .ابحث 〛*  
> *┤ 〚 .يوتيوب 〛*
> *┤ 〚 .انستا 〛*  
> *┤ 〚 .تيك 〛*
> *┤ 〚 .صور-تيك 〛* 
> *┤ 〚 .بينترست 〛*  
> *┤ 〚 .صوره 〛* 
> *┤ 〚 .صور 〛* 
> *┤ 〚 .تصفح 〛* 
> *┤ 〚 .خلفيه 〛* 
> *┤ 〚 .خلفيات 〛* 
> *┤ 〚 .مود 〛* 
> *┤ 〚 .كروم 〛*      
> *┤ 〚 .ميديافاير 〛*  
> *┤ 〚 .مود 〛* 
> *┤ 〚 .بيك 〛* 
> *┤ 〚 .جيتهاب 〛*  
> *╯────────────···*
> *╮───[ اوامر الـبـحـث ]───✧*
> *┤ 〚 .ابحث 〛*  
> *┤ 〚 .جوجل 〛*    
> *┤ 〚 .جوجل-بلاي 〛*   
> *┤ 〚 .ويكيبيديا 〛*
> *┤ 〚 .ويكبيديا 〛*   
> *┤ 〚 .كيمياء 〛*
> *┤ 〚 .كتاب 〛*
> *┤ 〚 .اسم-الاغنيه 〛* 
> *┤ 〚 .كلمات 〛* 
> *┤ 〚 .انمي 〛*    
> *╯────────────···*
> *╮───[ اوامر الصوت ]───✧*
> *┤〚 .سنجاب 〛*
> *┤〚 .سلس 〛*
> *┤〚 .بطئ 〛*
> *┤〚 .الي 〛*
> *┤〚 .عكس 〛*
> *┤〚 .تسريع-بسيط 〛*
> *┤〚 .سريع 〛*
> *┤〚 .تحسين 〛*
> *┤〚 .منفوخ 〛*
> *┤〚 .عميق 〛*
> *┤〚 .عميق2 〛*
> *╯────────────···*
> *╮───[ اوامر الأﻋـضـاء ]───✧*
> *┤ 〚 .ابلاغ 〛*  
> *┤ 〚 .للمطور 〛*    
> *┤ 〚 .التفعيل 〛*   
> *┤ 〚 .تعريفي 〛*
> *┤ 〚 .تسجيل 〛*   
> *┤ 〚 .حذف-التسجيل 〛*
> *┤ 〚 .بروفايلي 〛*
> *┤ 〚 .لينكي 〛* 
> *┤ 〚 .اصلح 〛* 
> *┤ 〚 .تصليح 〛* 
> *┤ 〚 .تقييم 〛*    
> *┤ 〚 .الشخصيه 〛*    
> *╯────────────···*
> *╮───[ اوامــر الــبــنــك]───✧*
> *┤ 〚 .البنك 〛*
> *┤ 〚 .ايداع 〛*
> *┤ 〚 .سحب 〛*  
> *┤ 〚 .تحويل 〛*
> *╯────────────···* 
> *╮────────────···*    
> *┤ 〚 .اهداء 〛*  
> *┤ 〚 .عمل 〛*  
> *┤ 〚 .راتب 〛*  
> *┤ 〚 .عملات 〛*  
> *┤ 〚 .عملاتي 〛*  
> *┤ 〚 .تعدين 〛*  
> *┤ 〚 .تعدين2 〛*
> *┤ 〚 .هجوم 〛*  
> *┤ 〚 .صندوق 〛*  
> *┤ 〚 .يومي 〛* 
> *┤ 〚 .اسبوعي 〛*
> *╯────────────···* 
> *╮────────────···*    
> *┤ 〚 .المحفظة 〛*  
> *┤ 〚 .الرتبة 〛* 
> *┤ 〚 .المتصدرين 〛*   
> *╯────────────···* 
> *╮────────────···*    
> *┤ 〚 .تسوق 〛*  
> *┤ 〚 .شراء 〛* 
> *┤ 〚 .شراء-الماس 〛*  
> *┤ 〚 .شراء_الدجاج 〛*  
> *┤ 〚 .لجواهر 〛*
> *╯────────────···* 
 ✪┋𝐁𝐘┋❥ 𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓 ┋✪`;

    await conn.sendMessage(m.chat, { image: { url: img }, caption: str, mentions: [m.sender] }, { quoted: global.fcontact });
};

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor((ms % 3600000) / 60000);
    let s = Math.floor((ms % 60000) / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = /^(10)$/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = false;

export default handler;
