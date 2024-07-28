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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_09_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDgyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDc0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3LFxuICAgICAgICAzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAzNixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDMxLFxuICAgICAgICA0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1LFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNixcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInV0ZFpSdVZNQlZEWjVqWjJWaHF1UzNSREFNYkRwV0xPY3VUSjQxKzNZUjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVIUWs5YkttUnota19wc0RYQUtVQ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZThmOGE2MjgtYjA1Ny00ZjhjLTkyNjUtZDI0OGM0ZjgwNzk3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDI0LFxuICAgICAgNTUsXG4gICAgICAyMDAsXG4gICAgICAxODYsXG4gICAgICAxMDEsXG4gICAgICA3MixcbiAgICAgIDg5LFxuICAgICAgMTE4LFxuICAgICAgMjMwLFxuICAgICAgMjMyLFxuICAgICAgNDIsXG4gICAgICAxNjgsXG4gICAgICAyMDQsXG4gICAgICAyMDksXG4gICAgICA1MSxcbiAgICAgIDE4OSxcbiAgICAgIDEwMCxcbiAgICAgIDE1MCxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDE5OCxcbiAgICAgIDk3LFxuICAgICAgMTgxLFxuICAgICAgMTYwLFxuICAgICAgOTYsXG4gICAgICAxNzAsXG4gICAgICAxMyxcbiAgICAgIDE0NCxcbiAgICAgIDE1NSxcbiAgICAgIDE1NyxcbiAgICAgIDU5LFxuICAgICAgMTY5LFxuICAgICAgMjAsXG4gICAgICAyMjIsXG4gICAgICAyMDYsXG4gICAgICAyMzIsXG4gICAgICA3MCxcbiAgICAgIDIyOCxcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdaNURUOUVLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NzEzMjg3ODg6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk5NjgyMjgxOTA2Mjc1OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3a3RwSUdFTGphbWJVR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzFoT1REM1RqSmhKMUNhajNlcWNNQ2ZUdE5YMXYxYzhmTWxzS2E4YWZCZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBZWZxNjFPOG5HbWdWbFlxMklDUHBTRiswbTcyeUlFaEdhbDNXc1BnSFhpOUlmMG5BS1dMT1BuT00wSlN2WDVlcGViWFJPUmt3eGl2QldiVTUxU05CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXelFxWE90MWR3TW5BeXdPK21oZyt1OTJwUkFpeVJiUm8yc3ZIbm5kOUxCVXFjalB5YUY2MUljcWUrVmpkNGFXR0hFZktqWlJXSERpL3poMk9nSmlEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NzEzMjg3ODg6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTgyOTcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3VmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLdWYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHOTI0dTg4VU5CbG9qS2s4MlRYNU93SWg5QWtIMjJKYWMzZklWWUdqd2tvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDkyNTkwMjIsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
