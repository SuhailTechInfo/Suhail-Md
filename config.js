const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "all" ;  
global.video= "all" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "3000"                       // put your app url here,
global.email ="alamzong00@gmail.com"
global.location="Karachi,Pakistan."


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


global.devs = "+989921260704" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "+989921260704";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_58_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMixcbiAgICAgICAgMTM4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDQxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICAxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqSlhKSi9JbEJidFhsRC85SlY2REl3ajBPWHZUM2h1NTdjdkdMTXVLOHVZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk4OTkyMTI2MDcwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREQwODY1OTQzNEY1RDBCNEExMjA2NkVGNTE3MjZDOUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDc0MzI5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTg5OTIxMjYwNzA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRDU4QzcyODJEN0NCMTVDNDgzMzQ4MUM5M0U0OUE1RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwNzQzMzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5ODk5MjEyNjA3MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdDMzEyQTgzNzJERTA3NzE1NEE4NDFEMDJCNjQ4NjU4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjA3NDMzMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk4OTkyMTI2MDcwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0YzMTc2NERBNjYyNzU0OEZDMzcxRkVFNzk0MTdGQzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDc0MzMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJvZ0tscWtkUmZLd3d2VmZwdXRhb1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWU5MTllOTAtYjE2OS00MjJmLTkxYmEtNTgyNGYxNWI0ODhmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM0LFxuICAgICAgMjUxLFxuICAgICAgMjIyLFxuICAgICAgMTgxLFxuICAgICAgNTksXG4gICAgICAxNSxcbiAgICAgIDEyNSxcbiAgICAgIDIyOSxcbiAgICAgIDMsXG4gICAgICAyNDIsXG4gICAgICA4LFxuICAgICAgMjI0LFxuICAgICAgMTAyLFxuICAgICAgMTk3LFxuICAgICAgMTQ1LFxuICAgICAgMTI4LFxuICAgICAgMzYsXG4gICAgICAxMixcbiAgICAgIDc4LFxuICAgICAgMTc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDY3LFxuICAgICAgMTA2LFxuICAgICAgODEsXG4gICAgICAxMjcsXG4gICAgICAyMjUsXG4gICAgICAxOTYsXG4gICAgICAwLFxuICAgICAgNjQsXG4gICAgICAxMjYsXG4gICAgICA0NCxcbiAgICAgIDgzLFxuICAgICAgMTIwLFxuICAgICAgNDIsXG4gICAgICAyNixcbiAgICAgIDEsXG4gICAgICAyMDQsXG4gICAgICA0MixcbiAgICAgIDE3MSxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2OFZNQUJMUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTg5OTIxMjYwNzA0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMyNzMyMDEyOTU2MTU6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBbGFtIFpvbmdcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOT3A4b29GRU5PSms3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpOZitQbzdFMGZlWTlzaXRHZ0VHY0dPT2VOY2hzVmFncDVScjg5SUFvUkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWlVlVTljSFFpd09IbXdHSTUvMFRYV1NxK0RjQUVDTnVJd0ZGUE5VU3VPRTlEZ0lpV1lleEVPcVc0Wjc5cUVaMlk2Uk5OVHNYZmZKWnl4QVJ5RnNaRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUUgzSWJ2R0pQck1rdlY2aHJTb0pydkxNczlidWZhaXh0VTVxZ1ZpN0Y2aXB5NzhFSVA0aU92Ums5SSt4ejQ0U1RLQjl2ZWd6UmhBOGlreUF2d3RXREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTg5OTIxMjYwNzA0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwNzQzMjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDVGVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNUZS5qc29uIjogIntcImtleURhdGFcIjpcIk1wOHRJTGV6a2RkYXlPZEo4VElsSzlqMVg1UlkwcC9CRDVMT2JyUFBhQzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM2NTAyMTkwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMDc0MzI5MzQ3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "alam-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "alam",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "api-key",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-37cfcd7a-e309-445b-9527-e8178f6efdc2",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "alam",
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
