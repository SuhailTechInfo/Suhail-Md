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


global.devs = "94701222478" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94701222478";




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
global.read_status = process.env.AUTO_READ_STATUS || "ture"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_56_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI2LFxuICAgICAgICA0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDMzLFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDczLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgODIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQzLFxuICAgICAgICA5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgzLFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwLFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg5LFxuICAgICAgICA0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg0LFxuICAgICAgICA4MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NixcbiAgICAgICAgOCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMTVxaDVHbDZrZjZGTzdPNmhiM2ttR0NQQW5TczRlNjdBUVlsNXpLeGNvRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNEItTGhtcEpUQUtob1BJTlAzMVFUZ1wiLFxuICBcInBob25lSWRcIjogXCIzNTY2OTg2OS1iZDBkLTQ3NDMtYmZmNi1kYThkMjdjZGRlZWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICAyMTYsXG4gICAgICAyNyxcbiAgICAgIDcxLFxuICAgICAgMTEyLFxuICAgICAgNzYsXG4gICAgICAxMjQsXG4gICAgICA4NixcbiAgICAgIDg2LFxuICAgICAgMjI2LFxuICAgICAgMjA1LFxuICAgICAgMTMwLFxuICAgICAgOTQsXG4gICAgICAxOTUsXG4gICAgICA0NSxcbiAgICAgIDE1NSxcbiAgICAgIDE1NSxcbiAgICAgIDEyMCxcbiAgICAgIDE0MCxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICA4NSxcbiAgICAgIDgxLFxuICAgICAgMTgyLFxuICAgICAgMjI0LFxuICAgICAgNCxcbiAgICAgIDEwNCxcbiAgICAgIDIwOCxcbiAgICAgIDU5LFxuICAgICAgODcsXG4gICAgICAyMTcsXG4gICAgICAyNDIsXG4gICAgICAzNyxcbiAgICAgIDk5LFxuICAgICAgNjIsXG4gICAgICAxMTgsXG4gICAgICAxNSxcbiAgICAgIDIxMyxcbiAgICAgIDExOCxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGU0RTREVCSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDEyMjI0Nzg6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLigKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7igKJcXG7wnZCC8J2QmPCdkIHwnZCE8J2QkSDwnZCR8J2QjvCdkJbwnZCD8J2QmFwiLFxuICAgIFwibGlkXCI6IFwiNDM3MDYwMDY2NTkxMDE6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVhVeEl3RkVKWDNuclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhajdaUm8xNzFSUXNDdFl3WmtMVVZKUmJKYlFpUjNhVEtaU0JpMU5GY0NRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInkvR0t6ZjlhYzZpYU0zTVhZbnFoQ3IxVTd6N0t6bVN6MVVYZW5hZXFEdDVrL2hYYTYrZ3J5WVRESVUxSEsxY09IUXJqMWd4ZkhyOGhKelpQK0FsMUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJUR2p6V3JOcC9pZk02WlpWTDdHMjd3eEpWWGZqd0N0VkwwaHA1U01WMm5aN2hNbWttSHduVElzMDl0Y0VNdDNXRVNRYUpvUkFkY1ZyWWZUOVc0YUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzAxMjIyNDc4OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNjg1NjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLNElcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUs0SS5qc29uIjogIntcImtleURhdGFcIjpcIkdicVdXZmJOYzVzeHFEbGswR3pnNiswK25PSzJyREZTSVl6bm4zTStRdGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM2ODQ2ODAzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjIwNTY4OTAyNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "cyber",
  packname: process.env.PACK_NAME || "cyber",
  botname : process.env.BOT_NAME  || "cyber-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "cyber",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "cyber"  ).toUpperCase(),



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
