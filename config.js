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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SUHAIL_23_17_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NixcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDgwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg1LFxuICAgICAgICA2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidlJKRTkwQTRxM1ppaTRQR1hkQTNoZ2pEMWptZi9yTlRjckJBUWRuLzhwQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQkJVdlp3Sm1TRFNGVGtoTjZjeTBVUVwiLFxuICBcInBob25lSWRcIjogXCJjMmI1ZmQ1OC04MTliLTRlOTktOWMwOC03NmY0NGEwOTAxMWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgOSxcbiAgICAgIDE0MCxcbiAgICAgIDIxNSxcbiAgICAgIDE3LFxuICAgICAgMTQ3LFxuICAgICAgNzksXG4gICAgICAxNTAsXG4gICAgICA0NyxcbiAgICAgIDIzMixcbiAgICAgIDQ4LFxuICAgICAgNTksXG4gICAgICAyMzEsXG4gICAgICAxNjgsXG4gICAgICAxOTQsXG4gICAgICAyMTUsXG4gICAgICAxMjgsXG4gICAgICAzMSxcbiAgICAgIDE5MyxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgMjMwLFxuICAgICAgMjQzLFxuICAgICAgMjEzLFxuICAgICAgOTUsXG4gICAgICAyMTcsXG4gICAgICAxODksXG4gICAgICAxMzAsXG4gICAgICAxMTgsXG4gICAgICAxOTgsXG4gICAgICAxMTIsXG4gICAgICA1MCxcbiAgICAgIDI5LFxuICAgICAgMTQwLFxuICAgICAgMjMsXG4gICAgICAyMTksXG4gICAgICAxMzYsXG4gICAgICAxNzgsXG4gICAgICAxNTUsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzRMTEtaVFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTcxNTQ0NTE5MTo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIm1hZGluaW1hY2hpbmVcIixcbiAgICBcImxpZFwiOiBcIjE1Mzk0MDQ2OTQ4OTg5Nzo1M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZlBrWVFGRU9hdXNMVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjdSN1hYZGNqNERsOEtuUmp6bGpDMzRmYVQ0L2d4WFJxRTV5UGhFYXRBaDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN0RnK085ZzFJd0RibkRlZlQwUVBwZ1ZETkJRY1hIdXV0OWJ1ZDV6YUk0bjMzK1VaOVZxeTJ1SXhKeVE4R2NVVHZ0M1hsTTdWeG12WEdIRnlBMTRHRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibm9qS1JhNjFkd2gzR0hreUZMQ0QxdlF1cVlZbmRPZzFkb1FtdUZ5LzkwU2hpemFUbGFnSk8wYXYzZFBjMlRqSWZ3MzZRRXhIN3hRZ3ZDd1JtWE9oQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzE1NDQ1MTkxOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1NTQyMTlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9 ||  ""  // PUT your SESSION_ID 


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
