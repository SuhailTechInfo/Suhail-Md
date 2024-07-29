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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_27_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgMTA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTg0LFxuICAgICAgICA2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2LFxuICAgICAgICA2OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDYwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjgxa0ZScXdjdlRtaTc4N2c0U0h2RFVWVTNZT25YOXJBZkVtelN0T1dxNjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZGX3Znbk4xVE9lZTJxTXVHM3F3UVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWM3Y2JhMjctN2RiNi00YTM5LTgwMGMtZWM4NGNhMjUwNDNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMTAxLFxuICAgICAgMzIsXG4gICAgICAxOTQsXG4gICAgICAxNDAsXG4gICAgICAxLFxuICAgICAgNzMsXG4gICAgICA5MCxcbiAgICAgIDU3LFxuICAgICAgMTY5LFxuICAgICAgMTQ5LFxuICAgICAgMjM0LFxuICAgICAgMTQ2LFxuICAgICAgMjAsXG4gICAgICAxMTAsXG4gICAgICAxMDEsXG4gICAgICAyMDMsXG4gICAgICA4OCxcbiAgICAgIDI1MSxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAyNixcbiAgICAgIDg4LFxuICAgICAgNCxcbiAgICAgIDEwMCxcbiAgICAgIDIwNixcbiAgICAgIDgwLFxuICAgICAgNyxcbiAgICAgIDE5NixcbiAgICAgIDIyOCxcbiAgICAgIDIxMixcbiAgICAgIDE2NixcbiAgICAgIDE5NSxcbiAgICAgIDE5NSxcbiAgICAgIDIsXG4gICAgICAzNCxcbiAgICAgIDExOSxcbiAgICAgIDcsXG4gICAgICA1NSxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4QUs5Vlc5NlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTgwOTgwMzczNTI6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmI8J2Zp1/wnZmN8J2ZmvCdmZnwnZmX8J2ZpPCdma4g8J2QgfCdkIzwnZCFX/CdkIDwnZCk4oG08J2flVwiLFxuICAgIFwibGlkXCI6IFwiMTgzMjQ1MTk5MTQzMDU1OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kyeTNGRVEyOE9idFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUElLSTNneVlWSFo5SFhoNXR2QjNuajZGbG1XbVh1MmMvOHhIM2Z5RGMwdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEVWZDL1ZlQmJsNEFuaGU3ekQxTU5QY1MrU1dpUkdDRGdrQy9vVjB0eFVBWlFKektqeWh1QkxYRi80bjF1WWJFb0ZLc2ZxcXdRc1BUeDNGVnYrOVBEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvM1BZYmRUSzMrblFLZzNYTzF4eFFGdnVmZUdIMVp0MFJtTHNVTGZFb0ZTbDE0RVBkOVNjTS9KN1M1WExEeDZvQ3ZPbGdOdjNRT2MyWkhuMWFobkZEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODA5ODAzNzM1MjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyMTI4MzFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
