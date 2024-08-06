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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_05_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc1LFxuICAgICAgICA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk1LFxuICAgICAgICA4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MixcbiAgICAgICAgMTMwLFxuICAgICAgICA3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQyLFxuICAgICAgICA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDczLFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY1LFxuICAgICAgICA1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid1FXQ0t4UE5zc2lYYWdYSkhhQWhiQURPSG1hbGF3cm1mbVdRUU92ZXBoaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjY1MjQyNTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZGNUVGMThDNTJBNjE0RUE0NDRDRENCNDU1MTc1REIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjk2NzU0OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcyNjUyNDI1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjE0QjM0OTcwMDg2Nzk5ODQ4MkYzODdBQUNCQUEzQjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyOTY3NTUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpJdG1WZ09ZU3pPV0VEaEZ2ZnYybFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmEzOGFjNTgtYjJkYy00NmM5LWEwYmEtYWMzN2Y2ZmVmMzUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDI0OSxcbiAgICAgIDgxLFxuICAgICAgNDAsXG4gICAgICAyMTgsXG4gICAgICAxNDMsXG4gICAgICAyNDcsXG4gICAgICAwLFxuICAgICAgNDAsXG4gICAgICAxNDIsXG4gICAgICA0MSxcbiAgICAgIDk1LFxuICAgICAgMjQ5LFxuICAgICAgMTk0LFxuICAgICAgMjcsXG4gICAgICA3OCxcbiAgICAgIDIzNyxcbiAgICAgIDg2LFxuICAgICAgODUsXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDUxLFxuICAgICAgMTQxLFxuICAgICAgOSxcbiAgICAgIDEwLFxuICAgICAgMjE5LFxuICAgICAgOTIsXG4gICAgICA5NCxcbiAgICAgIDE5OCxcbiAgICAgIDk4LFxuICAgICAgMjksXG4gICAgICAxOTMsXG4gICAgICAwLFxuICAgICAgNTUsXG4gICAgICA4NyxcbiAgICAgIDE3NyxcbiAgICAgIDE0MyxcbiAgICAgIDIxOCxcbiAgICAgIDE2NSxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIV1NZTjUyNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI2NTI0MjUwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNTc1NjgzNTc3NDU4NjoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkRqIE9saXZlIEtlbnlhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnlIeHE4R0VQVEx5YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2Q3YxVDV0UmhlYWJjNmNRWFVhRGkxdGcxN0RudFI0NXF2VGExQjJaUGk4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhkUjgwN1REU3Byd3RFZjJtZ3ZzNytQLzNOaThGMENsZi85eDFTTlVETUZwdy9YR0V0TDZDS21QVE1DdTVFNkFPSWRTeGl6cEFna1NLaFV4ZUNYM0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJCdWpncURzcGZFcVh1dFFaN2ZjQzFnc2pGcndIZnN1N2JUb1FFZ2JoeHVJMFRQQjI5OS9HUzJHQXdBNnRRdlNUY01oTnhnQVhsNVZjTUZCVG1idkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNjUyNDI1MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5Njc1NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDbjhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNuOC5qc29uIjogIntcImtleURhdGFcIjpcIldoMUdrYjdzaTdkREUrc05LMXNRdDRZZjZsTGZPUmdIVnFrb2lwTGdmTEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcxMDMyNjY4NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyOTY3NTQ2ODUwXCJ9Igp9"  // PUT your SESSION_ID 


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
