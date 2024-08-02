const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "riviya"
global.allowJids= process.env.ALLOW_JID || "riviya" 
global.blockJids= process.env.BLOCK_JID || "riviya"
global.DATABASE_URL = process.env.DATABASE_URL || "riviya"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "riviya";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94740979101";




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
global.waPresence= process.env.WAPRESENCE ||  "riviya" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "riviya,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "riviya,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_09_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYwLFxuICAgICAgICA3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYxLFxuICAgICAgICA5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDkzLFxuICAgICAgICAyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NixcbiAgICAgICAgMjEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDM4LFxuICAgICAgICAzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDk2LFxuICAgICAgICA1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxODksXG4gICAgICAgIDExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDY0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyLFxuICAgICAgICAyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIsXG4gICAgICAgIDE2LFxuICAgICAgICA2NixcbiAgICAgICAgODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICA3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwib3VoOVYyb2o4M2RDejM2eVNOUlBzaVp2cS91UUNrWlByZlY4dkh2SCtOWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid3BPRjIxNU9SSy1pZmRqNFlTUU12QVwiLFxuICBcInBob25lSWRcIjogXCJjOWJkZjM0MC03ZTNmLTQ2ZDgtODQyNS1jZmIxN2VjMGFlM2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAyNCxcbiAgICAgIDIyOCxcbiAgICAgIDI4LFxuICAgICAgMTgwLFxuICAgICAgMTc3LFxuICAgICAgMjQzLFxuICAgICAgMSxcbiAgICAgIDExMCxcbiAgICAgIDIyNyxcbiAgICAgIDk2LFxuICAgICAgMTYyLFxuICAgICAgMTI2LFxuICAgICAgMTM0LFxuICAgICAgMTA3LFxuICAgICAgNDQsXG4gICAgICAxMjMsXG4gICAgICA2MSxcbiAgICAgIDE0MixcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAyMTgsXG4gICAgICAxMzQsXG4gICAgICAxMjEsXG4gICAgICAxNTMsXG4gICAgICAyNSxcbiAgICAgIDIzNCxcbiAgICAgIDExNCxcbiAgICAgIDEyMCxcbiAgICAgIDE5MyxcbiAgICAgIDIxNCxcbiAgICAgIDI5LFxuICAgICAgMTk4LFxuICAgICAgMTU2LFxuICAgICAgMTk3LFxuICAgICAgMTY4LFxuICAgICAgMTI1LFxuICAgICAgMTI0LFxuICAgICAgMCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBSQkpOM004XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MDg3OTEwMToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTMzOTQ0MzI5OTU0MDc6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnVjMXM0Q0VMTC9zTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzWWV0WEtiMnlySnJDb3gyemtHdG9FVVdQVjdkdkpUWG41Um8yNWV1MEhFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFaZTNNTC9SZGp1RWxyN1Y5cVU5YTBEWkpMTGRsYVZRd1hZYlZDS2h5N3kvOUkxTTBJdzB4Z3VDZTNudDhMQVNyOVhHRzIzLzFiOUsybENGZ3hMeUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitZMVZqUG5NOGtlRWYrb21RUzF1MW9VNkxHRzJvUkM3TUw2WW9SZWh2MDM2V09kQjdjNzZKakd4K2ptNE41MXNmM3RPd2prais3WndlUk1pcjdHSEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQwODc5MTAxOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1NjQ1MzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "riviya",
  packname: process.env.PACK_NAME || "riviya",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "riviya",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "riviya",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "riviya",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "riviya",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "riviya",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "riviya";
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
