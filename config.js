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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_08_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICA2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDY0LFxuICAgICAgICA4MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDc2LFxuICAgICAgICA2NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MixcbiAgICAgICAgMjI3LFxuICAgICAgICA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNixcbiAgICAgICAgODAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxZFZKUXJmVi9yQm9UeXRLSUdJaHplL0hkQVNLU2tmZGhtNEI4V0tJMDlBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwWFcwZk81WVMxV2loUlFRSjB1MFV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjk3NTkzNmIwLTFmNzktNDI3Zi04YjFlLTRlNjA0OTYwNTU3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAyMTIsXG4gICAgICAxMjcsXG4gICAgICAxODIsXG4gICAgICAyNDcsXG4gICAgICAyNDksXG4gICAgICAzOSxcbiAgICAgIDU2LFxuICAgICAgNjIsXG4gICAgICAxMTQsXG4gICAgICAxLFxuICAgICAgMzAsXG4gICAgICAyNDYsXG4gICAgICAxNjgsXG4gICAgICAxMTAsXG4gICAgICAxOTMsXG4gICAgICAxNDAsXG4gICAgICA4OCxcbiAgICAgIDE1NSxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICA5MSxcbiAgICAgIDE5NCxcbiAgICAgIDE5MyxcbiAgICAgIDEwNCxcbiAgICAgIDIwNyxcbiAgICAgIDQ1LFxuICAgICAgMCxcbiAgICAgIDI0MixcbiAgICAgIDEzLFxuICAgICAgOTEsXG4gICAgICAwLFxuICAgICAgMTkxLFxuICAgICAgMTQwLFxuICAgICAgMjM3LFxuICAgICAgMTg1LFxuICAgICAgMTU0LFxuICAgICAgMTAsXG4gICAgICAxNzUsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVFTTlNNMkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA4ODU1Mjk0NDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTYyNDczMDg0Mzk2MDg6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMekswZU1DRUtuMzhiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImN3dG5HWENIWmVMYnl5R0hJdTRXalU5cnpvN0VncG15T3lqdXlod1ZtRjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidTJ0YUNVNkNZalVqMUhWa0FUTXVxc09hcG05dzF6czZTVVAzT3E1SGFBMjBCTldyYjNVQ08xTHp6ZTRFdGJGd0tuMjM3a2VBVnhsd3owQkdZM0w4RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS1ZUMEdNeW0yR1VITWlJWmJRazdhZVI1RFFueEVtTDQxTTE5ZkwvT1hYVzBJNkgzZ2w4TVAzS1BlQ2I5RXhTcHpyN3hQTjZpQ09UMlBIbTdkaTcyQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDg4NTUyOTQ0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTMxMzA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVNoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNU2guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaWjNyNE05SUhrYnpHOXUydnZaVTR5WVhaYjljdkVQOXdKSGVDUlBJOVBvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc0NTgyNTU5NCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQ3MTk1MjA0MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "•ᴹɪˢˢ𝄞➳⃝AϞϞυ•",


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
