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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_08_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk5LFxuICAgICAgICA0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDczLFxuICAgICAgICAxNixcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI2LFxuICAgICAgICA2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2LFxuICAgICAgICA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MixcbiAgICAgICAgODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQzLFxuICAgICAgICA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMixcbiAgICAgICAgMjI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDExLFxuICAgICAgICA4MyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibVVvLzU5dU94NzR2VmwybU1FR2dVTDRBZjBTSDE4YUdlTmEzTy9qL0YzOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN1NESldMSTlRbnFZRDFRME5wTTJlZ1wiLFxuICBcInBob25lSWRcIjogXCI2MjY4Mzc5My02M2Y1LTRiOWQtYTgyMC1kZWYxYzdlNDkxYjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMjE1LFxuICAgICAgMjIwLFxuICAgICAgMjA1LFxuICAgICAgNzIsXG4gICAgICAyMDMsXG4gICAgICAxOTgsXG4gICAgICAyMDgsXG4gICAgICA3MyxcbiAgICAgIDE3NixcbiAgICAgIDIxOSxcbiAgICAgIDIwLFxuICAgICAgOTIsXG4gICAgICAyMCxcbiAgICAgIDE4MCxcbiAgICAgIDEwOSxcbiAgICAgIDcsXG4gICAgICAxNTYsXG4gICAgICAyMTAsXG4gICAgICA4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDEyMixcbiAgICAgIDExLFxuICAgICAgMjI2LFxuICAgICAgNTAsXG4gICAgICAyMzIsXG4gICAgICAyMjksXG4gICAgICAxODUsXG4gICAgICAxNDAsXG4gICAgICAxMDcsXG4gICAgICAyNDEsXG4gICAgICA2MSxcbiAgICAgIDY5LFxuICAgICAgMTcwLFxuICAgICAgMjQ1LFxuICAgICAgOCxcbiAgICAgIDIxOSxcbiAgICAgIDIzMSxcbiAgICAgIDE3OSxcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllORDFTVDFOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzcyMTA2NTE4NzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjU3NjkzMjA3NjM2MDM6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFhSdE9ZQ0VQYm9yTFVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQK0lCc25yT0F2SzExZVNnenFyd2lrNGZBMm56WjRZam84UlViTEhyRVVrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNGQzkzK0lIV1o1TllGQnJlMlpCYkJFenI3cEJROVlJUGM5cU56SElwWDl5NjE4RnhmU0RoRU5XcGhHUDNWWTg0WGxsYzExWHRVYTFGOW0xM0J4aURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhLaEtQTDlYM2s3dExnMzNEWVZmMXVrbkN6TU1BdVFZTUNmcGNxYnBmU3I0M3ZMVnNKbFFudzkrT1NEWUdKZUJ5bGhqaE5PbUswR2toOTBTRDBFcENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzIxMDY1MTg3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0OTYxMjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKQklcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpCSS5qc29uIjogIntcImtleURhdGFcIjpcImJVOWVYK1c3eFdaY1FVV2VYSkU3NjVRU1IzdFF4V3ordjg1djh4TGsrdjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzUxNjQyODA0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxNjU3MzA5MTdcIn0iCn0="  // PUT your SESSION_ID 


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
