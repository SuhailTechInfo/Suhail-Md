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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_06_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICA0MixcbiAgICAgICAgODksXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1MixcbiAgICAgICAgMjIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQzLFxuICAgICAgICA1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDc2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY4LFxuICAgICAgICA0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWWpmN2piNStGRi93amZZdWlqM3g5cFVUeGxGQTd5S3I1SW9EMm9JVEErYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibkVhMDBMWmZUbXF2dEJTX3NaaDdBd1wiLFxuICBcInBob25lSWRcIjogXCI4MTgwMDBlYy0xM2ZhLTQ4OTctOTRlMi04YmJiMTcwNjFmYzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgNCxcbiAgICAgIDM4LFxuICAgICAgMTc3LFxuICAgICAgNDMsXG4gICAgICA2MSxcbiAgICAgIDg0LFxuICAgICAgODUsXG4gICAgICA4NixcbiAgICAgIDgxLFxuICAgICAgMTg1LFxuICAgICAgNjYsXG4gICAgICA1MCxcbiAgICAgIDg2LFxuICAgICAgMTgzLFxuICAgICAgMTksXG4gICAgICAyNTIsXG4gICAgICA4NSxcbiAgICAgIDYwLFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDYsXG4gICAgICAxMTQsXG4gICAgICA3OSxcbiAgICAgIDE4OCxcbiAgICAgIDE0NixcbiAgICAgIDE4NSxcbiAgICAgIDQ2LFxuICAgICAgMTEsXG4gICAgICA3MyxcbiAgICAgIDE4OSxcbiAgICAgIDY3LFxuICAgICAgMzcsXG4gICAgICAyNDksXG4gICAgICAyMDIsXG4gICAgICAyMTgsXG4gICAgICA4OCxcbiAgICAgIDE4OSxcbiAgICAgIDE0MixcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5WVFpIR1JTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzcyMTA2NTE4NzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjU3NjkzMjA3NjM2MDM6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFhSdE9ZQ0VLTGlzTFVHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQK0lCc25yT0F2SzExZVNnenFyd2lrNGZBMm56WjRZam84UlViTEhyRVVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhLOXFlYklFa01YdWhwQ0FXTWZMN1hGQzh1MFJRQW1RT0JQOUUwVVRQYUhzY2QyS01JLzVHQVgxMGVCdzRBdEhFYWN2UzVnQkM0aXo0ckJScjZieENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9wTmd4T2Y5NzdvdCtIcWovVWVTRnhDbmF2MldVYThOUjkrMnE1MUNMUGV3REExQm0yR0xrUjMva1c1ZjJNRmpIS2NqclMxTlBUSjZ2c2xsQTQwcGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzIxMDY1MTg3OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1NjA4MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKQklcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpCSS5qc29uIjogIntcImtleURhdGFcIjpcImJVOWVYK1c3eFdaY1FVV2VYSkU3NjVRU1IzdFF4V3ordjg1djh4TGsrdjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzUxNjQyODA0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxNjU3MzA5MTdcIn0iCn0="  // PUT your SESSION_ID 


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
