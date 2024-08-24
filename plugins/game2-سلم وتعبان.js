const games = {};

const ladders = { 3: 22, 5: 8, 11: 26, 20: 29 };
const snakes = { 27: 1, 21: 9, 17: 4, 19: 7 };
const winningPosition = 30;

const handler = async (m, { conn, command, args }) => {
    const chatId = m.chat;
    const roomName = args[0];
    const playerId = m.sender;

    if (command === 'سلم-وثعبان') {
        const helpMessage = `
        🐍🪜 *أوامر لعبة سلم وثعبان* 🐍🪜

1. *ابدا_ثعبان [اسم الغرفة]* 
> - لبدء لعبة جديدة. حدد اسم الغرفة.
2. *انضم_ثعبان [اسم الغرفة]* 
> - للانضمام إلى لعبة قائمة. يجب أن تكون اللعبة قد بدأت بالفعل.
3. *ارمي_النرد [اسم الغرفة]*
> - لرمي النرد عندما يكون دورك.

> ملاحظة: اللعبة تدعم حتى 4 لاعبين.`;
        
        return await conn.reply(chatId, helpMessage, m);
    }

    if (command === 'ابدا_ثعبان') { 
        m.react('⏳');
        if (!roomName) {
            return await conn.reply(chatId, "يرجى تحديد اسم الغرفة.", m);
        }
        if (!games[roomName]) {
            games[roomName] = {
                players: [playerId],
                playerPositions: { [playerId]: 0 },
                currentPlayerIndex: 0
            };
            await conn.reply(chatId, `🎲 تم إنشاء غرفة "${roomName}"! انضم اللاعب 1. استخدم الأمر 'انضم_ثعبان ${roomName}' للانضمام.`, m);
        } else {
            return await conn.reply(chatId, "اللعبة قيد التشغيل بالفعل!", m);
        }
    }

    if (command === 'انضم_ثعبان') {
        if (!roomName) {
            return await conn.reply(chatId, "يرجى تحديد اسم الغرفة.", m);
        }
        if (games[roomName] && games[roomName].players.length < 4) {
            games[roomName].players.push(playerId);
            games[roomName].playerPositions[playerId] = 0;
            await conn.reply(chatId, `🎲 انضم اللاعب ${games[roomName].players.length} إلى غرفة "${roomName}".`, m);

            if (games[roomName].players.length === 4) {
                await conn.reply(chatId, `🎲 اكتمل عدد اللاعبين في غرفة "${roomName}"! دور اللاعب 1 (استخدم الأمر 'ارمي_النرد ${roomName}' لتحريك النرد).`, m);
            }
        } else {
            await conn.reply(chatId, "لا يمكن الانضمام، إما أن اللعبة لم تبدأ بعد أو اكتمل عدد اللاعبين.", m);
        }
    }

    if (command === 'ارمي_النرد') {
        if (!roomName) {
            return await conn.reply(chatId, "يرجى تحديد اسم الغرفة.", m);
        }
        if (!games[roomName]) {
            return await conn.reply(chatId, "لم تبدأ اللعبة بعد! استخدم الأمر 'ابدا_ثعبان' لبدء اللعبة.", m);
        }

        const game = games[roomName];
        const currentPlayer = game.players[game.currentPlayerIndex];

        if (currentPlayer !== playerId) {
            return await conn.reply(chatId, `ليس دورك! إنه دور اللاعب ${game.currentPlayerIndex + 1}.`, m);
        }

        const diceRoll = Math.floor(Math.random() * 6) + 1;
        let newPosition = game.playerPositions[currentPlayer] + diceRoll;
        let message = `🎲 @${currentPlayer.split('@')[0]} رمى النرد وحصل على ${diceRoll} وتحرك إلى المربع ${newPosition}`;

        if (ladders[newPosition]) {
            newPosition = ladders[newPosition];
            message += ` وصعد السلم إلى المربع ${newPosition} 🪜`;
        } else if (snakes[newPosition]) {
            newPosition = snakes[newPosition];
            message += ` ونزل بالثعبان إلى المربع ${newPosition} 🐍`;
        }

        game.playerPositions[currentPlayer] = newPosition;

        if (newPosition >= winningPosition) {
            message += `\n🏁 @${currentPlayer.split('@')[0]} فاز! 🎉`;
            await conn.sendMessage(chatId, { text: message, mentions: game.players }, { quoted: m });
            delete games[roomName];
            return;
        }

        await conn.sendMessage(chatId, { text: message, mentions: game.players }, { quoted: m });

        game.currentPlayerIndex = (game.currentPlayerIndex + 1) % game.players.length;
        const nextPlayer = game.players[game.currentPlayerIndex];
        await conn.sendMessage(chatId, { text: `🎲 دور @${nextPlayer.split('@')[0]}، استخدم الأمر 'ارمي_النرد ${roomName}' لتحريك النرد.`, mentions: [nextPlayer] }, { quoted: m });
    }
};

handler.help = ['ابدا_ثعبان', 'انضم_ثعبان', 'ارمي_النرد', 'سلم-وثعبان'];
handler.tags = ['game'];
handler.command = /^(ابدا_ثعبان|انضم_ثعبان|ارمي_النرد|سلم-وثعبان)$/i;

export default handler;