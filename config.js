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


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_17_37_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDg3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDczLFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDcyLFxuICAgICAgICA2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2LFxuICAgICAgICA4OSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgxLFxuICAgICAgICAxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg1LFxuICAgICAgICA2MixcbiAgICAgICAgMjExLFxuICAgICAgICA2MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxLFxuICAgICAgICAxMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDQsXG4gICAgICAgIDYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY3FHeXZscHlqYkZwQVp3OGkvdDZnYXJSaFY4UUhKZGR0UGUvOEN5MTlibz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNjMxNTQzMDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJCOUY1QUEwRERGNDk5NkFEQ0VEQzcwQzc2QUNFMEE4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjYyMDI0OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE2MzE1NDMwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjNGQTc5NUZCRkFCOUE3MEEyMEEwRTk4ODVCOEIwMTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjIwMjUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5yUHo3OVJFUVVHekdRd0dTMEpmZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTJmOGE5YjMtNjk4NS00MzkwLWI1NTQtYjZkNDlhYWE2MTM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAyNDYsXG4gICAgICAxMDEsXG4gICAgICAzMCxcbiAgICAgIDY5LFxuICAgICAgMTE3LFxuICAgICAgMTcsXG4gICAgICAxMTYsXG4gICAgICA0NyxcbiAgICAgIDk1LFxuICAgICAgNTksXG4gICAgICAyNTQsXG4gICAgICA3NSxcbiAgICAgIDU2LFxuICAgICAgMTQ0LFxuICAgICAgMTk2LFxuICAgICAgMjEzLFxuICAgICAgNDEsXG4gICAgICAxMzIsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA2LFxuICAgICAgMjA3LFxuICAgICAgMTI5LFxuICAgICAgMTYsXG4gICAgICAyMDQsXG4gICAgICAxMzIsXG4gICAgICA5MSxcbiAgICAgIDU1LFxuICAgICAgMTk5LFxuICAgICAgMTQzLFxuICAgICAgMzQsXG4gICAgICAxNzIsXG4gICAgICA5MCxcbiAgICAgIDEwLFxuICAgICAgMjUyLFxuICAgICAgNDQsXG4gICAgICAxOTksXG4gICAgICAxNTEsXG4gICAgICAxOTQsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzIxQjM5WTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE2MzE1NDMwNzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MjAzNDA2NTY2MjIwNzoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlXMtlPMtkXMtlLMtiBEzLZJzLZFzLZEzLYg4pqw77iP4p2k4oCN8J+pufCfm4zwn4+7XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTE9Wczl3RkVOU3l0TFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhYWhhMXY3ZysxSlVCdFZNKzFyYzRYWVFXendaUXhXSmZKdWtUZ0NZcTMwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllkTXh4aWUrUVpmWDc3RTh2WXdBdzl1emlidlNhNGVSc0VCb0pKQ0RrL24xYjJidi80UWN4L3dlbDJLcDAzSjliQjFCK1d1WStQT3UwSHdIcHZmY0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNBeE81eUxKckNZZCs3aUpqLzlyam1uS2U2YzRhc2pWVHkxYWlOSUtKVVZXZExZa1NvYk40OUdUMXZzbzRlcHlPbEtLYXRaOU4rVWVnaEhNbFpLMkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE2MzE1NDMwNzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2MjAyNDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKMVlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUoxWS5qc29uIjogIntcImtleURhdGFcIjpcIlE1ODhJM0thbC9sUFhrYTZTbk5FYlpNd2NVZGtUa1p2cnZxdWVaZHN5ZTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzNTk1MzU4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNDQ5MDk1NzAyXCJ9Igp9|  ""  // PUT your SESSION_ID 


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
