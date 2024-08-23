let handler = async (m, { conn, args, usedPrefix, command }) => {
 const taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
  
 conn.relayMessage(m.chat, {
  viewOnceMessage: {
   message: {
    interactiveMessage: {
     header: {
      title: `*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
*🐉✬⃝╿↵ مرحــبـا ➻${m.pushName}*
*⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢*
🌄│قسم الخلفيات│🌌`
     },
     body: {
      text: ''
     },
     nativeFlowMessage: {
      buttons: [
       {
        name: 'single_select',
        buttonParamsJson: JSON.stringify({
         title: 'الخلفيات',
         sections: [
          {
           title: 'قسم الخلفيات والصور',
           highlight_label: 'new',
           rows: [
{ header: 'الخلفيات', title: '🌅 ❛╏خلفيات انمي', description: '', id: '.منوع' },
{ header: 'الخلفيات', title: '🎥 ❛╏خلفيات انميشن', description: '', id: '.انميشن' },
{ header: 'الخلفيات', title: '🎭 ❛╏خلفيات شخصيات انمي حقيقية', description: '', id: '.حقيقي' },
{ header: 'الخلفيات', title: '🔥 ❛╏خلفيات انمي مثيرة', description: '', id: '.مراتي' },
{ header: 'الخلفيات', title: '💃 ❛╏خلفيات بنات انمي مثيرة', description: '', id: '.بنت' },
{ header: 'الخلفيات', title: '👦 ❛╏خلفيات اولاد', description: '', id: '.خلفية-اولاد' },
{ header: 'الخلفيات', title: '👧 ❛╏خلفيات بنات', description: '', id: '.خلفية-بنات' },
{ header: 'الخلفيات', title: '🌌 ❛╏خلفيات مانهوو', description: '', id: '.مانهوو' },
{ header: 'الخلفيات', title: '🤡 ❛╏خلفيات كوسبلاي', description: '', id: '.خلفيه-كوسبلاي' },
{ header: 'الخلفيات', title: '💍 ❛╏خلفيات بنات انمي للزواج', description: '', id: '.جوزني' },
{ header: 'الخلفيات', title: '👫 ❛╏خلفيات تطقيم للولاد والبنات', description: '', id: '.تطقيم' },
{ header: 'الخلفيات', title: '👕 ❛╏خلفيات تطقيم للأولاد', description: '', id: '.طقم-اولاد' },
{ header: 'الخلفيات', title: '👗 ❛╏خلفيات تطقيم للبنات', description: '', id: '.طقم_بنات' },
{ header: 'الخلفيات', title: '📺 ❛╏خلفيات كرتون', description: '', id: '.كرتون' },
{ header: 'الخلفيات', title: '⚽ ❛╏خلفيات كريستيانو رونالدو', description: '', id: '.كريستيانو' },
{ header: 'الخلفيات', title: '🏅 ❛╏خلفيات ليو ميسي', description: '', id: '.ليو' },
{ header: 'الخلفيات', title: '🐱 ❛╏خلفيات قطط', description: '', id: '.قط' },
{ header: 'الخلفيات', title: '🐾 ❛╏خلفيات قطط 2', description: '', id: '.قطة' },
{ header: 'الخلفيات', title: '🐶 ❛╏خلفيات كلاب', description: '', id: '.كلب' },
{ header: 'الخلفيات', title: '🏔️ ❛╏خلفيات جبال', description: '', id: '.جبل' },
{ header: 'الخلفيات', title: '🚀 ❛╏خلفيات للفضاء', description: '', id: '.فضاء' },
{ header: 'الخلفيات', title: '🪐 ❛╏خلفيات للكواكب', description: '', id: '.كوكب' },
{ header: 'الخلفيات', title: '🎮 ❛╏خلفيات ببجي', description: '', id: '.ببجي' },
{ header: 'الخلفيات', title: '🕹️ ❛╏خلفيات جيمينج', description: '', id: '.جيمينج' },
{ header: 'الخلفيات', title: '🕶️ ❛╏خلفيات علي الاستايل', description: '', id: '.استايل' },
{ header: 'الخلفيات', title: '👔 ❛╏خلفيات علي الاستايل 2', description: '', id: '.استايل2' },
{ header: 'الخلفيات', title: '📱 ❛╏خلفيات للبروفايل', description: '', id: '.بروفايل-عشوائي' },
{ header: 'الخلفيات', title: '💻 ❛╏خلفيات للموبايل', description: '', id: '.خلفية-موبايل' },
{ header: 'الخلفيات', title: '🌸 ❛╏خلفيات كيوت', description: '', id: '.بنتول' },
{ header: 'الخلفيات', title: '🛸 ❛╏خلفيات درايمون', description: '', id: '.درايمون' },
{ header: 'الخلفيات', title: '☕ ❛╏خلفيات كوفي', description: '', id: '.كوفي' },
{ header: 'الخلفيات', title: '🍵 ❛╏خلفيات قهوه', description: '', id: '.قهوه' },
{ header: 'الخلفيات', title: '💻 ❛╏خلفيات تكنولوجيا', description: '', id: '.تكنولوجيا' },
{ header: 'الخلفيات', title: '👾 ❛╏خلفيات هكر', description: '', id: '.هكر' },
{ header: 'الخلفيات', title: '🚗 ❛╏خلفيات سيارات', description: '', id: '.عربية' },
{ header: 'الخلفيات', title: '🚙 ❛╏خلفيات سيارات 2', description: '', id: '.عربية2' },
{ header: 'الخلفيات', title: '🏍️ ❛╏خلفيات موتوسيكلات', description: '', id: '.موتسيكل' },
{ header: 'الخلفيات', title: '🎲 ❛╏خلفيات عشوئية', description: '', id: '.عشوائي' },
{ header: 'الخلفيات', title: '🎉 ❛╏ميمز', description: '', id: '.ميمز' },
           ]
          }
         ]
        }),
        messageParamsJson: ''
       }
      ]
     }
    }
   }
  }
 }, {})
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['الخلفيات']

export default handler