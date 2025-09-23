const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlXMlltRFZFdS9ISE9HSVV5YnVhbDBMK2Z2TzNZTno2SExjQU9mTHFHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVk2M1pJZTJtZmw0OXdzQjdRS205elZIQ0hBT0h6RlBPQk11RWZPN0tnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ250UXZ2RDZNdTkrUkY2UEE2VWhndE5FS2RLdllsYjd2ZEtkZkFrNjNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUk5BVlBYN25lZmQvdSsyTVM3bTI4czVyY0JRSGFjN20zTEhkbGxudmdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPaVBXN3BjWnlJVzYwaFRyRXNEVTg4Y2l3SzMrTDViYlgwWGRUMmMxbEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind0a3RIVUplRlFRekQvTzdXby9DQ0FYQW4zQXY4NGgwVHpzK2c4dm1Sd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0xHbitNM05oeS8xaXhBL25RRndCOTMxUVJiVXp3V2ZZNkZjZnRlaWtsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEFlRXJNT0k1UHo1WHhISGlMVlNkdlVOUTBDRnFEQnhpTHRTSlM2TmJtRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM0Y0QxRUtaUGxvL3NUbGdFSEVrVklYVTZTUWMyVThZVlFlSm4xa3ZYR0swbGxJNXNLdHoyTGZ4c2tMWWovWXZteDRUWnRaM0NNcEp0eHRUNlI4aUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiJTcDR2SkpJRGFEa252YmVCb2lnNk50aS9MMGcyVHNqRnJ5dFkxek5wRnI0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJUVEo3NkpYRiIsIm1lIjp7ImlkIjoiOTIzMzU3MDEwOTEwOjQ2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im9vb29vb29vaWlra2trIiwibGlkIjoiMzc5OTc4MTA1ODU2NDc6NDZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLSytvdjBIRUozR3k4WUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBQmIvSmNkYTBSRjNPSy9zR2V1dmg2YStSaDlXYlRDRW5hQW1ldjhKZXl3PSIsImFjY291bnRTaWduYXR1cmUiOiJHR2ZqQS9OMmlEVy9UbDJUNHZ0ZUhZbVpFc0w1ckptenFtS0hDblAvTzQ1OC9tcU1neHFiR1QyMW9wcEpnZThHRVpCT296OUhvc29BYUVoL2wwSFBEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSzVXVXp5RDJLeFB4RDA5bU9qOENNRVNGbHM3VlQ0U2E3dVpSa1B0WWNxSmlscUhVdEtRcUVCbnZvM05yT1VYVDRDM21VblBiRnBta2oyeG9VOVErQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNTcwMTA5MTA6NDZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUFXL3lYSFd0RVJkeml2N0JucnI0ZW12a1lmVm0wd2hKMmdKbnIvQ1hzcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4NjUxMTc0LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
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
