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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_20_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY4LFxuICAgICAgICA4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDczLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICA5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3LFxuICAgICAgICA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICA3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1LFxuICAgICAgICA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQxLFxuICAgICAgICA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK2NraUlDVXhaOCt3TnVoN0g4QkdoY1loQ2xsVUhQQTgwQjBPU2ZUWFFxdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3NzY4MjE3NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMxQ0YxQTY5N0M2Q0ZDNDU3M0JCRDYxRjM5QTRGQjAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI1MjAyNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFcFQ4QkdfUlRzMllPN0R6b1FGa1ZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNmZmQzYzc1LWZiNDEtNDM3ZC1hMmQ3LWM2OWQ3MmE4ZDc2NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDc1LFxuICAgICAgMTc0LFxuICAgICAgMTU0LFxuICAgICAgNjcsXG4gICAgICA0MSxcbiAgICAgIDIwMixcbiAgICAgIDE1MixcbiAgICAgIDEwNSxcbiAgICAgIDE3MyxcbiAgICAgIDU5LFxuICAgICAgOTYsXG4gICAgICAxNjgsXG4gICAgICAxNzgsXG4gICAgICAxNzMsXG4gICAgICA1NCxcbiAgICAgIDE4OCxcbiAgICAgIDE4LFxuICAgICAgMTQsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAxOTcsXG4gICAgICAyMTIsXG4gICAgICAxNzgsXG4gICAgICAxMzcsXG4gICAgICAxNjksXG4gICAgICAyMjIsXG4gICAgICAxOTcsXG4gICAgICA5MCxcbiAgICAgIDEzNSxcbiAgICAgIDQ5LFxuICAgICAgMTksXG4gICAgICA5MCxcbiAgICAgIDE0LFxuICAgICAgNTcsXG4gICAgICAxNDcsXG4gICAgICA2NixcbiAgICAgIDE2NixcbiAgICAgIDE5NixcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdHSloxTERNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzY4MjE3NjY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1ODY4MTkxOTA3OTQ0OjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUmlkZGxlclwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09tRjNLZ0VFTzcxbmJVR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTC9rVDlLNWdQdjljODE4WE5ING9WNTc3R1pGdk5xbXMrbTVtY1cxcVFWYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuOVZXVWVSTEdWWURvazFoa0ozcTJYQmhLNjB2T0JWdnRva28reDhEclhHK29vV2luOTFOUjIyd2plcWJuRktzMG5lcDZmSmFvSGx1dDFOV2lsaGpBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrUHhmU0lnbWV3Q2IyZXlmQlNiRGlOODZjbUNxaUM1eXhqWCs5dFkzTGx3enAyc2wyQ3ZvbUZYL3ZVZ1VLSkZuenl1c05yUkVDTFYwa1h2UzFNZk9qdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzY4MjE3NjY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNTIwMjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGWE1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZYTS5qc29uIjogIntcImtleURhdGFcIjpcIlBtZ1E0WUw3cU9BdFNHemVIWURPZ1ozZVRwR05kQ3BsdGcyTTZMNkZ0dlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1OTEzNTk3NyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyNDk5OTEwOTdcIn0iCn0="  // PUT your SESSION_ID 


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
