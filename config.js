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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254789088336";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_35_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI5LFxuICAgICAgICA3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1QWRQOUd2OXdFcmY0Ym1TSjRjMEwxckFzb3hkYUhjNVdPdGxuRzJxeVNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjNEdxQWR2UlN5Q3lBemt3V0diajZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjllMTkzOTcyLTkxOTctNDE2MC05ZDAyLWUzMmQwNThjN2NiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDQsXG4gICAgICAxOTUsXG4gICAgICA1OCxcbiAgICAgIDExOCxcbiAgICAgIDIzOSxcbiAgICAgIDE5NCxcbiAgICAgIDc5LFxuICAgICAgMzMsXG4gICAgICAyNTAsXG4gICAgICAxNTIsXG4gICAgICA5MSxcbiAgICAgIDE2OSxcbiAgICAgIDk0LFxuICAgICAgMjQ3LFxuICAgICAgOTcsXG4gICAgICAyMjksXG4gICAgICA1MyxcbiAgICAgIDQ0LFxuICAgICAgNTksXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICA2MixcbiAgICAgIDE1NSxcbiAgICAgIDEzOSxcbiAgICAgIDEyMSxcbiAgICAgIDIzOSxcbiAgICAgIDkzLFxuICAgICAgMTk5LFxuICAgICAgOSxcbiAgICAgIDg5LFxuICAgICAgMjA0LFxuICAgICAgNzMsXG4gICAgICA1MixcbiAgICAgIDcsXG4gICAgICAxODcsXG4gICAgICAxMTgsXG4gICAgICA1NixcbiAgICAgIDE0NCxcbiAgICAgIDczLFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhENkZZVkRNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3ODkwODgzMzY6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMzc3NzA2NTE5NzYyNTozMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYURpZWNGRU9iUXNyVUdHQTRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFMNDBQaHBTN0VNSHBoeW1JRWIvbzQ1OGxtQlRTdmYyZHdqTmp3cjFkam89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidU01enM2cTdLbVdaVGlDbGN4QjB1eGlsQ010MTQ5NGI1QktwSnRPeGFoM3FTNS9DbVdTV2g0VDkzNk5ydVNtRlJpWDBEZVRPSm9rZ2NFa2ppVnFkQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR3FnVnZLVndsT3lBTWEzU1c5L1ptVmtQYW5jalRnQStXQnBxVTh3Sjc5VElDbmd1TWJaTDU0emZXb1MvZlBuY0V5ZUtZN1lvaVNiQ0FIc2tDcWIzaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzg5MDg4MzM2OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1OTEzMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGY3hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZjeC5qc29uIjogIntcImtleURhdGFcIjpcIk5oc0hFdXc5OCtOMWI2SEtaSnpQUjYycGRRYTk4SDdieFR4ZmRMZzg5eHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU1ODMzMTg1OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE2MjgyOTg1MjQxXCJ9Igp9"  // PUT your SESSION_ID 


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
  //alwaysonline:process.env.WAPRESENCE|| "online", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
