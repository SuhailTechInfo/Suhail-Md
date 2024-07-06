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


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_12_30_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU1LFxuICAgICAgICA1NyxcbiAgICAgICAgNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk3LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk1LFxuICAgICAgICA2NyxcbiAgICAgICAgNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICA3LFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDg4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMjI4LFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlsK0lJOWgrYXZicmhOQktnWFJWN2N1TmhDUitWQm5Fa0pkOW8vdzZKQVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzI5NTcyNTY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzODQ0MUUwOUVDQzUyQUJGRjY2MEU3RkY0QzRDODM3NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyNjkwMjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidC1QbmlmOUpSNjYzUG8tQTZoNWN1d1wiLFxuICBcInBob25lSWRcIjogXCJmZjMzMDFjZC0xYTkwLTRiMTctYTY2ZC0yZGFiODNlZjFjYzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgOCxcbiAgICAgIDEyMyxcbiAgICAgIDk0LFxuICAgICAgMTA2LFxuICAgICAgMTUwLFxuICAgICAgOCxcbiAgICAgIDIwNyxcbiAgICAgIDYyLFxuICAgICAgNjIsXG4gICAgICAxNzUsXG4gICAgICA0OSxcbiAgICAgIDM2LFxuICAgICAgMTAwLFxuICAgICAgMTQxLFxuICAgICAgMTA0LFxuICAgICAgMjA5LFxuICAgICAgMjQ2LFxuICAgICAgMjA3LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMSxcbiAgICAgIDM0LFxuICAgICAgODQsXG4gICAgICAxNzgsXG4gICAgICAxOTYsXG4gICAgICA5NixcbiAgICAgIDc4LFxuICAgICAgMTkxLFxuICAgICAgMTE2LFxuICAgICAgNjksXG4gICAgICAxNSxcbiAgICAgIDE0OCxcbiAgICAgIDIzNCxcbiAgICAgIDE2NSxcbiAgICAgIDI0MixcbiAgICAgIDI0OSxcbiAgICAgIDIxMCxcbiAgICAgIDI1NSxcbiAgICAgIDExNixcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNaQVhMQ1E1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3Mjk1NzI1NjU6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNzIwMjgzOTcxMTgyNzo0N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZmN1c3NGRU56eHBMUUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInIrcUZkS2JxWFhmb0VyNXFTZVFWSVdlQm9FRDFFaVU3UEdsYi9JRlhIZzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ3RJSktiOWljRklVUVB0NE13U3ZoaWVBWU9yWE1RQUU4eG00R1BIOFRGZkd4THRRMlpBVHd5SWlHRjJBdHhVc2c0UEtwNDdXa2JRZnlSdHk4b1RqQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibUpMeU5sdkRPd2J4VWRVY1cyNHhpY2wrb25rTG1zc3VmYzB6ckIvNlh6MlVkeVQvVkF1VkJiRS9zalJZWnJMRGxMSklhMjdIc2ZTaTY4VU5sV1JhQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI5NTcyNTY1OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2OTAyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp3MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSncwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZVMzelBkTnNRcVFHdHhTZ2hXT01XT29jYlgyRmErcTQ5MTlFSG5HU0RwQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTAwNDI1ODE0LFwiY3VycmVudEluZGV4XCI6MzEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMjQsMjVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" // PUT your SESSION_ID 


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
