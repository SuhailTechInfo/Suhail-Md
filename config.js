const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="poliviajeptoo6@gmail.com"
global.location="Kabsabet,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || 
global.website=process.env.GURL || 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Eliakim Tech


global.devs = "254745931715" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745931715";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254745931715,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_37_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICA4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNixcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICA1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDgzLFxuICAgICAgICA3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNElmNzJKU29NY1krZ2hOcUpMaVJQR2JHTndUdHpNOHpmd1N3Z0orWWtXMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTDdWMW9rQklReGVEdlVfRHZrVldTUVwiLFxuICBcInBob25lSWRcIjogXCI3YjM4MWYyMy1hZDZmLTQ3NzItODUwNi01OGQ0YTdhY2IxZTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMjMwLFxuICAgICAgMjQzLFxuICAgICAgMTUyLFxuICAgICAgMjQ5LFxuICAgICAgNDEsXG4gICAgICAyMTEsXG4gICAgICA3OSxcbiAgICAgIDEwMyxcbiAgICAgIDIzMyxcbiAgICAgIDEwMixcbiAgICAgIDEyMyxcbiAgICAgIDExMCxcbiAgICAgIDE2NyxcbiAgICAgIDEzMCxcbiAgICAgIDIxOCxcbiAgICAgIDIwMSxcbiAgICAgIDEwMixcbiAgICAgIDEyNSxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDE0LFxuICAgICAgMTA3LFxuICAgICAgMTcxLFxuICAgICAgMTIyLFxuICAgICAgMTc3LFxuICAgICAgMTAzLFxuICAgICAgMTcwLFxuICAgICAgMjUyLFxuICAgICAgMTg5LFxuICAgICAgNDksXG4gICAgICAyMDcsXG4gICAgICAxOTQsXG4gICAgICAyNTMsXG4gICAgICAxNzAsXG4gICAgICAyMDQsXG4gICAgICA5MyxcbiAgICAgIDM0LFxuICAgICAgMTg3LFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlNTSEdNU0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0NTkzMTcxNTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQGZheWV6XCIsXG4gICAgXCJsaWRcIjogXCIxNzk3NzQ5MTU4ODcyMTM6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM3g5WjBCRUpTcXVyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpnVjI5TEgzbVkzNzRqSjBzd0JnTHVBeFU3ZG1LakM1aVVJdEtxRlFYMm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNGJLYWFVNU9PeGZCU3o5OVRRM1ZPNDQrcE1OZld5Y0diL1JMdTh0dXpCU21CS3U2dzVnLytzK3lTaWtyN2VZaml1TytXYm83ODhUNllwWURYSXJCQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYkkyUDdYVmszV2xuVThUR3NCcUZBWVlEdGJYQnJRQW0wSXNXZ01Bem0rWmdSTmNZa3YwNEU4VzhIS2JvckdWeXJkSm1OK1lrSTdxK2N0eWd0WDFtRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ1OTMxNzE1OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjcxNzQ2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUthWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2FZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS013cFkvM0N3R2kyakM5V0JNcFIySWVzb3FTWVEvUkQwZ2hHQ0RWTys0cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMzExODQzNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Eliakim-Tech",
  ownername:process.env.OWNER_NAME|| "Eliakim",


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
