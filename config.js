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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348027143251";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_27_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NixcbiAgICAgICAgMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDk5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc5LFxuICAgICAgICA4MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ1N5VUlOVUpaUkZWaWM3clZnM0IxK1N2M3FvZzR2UURISU1lbDNsRXNLbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDI3MTQzMjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MTlFODYxRTZDNUM4NTU2NTVEMUYyNjg5QUM2N0U1NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1NTg0MjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ3ZDV2dRMzRSOUdSaHdWei1FMTFjZ1wiLFxuICBcInBob25lSWRcIjogXCI0MTI0Nzc5ZS1lOWE1LTQ1YWQtOWIxMi0yNmQ0YzY2NDgzNmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ0LFxuICAgICAgMjQ4LFxuICAgICAgMTQyLFxuICAgICAgNDMsXG4gICAgICAyNyxcbiAgICAgIDE1NixcbiAgICAgIDcxLFxuICAgICAgMTgwLFxuICAgICAgMTUxLFxuICAgICAgMTE1LFxuICAgICAgNjUsXG4gICAgICAxNzMsXG4gICAgICA4LFxuICAgICAgNDcsXG4gICAgICAxNzAsXG4gICAgICA0NCxcbiAgICAgIDExMyxcbiAgICAgIDE4NyxcbiAgICAgIDY0LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMjM3LFxuICAgICAgODIsXG4gICAgICA0OSxcbiAgICAgIDE3MCxcbiAgICAgIDc1LFxuICAgICAgMTMwLFxuICAgICAgMjE0LFxuICAgICAgMjAsXG4gICAgICAxMTMsXG4gICAgICAxODIsXG4gICAgICA0OCxcbiAgICAgIDExNCxcbiAgICAgIDAsXG4gICAgICA2MSxcbiAgICAgIDE0NyxcbiAgICAgIDI0OSxcbiAgICAgIDk4LFxuICAgICAgMTM0LFxuICAgICAgNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1SlRGVFlIMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAyNzE0MzI1MToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1lc3NpZnVsXCIsXG4gICAgXCJsaWRcIjogXCIyMzQ0MTk2NjczNjE4NzA6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSk9taVlRR0VOVFBzTFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzV3pZTTFBZnlEdnhqMTFWZVhRZVFVODJTdXRUUnJXbFg2VUFRSkQ4ZUFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInovZnJaU3NucFdIMk5sakNuSmxTdVdkVWZsK1FWM1ZTYVJWRUlCSFlFNGJpcy9haEdkUm9WZ2ZGMFVkaG5TVEMzWjJoSUg5SUt1ekdxaEJ2MG9XK0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjN6OTBUTFJROUxHbm5zRkhhdTNzQTFWTCtOM3lHcEM1Qm9aRWorK3dJWFdnM2hib09rQlh3U1pnN2diSDFuZ0w1TVN2TEp1UW5HVDdJNFRNYkFQMGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMjcxNDMyNTE6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU1ODQyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd1alwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3VqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajlDT1FDU3QvNmNBRDE3KzhQaS9WS1I4N1E1WEcwRGw2SGRlZWRXNnMzST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjE5MTUzNjgwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
