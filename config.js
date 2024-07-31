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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_19_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNCxcbiAgICAgICAgNSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDUzLFxuICAgICAgICA1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICA5NixcbiAgICAgICAgMTU5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTMwLFxuICAgICAgICA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDkxLFxuICAgICAgICAzMixcbiAgICAgICAgMTM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMixcbiAgICAgICAgMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyLFxuICAgICAgICA2OCxcbiAgICAgICAgODksXG4gICAgICAgIDAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImF5bUd3TzJ2UXVlWEdLaHpOeXlZaTkvUHhSaDRCRGlFM3h5WnVKdkNoa1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTkxODMzNTY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwQjA2NzNFQzUxOUQyODI0QTY5M0MxMTYzNzUwNDBDMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0MTM5NjVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieThZY05xSjhTMUt3S3JWeExSM3VxZ1wiLFxuICBcInBob25lSWRcIjogXCI5NjMwNDc4YS04MzRmLTRjZWMtOTUyOC03M2IxMjUxMTRhMTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMTgzLFxuICAgICAgNzQsXG4gICAgICAxNDYsXG4gICAgICAyMzYsXG4gICAgICA1MyxcbiAgICAgIDU2LFxuICAgICAgMjMsXG4gICAgICAxMjcsXG4gICAgICA3NixcbiAgICAgIDE2OSxcbiAgICAgIDIyLFxuICAgICAgMTYzLFxuICAgICAgMjQ5LFxuICAgICAgMzIsXG4gICAgICAxOTIsXG4gICAgICAzLFxuICAgICAgMTk4LFxuICAgICAgMjAzLFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMjMwLFxuICAgICAgMTg1LFxuICAgICAgMTUyLFxuICAgICAgNCxcbiAgICAgIDEzOSxcbiAgICAgIDQ3LFxuICAgICAgMTAsXG4gICAgICAyMDcsXG4gICAgICAxNTksXG4gICAgICAzNyxcbiAgICAgIDE2MSxcbiAgICAgIDE0MixcbiAgICAgIDQ5LFxuICAgICAgMTU4LFxuICAgICAgNzYsXG4gICAgICAxOTUsXG4gICAgICAxNDMsXG4gICAgICAxMCxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE5QkdQSlZUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxOTE4MzM1Njk6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NjQxNjEwMDQ4NzE3ODo2N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJQTEFZLUJPWfCfpbXwn5GF8J+SplwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x5Yzdja0hFSVBucDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMFdaYTk5TGJCN2xNK1U1QTRrUW9aWVIwamlVUnNjZFhmM1JWK294OUh6Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLeHl4TjEwd2QzcldlTk5CYkRyWlVPbnh6NlNnQnhTWnVzbmRnSmlWaHZ3Zm1FV3ZzWFdDNXN0YUw5V3p5NnpxUGxVMFhzMUNNZjllQS9VSHYxK1VEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPejJYSkxRaHUzUC80dWVkYXpUakdBRzJiYTdNMG5tUkk4UEQvWU0zYS9HRThsaGZ6ZUltVzc5M3hVWitLZXRWbWwzN2hLenIzeEtNSUJneHhyOGFpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTE4MzM1Njk6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDEzOTYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQmF0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCYXQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQUi9BejhJaC9PdHEvWW9UTzFTNTFnR2dDMFFaQ2pITUt5dmhLbUtVc1N3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMzM5Mjk3ODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0MTM1NDQ4NzdcIn0iCn0="  // PUT your SESSION_ID 


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
