⁶const fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_36_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzLFxuICAgICAgICA0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyLFxuICAgICAgICA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgyLFxuICAgICAgICA5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDcxLFxuICAgICAgICAyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA3MixcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQyLFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjExLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIllkdHJQdmpyYTdwSXFZZGFESW5qbENVSUVoOVc1eEdoajA2b0RuR055UWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzc2ODIxNzY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNTYxNkVGMTQ4NDExMTgyOUQ0MzIzOUI2OEUzMEY0NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNDU3OThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOTREUjZ4TTVUMmFqQ2ZRdzl0RWVkd1wiLFxuICBcInBob25lSWRcIjogXCI5NjAwNjI3Yy05NWE4LTRlOGUtOWQzZS00YTljMTdmZTdjMjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAyNTEsXG4gICAgICA5NyxcbiAgICAgIDQxLFxuICAgICAgMTg4LFxuICAgICAgNzMsXG4gICAgICAxOTcsXG4gICAgICA2MSxcbiAgICAgIDEwNixcbiAgICAgIDgzLFxuICAgICAgMSxcbiAgICAgIDI1MCxcbiAgICAgIDUxLFxuICAgICAgNDIsXG4gICAgICAyMTMsXG4gICAgICAxNzYsXG4gICAgICA5LFxuICAgICAgMjI4LFxuICAgICAgMjI2LFxuICAgICAgOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgMTM2LFxuICAgICAgMTI4LFxuICAgICAgMjAwLFxuICAgICAgMTA3LFxuICAgICAgMjI3LFxuICAgICAgNjksXG4gICAgICAxMyxcbiAgICAgIDE5MCxcbiAgICAgIDIxNyxcbiAgICAgIDM4LFxuICAgICAgODMsXG4gICAgICAxNzcsXG4gICAgICAxOTksXG4gICAgICA0NyxcbiAgICAgIDEyLFxuICAgICAgMjA3LFxuICAgICAgMTE3LFxuICAgICAgMTY4LFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdTMUJDOVpLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzY4MjE3NjY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1ODY4MTkxOTA3OTQ0OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUmlkZGxlclwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09tRjNLZ0VFSnpGbmJVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTC9rVDlLNWdQdjljODE4WE5ING9WNTc3R1pGdk5xbXMrbTVtY1cxcVFWYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmQW1TOTBXY0VZSFYybHVvdkhJeDVVcDlPTlBMbG9NNUY3V1UzZjRsOEE0bnRWSWtLNnZ3OEdlbGFoL21BQzNNbkVsb3dlc0JraHBKTG4rSEFIbzVEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYc0RIVmU2cW5EMmc3VUlSTGsvNCt4SFBmblV0WWN2dUdqS2FibGxxbWNYLzFWZ29tRmNnT0RvVkpVYk9yTE96eXF2b0k4MGpPdGtCSjhzYjY5NG1Edz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzY4MjE3NjY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNDU3OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGWElcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZYSS5qc29uIjogIntcImtleURhdGFcIjpcImlXSjBsOVhkTk5PTnRlV2lsSE9VYzlJdTh0U3ZlWVpYU2lyOElsZy8zalk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1OTEzNTk3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjM2NjM2OTUzXCJ9Igp9"  // PUT your SESSION_ID 


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
