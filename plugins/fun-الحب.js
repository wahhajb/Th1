const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  const loveMessages = [
    "هذا حب مشتعل وعاطفي! اذهب وقل له الآن!",
    "يبدو أن هناك شرارة بينكما. جرب!",
    "قد يكون هناك شيء خاص هنا. قدم لها فرصة!",
    "همم، الحب في الجو. ربما حان الوقت لشرب فنجان قهوة معًا!",
    "النجوم تشير إلى وجود رومانسية محتملة. قدم خطوة!",
    "قد تكون قصة حب رائعة في انتظاركما لتكون مكتوبة.",
    "لا تستخفوا بقوة الوقت والصبر في الحب. أشياء كبيرة يمكن أن تحدث.",
    "تذكروا أن الحب رحلة، وكل خطوة قيمة، بغض النظر عن المسافة.",
    "الروابط القوية يمكن أن تتحول إلى علاقات جميلة. استمروا في الاستكشاف!",
    "الحب الحقيقي يتطلب في كثير من الأحيان الوقت والجهد. لا تستسلموا!",
  ];
  const notSoHighLoveMessages = [
    "أحيانًا، الصداقة هي بداية لشيء جميل، لكنها لا تتحول دائمًا إلى حب.",
    "الحب ليس كل شيء، الصداقة أيضاً رائعة! احتفظوا بصداقتكم الخاصة.",
    "تذكروا أن أفضل العلاقات تبدأ بصداقة جيدة. لا تستهينوا بارتباطكم!",
    "أحيانًا، الحب يمكن أن ينمو مع مرور الوقت. استمروا في تعزيز اتصالكم!",
    "الحياة مليئة بالمفاجآت، من يعلم ما يحمله المستقبل! لا تفقدوا الأمل.",
    "على الرغم من أن الحب قد لا يزهر كما كنتم تتوقعون، اتصالكم ما زال قيمًا.",
    "القلوب قد تستغرق وقتًا للتزامن، لكن ذلك لا يقلل من أهمية تواجدكما معًا.",
    "على الرغم من تحديات الحب، صداقتكم هي هدية تستحق الاحتفال.",
    "الوقت يمكن أن يكشف عن أشياء مذهلة. لنستمر في الاستكشاف معًا!",
    "الحياة مليئة بالمفاجآت غير المتوقعة. دعونا نظل مفتوحين للفرص!",
  ];
  const loveDescription = isHighLove ? "لديكم اتصال عميق وحب" : "لديكم اتصال خاص، ولكن نسبة حبكم تبلغ";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const loveMessage = isHighLove ? getRandomMessage(loveMessages) : getRandomMessage(notSoHighLoveMessages);
  const response =
    `━━━━━━━⬣ *الحب* ⬣━━━━━━━\n` +
    `*❥ في عالم الحب، ${text} و @${m.sender.split('@')[0]} ${loveDescription} ${lovePercentage}% من 100%*\n\n` +
    `*❥ ${loveMessage}*\n` +
    `━━━━━━━⬣ *الحب* ⬣━━━━━━━`       

  async function loading() {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `*💞 ¡جاري حساب النسبة! 💞*`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['love'];
handler.tags = ['fun'];
handler.command = /^(الحب|نسبه)$/i;
export default handler;