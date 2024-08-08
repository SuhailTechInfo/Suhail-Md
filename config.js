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


global.SESSION_ID = process.env.SESSION_ID ||  ""  SUHAIL_17_11_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyRVd0czVjc0QwdjA0WXdOOVJUeGhBVVFudG5JUnlaNU5VUDZaM0Jna1BVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEzMzY3MTUxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOThFN0JCRTY1NjgyRUI0RDNBRTg2MkQ0MDM0RjdBMzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMTM3MDY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTMzNjcxNTE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNjM2NEQ2MEM3OURGQzIzNTczNDQ2NUJERENBQzJDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMxMzcwNjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic3RTb1ZDazFTcVdJdVlrM3RMXzRud1wiLFxuICBcInBob25lSWRcIjogXCJjMWVkYjMxMy03ZmNkLTQ1MzktYmJiOS0xZGQyOWQ2MGJjNDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMjQ0LFxuICAgICAgODcsXG4gICAgICAzNSxcbiAgICAgIDY0LFxuICAgICAgMjIyLFxuICAgICAgMjI5LFxuICAgICAgMjM1LFxuICAgICAgMTE3LFxuICAgICAgNDcsXG4gICAgICAxMTgsXG4gICAgICA4NixcbiAgICAgIDEzMCxcbiAgICAgIDE1MyxcbiAgICAgIDU2LFxuICAgICAgMjA0LFxuICAgICAgMTE1LFxuICAgICAgMTgxLFxuICAgICAgNTQsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgMTM0LFxuICAgICAgMTAzLFxuICAgICAgMjE0LFxuICAgICAgMjAxLFxuICAgICAgMTUsXG4gICAgICA4OSxcbiAgICAgIDEwOCxcbiAgICAgIDU0LFxuICAgICAgMTQ2LFxuICAgICAgMjE4LFxuICAgICAgNSxcbiAgICAgIDIxNyxcbiAgICAgIDk5LFxuICAgICAgMTcwLFxuICAgICAgMjAwLFxuICAgICAgMTgyLFxuICAgICAgMjYsXG4gICAgICAxLFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFJCWjE4TEdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEzMzY3MTUxNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODg3NTE0OTgxOTkyMTI6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLgr7HOm+G6lNC9zpvlsLrinaTvuI/igI3wn6m5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFdYZzk0SEVKZjQwN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBLzgvZEc0dTB3QkUyNHpNUURtZ2JHZDNBWlBUWVhycEt4RnA0a3llamh3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9xRytNbm14VzZKUzBDeTJaQkxZNHBnbFA5TE1uNWRHVTh6cG1sSG5sU21RcVkyM1AvVFBhZjByYm8rYU5XbFhQdEhWMFpSNEJzVUN4djJHQXJoSkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhoblQyTUpyL0pBYVFSakZyK2Rod1hRQ3Z2TWZ4V3lrVUJjMWc0R2hoaHBZRjBWYWxFckk2MnJocU5hOGRDOWNmaVpYM203cmZTaWJIejlDb0hWR0RBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEzMzY3MTUxNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxMzcwNTVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9 


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
