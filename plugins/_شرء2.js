import pkg from '@whiskeysockets/baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🦈', key: m.key } });

    const harley = 'https://telegra.ph/file/b9c7242b2ea534c9fea51.jpg';

    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: 'EL TARBOO ' },
                    body: {
                        text: `━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━
> ✪┋❥ 𝐓𝐀𝐑𝐁𝐎𝐎☞𝐁𝐎𝐓┋✪
> 〔 الاشتراك الاسبوعي┊ ˼‏ 🚀˹ ↶〕
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
            *𝗕𝗢𝗧 𝗘𝗟𝗔𝗞𝗥𝗔𝗕*
*⋅ ───━ •﹝👑﹞• ━─── ⋅*
╗───¤﹝السعر ↶ 💵﹞
> •┊˹⛈️˼┊- رقم وهمي اسبوعيا
> •┊˹⛈️˼┊- روبل بوت ارقام
> •┊˹⛈️˼┊- 500 نقطة دعمكم
╝───────────────¤
╗───¤﹝المميزات ↶ 🚀﹞
> •┊˹⛈️˼┊- اشتراك سرفر عام
> •┊˹⛈️˼┊- شغال 7/24
> •┊˹⛈️˼┊- البوت تحت التطوير
╝───────────────¤
╗───¤﹝طرق الدفع ↶ 💰﹞
> •┊˹⛈️˼┊- Payeer
> •┊˹⛈️˼┊- VodafoneCash
╝───────────────¤
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
handler.command = ['بوعي', 'ش2', 'اشتراك_اسبوعي', 'بمقابل'];

export default handler;
