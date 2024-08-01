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


SUHAIL_14_09_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDExLFxuICAgICAgICAxMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxODksXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICA4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICA2LFxuICAgICAgICAzNixcbiAgICAgICAgMTA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MixcbiAgICAgICAgODksXG4gICAgICAgIDk4LFxuICAgICAgICAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDczLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY2LFxuICAgICAgICA5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitLdnZyUGU0aDlOc0VSZGgrR3ZycEF0RnNHVitiRXlraDB5KzhHT2xtZTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInQ0Rkhzay1jVFJDTlF0YmxJLWU2cVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmZkNzdhYTAtNGNjYy00NDVjLTg3NzYtZjlkY2Y5NDQ0Nzk4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgNjEsXG4gICAgICAxNixcbiAgICAgIDM1LFxuICAgICAgMjIxLFxuICAgICAgNyxcbiAgICAgIDQ4LFxuICAgICAgMjUwLFxuICAgICAgMjA3LFxuICAgICAgMTgzLFxuICAgICAgNjQsXG4gICAgICAyMDcsXG4gICAgICAxMjUsXG4gICAgICA1OSxcbiAgICAgIDI1MSxcbiAgICAgIDUxLFxuICAgICAgMTcyLFxuICAgICAgMTA3LFxuICAgICAgMTk2LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMTE5LFxuICAgICAgMjUwLFxuICAgICAgNSxcbiAgICAgIDEyMyxcbiAgICAgIDI1MSxcbiAgICAgIDk0LFxuICAgICAgMTYwLFxuICAgICAgMTYwLFxuICAgICAgMTgsXG4gICAgICAyNTQsXG4gICAgICA4MixcbiAgICAgIDExMixcbiAgICAgIDk3LFxuICAgICAgMjQ3LFxuICAgICAgMjE1LFxuICAgICAgMzAsXG4gICAgICA2NSxcbiAgICAgIDI0MixcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0SlNYM0xWM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE1Nzk3MTY5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExOTc0NTg2OTY2MjcxOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnlQdUpZR0VJcXVyclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUWnNPQkV6RE90eC9sODI0YWRYVWNuaVZFQTh2bGtDT0svMmE4MXhWWFIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZ1dVZ0dGZlclRYd3JRNnFJcHZqWUxWKzh3dXNabHNNRS96cVFCOUxrcE9rUGtyenNIZEdOaGN0Qmt3UDFGSU9NQmFwbVpRdEF1cmVTYnNtVGRNd0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdGcndkTDZQMnVDaWEyK1JGWkhkQzQzMHpmSlAzYkxTbWZJL0pnYXdzYmVBejNSeXBqUHRiQTBzQ0UxVWpCSzI3ME1aZUxZZEdaUmNvZzdzQW5GdkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNTc5NzE2OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTIxMzU3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ== // PUT your SESSION_ID 


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
