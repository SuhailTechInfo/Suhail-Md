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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233591877930";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_30_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDkyLFxuICAgICAgICA4LFxuICAgICAgICA2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM1LFxuICAgICAgICA0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDY4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk2LFxuICAgICAgICA5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTExLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMwLFxuICAgICAgICA3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAzMSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjQ0UUxHeGFhUnJyclpmOTZGeVlaa25kRkhVU0U1d3dPUnBIanlXZVV4TEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzNTkxODc3OTMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUJEMEQzRTcyQ0Y3NjNDM0VFRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyODUwMzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQjRBVGtZaTBUeHEtVXRXVERRMEZ2UVwiLFxuICBcInBob25lSWRcIjogXCI5OWMyZDc5NC0xNTNkLTQyOTktYTZmNS1mZmNhYzNlYjc0ZDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgNjAsXG4gICAgICAxNzgsXG4gICAgICAyMyxcbiAgICAgIDE4MyxcbiAgICAgIDEzNCxcbiAgICAgIDE3MixcbiAgICAgIDE2NixcbiAgICAgIDcwLFxuICAgICAgNDYsXG4gICAgICA4LFxuICAgICAgNDEsXG4gICAgICA1NCxcbiAgICAgIDk0LFxuICAgICAgMTczLFxuICAgICAgNzAsXG4gICAgICAzNSxcbiAgICAgIDIyMSxcbiAgICAgIDIxMyxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDIzMSxcbiAgICAgIDc5LFxuICAgICAgMzEsXG4gICAgICAxMjUsXG4gICAgICAxMjcsXG4gICAgICAyNixcbiAgICAgIDE1MixcbiAgICAgIDIyNixcbiAgICAgIDE4MixcbiAgICAgIDIyOCxcbiAgICAgIDcwLFxuICAgICAgMTgzLFxuICAgICAgMzcsXG4gICAgICAzNSxcbiAgICAgIDE4NSxcbiAgICAgIDIyMCxcbiAgICAgIDIxMSxcbiAgICAgIDQsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDJMTEZXUjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU5MTg3NzkzMDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSmVzdXMgSXMgS2luZ1wiLFxuICAgIFwibGlkXCI6IFwiMjA1MzEyNTA2MjA4NDcxOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWpSMnFBTkVPTDNuN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXQWtkbmd3YnRXZHhTTk1aUExjQ0FncURvWHF1a0lqTi9YVzJOMjAwOW5FPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImg1cE9IWmVzcE4wdlZtaFZxMEdlM1BsL01tTmNGWVZVUjlja2xoU3ZSa0JwYjM4VmhTT2JIV3RBc1ZwQnNDQkdRR3lLVllaaktWMTl3eEE4L1gvQ0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlE3M1VCY2pBYUhuSGg3WjcvQktJR2RYb3FMaVMzNnY3N2FPemRPbmkzRTNleDNVWXdFOWY2cWdHMjdsaFNKUWIzSVZxRkhCbCtYWW1oMUh2VHY0SkFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU5MTg3NzkzMDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyODUwMjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUFpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZQWi5qc29uIjogIntcImtleURhdGFcIjpcIm16RStzUTBKbGxBRmZqeHpWandiRExJcUMyY1ZhQm5ZSnFOd000eFRSeDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU1ODI1NDcyOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjg1MDI5MDAzXCJ9Igp9"  // PUT your SESSION_ID 


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
