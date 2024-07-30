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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_20_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDU1LFxuICAgICAgICA2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMixcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgODcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzLFxuICAgICAgICA0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICA1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI3LFxuICAgICAgICA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqMG4wUndWZ1B1dURhYk5BT2owamVvQnpZUHR3SXovbnBpa1UvYVZWOUc4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc3NjgyMTc2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDJCNTE3MTU0NjA4RERDMTRGRDI5MkQwNjc4RkQ2RkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMzI3NjUxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBGTVNHMDcxVFF1N1pnNlNDYmxqamdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWRmNDliZTUtZWNkYS00MjRkLWEwNmUtOTBkNzg2OTM3MTQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDEzMixcbiAgICAgIDE3OSxcbiAgICAgIDE5MyxcbiAgICAgIDEyLFxuICAgICAgNTYsXG4gICAgICA1MyxcbiAgICAgIDExNixcbiAgICAgIDQwLFxuICAgICAgMTIsXG4gICAgICAxMTksXG4gICAgICAxMTksXG4gICAgICA2MixcbiAgICAgIDIxMyxcbiAgICAgIDg5LFxuICAgICAgOTksXG4gICAgICAxNzIsXG4gICAgICAzOSxcbiAgICAgIDE1NCxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICA2NCxcbiAgICAgIDY4LFxuICAgICAgMjA4LFxuICAgICAgMTY5LFxuICAgICAgMTMxLFxuICAgICAgMTEsXG4gICAgICAxNDYsXG4gICAgICA1OCxcbiAgICAgIDE3MixcbiAgICAgIDc1LFxuICAgICAgMjE3LFxuICAgICAgMjM5LFxuICAgICAgNzAsXG4gICAgICAxMDQsXG4gICAgICAyMjIsXG4gICAgICA4MSxcbiAgICAgIDEyNCxcbiAgICAgIDIxNCxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1SEdRN0xQWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzc2ODIxNzY2OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTU4NjgxOTE5MDc5NDQ6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT21GM0tnRUVObkVvclVHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJML2tUOUs1Z1B2OWM4MThYTkg0b1Y1NzdHWkZ2TnFtcyttNW1jVzFxUVZjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFCT0o5VVBnc0tZTnlCc05UY3NSWUdWRTdIK0p5Z0tFVmEwcWU2U1JKd1dwcFlXaU9OWkRpM21JUGhTczJ3c1V0UGk3OExUSkloWEZzZFFiZXFXV0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1hNEhlMzRXeTNRV052Y3JpQkN3bi80djIzTzRlNGsxYUM4M1N4STlsR3g2RGZoK1BMcmJYTFNhbE9wZUZxdmNCVUdablI4ZDltSDg0aHEzZ3NLRmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3NjgyMTc2NjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzMjc2NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGWE5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZYTi5qc29uIjogIntcImtleURhdGFcIjpcIjRFVTRhWU81cXVOT1BQb1JjSWFIUHgwK29MTWFua1RjNkorQUVqMWNlQUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1OTEzNTk3NyxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw2LDddfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=='

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
