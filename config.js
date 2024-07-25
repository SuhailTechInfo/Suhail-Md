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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_25_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MixcbiAgICAgICAgMjM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc3LFxuICAgICAgICA4NixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDY3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI5LFxuICAgICAgICA0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcwLFxuICAgICAgICA4LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMdXZsbU9CNHlYUG1VRGNnQWpERkdVRWp4SFNkRHZjWHo0RDloYW1aRk5ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNTI0NTIwNDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUxMjBCOTExRDU3RUVGNjhGNEVBRjQ4RDU2MUEzQkRBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTg5OTUyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKT1MzNDFRdlNwYXNweF9TSkxCN0R3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhODJmY2Q5LTA5NWMtNDQ4Mi05NTAzLTg2YjBiZjczNzRjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzcsXG4gICAgICA5NyxcbiAgICAgIDc0LFxuICAgICAgNTEsXG4gICAgICAxNDYsXG4gICAgICAxMjcsXG4gICAgICAxNixcbiAgICAgIDc5LFxuICAgICAgMjE1LFxuICAgICAgMTU1LFxuICAgICAgMTAzLFxuICAgICAgMTg0LFxuICAgICAgMjQsXG4gICAgICA5NixcbiAgICAgIDM2LFxuICAgICAgMTI1LFxuICAgICAgMTQwLFxuICAgICAgMTIwLFxuICAgICAgMjExLFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUwLFxuICAgICAgNTAsXG4gICAgICAxMDksXG4gICAgICA3NSxcbiAgICAgIDEwOCxcbiAgICAgIDE4MyxcbiAgICAgIDYzLFxuICAgICAgMTc1LFxuICAgICAgODUsXG4gICAgICAxMjksXG4gICAgICAxMzYsXG4gICAgICAzNixcbiAgICAgIDE2OCxcbiAgICAgIDIyNCxcbiAgICAgIDE5MyxcbiAgICAgIDUsXG4gICAgICAxMjcsXG4gICAgICAxNTAsXG4gICAgICA0NSxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5V1BSMThUS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA1MjQ1MjA0NDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzOTk0Mzc0OTU2MjYxNjozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlRyZXhpIChUUkVBU1VSRSkg8J+lsFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liNmx0OERFUGl6aUxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiczlhYzVaT2lvaXFDVGtxM1lnaGRSelZ3SE9tQU50Q2VRTzZSckVsWFh4TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaRE5GaGpNeURvcWJzU2g2WGdrNTdGczUrT3VNOTl0M1oxckRVVnE4MXNKSmhhQllZUE9IT0JvTGQxeUNTdnJMdllzVjFxaHZDcm5oZUJCeHRTYlNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUMjlVQnYvYUFkZ21pWmpvd2NUSENhK3BGRUZZNUNiclFpUXVydTVNR3F6a0c5Rit5RU5QVityajR6bDcrUWIrTUZ0TkkyZ3YyV0E2bmVVUENnZjRqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDUyNDUyMDQ0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTg5OTUxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdwUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3BSLmpzb24iOiAie1wia2V5RGF0YVwiOlwid0pCbEt3TmFxblpxcktSRXdSRjNsMlRCZC83ZGg0MURkOVBudU10VHdrVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA0OTExODc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE4OTk1MjI2ODZcIn0iCn0="  // PUT your SESSION_ID 


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
