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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_31_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwLFxuICAgICAgICA0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgzLFxuICAgICAgICA0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDgyLFxuICAgICAgICA2MixcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3LFxuICAgICAgICA0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk0LFxuICAgICAgICA5MSxcbiAgICAgICAgMyxcbiAgICAgICAgNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNjSS90d01oaUk0R3NBNWNOejZiZS8wNXl0RlBldWZqb1JHUmg1eVNkcm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9IWWVmTzF5UlRpQUE2Q21kejlWOEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTY0OTRkOTctYjE5My00NTc4LWFkMGYtNWY3NTAwOWYzYmIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDE2MyxcbiAgICAgIDI1MSxcbiAgICAgIDExMyxcbiAgICAgIDI1MyxcbiAgICAgIDkxLFxuICAgICAgMjM5LFxuICAgICAgMTk3LFxuICAgICAgMjQxLFxuICAgICAgODksXG4gICAgICAxMjUsXG4gICAgICAxNjIsXG4gICAgICAyMTUsXG4gICAgICAxOTUsXG4gICAgICAxMjQsXG4gICAgICAyMzYsXG4gICAgICAzLFxuICAgICAgMTAwLFxuICAgICAgMjI3LFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgNjAsXG4gICAgICAxOTYsXG4gICAgICAxNjIsXG4gICAgICA2NSxcbiAgICAgIDk4LFxuICAgICAgMTczLFxuICAgICAgMjEyLFxuICAgICAgNTMsXG4gICAgICA5OSxcbiAgICAgIDI1MixcbiAgICAgIDUwLFxuICAgICAgMixcbiAgICAgIDIxNCxcbiAgICAgIDIwMyxcbiAgICAgIDE4NSxcbiAgICAgIDEwMyxcbiAgICAgIDIxMyxcbiAgICAgIDg3LFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNFSlZZWFBCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NzEzMjg3ODg6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk5NjgyMjgxOTA2Mjc1OjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3a3RwSUdFTGJJbWJVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzFoT1REM1RqSmhKMUNhajNlcWNNQ2ZUdE5YMXYxYzhmTWxzS2E4YWZCZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4S1g3KzEvVFRYSUdwaFJwaHRGdGo5ZGlnYlIzbU9uN0lxdFgxNHczL1g3dCt3NVpoZit2NG9rK2FWR01lSnFXSEM1b3N0NUVnMEdUU015Sm5maXlBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwckdlbEVuSThsTW1XV3RWMy9aOWprRmIvc0xBc09BT25QcVhUM0xBdG1pbERVc0FFSGtIUEVvbEFvazlDOG1qeHg4RmtJQ0VtMHgrL0l3cGRMRjdpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NzEzMjg3ODg6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTgwNjY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
