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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_34_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQxLFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg3LFxuICAgICAgICA2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQzLFxuICAgICAgICAzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTU2LFxuICAgICAgICA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDYsXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQzLFxuICAgICAgICA5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI4LFxuICAgICAgICAzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDc1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4LFxuICAgICAgICAxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDg3LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NixcbiAgICAgICAgNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzLFxuICAgICAgICA4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXUDE5OHdtc3dqRm14RXd1UE1XZVBhQTczYkxNbGRpUW1KQ2tFYlBNZjJ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAwNTMwNzE2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNURDODIyRjE2Qjc5RjU5NUEwRjVCQjgzODJEQkQ1Q0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDk0NDY5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDA1MzA3MTY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MTc3QjkxQTQ2QUQwRDc1OTc2Nzg1RDVCM0Y0NjY2M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwOTQ0NjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidlg0ZVpZQ21SNkdtdEJXSDFncEsxUVwiLFxuICBcInBob25lSWRcIjogXCJhN2M0M2FkMi04MGRmLTRkNjgtOTc3Ny0wOGUxYTliMGVmOTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMTcxLFxuICAgICAgNixcbiAgICAgIDc1LFxuICAgICAgMTIyLFxuICAgICAgNTIsXG4gICAgICAzNSxcbiAgICAgIDI4LFxuICAgICAgMTkxLFxuICAgICAgMTY0LFxuICAgICAgMTc3LFxuICAgICAgMTcyLFxuICAgICAgMzYsXG4gICAgICA1NyxcbiAgICAgIDIwNixcbiAgICAgIDg3LFxuICAgICAgMTYwLFxuICAgICAgNjQsXG4gICAgICAxOTQsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDk3LFxuICAgICAgMTIwLFxuICAgICAgNjAsXG4gICAgICAyMDAsXG4gICAgICAyMTMsXG4gICAgICAyMjcsXG4gICAgICAyMDYsXG4gICAgICAxNjYsXG4gICAgICAyMzUsXG4gICAgICA2OCxcbiAgICAgIDI0MyxcbiAgICAgIDEzNixcbiAgICAgIDIyMSxcbiAgICAgIDY5LFxuICAgICAgMTQ3LFxuICAgICAgMTcxLFxuICAgICAgNzksXG4gICAgICAxNCxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBS0tRR1RDMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDA1MzA3MTY4OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiaWRrXCIsXG4gICAgXCJsaWRcIjogXCIxNTM0ODA5NzUxMzA4MDU6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3o5aGNvR0VQMm1sTFVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRNmJPV0FJWXpWYzEwemNTRVd5V21DSzFrUFVYUlNtWG85Wjh2ZWl4R1F3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZUb3lwTmlWTzhuUVBUdDRmbmhMMkdtN0pyVW5uSFUzVE1LaWZnaVhLUkkwQ24weUpzYWlxcTVXcFRSYmdvcXEwY2M3dHU3MVFoQ0U3emIvVGIySER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZpeW5ZRGxWY0dmVkJFdVhyZDdtZTQySVlRbS93U3JEYzNIRW1nTVRvM3hqd29zUVhqNFBFdmU5ZHNNaktDcDJXWFVnMTJxQ0NSc3l6TUE2M0Z3QUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAwNTMwNzE2ODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDk0NDY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQml3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCaXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIycGp3M0JuKzhRYTRuWWFueVh3ZVAxTDRpbXYwOTVFcDkwM2NPK3J3MktnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NjU4OTk5NDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
