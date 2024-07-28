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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923005307168";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_42_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExLFxuICAgICAgICA3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICA5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICA5NixcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDQxLFxuICAgICAgICA4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDk0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg5LFxuICAgICAgICA0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOFBlejhNRVdJcWZOYzlrN0ZBWFBTeGlvcloxOHhDbG1odTJma2x5S3diVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMDUzMDcxNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE4OUZFQzdGNzUyMzI2MDdDMTk2QjM4QUJDRThBNUNFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE0MTc2NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAwNTMwNzE2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTA5NDU5Qjg2RTI4NUMyNzE5RjdFRDZGODAyMTlCQjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTQxNzY3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBGdjgxeUdfUlJxYVRRMGNGODh5bndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmVkZGRlZWEtNjMxYS00N2IyLTg5M2QtNWQ1Y2UwZTA0ZGU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDMxLFxuICAgICAgNTQsXG4gICAgICAxMTQsXG4gICAgICAxNDIsXG4gICAgICAxNTUsXG4gICAgICA1MixcbiAgICAgIDE0OCxcbiAgICAgIDEwNCxcbiAgICAgIDEyNixcbiAgICAgIDMsXG4gICAgICA1MyxcbiAgICAgIDIxNSxcbiAgICAgIDkwLFxuICAgICAgMTUwLFxuICAgICAgMTk4LFxuICAgICAgMjQ3LFxuICAgICAgNzcsXG4gICAgICAyNDcsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAxNjQsXG4gICAgICA4NyxcbiAgICAgIDIxOCxcbiAgICAgIDQwLFxuICAgICAgMTcsXG4gICAgICA0NSxcbiAgICAgIDE2MixcbiAgICAgIDI0MCxcbiAgICAgIDE1MyxcbiAgICAgIDI0OCxcbiAgICAgIDE2LFxuICAgICAgMTM0LFxuICAgICAgMjEzLFxuICAgICAgMTY2LFxuICAgICAgMTMyLFxuICAgICAgODMsXG4gICAgICAyMjEsXG4gICAgICA2OSxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4WFNKVDg0MlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDA1MzA3MTY4OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiaWRrXCIsXG4gICAgXCJsaWRcIjogXCIxNTM0ODA5NzUxMzA4MDU6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSy85aGNvR0VMNllsN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRNmJPV0FJWXpWYzEwemNTRVd5V21DSzFrUFVYUlNtWG85Wjh2ZWl4R1F3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdHT1BoT2FLVWFGU2FDRFY0M0dCT3BBdXRZVVdaVzlxejhsWnVKQkJNSXFLMzRHMEtjdWtQYnkwNjdwYTlhSFlVRUJGZmxPMzZMbUJ5bHYzSnJ0MEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVOVnhVd2ZBMXdJMFE0NlMrR0JUcTNHVXZzVE95VE1aZWdSZ09IazVRM3J5R1F4OTNjYnRIZXVPaEFBVlAzc3QxaW51cXpDM3NMbEdEYXZKV1M1WERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAwNTMwNzE2ODoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTQxNzYxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mugal",


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
