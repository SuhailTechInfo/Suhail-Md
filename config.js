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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1fdfa620c76d762af25be.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ GHOST - MD" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94 72 825 7107";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_55_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk4LFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI1LFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTYsXG4gICAgICAgIDk3LFxuICAgICAgICA4NixcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzLFxuICAgICAgICA5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWlhtT3ZOUlFFWlpJSWZFeFVwVUdKZGVxdS9ud0ZSdnpFc21oeHdRc2NKcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyODI1NzEwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDZEMDk2MjQ3NjJCODQ4QjE2MjQ2MTA3QkUwNzI3MURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTQ5NzI4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjgyNTcxMDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ5QzAyRENCMTQ0NzMxQ0M4MTg3MkRBREFBNjI0NjZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE0OTcyOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzI4MjU3MTA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMTc0QjExMEE3RUVBNUFDRTk1MTJCMzMyQjM4MDYyRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIxNDk3MzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyODI1NzEwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkJGOEQ2MkFGOEM2MEZCNkExNDRFRDE1RUFFRUVGNDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTQ5NzMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm40WUwzY0wyUktlcmFST1h4ZWpBaHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODllZjE5OTgtYWM1Ni00ZmRkLTkxYmUtMGE5MDgyNjlhNjgxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDE0MyxcbiAgICAgIDI1NSxcbiAgICAgIDMzLFxuICAgICAgMjExLFxuICAgICAgOTQsXG4gICAgICA4LFxuICAgICAgODcsXG4gICAgICAyMTMsXG4gICAgICAxMTQsXG4gICAgICAxMzYsXG4gICAgICA1OSxcbiAgICAgIDIzMyxcbiAgICAgIDE5NSxcbiAgICAgIDIzNixcbiAgICAgIDEzMixcbiAgICAgIDIwOSxcbiAgICAgIDIyMCxcbiAgICAgIDg0LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgNjIsXG4gICAgICA2MyxcbiAgICAgIDQxLFxuICAgICAgMTQ5LFxuICAgICAgMzQsXG4gICAgICAzNixcbiAgICAgIDQyLFxuICAgICAgMTA2LFxuICAgICAgODUsXG4gICAgICA4MyxcbiAgICAgIDEyMCxcbiAgICAgIDIyNixcbiAgICAgIDYzLFxuICAgICAgMTEyLFxuICAgICAgMzEsXG4gICAgICA5OSxcbiAgICAgIDExOSxcbiAgICAgIDE0NixcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0R1Y0Mk4zQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjgyNTcxMDc6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKYXlhbnRhIEFwYSBpc3VydVwiLFxuICAgIFwibGlkXCI6IFwiMTE5NTgwOTE1NzI0NTI0OjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01PY3VZRUJFTm5XbDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVEpmcG1vVTJTSFhwZlVJaU8zaWxrdTY1L0tIMWsxbUQ1a0ZPVnM2SzBtaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4enZPZnVhWTRHWjZkTUdkbDluYklSZU5wNXVrOHhsU3ZVWmxpc1JjNnBmRVdXdVpSWHhGZ1l4eHg2cXduejI4SWlxaHgvamNKd3dUYnNUSUJTc0hCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3NEVabXMzUzRCdE1yRktIVU5OQ0w2YTJnRmc0OW5UajRYMnRmUFpiNytkR3hlMG9tZ3BKMlUzMlZlZ2hsN1BCeUJsZTQ1RDVVZG01b1RVb2NPNzVqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyODI1NzEwNzoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTQ5NzI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRk1LXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGTUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJneUczbmE2MUVreXB4MXN0Rk9rdU5oeGhsRlZQT3RZUlZVVWxta3JaSE04PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI3MTQ3MDE0NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMTQ5NzI3NjU1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "GHOST",
  botname : process.env.BOT_NAME  || "GHOST-MD",
  ownername:process.env.OWNER_NAME|| "GHOS-MDT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "Public",
  LANG: ( process.env.THEME ||  "GHOST"  ).toUpperCase(),



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
