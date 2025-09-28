const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MUZAMMIL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlVenFrRzg2UHVUMUhMYkFTa3RidTBDL0NRemxubms4VGV2YWlibmNFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1ZIdWlQVnpzTlo3K3RZckprZ2taMjkwaU5TQkgySTA5cVF3bnNTQU56bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQU1RMEh0YkswZkxwbldYSDFINXdPQ1NLOFo5RnUrZW93THNhUVN1Q1cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXYVgyTVdUMUdGMEhjclpvQ1VwQmszU0lQUS9xaU9rUUZ4czhTNlpQNmdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMYURXTVBaNHMrWngyMXdqMW5RRUUrYmV5dFRDMmdMWjVyczRGZVlDR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI4U1FaWXQycjdQY0hLbjFvN2RXbmVVM2pWZTM3aG52MjRZeFh2UEU0bTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZKaVd0ZWQxVDJCaWJUSVcxTzFJVzdQZHdxZkFCT1dwS1hzV3h4REUydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEs4elV6cVFWV0lqakR0QUtXb2lQb0hUeWZsZ3hCcGVscFllQ05zVm5tUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVGWmxQMlpaZHVrNW90eGVjR1lkUFhyUHF1Y01FTW5wZHV5VUhyQXFqNXV6RXZqUCtCbXZPVmRzZDF1VlM0dW40dkNXYjc3TVI2bEJnZy9xdFVOaERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJYR2FqdDNBbGowSHFVa2E3STZJRTFpMUIvcWx3ZEpyRlluR3lNRHZJNC84PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJSRzdaNEY4RCIsIm1lIjp7ImlkIjoiOTIzMzU3MDEwOTEwOjQ4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJBTE9DSC0gOTEwIiwibGlkIjoiMzc5OTc4MTA1ODU2NDc6NDhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLSytvdjBIRU91ODVNWUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBQmIvSmNkYTBSRjNPSy9zR2V1dmg2YStSaDlXYlRDRW5hQW1ldjhKZXl3PSIsImFjY291bnRTaWduYXR1cmUiOiJ3ZHZhVzVUTHR2azF5bmpZTkFhMld1NU8zWS9xYmpwMEVDaHo3WldMTnNxRmNGcS9YbHBlM3lEcTg3R3FXcHRxN3pmVUJQVVdSSzdzT05iaUVkUW5BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWndYZEhHZTBwTHVOOUpFQ3ZRVy80SDEzcGo1K0F0TVhUYVU3Z0RaQ2haZnFlUU1YSTliSis5aWoxaWxjYUZETHB1MUgyalI2NGN0L0FpVnRqTUY5Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNTcwMTA5MTA6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUFXL3lYSFd0RVJkeml2N0JucnI0ZW12a1lmVm0wd2hKMmdKbnIvQ1hzcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5MDU5NTY4LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBXcCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY BALOCH-XD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "BALOCH-XD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "BALOCH-XD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923357010910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*BALOCH*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ BALOCH-XD ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923357010910",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
