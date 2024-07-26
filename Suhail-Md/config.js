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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233241583373";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2332xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_57_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDU3LFxuICAgICAgICAzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDkxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MixcbiAgICAgICAgODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMxLFxuICAgICAgICA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDk3LFxuICAgICAgICA2NixcbiAgICAgICAgMTIwLFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYyLFxuICAgICAgICA0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU1LFxuICAgICAgICA0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImYvVVl4TGZqTHJ4Wi9VS1E1QjZ2V25WVDJ0N3pTSVlPY0lodjZTTWhKRjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIll0cUoyeDN1U2tLRnV1NTMyd1VHUFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzM4M2M0ODItYzQ2YS00ZmFmLWExMzctNjg3MWE3MzhhMDc5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDM1LFxuICAgICAgMTAxLFxuICAgICAgMTA4LFxuICAgICAgMTMwLFxuICAgICAgNDAsXG4gICAgICAxNTIsXG4gICAgICAyMjMsXG4gICAgICAzMSxcbiAgICAgIDE2LFxuICAgICAgMTI2LFxuICAgICAgNDIsXG4gICAgICAxMTQsXG4gICAgICAxMDQsXG4gICAgICAyMDQsXG4gICAgICAyMDMsXG4gICAgICAxMjEsXG4gICAgICAyMjIsXG4gICAgICAxNjgsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMTI2LFxuICAgICAgMTU2LFxuICAgICAgMjQxLFxuICAgICAgMTE1LFxuICAgICAgMTAwLFxuICAgICAgMTIxLFxuICAgICAgMixcbiAgICAgIDE1LFxuICAgICAgMjM0LFxuICAgICAgMTgxLFxuICAgICAgMjEyLFxuICAgICAgMTAwLFxuICAgICAgMjEzLFxuICAgICAgMTU3LFxuICAgICAgMTQsXG4gICAgICAyOSxcbiAgICAgIDIxNyxcbiAgICAgIDU5LFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1RERSQVhMM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQxNTgzMzczOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2ODk2MDEyOTEzMDUwNToxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObUZ1ODRJRU5pemliVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVxM0czVU5qSmV2bXBWaXNJRDlYdmlUeGtHU3RhV25kZHUwOGxxdEhZRlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYUd1SWJXZkpiWXdIMUVzZndTTTJodTNoSTVtanpvb0hOT21hRnJlYy9DUTMyU1EvSGh5bEh0a01kV2N4QlhpeTNWanVDcHphbVpmZVJmcjdQemRoRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY1plVGhHK0J2VXk5SmJGOHozSE1IanRIaXBvSC9GVC9wejBKaTU2N2lKdVYwMEJvQm5weVZRYjlPSTRXVy9hdStwK0wzbzFjUnVwenA2UlNXOGVBZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQxNTgzMzczOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkxNTg2N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
