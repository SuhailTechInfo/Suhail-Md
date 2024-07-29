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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_11_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgODIsXG4gICAgICAgIDExMixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDY3LFxuICAgICAgICAzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDk4LFxuICAgICAgICA5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBBUDI3OXhSQmdLaDkrV1d6QkFXUEE3KzBvQ3pYZmQ0TjhiSHh2NlhwQ1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA4MTUyNDU5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTdERTlDNzNFNkEyMjgzN0NBNjY4MTYyOEQ0MDZEQkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjM3MTA0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkF4UUNtbzI0U0UyTVFzR0lkZEtKS3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGQxNDllMjMtZDBhZS00YjVjLTlkMjMtNzkwNmQ1NzlhZGYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDU1LFxuICAgICAgMTQsXG4gICAgICA5MixcbiAgICAgIDU4LFxuICAgICAgMjEyLFxuICAgICAgMTczLFxuICAgICAgMTkyLFxuICAgICAgNzAsXG4gICAgICAxMTQsXG4gICAgICAxNTEsXG4gICAgICAxMzksXG4gICAgICAyMDgsXG4gICAgICA1OCxcbiAgICAgIDE1MyxcbiAgICAgIDE4NCxcbiAgICAgIDE1MixcbiAgICAgIDE4MyxcbiAgICAgIDUwLFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgOTgsXG4gICAgICAxNDYsXG4gICAgICAyNDEsXG4gICAgICA3MyxcbiAgICAgIDIwMSxcbiAgICAgIDE4NixcbiAgICAgIDE4NyxcbiAgICAgIDQxLFxuICAgICAgMzMsXG4gICAgICAxMTMsXG4gICAgICA5OSxcbiAgICAgIDE0OCxcbiAgICAgIDgzLFxuICAgICAgMTY1LFxuICAgICAgMTc4LFxuICAgICAgMTgyLFxuICAgICAgNTMsXG4gICAgICAxNDUsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4OTZXOERTRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4MTUyNDU5MzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTExNTc5NDU4NzM2MzIyOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pQS2pJQUZFS21CbmJVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYkVRUHB2cndTSDJOOGdmWE9Ba3lhK1YyejFtS2ZrUllzWWx6bzFpaXJFND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4WE1UdHBwSzdpNnRIbi9iRWdOTU1vSG9vaFpNSjVQUDM2bjl3cnp1U2tydkJ5MmlvRWpnTHlja0FZRDZYL2sxc01kNUFRWFlLcmkzVE5sRVhnL2dDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJemJuU1NMUUV1OVU2VVBEbGtvR2wyNERvK0lPcGVZN0laRnYwM2l6cWpiUzE5R0pha2VvZ25xbFNkSUJueVE3a3A4M2x5ZFl0MkluOXJOdlhTMDBnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDgxNTI0NTkzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjIzNzEwMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlHRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUdELmpzb24iOiAie1wia2V5RGF0YVwiOlwiR2hIK2luR2lwUHAvZDJuZDI2aWRxaHNjOUZYR3l6VHdJQkpiRmlva1g0Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzQyMzgzMzc5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjIzNzAzODkwNVwifSIKfQ=="  // PUT your SESSION_ID 


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
