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


global.devs = "994402462830" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "994402462830";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_18_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDY5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyLFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgODIsXG4gICAgICAgIDg1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgODYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwLFxuICAgICAgICA1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1jUEU0SjZPMWZNNFY3RWxXNm5GMzkrckZUcWRuUWgxOTF6czdTcko5Qm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndqenJoQVVqU1g2QTVJS3Q5cDRZRkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDAyZTU3YjgtYTdkZi00YmQyLWEyY2QtNTlmZDA0NDU3NTM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDEyNSxcbiAgICAgIDU3LFxuICAgICAgMTQyLFxuICAgICAgMjE5LFxuICAgICAgMTAzLFxuICAgICAgMjEyLFxuICAgICAgMzMsXG4gICAgICA0MyxcbiAgICAgIDk2LFxuICAgICAgMjE4LFxuICAgICAgODAsXG4gICAgICA4NyxcbiAgICAgIDY5LFxuICAgICAgMjE1LFxuICAgICAgNTAsXG4gICAgICAyMyxcbiAgICAgIDM5LFxuICAgICAgNzEsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICA3NCxcbiAgICAgIDEyNyxcbiAgICAgIDk3LFxuICAgICAgMTQsXG4gICAgICAyMTksXG4gICAgICAxMDEsXG4gICAgICAyNTMsXG4gICAgICAyMTUsXG4gICAgICAyLFxuICAgICAgMTY2LFxuICAgICAgMTg4LFxuICAgICAgNzEsXG4gICAgICA0MixcbiAgICAgIDMyLFxuICAgICAgMjM3LFxuICAgICAgMzIsXG4gICAgICA5LFxuICAgICAgMjEwLFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzY4UkxaOUtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk5NDQwMjQ2MjgzMDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuG0jcqAIOG0pMqc4bSHybThtI9cIixcbiAgICBcImxpZFwiOiBcIjgxNDU4ODUzMTA1Nzg5OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lYUzQ3NENFSlA5cTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHNTbHhPSWdlcW9tNHlvRDhLb3J5M0pqanV1eHQyZ1JZamt0VkpLdDhpOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGRzFscDNYaFpWY1E5NDBzSnNHZmlienpnWEdROEZacWxITUtXRWY4ODluR3A2Mm1UQ2tQVFFWSldZNDZudVVCVk40ZXF2blA1a2lMVlZhaVBhVWFBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUM0FPYUtYSG5HYUkzOHlOMWllQ2QzMzl5MXJXK0l5aXFaMk1EUVI2MEFOTzk1Y0Z2TFphbkRacXU3aHFOMldFSWIwWlQxQ3JVYllpU1lFMW9aYlRqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5OTQ0MDI0NjI4MzA6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ4MjMyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJsUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmxRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSTBvQ2l6MDFYWUZFVmVGZC9wNlBZY2hMbklDWE05WWZzaFArcW5LRFQ3ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2Njg1MjY4NTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0ODIyOTgxMDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 👑⍣⃟≛⃝𝙎𝞖𝞢𝞜𝞗🦅⍣⃟≛⃝🇵🇰』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "👑⍣⃟≛⃝𝙎𝞖𝞢𝞜𝞗🦅⍣⃟≛⃝🇵🇰",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
