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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233595652412";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_13_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNixcbiAgICAgICAgMjI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDY4LFxuICAgICAgICA4MixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDYwLFxuICAgICAgICA2OSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkxLFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk1LFxuICAgICAgICA2MixcbiAgICAgICAgMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNyxcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSnhSa0QzdUE4QWdKR2xjS0tUV204eGNVcElCVTBPYk1wcjhnanJyVEFLWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia2tNczJ6NmtTMUN4YUZnVldKTEdpQVwiLFxuICBcInBob25lSWRcIjogXCIwN2MzZmIzYy04NDA2LTQzMTYtODk2OS01OTY5ZGFjZGE0Y2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICA3NyxcbiAgICAgIDM2LFxuICAgICAgNzQsXG4gICAgICAxNDksXG4gICAgICAxMDAsXG4gICAgICAzMSxcbiAgICAgIDEzLFxuICAgICAgMjU0LFxuICAgICAgMzIsXG4gICAgICAxMzgsXG4gICAgICAxMjMsXG4gICAgICA3NyxcbiAgICAgIDI0OCxcbiAgICAgIDQ2LFxuICAgICAgMTQzLFxuICAgICAgMjA2LFxuICAgICAgMTExLFxuICAgICAgMTczLFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMTQ3LFxuICAgICAgMjQyLFxuICAgICAgMzAsXG4gICAgICAxMCxcbiAgICAgIDE2OCxcbiAgICAgIDYyLFxuICAgICAgNTMsXG4gICAgICAxMjcsXG4gICAgICAyMzQsXG4gICAgICAxMDUsXG4gICAgICAyOSxcbiAgICAgIDE0MixcbiAgICAgIDQzLFxuICAgICAgMTE0LFxuICAgICAgMTI0LFxuICAgICAgMTU3LFxuICAgICAgMjIyLFxuICAgICAgMjQ1LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkgzR0ZUNTZCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1OTU2NTI0MTI6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNjA0ODkxMDMxOTcxNjo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZkd6bzRHRU15WXY3UUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInYrV1MvL05Nd2UyVno3TXlVVHorbjB0cmZ3bS8wM0pHRHR0cXNXUG1QMUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZUREU3lhQk1rMXk3UlplWUozdjRBKzlpODR3T3VNaE9BVFpxenNkR04rUCtZb3pHamtKSm1BZGJMcWZ3QzJRNUpreU9ra05GSTRHbmZoK3N4Rko5RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYzV4ck5lazFxTElkcnZraDIzaURlVHFXZ1FoQTJEQ0FyUDV3NlM2MzVIa0Fmd1lJNHdCbEx3ak52VU11RnNjRldYNGY2eitES0pUUmdRTnJ3TXZ2aEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTk1NjUyNDEyOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjk5OTgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSzZhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLNmEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3eXVBbXBzSEVNd1RQNER5a3ljUXBnSHFieXRUQjUrNmpWRXF3RVhxOXlVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDEyNTk4NDYsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDYzNzM0NzAzNVwifSIKfQ=="  // PUT your SESSION_ID 


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
