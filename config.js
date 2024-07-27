const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://muaz:muaz@cluster0muaz.1wevdkm.mongodb.net/?retryWrites=true&w=majority"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_37_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyLFxuICAgICAgICA5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgODksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICA4MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcwLFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTExLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIyLFxuICAgICAgICA1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkN4ZkRDUythbFlvVHFIVHhscnp2d2hRQXE2TTBtY2daYnBYRHU5NHZudDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFQWC1YVC1IU29xVmdWaHBvenlScXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjYwYmU5OGMtYzJkMS00NjEzLTk4MTQtZDhlYTBjYWEzM2FiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDIyMSxcbiAgICAgIDIxLFxuICAgICAgMjQ3LFxuICAgICAgMjQ5LFxuICAgICAgNjksXG4gICAgICA2NSxcbiAgICAgIDE1LFxuICAgICAgOTQsXG4gICAgICAyNTIsXG4gICAgICA5MyxcbiAgICAgIDIxMixcbiAgICAgIDI0LFxuICAgICAgMTQxLFxuICAgICAgMTE2LFxuICAgICAgMTYzLFxuICAgICAgODEsXG4gICAgICA2MixcbiAgICAgIDIzMixcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDkxLFxuICAgICAgMTAxLFxuICAgICAgMTU3LFxuICAgICAgMTUwLFxuICAgICAgOTIsXG4gICAgICAxMDcsXG4gICAgICA2OCxcbiAgICAgIDg4LFxuICAgICAgMTA4LFxuICAgICAgMTc1LFxuICAgICAgOTcsXG4gICAgICA2NCxcbiAgICAgIDU2LFxuICAgICAgMyxcbiAgICAgIDE1MSxcbiAgICAgIDE5NSxcbiAgICAgIDQsXG4gICAgICA0NCxcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBWUZLQ0Q5UlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDMwNDY5NjA3OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDI1ODE0Njg3MDQ4NTI6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnpCK2ZFREVQcU9rclVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjMjRCa2lkaTlEU1YxQU41S0lkR3hmSmh4S1ltODBOVmpXTTRMcGJzOEcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNQTHYwL0xnUDhGK1UrVmFONG9lVXBkYTZIU2JwMFJzUlBycFBSaFpqZmVGeXc4NklMcTk3QVZNaWE4U2N5K1hqWHVEalIyeEpuU3BNZmdaNFZMYkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdwOVZnU1pQdXMyTk9TQ2txT3U5dCtxT0c3ZmZiOSs2Q3BEWjk1UTdneWVSSU52S3QrT3BIMHhWMkJVTlVacGxNQVh5alBQVzdQdTdIZUgzaUtaaUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzMDQ2OTYwNzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDU4NjI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFdNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQV00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3QmNaSEVkN3VjTmJ3SWFRanFZa2RsWml1YTVyTitJYnpyK0R4V3A0UGxFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNDQyNzUzNTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjA1MzcyNDc2NFwifSIKfQ=="  // PUT your SESSION_ID 


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
