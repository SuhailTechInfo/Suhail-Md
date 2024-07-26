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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_17_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICA3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODYsXG4gICAgICAgIDY5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNixcbiAgICAgICAgMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDgxLFxuICAgICAgICA0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICA4NixcbiAgICAgICAgMTkwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICA4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0LFxuICAgICAgICA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDY3LFxuICAgICAgICA2NixcbiAgICAgICAgMTg4LFxuICAgICAgICA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDcwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZndrc2hLSElwaE9LZmtIQ1ZDazA4enkvdnJiVEsxNlJaY1VWejBoclFBUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3ODM4NzM0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E5RUZENDUzNTRCNDIwREM3QzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTgxODMwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndZNkhCa1pUU0t1cDlUZ2ZjVDNUT3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWYwYjRmMGQtNjc4My00YThkLWJhNWMtZGQxMjY0OTA4Y2QwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDY1LFxuICAgICAgMTk4LFxuICAgICAgMzMsXG4gICAgICAxNzksXG4gICAgICAyOCxcbiAgICAgIDE5LFxuICAgICAgMTkzLFxuICAgICAgMjI1LFxuICAgICAgMjQsXG4gICAgICAxOTgsXG4gICAgICAyMTcsXG4gICAgICAxNTIsXG4gICAgICAyMzQsXG4gICAgICAxNzIsXG4gICAgICA4NCxcbiAgICAgIDEyLFxuICAgICAgMTk2LFxuICAgICAgODIsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAxNTMsXG4gICAgICA5NSxcbiAgICAgIDE0NCxcbiAgICAgIDM2LFxuICAgICAgMTA1LFxuICAgICAgMTEzLFxuICAgICAgMTEzLFxuICAgICAgMTAzLFxuICAgICAgODQsXG4gICAgICA3NixcbiAgICAgIDE0MSxcbiAgICAgIDE4NSxcbiAgICAgIDE3MyxcbiAgICAgIDEyMixcbiAgICAgIDE5MCxcbiAgICAgIDE0NCxcbiAgICAgIDEzMSxcbiAgICAgIDEyNixcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlo5UkE3SDNTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3ODM4NzM0NjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNhbmpheWFfVGhhcmluZHUgKOWwj+OBleOBhClcIixcbiAgICBcImxpZFwiOiBcIjExOTc5MDMyOTEyMTIxOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wySXplOEZFSUMzamJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSmhGNFZTNzhsRDJmQ3l1bVc3Nzd4NEo2RkZXdmE4SEdtdk55amV5SmowMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3c1BSazhxWFh0dmc5OUJYSE1QUFJoMlExTHM0eml3SzBvaDlCOUFHZGl4ZXB3VnVqcGZrK3RQMXpXYXBtYVNiYXh6UUlTV0N2dkt4ZG5QNjNZOGxCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBTEpFRUo5N0hrc1pIQzU3aEFQT1YyU0F2MURRRnpxMjRxY3VxV29WVitMVVNhU01BQnNyMjdTWVZBbEpBZ0dOblBBRFl0U3lOZHZRdmswY1dVcjVqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3ODM4NzM0NjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5ODE4MjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFId1NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh3Uy5qc29uIjogIntcImtleURhdGFcIjpcIlg4ay9HcnBqTWFJenFaSjJxREF0MmMrdytqQ0t2QUJLK0xnVWdBb1dKS3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU3NjIyMzgwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIxOTgxODI2OTEyXCJ9Igp9"  // PUT your SESSION_ID 


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
