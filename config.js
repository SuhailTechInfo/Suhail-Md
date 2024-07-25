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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_34_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMixcbiAgICAgICAgNixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk3LFxuICAgICAgICA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk5LFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NixcbiAgICAgICAgMTcwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDExLFxuICAgICAgICAxODIsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImcrVFA4TTZvQTFmeVpsZ0l6US8vcGlWQkNBVGlCekdnYzAwci80eWZTWW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIxNzcwNjE2NDMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RUE4RTNCNTk1NkUxODE1QUMxREM0RUY3N0ExNDM5QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4OTY0NDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjE3NzA2MTY0MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhFQzFBMkQ1NTdFNDMwQzdBQjNERjZEM0I2RDUwRjEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTg5NjQ0NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQdDB2TjgyMVFwdUhBQXpReXJzdGhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwNjA5M2M2LTA5YjgtNDhkOC04MmMzLTM3YzMzNWE1ZDU4Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDEwMSxcbiAgICAgIDE1NyxcbiAgICAgIDIzMixcbiAgICAgIDIyMSxcbiAgICAgIDEzNCxcbiAgICAgIDEzMyxcbiAgICAgIDIwNixcbiAgICAgIDksXG4gICAgICA3NSxcbiAgICAgIDIxMSxcbiAgICAgIDIzNyxcbiAgICAgIDE1MSxcbiAgICAgIDcxLFxuICAgICAgMTkzLFxuICAgICAgNjIsXG4gICAgICAyMCxcbiAgICAgIDE5MyxcbiAgICAgIDU0LFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICA0LFxuICAgICAgMzQsXG4gICAgICA2NSxcbiAgICAgIDEwLFxuICAgICAgNzUsXG4gICAgICA0MixcbiAgICAgIDEwMyxcbiAgICAgIDkyLFxuICAgICAgMTAyLFxuICAgICAgMTc3LFxuICAgICAgMjE5LFxuICAgICAgMTk0LFxuICAgICAgMzUsXG4gICAgICA0MixcbiAgICAgIDIzMCxcbiAgICAgIDEyNyxcbiAgICAgIDIwNSxcbiAgICAgIDE2NCxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpQUFEzM0ZFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjE3NzA2MTY0MzM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIzOTgzMzQxMDg4OTk3OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2FtYXNzYeKdpOKAjfCfqblHYXll8J+Wh++4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ016RW5ic0dFUGFiaUxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVWcyZFk2RjJKUnQ0c2tQNU1PRllINTVJb0FlTTFnc0t2blR1Wm1yUUhDTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0UW05Z3dKVFN0Ly9oWENrMTlKNlJYaDAxbWlKZFFUVTRRREJZckVVbldvMi9PSkRqeVA1aHluUC95eWRVdVhyTlNhQktmUERHa085SXZGblc2UlRCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZRFY2S0daLzBLZWN6WW9CUU50ZDAxT3dTdkU4TVNqWGVMZUdaN21aZDJZY0crYlA1YUNNSSt4UHRoczVPUEJvUGd6S0l0UHRTOHFvUEhnazRVUVhEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjE3NzA2MTY0MzM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODk2NDQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGx0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEbHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTZWV3bXU3Tm9FVTVsL0srbzMzbGZ5R0ZBcGxha2Rja1dlcHd4VTFiREJRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MzQ4Mjg2MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTg5NjQ0MzI4N1wifSIKfQ=="  // PUT your SESSION_ID 


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
