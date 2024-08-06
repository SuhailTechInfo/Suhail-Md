const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="elshabah.youtyoube@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JEMx4DwjTtSBrCEhNUJUuN";
global.website=process.env.GURL || "https://chat.whatsapp.com/JEMx4DwjTtSBrCEhNUJUuN" ; 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_02_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk2LFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMjA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicVpZTEYydC9JbVUvZ3RsYlVIK09PU1hMNnRKallhcVJFWUlEL3U5aEJUQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN1FhaWRIbEFSMHE5MDZVRE91cHlWd1wiLFxuICBcInBob25lSWRcIjogXCI1ZWM3YmJmMy1kMjA5LTRhYTctOGU0YS1iZDhmNDRlNjkwNDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMTU2LFxuICAgICAgODEsXG4gICAgICAxNDIsXG4gICAgICAyMzMsXG4gICAgICAyNixcbiAgICAgIDc2LFxuICAgICAgMjQzLFxuICAgICAgMTQsXG4gICAgICAxOTAsXG4gICAgICAzMixcbiAgICAgIDk2LFxuICAgICAgNDEsXG4gICAgICA3NixcbiAgICAgIDE2NSxcbiAgICAgIDE2NixcbiAgICAgIDM1LFxuICAgICAgMTU2LFxuICAgICAgNTMsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE4LFxuICAgICAgMTk4LFxuICAgICAgMzIsXG4gICAgICAyMTgsXG4gICAgICAyMzksXG4gICAgICAxMjQsXG4gICAgICAyMzYsXG4gICAgICAxNjQsXG4gICAgICAxMzIsXG4gICAgICAxMjEsXG4gICAgICA3NCxcbiAgICAgIDE1NyxcbiAgICAgIDM5LFxuICAgICAgMjA5LFxuICAgICAgMTcsXG4gICAgICAxNTMsXG4gICAgICA4LFxuICAgICAgMTI2LFxuICAgICAgMjUyLFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS05LUlExTVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIwMTUwMTc4NDE4NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiw4vEu8WayJ7DhELDhMieXFxcIsOW4bSMxJAgxZrEisiew5bDs8S7XlwiLFxuICAgIFwibGlkXCI6IFwiMjMyMzQ1NDY2NjA1NTcyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0Q2cEtjREVNUG15YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSbXk2Z0tsN3lzOXF2bkF1c3FUdVN4bWFPa3BwaXZtQ1gra0Z5TFFSVWg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVIR09QeFJ0ditrNVltUUc2c2MxVExZU2ZhWmtwNlY1Y1pYWllwTit6Q1huQzlWZjlqQ3E2Wmw1SG1rZGl2MlQ3WjB3T1ZiQ3VveHVJYzkyc0hvV0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVaTFA4cjI0Qi8zbnI2MHErTkhPWmxTZm04UHdkREQwcERHREgxSTViM1RtZHFZZmVlTnZ3R0dISDNSdlJMTGh6MUpUR05FS2FGWUFqT3pNRXNoVER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIwMTUwMTc4NDE4NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTcwOTUwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
