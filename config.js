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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1fdfa620c76d762af25be.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94 72 825 7107";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_21_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDY4LFxuICAgICAgICA3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDUwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDUxLFxuICAgICAgICA3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkUVVlVWVhc1Q4OXpVODhaK0hnS2tiL04xdVVOczNTeWhHWEdURCtqTGRBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzI4MjU3MTA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRkQ3QjJFMzI2NDUzQTJGODUwN0E4Mzk2MDAwRURCMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwOTM2NjBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT3c1dlNsSDFSMVN1Rld2UW1NTW1YUVwiLFxuICBcInBob25lSWRcIjogXCJhYjM2MGE0MS02MmU3LTQ2N2EtOWYzYi04ZTJhODI1YmQ0YmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICAxNTUsXG4gICAgICAxNjAsXG4gICAgICAyNSxcbiAgICAgIDk2LFxuICAgICAgNzUsXG4gICAgICA4MCxcbiAgICAgIDc3LFxuICAgICAgOTcsXG4gICAgICAxNzgsXG4gICAgICAzMCxcbiAgICAgIDEwMixcbiAgICAgIDE2NixcbiAgICAgIDIxNixcbiAgICAgIDg3LFxuICAgICAgMTEyLFxuICAgICAgMTg4LFxuICAgICAgMTYwLFxuICAgICAgNDUsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICAyMTIsXG4gICAgICAxMzAsXG4gICAgICAyMDMsXG4gICAgICAxMzMsXG4gICAgICAxNCxcbiAgICAgIDMxLFxuICAgICAgMTMxLFxuICAgICAgMjQxLFxuICAgICAgMTkwLFxuICAgICAgMTU5LFxuICAgICAgMjMxLFxuICAgICAgMjIyLFxuICAgICAgMTYyLFxuICAgICAgOTEsXG4gICAgICAxMjksXG4gICAgICAxNixcbiAgICAgIDE1NyxcbiAgICAgIDE2LFxuICAgICAgMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjZIWERaNVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzI4MjU3MTA3OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XtvCdl7pcXG5cXG5cXG5cXG5cXG5LXFxuXFxuXFxuXFxuXFxuQVxcblxcblxcblxcblxcblZcXG5cXG5cXG5cXG5cXG5JXFxuXFxuXFxuXFxuS0FWSVwiLFxuICAgIFwibGlkXCI6IFwiMTE5NTgwOTE1NzI0NTI0OjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpTTl0SUNFTk9nbExVR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicW0yTmo5R0x6YUxDZ2VEM096T0xybHRtTEQ4VkM2eDBSMGwzcU1LZThrdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzUUk4RjJDbzYyOVB4Wjh1QitxcmxPellydUQrakozeTkxRGRTK3F5ZmRFRWxvV3d4S3c3Nm5ITVJ0YUtRQXhuMXhlbllOYzZ6cHNqSy9vWDB0SmJBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZa0lYckIwa2JwYW9kdUMrbTJuZGdOeEpDUFk0bE1GS2dJcG5pV1RWS2NUajZ4MGQxdk5rVFVUL1ZHVFhpd0ZEZ1ZJdTY2S2MzaWhkQUF6YmRlbUpDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyODI1NzEwNzoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDkzNjU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDcrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQNysuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWTEJPSXN5VjIxNWZwUjFOWnFuVEp6bVMrLzVDa013b1A3WC9BSS9oOFZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxMDc3MjI3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
