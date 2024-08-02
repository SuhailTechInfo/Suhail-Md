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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_31_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDksXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc5LFxuICAgICAgICA3NixcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA4LFxuICAgICAgICA5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg3LFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICA5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODksXG4gICAgICAgIDUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlV4bnkyQStuWEFScFQweHhCeUlkY05DWkwyVDZBRHFxOHBTbFBlcUQ2ZG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFhNDlNWUNBUzBXbDM0X0pnemJBN3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWFhMWQwMDctZmYzZC00NDg5LWI0MDktYTJiNjM1ZTA1YzczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDI1NCxcbiAgICAgIDIxNyxcbiAgICAgIDIwMixcbiAgICAgIDEyOCxcbiAgICAgIDc1LFxuICAgICAgMjA2LFxuICAgICAgMTAyLFxuICAgICAgMTc1LFxuICAgICAgMTQwLFxuICAgICAgMTM3LFxuICAgICAgMjU1LFxuICAgICAgMTYwLFxuICAgICAgMTM1LFxuICAgICAgNjYsXG4gICAgICAxODAsXG4gICAgICA3MCxcbiAgICAgIDEyNixcbiAgICAgIDEwMixcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDExNCxcbiAgICAgIDQ4LFxuICAgICAgMjE0LFxuICAgICAgOTAsXG4gICAgICA3NyxcbiAgICAgIDIyLFxuICAgICAgODAsXG4gICAgICAyNTAsXG4gICAgICA0MCxcbiAgICAgIDYyLFxuICAgICAgMjIxLFxuICAgICAgODUsXG4gICAgICAyNixcbiAgICAgIDExMCxcbiAgICAgIDE3NSxcbiAgICAgIDI5LFxuICAgICAgNyxcbiAgICAgIDI0MyxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCOUpSOVFUV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzOTA2MjEyNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NDE1MjczMzU2OTA4OTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wvaW5ya0pFT3VHczdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRndQQVkxQjhlZlMydyt4SG9IQmw0WXNUTUxQd2xtaTgzK3JBOFdIZGRRUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIbWxBYU5COHpCdUZ5ajh0U2Jxbk9lWDdWbXhOTDMxNnhVK1RQRkF6UlNTQlFocUU1d1dvQUdoUTFSRjVHMTJCVEhIQWFDcHBnSjNQYmU4Wk5sNEJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJObDh4d2VTUFNDSksvL09pMUxUaXRqSWRiN05TamFTdmFCLytqVmxQOUd3OG5BSDEzUmxDNnUzcC9FbG94M29ocUE3eDltd2hZeHZCMDhHaFFUUlBCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM5MDYyMTI3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1OTgyNjBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
