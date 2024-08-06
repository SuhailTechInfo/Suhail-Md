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


global.devs = "22871647995" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22871647995";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_00_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM4LFxuICAgICAgICA2MyxcbiAgICAgICAgNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1LFxuICAgICAgICA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDc3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU0LFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLVUFqbWxJdWtLbmcyTEd3M2hxWlA0QTZYdFJSUEZaa2F0UHc0ZEgza3VzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvWlZGT1QyUlFUVzdOZUQxMTQyZWVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA2ZTg2ZGRiLWVlOTgtNDg5Zi04NDJmLTgzNDUyYjE2MzcxNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDI1NCxcbiAgICAgIDI1MixcbiAgICAgIDIxNixcbiAgICAgIDIxMCxcbiAgICAgIDY5LFxuICAgICAgNjAsXG4gICAgICAyMTUsXG4gICAgICAxNjIsXG4gICAgICAxNTYsXG4gICAgICAxNjQsXG4gICAgICAxMzAsXG4gICAgICAyNTAsXG4gICAgICAyMTgsXG4gICAgICAxMjEsXG4gICAgICAyNDgsXG4gICAgICAxNixcbiAgICAgIDEyNixcbiAgICAgIDg5LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDE1OSxcbiAgICAgIDc2LFxuICAgICAgMjUyLFxuICAgICAgMTkxLFxuICAgICAgNDYsXG4gICAgICAxNTMsXG4gICAgICAyNDgsXG4gICAgICAxMzgsXG4gICAgICAyNSxcbiAgICAgIDE1NixcbiAgICAgIDEzNixcbiAgICAgIDE5NixcbiAgICAgIDg2LFxuICAgICAgMjcsXG4gICAgICAxMTcsXG4gICAgICA0NSxcbiAgICAgIDEyOSxcbiAgICAgIDEwNSxcbiAgICAgIDEzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKUlIyRDNQR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI4NzE2NDc5OTU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIyNDU0Mzk5ODQwMzM2OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnVZMm9ZRUVOS2R5clVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNTHVheUdQaktjZmlLN2NUd0I4dFB1YjFDSC9lQlRnV3ZuUGx6cUFPbEVvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjAyenBjai9NdXFNcUdRTXZwSldRdDFMRURXd2dDSWFFdlZPcStqcmFHNDNEaHBsb3JaTmZOeXArK3M5UkwzSWNFcXdoZHNTajY3T0dJem5uUjB2WENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjA2U2hRV3JObDNhZUNUS1JNdVhSbHVDaE5rSWNuYW94MTZteG5CVHVodEdaVExHNmN5Y1dSbUJQTkRpVWVuRm1aNTBpektMTytwY3oyZThFT1dNc0NRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyODcxNjQ3OTk1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk3ODAwN1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝑇𝐻𝐴𝑁𝑂𝑆 𝑤𝑜𝑟𝑙𝑑",
  packname: process.env.PACK_NAME || "𝑇𝐻𝐴𝑁𝑂𝑆 𝑤𝑜𝑟𝑙𝑑",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝑇𝐻𝐴𝑁𝑂𝑆 𝑤𝑜𝑟𝑙𝑑",


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
