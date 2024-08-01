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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22383571008";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "92xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SUHAIL_15_07_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICA4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTksXG4gICAgICAgIDM5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA3LFxuICAgICAgICAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkxLFxuICAgICAgICA5NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICA2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNixcbiAgICAgICAgMTA2LFxuICAgICAgICA2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4c09TWHkvUzBvRkQya3BZMjVNTkZKNW5kaTQ0MGxHNm1GWFBPeGh2bFpnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJra3YzUVdVRVQzaVU3cmxkblk4MTFnXCIsXG4gIFwicGhvbmVJZFwiOiBcImUyZDUzNjEzLTM1N2ItNDgyZC05YWE3LTQ4NTI2MmI5NDNkYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICA1MyxcbiAgICAgIDE4NyxcbiAgICAgIDE4OSxcbiAgICAgIDE3MCxcbiAgICAgIDI1NSxcbiAgICAgIDMyLFxuICAgICAgMTI0LFxuICAgICAgMTQxLFxuICAgICAgNTAsXG4gICAgICA2NCxcbiAgICAgIDg5LFxuICAgICAgOTQsXG4gICAgICAyLFxuICAgICAgMTUxLFxuICAgICAgMjAwLFxuICAgICAgODQsXG4gICAgICAxNCxcbiAgICAgIDk1LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMjYsXG4gICAgICA1MSxcbiAgICAgIDExOSxcbiAgICAgIDIyMCxcbiAgICAgIDI0OCxcbiAgICAgIDIzNixcbiAgICAgIDE0MCxcbiAgICAgIDE5OCxcbiAgICAgIDE0MixcbiAgICAgIDIyMCxcbiAgICAgIDEyLFxuICAgICAgMTM5LFxuICAgICAgMjQ5LFxuICAgICAgMTkwLFxuICAgICAgMTAyLFxuICAgICAgODAsXG4gICAgICAxMDQsXG4gICAgICAyMDcsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKWDRBTjFKRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIzODM1NzEwMDg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA2MDk0MzMyNDk3OTY0OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0hFb1lvRUVJM0pyclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrNkVwcVI1eFcwa1UvcXJoZ0RRMmkwSXk5Y1VRT3pmVmUyVzRCeTgrL3lRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBiUWR4SUZJYmx0aTc5emM0aVJ5WGNZN3MrNG9HbDN4UHcyelJlZFQySU05R254SStNVWxsbSsyQVZLQlU0Q0owenNKWDRGQ0k2YUZoMWpvb2o5d0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdqc05HUHhUYnFUbFpicm9la3pUeXBscm8xMUNOSFdYUnN6Nm0zMnZ4dERESFhxOUVPM1lGKysxYzRVeU1ndElVUjNTOTB5UEJPYnpvU1BEQ09CN2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMzgzNTcxMDA4OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTI0ODE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk96XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKT3ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0bERzeEJ6VEdCbU9WRmxMN1J6RkZtZWdsWHZVR1RCajlJUkJaeG9EMnhZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTUyNjI4MTUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "♤",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME||"Seydou"
    
  ",


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
