const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "creator",
    alias: ["creator", "coder", "dev"],
    desc: "Show bot creator information",
    category: "info",
    react: "👑",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        // Owner information (you can modify these values)
        const ownerInfo = {
            name: "𝓐𝓻𝓼𝓵𝓪𝓷_𝓜𝓓",
            number: "+923237045919",
            photo: "https://files.catbox.moe/lcpy9f.jpg",
            bio: "The creator of this amazing bot"
        };

        // Beautiful formatted message
        const creatorMessage = `
╭───「 👑 *CREATOR INFO* 👑 」───
│
│ *🪪 Name:* ${ownerInfo.name}
│ *📞 Number:* ${ownerInfo.number}
│ *📝 Bio:* ${ownerInfo.bio}
│
│ *🤖 Bot Name:* ${config.BOT_NAME}
│ *⚡ Version:* ${config.VERSION || "4.0.0"}
│
╰─────────────────────

💡 *Contact for bot queries or support*`;

        // Send message with owner photo
        await conn.sendMessage(from, {
            image: { url: ownerInfo.photo },
            caption: creatorMessage,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Creator Command Error:", e);
        // Fallback text if image fails
        await reply(`👑 *Creator Info*\n\nName: 𝗕𝗔𝗟𝗢𝗖𝗛-𝗠𝗗\nNumber: +923357010910\n\nContact for bot support!`);
    }
});

