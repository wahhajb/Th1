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
🌄│قسم الانمي│🏞️│والخلفيات│🎥│والفيديوهات│🌌`
     },
     body: {
      text: ''
     },
     nativeFlowMessage: {
      buttons: [
       {
        name: 'single_select',
        buttonParamsJson: JSON.stringify({
         title: 'الانمي',
         sections: [
          {
           title: 'الانمي',
           highlight_label: 'new',
           rows: [
{ header: 'صور انمي', title: '🎨 ❛╏فانرت', description: '', id: '.فانرت' },
{ header: 'صور انمي', title: '💥 ❛╏هوسبو', description: '', id: '.هوسبو' },
{ header: 'صور انمي', title: '🌟 ❛╏كانا', description: '', id: '.كانا' },
{ header: 'صور انمي', title: '💥 ❛╏ميغومين', description: '', id: '.ميغومين' },
{ header: 'صور انمي', title: '🐾 ❛╏نيكو', description: '', id: '.نيكو' },
{ header: 'صور انمي', title: '🎯 ❛╏شوتا', description: '', id: '.شوتا' },
{ header: 'صور انمي', title: '💍 ❛╏وايف', description: '', id: '.وايف' },
{ header: 'صور انمي', title: '🌸 ❛╏الينا', description: '', id: '.الينا' },
{ header: 'صور انمي', title: '❤️ ❛╏مراتي', description: '', id: '.مراتي' },
{ header: 'صور انمي', title: '👧 ❛╏بنت', description: '', id: '.بنت' },
{ header: 'صور انمي', title: '👰 ❛╏وايفو', description: '', id: '.وايفو' },
{ header: 'صور انمي', title: '🍭 ❛╏لولي', description: '', id: '.لولي' },
{ header: 'صور انمي', title: '🍬 ❛╏لولي2', description: '', id: '.لولي2' },
{ header: 'صور انمي', title: '🎭 ❛╏كوسبلاي', description: '', id: '.كوسبلاي' },
{ header: 'صور انمي', title: '🌸 ❛╏ساكورا', description: '', id: '.ساكورا' },
{ header: 'صور انمي', title: '⚔️ ❛╏ساسكي', description: '', id: '.ساسكي' },
{ header: 'صور انمي', title: '🎨 ❛╏ساجيري', description: '', id: '.ساجيري' },
{ header: 'صور انمي', title: '🌿 ❛╏نيزوكو', description: '', id: '.نيزوكو' },
{ header: 'صور انمي', title: '🍥 ❛╏ناروتو', description: '', id: '.ناروتو' },
{ header: 'صور انمي', title: '💛 ❛╏ميناتو', description: '', id: '.ميناتو' },
{ header: 'صور انمي', title: '🎤 ❛╏ميكو', description: '', id: '.ميكو' },
{ header: 'صور انمي', title: '⚔️ ❛╏ميكاسا', description: '', id: '.ميكاسا' },
{ header: 'صور انمي', title: '💀 ❛╏مادارا', description: '', id: '.مادارا' },
{ header: 'صور انمي', title: '🔪 ❛╏جوزو', description: '', id: '.جوزو' },
{ header: 'صور انمي', title: '🎭 ❛╏كوترو', description: '', id: '.كوترو' },
{ header: 'صور انمي', title: '👹 ❛╏كانيكي', description: '', id: '.كانيكي' },
{ header: 'صور انمي', title: '🎻 ❛╏كاوري', description: '', id: '.كاوري' },
{ header: 'صور انمي', title: '🔥 ❛╏كاجيرو', description: '', id: '.كاجيرو' },
{ header: 'صور انمي', title: '🦸‍♂️ ❛╏كاجا', description: '', id: '.كاجا' },
{ header: 'صور انمي', title: '🧛 ❛╏ايتوري', description: '', id: '.ايتوري' },
{ header: 'صور انمي', title: '🌙 ❛╏ايتاتشي', description: '', id: '.ايتاتشي' },
{ header: 'صور انمي', title: '🔫 ❛╏ايسوزي', description: '', id: '.ايسوزي' },
{ header: 'صور انمي', title: '🌸 ❛╏اينوري', description: '', id: '.اينوري' },
{ header: 'صور انمي', title: '💜 ❛╏هيناتا', description: '', id: '.هيناتا' },
{ header: 'صور انمي', title: '🔥 ❛╏هيستيا', description: '', id: '.هيستيا' },
{ header: 'صور انمي', title: '❄️ ❛╏ايميليا', description: '', id: '.ايميليا' },
{ header: 'صور انمي', title: '🤖 ❛╏ايبا', description: '', id: '.ايبا' },
{ header: 'صور انمي', title: '🗡️ ❛╏ايرزا', description: '', id: '.ايرزا' },
{ header: 'صور انمي', title: '💣 ❛╏ديدارا', description: '', id: '.ديدارا' },
{ header: 'صور انمي', title: '🎀 ❛╏شيتوجي', description: '', id: '.شيتوجي' },
{ header: 'صور انمي', title: '🍙 ❛╏تشيهو', description: '', id: '.تشيهو' },
{ header: 'صور انمي', title: '⚡ ❛╏بوروتو', description: '', id: '.بوروتو' },
{ header: 'صور انمي', title: '🔧 ❛╏أيوزاوا', description: '', id: '.أيوزاوا' },
{ header: 'صور انمي', title: '⚔️ ❛╏اسونا', description: '', id: '.اسونا' },
{ header: 'صور انمي', title: '❄️ ❛╏اناا', description: '', id: '.اناا' },
{ header: 'صور انمي', title: '💼 ❛╏اكياما', description: '', id: '.اكياما' },
{ header: 'صور انمي', title: '🚀 ❛╏اكيرا', description: '', id: '.اكيرا' }
           ]
          }
         ]
        }),
        messageParamsJson: ''
       },
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
       },
       {
        name: 'single_select',
        buttonParamsJson: JSON.stringify({
         title: 'الفيديوهات',
         sections: [
          {
           title: 'قسم الفيديوهات',
           highlight_label: 'new',
           rows: [
{ header: 'الفيديوهات', title: '🎬 ❛╏مقاطع أنمي', description: '', id: '.ايدت-انمي' },
{ header: 'الفيديوهات', title: '🎞️ ❛╏مقاطع انمي 2', description: '', id: '.انمي2' },
{ header: 'الفيديوهات', title: '📺 ❛╏مقاطع انمي 3', description: '', id: '.ايديت1' },
{ header: 'الفيديوهات', title: '🎥 ❛╏مقاطع انمي 4', description: '', id: '.ايديت5' },
{ header: 'الفيديوهات', title: '📱 ❛╏استوريهات انمي', description: '', id: '.ستيت-انمى' },
{ header: 'الفيديوهات', title: '🐉 ❛╏مقاطع دراغون بول', description: '', id: '.دراغون-بول' },
{ header: 'الفيديوهات', title: '⚽ ❛╏مقاطع اهداف', description: '', id: '.اهداف' },
{ header: 'الفيديوهات', title: '🐐 ❛╏مقاطع الدون كريستيانو رونالدو', description: '', id: '.ايديت3' },
{ header: 'الفيديوهات', title: '🎵 ❛╏مقاطع موسيقي', description: '', id: '.ايديت-اغنيه' },
{ header: 'الفيديوهات', title: '🚗 ❛╏مقاطع سيارات', description: '', id: '.ايديت2' },
{ header: 'الفيديوهات', title: '👫 ❛╏مقاطع لصديقك', description: '', id: '.لصديق' },
{ header: 'الفيديوهات', title: '🎭 ❛╏مقاطع منوعة', description: '', id: '.ايديت4' },
{ header: 'الفيديوهات', title: '🎡 ❛╏مقاطع مختلط', description: '', id: '.ايديت-مختلط' }
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
handler.command = ['الانمي', 'الفيديوهات']

export default handler