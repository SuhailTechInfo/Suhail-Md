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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_46_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDgzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDY2LFxuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDQzLFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQxLFxuICAgICAgICA0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzksXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNixcbiAgICAgICAgMTUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIktmcXl2MTFOSWM1RWlsekJBRUVrUkpxNit2SjI4UlhyOEZRUzI0QUcvWWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkx2TEV0RUZmU3FxcVIwWEVEaFhSd0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTU3NTBmNWMtNmIyMS00OGRiLWIwNDAtN2FlOWY5MTQ1ZjM5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMTU1LFxuICAgICAgMTEyLFxuICAgICAgMzIsXG4gICAgICA1OSxcbiAgICAgIDM3LFxuICAgICAgMTU3LFxuICAgICAgMjQyLFxuICAgICAgODAsXG4gICAgICAyMjcsXG4gICAgICA2MCxcbiAgICAgIDI0OSxcbiAgICAgIDI2LFxuICAgICAgMjQsXG4gICAgICAyMjYsXG4gICAgICAyMzEsXG4gICAgICAxMDksXG4gICAgICAxNixcbiAgICAgIDIxMCxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICAxOTQsXG4gICAgICAyNTUsXG4gICAgICA3MixcbiAgICAgIDcwLFxuICAgICAgMTM5LFxuICAgICAgMTAwLFxuICAgICAgMixcbiAgICAgIDE0NixcbiAgICAgIDEwMSxcbiAgICAgIDE0LFxuICAgICAgNTcsXG4gICAgICAxNTAsXG4gICAgICAyMjksXG4gICAgICAxMDMsXG4gICAgICA4LFxuICAgICAgMTUwLFxuICAgICAgMTQsXG4gICAgICA3NixcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1UTThFUktBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwODc1MzUxNDY6OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJSYW5hXCIsXG4gICAgXCJsaWRcIjogXCIzNTMwOTQ0NjIzODMwOTo5OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJTFJ4MllRN1BXSXRRWVlDeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlAra0pqYzVhbWpRdWNkUURxVzJLMnRxbFhnd3kxa092NUVEcnVZN3NpR1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicEhTbUlPcENKY25DTWt4SkJFbU5pRG5pdzJIZkl1S0dIUzRkbmNWazZBZVhuS2FhY1d4Z0hQMXN3WkF3cFJGUVZTaDlVRHV2VVlyYWEyY1JWWHcyQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibUJjYTRLRGRLQXpzd05KaXBLRW5KdkVCQjV1aDR6NWFpaGRWNUJPejF4endqaEdCQm5PNUR6eEhYKzYxWG10LzR6eEtKak9pKzQ0djEwYU9aVzN3Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDg3NTM1MTQ2Ojk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5MDc5NTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
