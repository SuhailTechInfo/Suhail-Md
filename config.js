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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_03_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDk3LFxuICAgICAgICAyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMixcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc3LFxuICAgICAgICA3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTg0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICA5NyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWkFYYWNWUEVzZ0FHSDFSVWNYdWJ4Ym15QjJQVVROUDFhSVppR2FZdyt6Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid3plVUN1WjJSX0d6MnV0S0ZsdzNuZ1wiLFxuICBcInBob25lSWRcIjogXCI5NmY4ZmFlZi05M2ViLTQ5NTgtODJhZC03NGU1OWJkMmYwY2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAyMjAsXG4gICAgICAyMDUsXG4gICAgICAyMDYsXG4gICAgICAxMzcsXG4gICAgICAxODksXG4gICAgICA5NSxcbiAgICAgIDIyMixcbiAgICAgIDIxLFxuICAgICAgMTcyLFxuICAgICAgMjM0LFxuICAgICAgMTMsXG4gICAgICAyMjEsXG4gICAgICAxMzQsXG4gICAgICA5NCxcbiAgICAgIDIzNixcbiAgICAgIDEwNixcbiAgICAgIDEsXG4gICAgICAyNSxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDk4LFxuICAgICAgNzQsXG4gICAgICAzOCxcbiAgICAgIDU1LFxuICAgICAgMTg2LFxuICAgICAgNTEsXG4gICAgICAyMTAsXG4gICAgICAyNDYsXG4gICAgICA5NCxcbiAgICAgIDU0LFxuICAgICAgMjAxLFxuICAgICAgMTgwLFxuICAgICAgNzMsXG4gICAgICAyMzYsXG4gICAgICA5NSxcbiAgICAgIDEyMSxcbiAgICAgIDE3MyxcbiAgICAgIDYxLFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZBQ0pEUUw2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDMzMDI4NTE3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0OTY0MTQ3NTY2MTk2NDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09DODF6QVFzNml3dFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVGpZN0hQaVh2dU1kODNid1IrUzhPVlhTc1hBWjdsYmdFNVk5MzJ4dm4zOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMK1JCQmVhUXN6MGhTajdQbG9OSUw4VVJZTW1UMW1ZSE0rb010M0pvejk4K1F0UVgwdENhMklhV2xyRVFybFNYRnFpWWk1N1RiaEZHY1FMWUFISHhCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrekRVREJ1NCtpK1ZVNG1kZ3BtOW1EK2NXeXlPQ3V4Nkg2eVFZUmdTMmxWbHFOY3hta0VhR0Q4aHEwZm50bFpuUmcxNkxSM1JPTFFEdWNYR1dvaHZDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMzMDI4NTE3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1NTMzOTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMclNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxyUy5qc29uIjogIntcImtleURhdGFcIjpcInRGQnZXdExhTjh6SEF4Zjc4UHkvOUdzQWtrVi85VUpUandFdDF1Y2E3RjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyMDk2NDc2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1MzI4NDI1OTlcIn0iCn0="  // PUT your SESSION_ID 


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
