const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "https://www.mongodb.com/cloud/atlas/register"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_31_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExLFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgOTksXG4gICAgICAgIDk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQxLFxuICAgICAgICA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTMXcweTM3Z013OEdQYkRTS1ZucTNXYllVcVQzUnNxR3g3MjdsNXB4MFprPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6OF9PVWhad1RYLXZGcFoxY1lOSTlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAwYzdmNDAxLTc1MzUtNDhlYy1iN2IzLTZjOGNiYTE0YjhkNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICA2NixcbiAgICAgIDM0LFxuICAgICAgMTMzLFxuICAgICAgNTEsXG4gICAgICAxNjcsXG4gICAgICAyNDQsXG4gICAgICAxNTIsXG4gICAgICAzMCxcbiAgICAgIDE0NyxcbiAgICAgIDE1OSxcbiAgICAgIDMwLFxuICAgICAgNjgsXG4gICAgICA3NSxcbiAgICAgIDEwOCxcbiAgICAgIDE1MCxcbiAgICAgIDIwMixcbiAgICAgIDE4NyxcbiAgICAgIDExMCxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDYzLFxuICAgICAgMjAsXG4gICAgICA0OSxcbiAgICAgIDgzLFxuICAgICAgMTE0LFxuICAgICAgMTgsXG4gICAgICAxNjcsXG4gICAgICAxMDMsXG4gICAgICAxNDksXG4gICAgICA0NyxcbiAgICAgIDEyOSxcbiAgICAgIDE1NixcbiAgICAgIDUzLFxuICAgICAgMzUsXG4gICAgICAxNjYsXG4gICAgICAzMixcbiAgICAgIDIyNyxcbiAgICAgIDUxLFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdISzU4OUxHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwOTI3NDIwMTQ6NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzODIwMzQxNjEyNjExOjY2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuqngfCWo5jwnZGr8J2RqPCdkbnwnZGyIPCSgYLwnZGz8J2RsPCdka3wnZGs8JajmPCThZPqp4JcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQL1kxaE1RNi9TRXRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9MdDVQOTlTQkZHK1QrSFBEVXBZUVBoOXpMTStjL0hWV3BLQnFCRUZaaVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUFRWcFJrQnhTaGR1Qi9zMFNHdG9nNnRQdTdPamc3SlJrMjlVcVQ5Yk9LRFhlQ3oycDloeFQ0SVplU25XYnE2WlNGczlreHNXSHloN1IzN3V2ODJpQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOUNRSURKWUlXeHYzYVRuVGErN2N6Y0lVN0lqaWFvRlFZb3doVFhIMXBKd3BVL1BVWnd2QVcwandOcUlyZlNFWWluOHkza2FwWDg4TUpDUnhwS0c2aGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDkyNzQyMDE0OjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTg0MjI4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0zVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTNVLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWHEreHFZWm5iNUhOOEJ0L0d2eEM3SjBnSlpFUGRlWk1hMUxIbG5tS0tjND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTI2NjMwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxODQyMjkwNjAwXCJ9Igp9"  // PUT your SESSION_ID 


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
