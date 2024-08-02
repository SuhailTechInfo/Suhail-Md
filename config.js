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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_12_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2LFxuICAgICAgICA2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTMzLFxuICAgICAgICA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY0LFxuICAgICAgICA1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgOCxcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5LFxuICAgICAgICA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyVytaa3hzeXZrUE43Unl1UE4zVFE5MXFCaVpicEh1ckpScEsxalBSekRnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwMjcxNDMyNTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc3ODBFRjdBOTkyREM3NUQ0NTI4QjM3MUU3RUUyQzdDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDgyMjMxOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItT1hqRTZmalJaeVcyT19ldHlfYk1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk5MzQzMWNlLWUwNzMtNDkxOS1hZjJlLWUxZTkzODIxZmQ5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDc2LFxuICAgICAgMTU3LFxuICAgICAgMjI1LFxuICAgICAgMTA0LFxuICAgICAgMjQ2LFxuICAgICAgMTA3LFxuICAgICAgMjQ2LFxuICAgICAgMTU4LFxuICAgICAgMjQzLFxuICAgICAgMjIxLFxuICAgICAgMzgsXG4gICAgICA5LFxuICAgICAgOTIsXG4gICAgICAxODMsXG4gICAgICAyNTAsXG4gICAgICAyNDAsXG4gICAgICAxODgsXG4gICAgICAzMCxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDE2OSxcbiAgICAgIDEwMSxcbiAgICAgIDQ4LFxuICAgICAgNzUsXG4gICAgICAxMjUsXG4gICAgICAxOCxcbiAgICAgIDE1LFxuICAgICAgNzQsXG4gICAgICAzMSxcbiAgICAgIDEyMyxcbiAgICAgIDE3LFxuICAgICAgMjE5LFxuICAgICAgMjAyLFxuICAgICAgOTIsXG4gICAgICA3MyxcbiAgICAgIDE3MSxcbiAgICAgIDE4LFxuICAgICAgMTYwLFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlROVzJBNFZMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDI3MTQzMjUxOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWVzc2lmdWxcIixcbiAgICBcImxpZFwiOiBcIjIzNDQxOTY2NzM2MTg3MDoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKS21pWVFHRUtYVXhyUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNXellNMUFmeUR2eGoxMVZlWFFlUVU4MlN1dFRScldsWDZVQVFKRDhlQVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS0U0QllzYXQ5dDMxQnRCeWhCN2tYOXgvUmcvMkFRWVFsZHl6U0lUdyt0RkU2dHZkeU12Q1FZT2o3Q0d2YmdZM3Q0L1R0R2c4ckV6bjJJQW9tUko1QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM1ptYWtORGQ0cWF5S3F2UHNSZFBVcDc5ZDZGSVhDTXdjSWEwaFdKaGNLUE1uS054NVZWWUlKR2c2TUdNdUdqTmEwRGViTzd1MGQ0ZVZEMHNaNUhlaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyNzE0MzI1MToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODIyMzEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR3VqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHdWouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqOUNPUUNTdC82Y0FEMTcrOFBpL1ZLUjg3UTVYRzBEbDZIZGVlZFc2czNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MTkxNTM2ODAsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
