import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } });

    const harley = 'https://telegra.ph/file/0e611ef0f5898f84e06ff.jpg';

    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: 'EL TARBOO ' },
                    body: {
                        text: `━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━
> ✪┋𝐁𝐘┋❥ 𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓┋✪
> 〔 الاشتراك المجاني┊ ˼‏ 🦂˹ ↶〕
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
            *بـيـ🦈ــبـو بــ🤖ــوت*
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
╗───¤﹝السعر ↶ 💵﹞
> •┊˹💬˼┊- رقم وهمي
> •┊˹💬˼┊- روبل بوت ارقام
> •┊˹💬˼┊- 250 نقطة دعمكم
╝───────────────¤
╗───¤﹝المميزات ↶ 🚀﹞
> •┊˹💬˼┊- اشتراك سرفر عام
> •┊˹💬˼┊- شغال 7/24
> •┊˹💬˼┊- البوت تحت التطوير
╝───────────────¤
╗───¤﹝طرق الدفع ↶ 💰﹞
> •┊˹💬˼┊- Payeer
> •┊˹💬˼┊- VodafoneCash
╝───────────────¤
*ملحوظة : الاشتراك المجاني اسبوع واحد فقط🚀*
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
> 〔تـوقـيـع┊ ˼‏📜˹ 〕↶
⌠✪┋❥ 𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓┋✪⌡
*⋅ ───━ •﹝👑﹞• ━─── ⋅*`,
                        subtitle: "EL TARBOO "
                    },
                    header: {
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: harley } }, { upload: conn.waUploadToServer }, { quoted: m }))
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+201225655220","merchant_url":"https://api.whatsapp.com/send?phone=+201225655220"}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029VagKvPX4dTnNxfbTnR45","merchant_url":"https://whatsapp.com/channel/0029VagKvPX4dTnNxfbTnR45"}'
                            }
                        ]
                    }
                }
            }
        }
    };

    conn.relayMessage(m.chat, messageContent, {});
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['مجاني', 'ش1', 'اشتراك_مجاني', 'بلالمجان'];

export default handler;
