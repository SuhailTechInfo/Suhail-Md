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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_08_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgODIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICA0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUzLFxuICAgICAgICA4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU0LFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgODcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY1LFxuICAgICAgICA4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ3LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcxLFxuICAgICAgICA2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicWhrei9ENVR6Sk1YazBBZ2M3QmxWdGlER3NJcjRrRXZwUk96VDVuelhtYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxNDk1OTQ2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUUxN0IwN0JBNTU4NDQ1Qzk0NkFCRTNENzhEQzY4QTNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMzUyMTA2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhzTi1kWFhHUllDZTNKeWEwajZmWXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTQyNTAzNWUtY2I5Yi00N2Q3LWFjMTctYzljMDQwYjZmZTcwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDI3LFxuICAgICAgNDMsXG4gICAgICAxMzksXG4gICAgICAxMDcsXG4gICAgICA1NSxcbiAgICAgIDExLFxuICAgICAgMTQwLFxuICAgICAgMzYsXG4gICAgICAzNCxcbiAgICAgIDk0LFxuICAgICAgMzIsXG4gICAgICAyNDEsXG4gICAgICAxNzcsXG4gICAgICA4LFxuICAgICAgMTQsXG4gICAgICAyNDIsXG4gICAgICA4NSxcbiAgICAgIDIxMCxcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAxNjEsXG4gICAgICAyMjcsXG4gICAgICAxOTEsXG4gICAgICAzOCxcbiAgICAgIDI1NSxcbiAgICAgIDEyMyxcbiAgICAgIDIxNSxcbiAgICAgIDE3OSxcbiAgICAgIDIxNixcbiAgICAgIDE3NyxcbiAgICAgIDE5OSxcbiAgICAgIDY2LFxuICAgICAgNDAsXG4gICAgICA1MCxcbiAgICAgIDE1NixcbiAgICAgIDE3MixcbiAgICAgIDExNSxcbiAgICAgIDUzLFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlDV00yNkZZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxNDk1OTQ2NTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MTAwMTgzOTk1NjA4NzozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlRoYXJpblwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04rYXF0Z0hFTitEcExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnlBTGw4WjJqMWpqYzRwRU1HNDBTb1FRU0ZNQU1KUVk1TDVoR2ZjRVBEWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQR1IzQ2JPMFVVbExrY3htZEhlZy9GRHNRZWNGenlJOFlyenRCVUFPcmQ5ZXlKM3pMMERKaVEzb08yMWdhbk51NWlxMGQwTmJ0RCs3NHV5UzZyb0tCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhWFpsZDNPSk8vT2JDTGpwNkZKdGF1dDM2VExsUlY1QWUxOEpsclRKRmkvOWRIdUttdUdjaDRKVjI0MUQ1aStCNXNxWHBVczlCc2MxRW0zVGRsT3FoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxNDk1OTQ2NTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzNTIwOTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIQ1NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhDUy5qc29uIjogIntcImtleURhdGFcIjpcIm00WGlMMG1RQnpKdXh2RDhGWStJZFhWVDFvN1IrSEw3Z3BUOGljUnJtQkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA2NDI4OTExOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMzUyMTAxMzQyXCJ9Igp9"  // PUT your SESSION_ID 


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
