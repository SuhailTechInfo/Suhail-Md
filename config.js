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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250500664998";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_42_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MixcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk4LFxuICAgICAgICA5NixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgzLFxuICAgICAgICA2NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNixcbiAgICAgICAgNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmJvWUZOc1RTM1F1RHVjSXdRNzhCNE56ZllSdUtkTVpKdkFKUWUrM3Npaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjUwNTAwNjY0OTk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUZBM0U3Qjc1QTRDMDkyOTNBMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1NDg1NTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiemJISWJoR01RSUdpcU1wZG9WUnowUVwiLFxuICBcInBob25lSWRcIjogXCJlNTM0YTI0YS04MjZlLTQxZWEtYTFhMC05ZjY4MTE3MGViZWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgMjE0LFxuICAgICAgNzgsXG4gICAgICAxODEsXG4gICAgICAwLFxuICAgICAgMTQ4LFxuICAgICAgNCxcbiAgICAgIDg4LFxuICAgICAgNjIsXG4gICAgICAxLFxuICAgICAgMzksXG4gICAgICAyNDgsXG4gICAgICA3MCxcbiAgICAgIDIzMSxcbiAgICAgIDIwLFxuICAgICAgODcsXG4gICAgICAxMDUsXG4gICAgICA3OSxcbiAgICAgIDEzOCxcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTgsXG4gICAgICA3LFxuICAgICAgMjE4LFxuICAgICAgMjcsXG4gICAgICAxMjQsXG4gICAgICAyMyxcbiAgICAgIDE4NyxcbiAgICAgIDEwMixcbiAgICAgIDIyNSxcbiAgICAgIDE3NSxcbiAgICAgIDQ3LFxuICAgICAgMjE0LFxuICAgICAgMTg4LFxuICAgICAgMTU4LFxuICAgICAgMTYyLFxuICAgICAgMjM0LFxuICAgICAgMTk5LFxuICAgICAgMTc1LFxuICAgICAgMTkxLFxuICAgICAgMTA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZBSk5DOFA5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwNTAwNjY0OTk4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NTU0NDE0NzAzMDA0Mjo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lPaXVaUURFTUtDc0xVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU1hkM0ZQLzFSR3NJc1lISzlPNmhBdmtnd1FlajNLZzljRUs1N2hEVU5XYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRdEE1b3B1WEx4YXJLalZIVENUaTNWcXVvSnU3VVk3bG11Z0w4OVV6aGJqck1oM096QWdiYVFzRk01SGVWYlUvTXBBcytJVWUvVE1FUWNJSlRGTnNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxNnl5YlBHTnE0eGR6dkV4SDdyUE95UDNMZHg5dlZqSndsMjJhOUhJRGVYTGNjMEpxSUI2ZmtackllNmF3WWFTSENXaC9NYjdSM2tHa29tbWdhRTJndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwNTAwNjY0OTk4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1NDg1NTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
