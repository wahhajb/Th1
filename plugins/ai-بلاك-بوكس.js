import fetch from 'node-fetch';

async function translateToArabic(text) {
  const response = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=' + encodeURIComponent(text));
  const result = await response.json();
  return result[0][0][0];
}

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw "> *مرحباً، أنا خدمة `Black Box Ai`، خدمة قادرة على برمجة الأكواد بجميع اللغات وحل مشاكل البرمجة، على سبيل المثال :*\n\n- #بلاك كيفية إنشاء صفحة تسجيل دخول باستخدام `html`";

  try {
    var apii = await fetch(`https://zoro-api-zoro-bot-5b28aebf.koyeb.app/api/blackbox?text=${encodeURIComponent(text)}`);
    var res = await apii.json();

    if (res.result && text.trim().length > 0) {
      const translatedResult = await translateToArabic(res.result); // ترجم الرد للعربية
      await conn.sendFile(m.chat, 'https://telegra.ph/file/34bd1de01d59fb18833cc.jpg', 'image.png', translatedResult, m, { caption: text });
    } else if (res.result) {
      const translatedResult = await translateToArabic(res.result); // ترجم الرد للعربية
      await conn.sendFile(m.chat, 'https://telegra.ph/file/34bd1de01d59fb18833cc.jpg', translatedResult, m);
    } else {
      throw '> *خطأ ⚠️*';
    }

  } catch (error) {
    console.error(error);
    throw '> *وقت الصمت 🤫🧏🏻‍♂️ (خطأ في واجهة برمجة التطبيقات)*';
  }
};

handler.command = ['bb', 'blackbox', 'iabox', 'بلاك'];
handler.help = ['blackbox'];
handler.tags = ['أدوات'];
export default handler;

// بواسطة سعد - @nm9h
// شكراً لواجهة برمجة التطبيقات Zoro