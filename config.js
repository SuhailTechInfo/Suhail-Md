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
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_13_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg2LFxuICAgICAgICA0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDM0LFxuICAgICAgICA3MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRjdjQis4Snc0RTJDeEJLaHZTczNnYTc2aHdJV1EvNnp0NjJJWGs5VHp1dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR2JrZ1FzWklUaXVNYkY3UGIxdjE3UVwiLFxuICBcInBob25lSWRcIjogXCJiZjRhNzljMi1mZmQ2LTQ0ZmUtOTJkMy1hMWQ1YjU4ODVkNThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMjUsXG4gICAgICAxNTIsXG4gICAgICAyMyxcbiAgICAgIDEwOCxcbiAgICAgIDgxLFxuICAgICAgMjA2LFxuICAgICAgMTE2LFxuICAgICAgOTgsXG4gICAgICAxNjYsXG4gICAgICA4MyxcbiAgICAgIDExMixcbiAgICAgIDEwNCxcbiAgICAgIDUsXG4gICAgICAyMTMsXG4gICAgICAyOCxcbiAgICAgIDE1NyxcbiAgICAgIDcsXG4gICAgICAzMCxcbiAgICAgIDE2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICA5OSxcbiAgICAgIDY4LFxuICAgICAgMTQ5LFxuICAgICAgMjQsXG4gICAgICA0MCxcbiAgICAgIDU3LFxuICAgICAgMTQxLFxuICAgICAgMjE1LFxuICAgICAgMTc5LFxuICAgICAgMjUxLFxuICAgICAgMjQwLFxuICAgICAgMTkyLFxuICAgICAgMjE2LFxuICAgICAgMTIsXG4gICAgICAzNCxcbiAgICAgIDE5LFxuICAgICAgMjQzLFxuICAgICAgMTUxLFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpXUUFKQVdIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM4OTE0MDMyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSsO4xZ9oXCIsXG4gICAgXCJsaWRcIjogXCIyNDc3MTcwMDM1NDY2Mjk6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVd3NW9zREVKcjZqclVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvdWlMN0VDM1ZpLzJvQXByNlBSUmxIME53WU00eGFTT09vSkl4SisyUFEwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBiV3k2SjNwRUhTcXBZNkV0NjAra0hOdExiY0VnTFpYQk4wK3FaMTNESlVHY1lOWGZHOWw4ZzVReDh1NGJCYUcrc1RDZVIrV2tLU3NxK2kwVjVkSENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlljamwvUExMSndNOGZQOFdPNVlXeHAwWUxzS05MaUFGM2szMGdHQWcxdkNxVGZsMnFFNTJDYVJydEt4eEtGNlFkRVZqNGl6UmpXRmJJSzZST2NxVmhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzg5MTQwMzI6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDA2ODE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTllLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOWUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRSFN2V3dRSmZyWThIL3hIOUwrblF1YXVWMnRlTGJrd0F2WWhyMkRpampNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzMDA1MjM1NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDMyOTk2MDAxXCJ9Igp9" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  |.| ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Jøsh",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|all| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private,",
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
  //readmessage:process.env.READ_MESSAGE|false| "false",
  //warncount: process.env.WARN_COUNT |warn, ban, block| 3,
  //userImages:process.env.USER_IMAGES|.img| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM |true| "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
