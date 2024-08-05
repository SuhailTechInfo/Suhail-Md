const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2250501614719" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250501614719";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_52_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYyLFxuICAgICAgICAzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzLFxuICAgICAgICA4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICA0NixcbiAgICAgICAgMTg4LFxuICAgICAgICA1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMixcbiAgICAgICAgODcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDk4LFxuICAgICAgICA2LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAwLFxuICAgICAgICA5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDksXG4gICAgICAgIDg4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZFMHdmZ0FqdEJ2TTRZellJKzBNZThIWG9NZURBRTVoTFFJWk9WNlcrcjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjg2RDNxMmxFUTh5ZXhrU05WbEgtRFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjdkMzMzZDMtMmEzMy00Y2ZmLTg3NTAtZjZlYzk5ODNlYTNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDM1LFxuICAgICAgMTMyLFxuICAgICAgNzUsXG4gICAgICAxNSxcbiAgICAgIDIwOSxcbiAgICAgIDExMCxcbiAgICAgIDE2OCxcbiAgICAgIDg0LFxuICAgICAgNzcsXG4gICAgICAzMSxcbiAgICAgIDE0NSxcbiAgICAgIDEyMSxcbiAgICAgIDIxMSxcbiAgICAgIDIwMyxcbiAgICAgIDIzOCxcbiAgICAgIDI1MCxcbiAgICAgIDcwLFxuICAgICAgMTIwLFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgsXG4gICAgICAxNCxcbiAgICAgIDM4LFxuICAgICAgMTk3LFxuICAgICAgMTk5LFxuICAgICAgMTYsXG4gICAgICAxMjksXG4gICAgICAxOTMsXG4gICAgICA1MSxcbiAgICAgIDIyMixcbiAgICAgIDEwNixcbiAgICAgIDg2LFxuICAgICAgMTQ3LFxuICAgICAgNDUsXG4gICAgICA0MSxcbiAgICAgIDEyMSxcbiAgICAgIDEyNyxcbiAgICAgIDQyLFxuICAgICAgMTM5LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVZSFJGTkpYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwNTAxNjE0NzE5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1ODQ1MDQ0NDgxNjUyMzoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKNlh4YzBFRU9MYXhMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZybTNmM29qUUhsZzRSRkhoUE4zM25jdHVudGM5Y2RQbGlzUWQxTTZwQkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUm51Rm9qQkVCbEZHdE9mdm9HNDBSREJnZFBQUDlDN2l2UWxybjJabDJZTmxUTms3Y1hieFkrSFBnSVVQcGtCT0ZxQ0NXMWpSd3FndFV2OU82NnNiaHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQWdwSDhwUGpPYmZuUlp4ZytUTGR2MVZsdEh5NGRXRVlmYWNsSlFhbjRtQ3FYSjBwU2ZBQzVuaXluTExhMlZDWFlFSTdHMEJIMjZjUXBpMlRwa0lsaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDUwMTYxNDcxOToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjg4NzUyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUvaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRS9oLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "odon226",
  packname: process.env.PACK_NAME || "odon226",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "odon226",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
