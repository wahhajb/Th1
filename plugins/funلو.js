import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg

var handler = async (m, { conn, usedPrefix }) => {
const tips = [
 'لو خيروك أن تلبس ملابس الغوص وتذهب بها إلى العمل لمدة يوم كامل أو أن ترتدي ملابس جدتك.',
 'لو خيروك أن تصرخ في الطريق أو أن تصفع أول شخص تلتقي به.',
 'لو خيروك بين أن تتناول الشوكولا التي تحبها ولكن بشرط أن تضيف عليها رشة ملح مع القليل من عصير الليمون، أو أن تأكل ليمونة كاملة.',
 'لو خيروك بين أن ترقص على سطح المنزل أو أن تغني وأنت واقف على نافذتك.',
 'لو خيروك أن تضع لبانة على شعرك أو أن تأكل لبانة كانت بفم شخص غيرك.',
 'لو خيروك بين تنظيف شعرك بسائل غسيل الأطباق، أو أن تستخدم كريم الأساس حتى تغسل الأطباق.',
 'لو خيروك أن تضع وجهك بالطحين أو أن تأكل فص ثوم.',
 'لو خيروك بين اللعب مع الأطفال لمدة طويلة أو أن تجلس وحيدًا لمدة 24 ساعة دون فعل أي شيء.',
 'لو خيروك بحلق شعرك كله أو أن تلونه بلون بنفسجي.',
 'لو خيروك أن تقص شعر أخيك وهو نائم أو أن ترتدي ملابس أخيك الصغير وتخرج بها.',
 'لو خيروك بين أن تضيف البرتقال إلى طبق السلطة أو أن تضيف البطاطا لطبق الفاكهة.',
 'لو خيروك بين تناول الثلج أو شرب ماء ساخن.',
 'لو خيروك بين أكل قرن من الفلفل الحار أو أن تأكل بصلة كاملة.',
 'لو خيروك أن تكون شخص يحبه الجميع أو أن يخشاه الجميع.',
 'لو خيروك أن تعيش وحيدًا على سطح القمر أو أن تعيش على سطح المريخ وحيدًا.',
 'لو خيروك بين أمك وأبيك.',
 'لو خيروك بأن تبقى مع حبيبتك مدى الحياة أو أن تبقى مع أختك.',
 'لو خيروك بأن تسافر إلى المالديف رحلة سياحية ولكن تستطيع فقط أن تأخذ معك شخص واحد، فمن تختار؟.',
 'لو خيروك أن تشتري هدية باهظة الثمن لأحد أفراد عائلتك فلمن تعطيها؟.',
 'لو خيروك بين الحب والمال ماذا تختار؟.',
 'لو خيروك بين أن تتزوج شخص تحبه أو أن تتزوج الشخص الذي سيحقق لك أحلامك.',
 'لو خيروك بين أن تأخذ مليون دولار، أو أن تفشي سر أحد أصدقائك.',
 'لو خيروك أن ترقص مع فتاة أمام زوجتك أو حبيبتك أو أن تلبس ملابس فتاة.',
 'لو خيروك أن تغسل سيارتك بصابون الأطباق أو أن تغسل أطباقك بسائل تنظيف السيارة.',
 'لو خيروك أن تأكل طعام قطط أو أن تشرب حليب مجفف.',
 'لو خيروك أن تمشي في حذاء ضيق جدًا لمدة يوم كامل أو أن ترتدي ملابس مبللة لمدة يوم كامل.',
 'لو خيروك أن تنام على أرضية صلبة لمدة أسبوع أو أن تنام بدون بطانية لمدة أسبوع.',
 'لو خيروك أن تستحم بماء بارد جدًا أو أن تغتسل بماء ساخن جدًا.',
 'لو خيروك أن تظل بلا طعام ليوم كامل أو أن تظل بلا نوم ليوم كامل.',
 'لو خيروك أن تبقى بلا هاتف لمدة أسبوع أو أن تبقى بلا إنترنت لمدة أسبوع.',
 'لو خيروك أن تعتزل مشاهدة التلفاز لمدة شهر أو أن تعتزل استخدام الكمبيوتر لمدة شهر.',
 'لو خيروك أن تأكل بيتزا باردة أو أن تأكل برغر محروق.',
 'لو خيروك أن تسافر إلى بلد لا تتحدث لغته أو أن تعيش مع أشخاص لا يتحدثون لغتك.',
 'لو خيروك أن تكون رئيس شركة كبيرة لكن تعمل لمدة 80 ساعة أسبوعيًا أو أن تكون موظفًا عاديًا لكن تعمل 30 ساعة أسبوعيًا.',
 'لو خيروك أن تعيش في بيت صغير جميل في الريف أو أن تعيش في شقة كبيرة مزدحمة في المدينة.',
 'لو خيروك أن تذهب إلى حفلة مملة أو أن تبقى في المنزل طوال الليل وحدك.',
 'لو خيروك أن تقضي يومًا بدون طعام أو أن تقضي يومًا بدون ماء.',
 'لو خيروك أن تكون قادرًا على الطيران أو أن تكون قادرًا على الاختفاء.',
 'لو خيروك أن تكون أغنى شخص في العالم أو أن تكون أذكى شخص في العالم.',
 'لو خيروك أن تعيش في غابة لمدة أسبوع أو أن تعيش في صحراء لمدة أسبوع.',
 'لو خيروك أن تكون لك القدرة على قراءة أفكار الآخرين أو أن تكون لك القدرة على التحدث إلى الحيوانات.',
 'لو خيروك أن تكون مشغولًا جدًا طوال الوقت أو أن تكون مللًا جدًا طوال الوقت.',
 'لو خيروك أن تملك سيارة رياضية سريعة لكن لا تستطيع أن تقودها بسرعة أو أن تملك سيارة عادية لكن تستطيع أن تقودها بسرعة.',
 'لو خيروك أن تأكل شيئًا لا تحبه يوميًا أو أن تأكل طعامًا تحبه لكن مرة في الشهر فقط.',
 'لو خيروك أن تعيش بدون موسيقى أو أن تعيش بدون أفلام.',
 'لو خيروك أن تكون مشهورًا لكن مكروهًا أو أن تكون غير معروف لكن محبوبًا.',
 'لو خيروك أن ترتدي ملابس الشتاء في الصيف أو أن ترتدي ملابس الصيف في الشتاء.',
 'لو خيروك أن تذهب إلى حفلة بدون صديق أو أن تذهب إلى مطعم بدون هاتفك.',
 'لو خيروك أن تتناول طعامًا غير صحي لكن لذيذًا أو أن تتناول طعامًا صحيًا لكن ليس لذيذًا.',
 'لو خيروك أن تكون فنانًا مشهورًا لكن فقيرًا أو أن تكون غنيًا لكن غير معروف.',
 'لو خيروك أن تعيش في بيت على البحر لكن دائمًا عاصف أو أن تعيش في بيت في الجبال لكن دائمًا بارد.',
 'لو خيروك أن تكون لديك القدرة على تغيير مظهرك كيفما تشاء أو أن تكون لديك القدرة على تغيير صوتك كيفما تشاء.',
 'لو خيروك أن تكون لديك القدرة على التحدث بكل اللغات أو أن تكون لديك القدرة على العزف على كل الآلات الموسيقية.',
 'لو خيروك أن تكون لك القدرة على السفر عبر الزمن إلى الماضي أو إلى المستقبل.',
 'لو خيروك أن تكون لديك القدرة على البقاء شابًا إلى الأبد أو أن تكون لديك القدرة على أن تصبح أي شخص تريد في أي وقت.',
 'لو خيروك أن تعيش في عالم بدون كهرباء أو في عالم بدون ماء.',
 'لو خيروك أن تتناول الأكل مع عدوك أو أن تتناول الأكل بمفردك.',
 'لو خيروك أن تعمل في وظيفة تحبها لكن براتب قليل أو أن تعمل في وظيفة تكرهها لكن براتب كبير.',
 'لو خيروك أن تقرأ كتابًا مملًا أو أن تشاهد فيلمًا مملًا.',
 'لو خيروك أن تسافر في رحلة طويلة لكن ممتعة أو أن تسافر في رحلة قصيرة لكن مملة.',
 'لو خيروك أن تعيش بدون أصدقاء أو أن تعيش بدون عائلة.',
 'لو خيروك أن تكون مشلولًا لكن ذكيًا أو أن تكون قويًا لكن غبيًا.',
 'لو خيروك أن تعيش في عالم مليء بالزومبي أو في عالم مليء بالروبوتات.',
 'لو خيروك أن تكون لديك القدرة على إيقاف الوقت أو على تسريع الوقت.',
 'لو خيروك أن تعيش بدون موسيقى أو أن تعيش بدون أفلام.',
 'لو خيروك أن تعيش في منزل قديم لكنه جميل أو في منزل جديد لكنه قبيح.',
 'لو خيروك أن تكون لديك القدرة على التحدث مع الحيوانات أو أن تكون لديك القدرة على التحدث بكل اللغات.',
 'لو خيروك أن تعيش في عالم مليء بالأشرار أو في عالم مليء بالأشباح.',
 'لو خيروك أن تكون لديك القدرة على الطيران أو أن تكون لديك القدرة على الاختفاء.',
 'لو خيروك أن تكون أغنى شخص في العالم أو أن تكون أذكى شخص في العالم.',
 'لو خيروك أن تعيش في غابة لمدة أسبوع أو أن تعيش في صحراء لمدة أسبوع.',
 'لو خيروك أن تكون لديك القدرة على قراءة أفكار الآخرين أو أن تكون لديك القدرة على التحدث إلى الحيوانات.',
 'لو خيروك أن تكون مشغولًا جدًا طوال الوقت أو أن تكون مللًا جدًا طوال الوقت.',
 'لو خيروك أن تملك سيارة رياضية سريعة لكن لا تستطيع أن تقودها بسرعة أو أن تملك سيارة عادية لكن تستطيع أن تقودها بسرعة.',
 'لو خيروك أن تأكل شيئًا لا تحبه يوميًا أو أن تأكل طعامًا تحبه لكن مرة في الشهر فقط.',
 'لو خيروك أن تعيش بدون موسيقى أو أن تعيش بدون أفلام.',
 'لو خيروك أن تكون مشهورًا لكن مكروهًا أو أن تكون غير معروف لكن محبوبًا.',
 'لو خيروك أن ترتدي ملابس الشتاء في الصيف أو أن ترتدي ملابس الصيف في الشتاء.',
 'لو خيروك أن تذهب إلى حفلة بدون صديق أو أن تذهب إلى مطعم بدون هاتفك.',
 'لو خيروك أن تتناول طعامًا غير صحي لكن لذيذًا أو أن تتناول طعامًا صحيًا لكن ليس لذيذًا.',
 'لو خيروك أن تعيش في عالم بدون تكنولوجيا أو في عالم بدون فنون.',
'لو خيروك أن تعيش بدون هاتف ذكي أو بدون تلفاز.',
'لو خيروك أن تكون رئيسًا للدولة أو أن تكون قائد فريق كرة قدم.',
'لو خيروك أن تعيش في مكان مزدحم ولكن به الكثير من الأصدقاء أو في مكان هادئ ولكنك وحدك.',
'لو خيروك أن تعتني بمزرعة كبيرة أو أن تدير مشروعًا تجاريًا.',
'لو خيروك أن تكون لديك القدرة على تغيير ماضيك أو تغيير مستقبلك.',
'لو خيروك أن تعيش في قصر فخم لكن وحيدًا أو أن تعيش في بيت صغير ولكنك محاط بالأحباء.',
'لو خيروك أن تقضي يومًا كاملًا في العمل الشاق أو أن تقضي يومًا كاملًا في اللعب.',
'لو خيروك أن تكون لديك القدرة على قراءة الأفكار أو القدرة على التحدث بلغة حيوانات.',
'لو خيروك أن ترتدي زي غريب في مكان عام أو أن تأكل طعامًا غريبًا في مطعم.',
'لو خيروك أن تلتقي بشخص مشهور لكن في موقف محرج أو أن تلتقي بشخص عادي ولكن في موقف مميز.',
'لو خيروك أن تذهب إلى حفلة تنكرية بمظهر غريب أو أن تكون الوحيد الذي لا يرتدي زي تنكري في حفلة.',
'لو خيروك أن تبقى بلا تلفاز لمدة شهر أو أن تبقى بلا إنترنت لمدة شهر.',
'لو خيروك أن تأخذ دروسًا في شيء تحبه ولكن دون أجر أو أن تأخذ دروسًا في شيء تكرهه ولكن بأجر جيد.',
'لو خيروك أن تتنزه في شوارع مزدحمة أو أن تذهب في رحلة إلى مكان بعيد لكن ممل.',
'لو خيروك أن تقضي ليلة في مخيم بدوي أو أن تقضيها في فندق فاخر.',
'لو خيروك أن تكون مشغولًا طوال الوقت لكن مبدعًا أو أن تكون فارغًا لكن غير مبدع.',
'لو خيروك أن تعمل في وظيفة تتطلب السفر الدائم أو في وظيفة تتطلب الجلوس في المكتب طوال الوقت.',
'لو خيروك أن تقضي يومًا كاملًا في تجربة جديدة أو أن تقضي يومًا كاملًا في روتينك المعتاد.',
'لو خيروك أن تعيش في بلد بارد طوال العام أو في بلد حار طوال العام.',
'لو خيروك أن تستمر في تعلم شيء جديد كل يوم أو أن تستمر في ممارسة مهارة قديمة.',
'لو خيروك أن تشتري شيئًا لنفسك أو أن تشتري شيئًا لأحد أحبائك.',
'لو خيروك أن تكون لديك القدرة على الغوص في أعماق البحر أو الطيران في السماء.',
'لو خيروك أن تكون لديك القدرة على رؤية المستقبل أو القدرة على تغيير الماضي.',
'لو خيروك أن تتعلم لغة جديدة أو أن تتقن مهارة جديدة.',
'لو خيروك أن تعيش بدون إنترنت ولكن في مكان مريح أو أن تعيش مع إنترنت ولكن في مكان غير مريح.',
'لو خيروك أن تكون لديك القدرة على التحدث مع كل الناس ولكنهم لا يفهمونك جيدًا أو أن تكون صامتًا ولكنهم يفهمونك تمامًا.',
 ] 
const randomImage = tips[Math.floor(Math.random() * tips.length)];
   var messa = await prepareWAMessageMedia({ image: { url:'https://telegra.ph/file/b67657676f1537a070de3.jpg' } }, { upload: conn.waUploadToServer });
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${randomImage}*\n*⊱─═⪨༻𓆩⚡𓆪༺⪩═─⊰*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "𝙱𝙾𝚃 𝙴𝙻 𝚃𝙰𝚁𝙱𝙾𝙾"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*⊱⪨༻𓆩〘💗 لـو خيروك 💗〙𓆪༺⪩⊰*",
            subtitle: "لو خيروك ",
            hasMediaAttachment: true, 
            imageMessage: messa.imageMessage, 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
               name: "quick_reply",
               buttonParamsJson:JSON.stringify({
                 "display_text":"التالي","id":".لو" 
                })
               }, 
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"الدعم\",\"id\":\".الدعم\"}"
               } 
              ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

} 
handler.tags = ['frasss'];
handler.command = ['لو-خيروك','لوخيروك','لو'];
export default handler;