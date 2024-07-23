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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/502487e293678820a42cd.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "DARK-HAKER-MD" 


global.devs = "94715898396" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94715898396";




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
global.read_status = process.env.AUTO_READ_STATUS ||"true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_52_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU5LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxLFxuICAgICAgICA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDczLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OCxcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICA3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNCxcbiAgICAgICAgODksXG4gICAgICAgIDQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDcyLFxuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDkwLFxuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICA1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaUQzUDR6akYwdWVEeDZhb2pYYzZrbldYZUhUcGhyZjJ2UUF6cDVIQnlSYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSlhFUjdPOG1UUHlZbXExUTd1M0Zxd1wiLFxuICBcInBob25lSWRcIjogXCJmMWYyZTdjMi1kNjQzLTQyODYtODc5MC00Yjc2ZTBiMTU2ODBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgNjgsXG4gICAgICAzNCxcbiAgICAgIDI0NyxcbiAgICAgIDExNSxcbiAgICAgIDY5LFxuICAgICAgMjksXG4gICAgICA1OCxcbiAgICAgIDEwMixcbiAgICAgIDcsXG4gICAgICAyMjYsXG4gICAgICAxODUsXG4gICAgICAyNixcbiAgICAgIDc3LFxuICAgICAgMjI2LFxuICAgICAgMTQzLFxuICAgICAgMTM1LFxuICAgICAgMTc4LFxuICAgICAgMTIsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDExOCxcbiAgICAgIDExOCxcbiAgICAgIDM0LFxuICAgICAgMTEwLFxuICAgICAgMTA5LFxuICAgICAgNzYsXG4gICAgICA1MyxcbiAgICAgIDE0NyxcbiAgICAgIDIxOSxcbiAgICAgIDUyLFxuICAgICAgMTczLFxuICAgICAgMjAxLFxuICAgICAgMjUyLFxuICAgICAgMjEwLFxuICAgICAgMjIwLFxuICAgICAgMTgzLFxuICAgICAgNjIsXG4gICAgICAxODIsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3WTQ5UEw1OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTU4OTgzOTY6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4MjMyMzM3NTE0Njc5OjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rWHdNUUdFUG15L3JRR0dCZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT3Z0WHlWSFdqMXA5TUJtSWNIY2YvNkcvay94TVc3eXFWY1V5RkZvejFGcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiNjB6a3FDbnRSL3RwbnVENGk5d2ZiMFV0WjRTOHB4dkxxdDRFMmxBaU5ld1R5SFNNQjlxb1dqZnB2ck00RFQvMDZNQUpaaWliQ1JGQnQ0bmZuWHZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqZGtsV1Q2WXcwZFRKb3QwZDg4MDZ0UkhrQ1BySlBEbExrN2VET2NwSjNiRU4vVG9XNmovQnVpeWlTb1kwWEVRTzRMNXBVYTliMTVJSENHQUJGbTVDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxNTg5ODM5NjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTczNTU0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVTK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVMrLmpzb24iOiAie1wia2V5RGF0YVwiOlwieGdJdUNaZHVkL1J0VERoVnNEek5CamRuWFVKWHJzT0EyU3pRK3NzT1BnST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzU0MjcwNzAzLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DARK-HAKER-MD",
  ownername:process.env.OWNER_NAME|| "DARK-HAKER",


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
