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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_25_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDksXG4gICAgICAgIDUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU0LFxuICAgICAgICA5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMwLFxuICAgICAgICA3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICA2MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgMTM2LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgODMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYxLFxuICAgICAgICA2MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NixcbiAgICAgICAgMTEzLFxuICAgICAgICAzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLVTFlbzZGRWRHa29QbXcrMHRpUS81Vnp2NTR1T0NDNkprVXZWdUJpMDFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWNEpkWUZSalRhZWlZa2ltTVA4QnNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM5YWVjYjFlLWJkNGUtNDI3OC05MTEyLTc1MGNmMzRmMzgyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICAzOSxcbiAgICAgIDEwNyxcbiAgICAgIDM0LFxuICAgICAgNDksXG4gICAgICA5NSxcbiAgICAgIDE3MSxcbiAgICAgIDE1NyxcbiAgICAgIDIxLFxuICAgICAgMzAsXG4gICAgICAyMDEsXG4gICAgICAyMzAsXG4gICAgICAxMzAsXG4gICAgICAyMDMsXG4gICAgICAxOTMsXG4gICAgICAxMTYsXG4gICAgICA5NCxcbiAgICAgIDgsXG4gICAgICA3NyxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAyMzMsXG4gICAgICAyMDIsXG4gICAgICA0NSxcbiAgICAgIDYwLFxuICAgICAgMjE2LFxuICAgICAgNDUsXG4gICAgICA3MCxcbiAgICAgIDIwNyxcbiAgICAgIDU5LFxuICAgICAgMjcsXG4gICAgICAxNzEsXG4gICAgICA2NixcbiAgICAgIDQsXG4gICAgICAxNjgsXG4gICAgICAyMjcsXG4gICAgICAxMzIsXG4gICAgICAxNTEsXG4gICAgICAyMzEsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEVzNEUk5EQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA2MDAyMjcyOjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSXQncyBCcmlhblwiLFxuICAgIFwibGlkXCI6IFwiMTYwMzkxNzYyMDYzNTM5OjM3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04ySzFvUUhFS2F6bkxVR0dBc2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiODNDanNOUXlnNzFReEIrSE1VelhtbU42RzJrclUyRHNKWjNJOHlFNWloST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHUkkwL01RMHBmNTkrc0k5NmxvTXpMUkx5bGZJVGU0VVVOZnp6K1B4MUNwODl1V24zL1FiZlM5bHA4d0lWbmJURjdsRGVzRGZhRm9wcDRnNzNBd0ZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4a05YcHBSSWd2ckVSblMyUnpheFppVjN6eHFJbFBTczhzS3N3TWtDWVppeVY4TjNrU2FIWmFabkNHQ3JhN1lxMFc2MUJCcFNJMUhNcEtnZGJjLy9pUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDYwMDIyNzI6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjI3MTE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkJZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOQlkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvcTVPeHR3bFJFUGRaK1hQN1B3bXNra3pTbkovYjJWdWRNUzgvejVqWERnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODg4NDcxOTcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
