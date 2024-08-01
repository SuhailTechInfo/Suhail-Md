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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_35_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgMTEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg4LFxuICAgICAgICA5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDM0LFxuICAgICAgICA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI2LFxuICAgICAgICA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNixcbiAgICAgICAgMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1JNlc0dzlPeE5pMXpWaXVsbFRqNE9Jb1N6b0MyL01uWUNmODFTVnQrY289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRzaTBQYnFFUnQtcnl2OFVoRjVoaVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTc2NDhjMTQtYjU2Ny00YTAzLTk5ZjktY2VhMjk5YTU2ODZiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgNTcsXG4gICAgICAxMjEsXG4gICAgICA1NyxcbiAgICAgIDUxLFxuICAgICAgMjQ3LFxuICAgICAgNTEsXG4gICAgICAxNDgsXG4gICAgICA1OCxcbiAgICAgIDE3NSxcbiAgICAgIDE4NyxcbiAgICAgIDEzNixcbiAgICAgIDE2NSxcbiAgICAgIDE3NSxcbiAgICAgIDI0MixcbiAgICAgIDcwLFxuICAgICAgMjI4LFxuICAgICAgMTUsXG4gICAgICAxNzUsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxOCxcbiAgICAgIDIzNixcbiAgICAgIDExNixcbiAgICAgIDE4LFxuICAgICAgMTkwLFxuICAgICAgMjQxLFxuICAgICAgMTUsXG4gICAgICAxNTUsXG4gICAgICAxOTQsXG4gICAgICAxMDQsXG4gICAgICAyNDMsXG4gICAgICAxNyxcbiAgICAgIDExMCxcbiAgICAgIDE3MCxcbiAgICAgIDYzLFxuICAgICAgMjIwLFxuICAgICAgNTUsXG4gICAgICA5OCxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1WDRHN0NITlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDkwODE4OTczOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUmVhbFwiLFxuICAgIFwibGlkXCI6IFwiMjc4NjE0OTMxMTg5OTI0OjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xTTmg0RUhFSytVcTdVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieUVod0FmN1hLNDN6U2Z1cXFyTkZSSHRubEJRRW92TTc5NFFKd2FLbXhTbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSWkY5Ump0YllqQ0lwTTRCRGxrQ1VycUJqcFFBelNXNVJ4M1g4dzUxMUhtUkx4eGpxeGxSU0w3SHNnRkdOMCtHTlhyelhXc1BKU2RnUHdaY1VHTXJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1cE02eGRpQUxTZjVJaE9GbUd4cHhjZERSWDY1c1VpakdJNmF4Zm9TOWFmbnFEZnhFSTlzV3ZTYjFkZDE2eHFkL2tZTkt6ZW0zR1Z0NVAybVNXTDZBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTA4MTg5NzM6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDY4OTE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXBZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBcFkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwZXJoUVRvR09qUFFPK2h0aDBjekRSS1R5MUFaYklyenZoazVoU1l5NStrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODEyNjE3NDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
