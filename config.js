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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_52_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDkwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU3LFxuICAgICAgICA2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyLFxuICAgICAgICAxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMwLFxuICAgICAgICA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU5LFxuICAgICAgICA2MixcbiAgICAgICAgMTQyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDMwLFxuICAgICAgICA3NixcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMjQzLFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDMyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjc0M1Y0E2eXhmb0FMUHdtSU4zNkRZWUt6blpqbXE5N0FzRktNbExVcXBrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMzIxMzkzMTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI4RTFBQTkwRTExRTYyQTFCNjZFNTY0MkE2Q0QzNjkzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTczOTEzMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsaXVJOVFjTlJ1R3lJbXpzZXN3Sm1nXCIsXG4gIFwicGhvbmVJZFwiOiBcImM4MDQyZjIwLTY2YzEtNDBhMC04YjE1LTViODEyMDRiYzAyOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDI0NCxcbiAgICAgIDg5LFxuICAgICAgMTUwLFxuICAgICAgMzMsXG4gICAgICAxODAsXG4gICAgICAxMjUsXG4gICAgICA3OCxcbiAgICAgIDEwMCxcbiAgICAgIDIzMSxcbiAgICAgIDE3NCxcbiAgICAgIDEyMyxcbiAgICAgIDExMixcbiAgICAgIDE2NixcbiAgICAgIDUwLFxuICAgICAgMjQ5LFxuICAgICAgMjE5LFxuICAgICAgNSxcbiAgICAgIDIxMCxcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDYwLFxuICAgICAgMjM2LFxuICAgICAgMzAsXG4gICAgICAxNDQsXG4gICAgICA4NyxcbiAgICAgIDE0MixcbiAgICAgIDEyMSxcbiAgICAgIDIxNyxcbiAgICAgIDAsXG4gICAgICAyNTIsXG4gICAgICAzMixcbiAgICAgIDE2NyxcbiAgICAgIDczLFxuICAgICAgOTYsXG4gICAgICAxNzIsXG4gICAgICAxNDMsXG4gICAgICAxNDcsXG4gICAgICAxMTUsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKQzlYTkNNWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMjEzOTMxOTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWN0aXZlIFR2XCIsXG4gICAgXCJsaWRcIjogXCIyMDU1MTg4ODMxMDI5NTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xqandaTUJFUFhPL3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaHR2d2dJWVNLL2RlSVk4NUJXMGtaSFROcUgvZjJFbGpFc0ljZ0xzeDZuUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLdVgzbzVxZEZuNGFKS05JN1BsSkJpc2xyOVlQbnU1RTFCK3phV3VnTFljVFdCRndldDg1aVhGQlB4dEh3UnA1anVQRmdhZyszcnNVdlROaTJzaUtBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUdWM2VHNlZ3RkZXpLSkd1NC9McXNTZXVUSEdCbGY1eDB3a21ZLzF6YmEvajZYbHh0S3pvTGMwTzV1S1RwRlBENngybWd4SWZmdExYTDcxeXVkL0lBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMyMTM5MzE5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTczOTEyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd5M1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3kzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNDdtYlJYQ3pZWG1iTkpiTGNvNVhGWFBESHA5a3U4ZkRKY3F0STZycEJ5TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDkzNTkwMzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTczOTEzMTE4MVwifSIKfQ=="  // PUT your SESSION_ID 


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
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
