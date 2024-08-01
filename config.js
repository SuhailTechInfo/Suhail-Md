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


global.SESSION_ID = process.env.SESSION_ID || SUHAIL_16_37_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA1NixcbiAgICAgICAgODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjExLFxuICAgICAgICA1NixcbiAgICAgICAgMTA2LFxuICAgICAgICA2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgNSxcbiAgICAgICAgNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk4LFxuICAgICAgICA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpalJJMUNJSGo5M1FpTVV2SHQ2WHVrU2pqZkN2RkhVNWFSbWtWcW9EeDl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPRk1Ham5TY1RVcXR4WFNVQnUzRTlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI0MjE4YzA5LTI2MzYtNGNiMC1iMjYyLWRlMzViYWYyYWNlOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODAsXG4gICAgICA3NSxcbiAgICAgIDIxMixcbiAgICAgIDE5MixcbiAgICAgIDcwLFxuICAgICAgMjI1LFxuICAgICAgMjE0LFxuICAgICAgNzIsXG4gICAgICAyMzQsXG4gICAgICAyMDgsXG4gICAgICAyNDEsXG4gICAgICAxNDcsXG4gICAgICA0OSxcbiAgICAgIDIyMCxcbiAgICAgIDExNixcbiAgICAgIDE5MyxcbiAgICAgIDQ0LFxuICAgICAgMTc4LFxuICAgICAgNSxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDIwMSxcbiAgICAgIDk4LFxuICAgICAgMTMsXG4gICAgICA5OCxcbiAgICAgIDcsXG4gICAgICA5MixcbiAgICAgIDE2MSxcbiAgICAgIDQ1LFxuICAgICAgNjgsXG4gICAgICAxNzAsXG4gICAgICAxMjcsXG4gICAgICAxMTQsXG4gICAgICAxNzgsXG4gICAgICAxOTgsXG4gICAgICA2NSxcbiAgICAgIDEwMCxcbiAgICAgIDgsXG4gICAgICAxNDIsXG4gICAgICA4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQSEpDV1E2VlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc3MjEwNjUxODc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjU3NjkzMjA3NjM2MDM6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMWFJ0T1lDRUtldHBMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlArSUJzbnJPQXZLMTFlU2d6cXJ3aWs0ZkEybnpaNFlqbzhSVWJMSHJFVWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidG1PL2JSOHdoZi9WNEJsMzA0Tkt6T0ZXRWRsSDBUNE9QZ0FmZ0Q5K2p2TDhGNnNBWUpwMU5tUEVNNmVpNUhHTld4alVFWm1uelM3anpkcjNVT1FuQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ3owcU9JSHJmWUp2ZGNudG1ZL3FacjgxSnczTzBmcThLMWdvRVFqYTBMYWd3WW9HcWtPZ1VuU2E3anE0VHlxU2JxWUhaRXdpWWlsNTMxam5nc3lqREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc3MjEwNjUxODc6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzU3NDE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkJJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKQkkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiVTllWCtXN3hXWmNRVVdlWEpFNzY1UVNSM3RReFd6K3Y4NXY4eExrK3Y0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc1MTY0MjgwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMTY1NzMwOTE3XCJ9Igp9  // PUT your SESSION_ID 


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
