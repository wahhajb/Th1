import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '👀', key: m.key } });

    const harley = 'https://telegra.ph/file/9ece2dc7647c5bc552f7a.jpg';

    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: 'EL TARBOO ' },
                    body: {
                        text: `━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━
> ✪┋𝐁𝐘┋❥ 𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓┋✪
> 〔 الاشتراك الشهري┊ ˼‏ ⏳˹ ↶〕
*⋅ ───━ •﹝🪐﹞• ━─── ⋅*
            *بـيـبو*
*⋅ ───━ •﹝🪐﹞• ━─── ⋅*
╗───¤﹝السعر ↶ 🏠﹞
> •┊˹🦈˼┊- 3 ارقام وهمية
> •┊˹🦈˼┊- روبل بوت ارقام
> •┊˹🦈˼┊- 750 نقطة دعمكم
╝───────────────¤
╗───¤﹝المميزات ↶ 👑﹞
> •┊˹🦈˼┊- اشتراك سرفر عام
> •┊˹🦈˼┊- شغال 7/24
> •┊˹🦈˼┊- البوت تحت التطوير
╝───────────────¤
╗───¤﹝طرق الدفع ↶ 💰﹞
> •┊˹🦈˼┊- Payeer
> •┊˹🦈˼┊- VodafoneCash
╝───────────────¤
*⋅ ───━ •﹝🪐﹞• ━─── ⋅*
> 〔تـوقـيـع┊ ˼‏📜˹ 〕↶
✪┋𝐁𝐘┋❥ 𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓┋✪
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
                                buttonParamsJson: '{"display_text":"⌈🦈╎قـنـاة الـمـطـور╎🦈⌋","url":"https://whatsapp.com/channel/0029VagKvPX4dTnNxfbTnR45","merchant_url":"https://whatsapp.com/channel/0029VagKvPX4dTnNxfbTnR45"}'
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
handler.command = ['شهري', 'ش3', 'اشتراك_شهري', 'شهريا'];

export default handler;
