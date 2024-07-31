const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos, Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, ''"2349131674963";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_29_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc0LFxuICAgICAgICA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDU2LFxuICAgICAgICA4MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICA0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgxLFxuICAgICAgICA4LFxuICAgICAgICAyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVmUDMrdGQ3Zm1ub0FtMHAwUlFpd0I5cExvZG82ejhieTBVazNETUNjNlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFwZHJJS3c0U0ppV3YzdUEtT3B3X3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiODI5ZWU4NDItNjg0MC00MjkyLTgyNDYtNmY3YWE0MjhkMmRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDQ3LFxuICAgICAgMzMsXG4gICAgICAxMzQsXG4gICAgICAyMSxcbiAgICAgIDY3LFxuICAgICAgNjUsXG4gICAgICAxOCxcbiAgICAgIDI0NSxcbiAgICAgIDE0OCxcbiAgICAgIDEwNixcbiAgICAgIDM5LFxuICAgICAgMTcsXG4gICAgICA4NSxcbiAgICAgIDE5MyxcbiAgICAgIDE1MixcbiAgICAgIDEyNyxcbiAgICAgIDU3LFxuICAgICAgMTc4LFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAzMyxcbiAgICAgIDQ3LFxuICAgICAgMTE0LFxuICAgICAgMTcxLFxuICAgICAgMjI0LFxuICAgICAgMTY1LFxuICAgICAgMTg1LFxuICAgICAgMTc0LFxuICAgICAgMTE1LFxuICAgICAgMzIsXG4gICAgICA0LFxuICAgICAgMjE5LFxuICAgICAgMTg5LFxuICAgICAgNCxcbiAgICAgIDI3LFxuICAgICAgOTIsXG4gICAgICA0OSxcbiAgICAgIDE5NixcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4TjU5WUdZTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMTY3NDk2MzozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM5NTM5MjU5NjEzNDI4OjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09ucWt2RUJFUHFlbUxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiakZUTWJEdVdPeEpxdzNNNS9jemFvcWNIY3FEVEJhRWR5WjhPYzVTTUptOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEM211V0ZiQzJzMUs5bWFBOVBFMlAyb2FaWDNRUVdSdzd4Rk9VVnp4WUpORDRMMEo0N1BqaDgvOFJYWTMxbVhNU0dabmVWOC9sZGpVckQrTXJWem9Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiYkxEc2V1OTZVV1JGVTA5V01qS1NhVzRLVEFPdDNHUTBldzhxTW9BRUpBZkFnUlZhU0F4d3dvTDZBOTdqUktqZVNFMk1rOVdLb1RVTjdwTDZMVGVnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMxNjc0OTYzOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTU4OTc0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴍᴏʀᴛᴀʟ-ᴄᴇꜱᴀʀ",
  ownername:process.env.OWNER_NAME|| "ᴍᴏʀᴛᴀʟ-ᴄᴇꜱᴀʀ",


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
