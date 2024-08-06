const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsa"festuskibet000@gmail.com"
global.location="Kapsabet,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/eliakimTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || 
global.website=process.env.GURL ||  
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ eliakimtech


global.devs = "254745931715" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745931715";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254745931715,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_49_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIwLFxuICAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMixcbiAgICAgICAgMTQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxODUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzksXG4gICAgICAgIDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMxLFxuICAgICAgICA3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDY1LFxuICAgICAgICA0NixcbiAgICAgICAgMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0MzMxMStJWFpZRnhRTkI5eGtwV3JZd3UrdkY0aE95REZ6QmMxNUVmdXFVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDUlZyZ3lIelFRQzNON0wwbXBNX21RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlhYWEwYTVhLWQyMTYtNDE5YS04NmU2LWNkMjUxOTA4ZTNhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDYzLFxuICAgICAgMTY2LFxuICAgICAgMTQ3LFxuICAgICAgNjQsXG4gICAgICA2MCxcbiAgICAgIDE2OSxcbiAgICAgIDE0NixcbiAgICAgIDY2LFxuICAgICAgMTIxLFxuICAgICAgMTI4LFxuICAgICAgNTAsXG4gICAgICAxOTUsXG4gICAgICAxOTYsXG4gICAgICAxMTgsXG4gICAgICAyMDgsXG4gICAgICAzNCxcbiAgICAgIDkzLFxuICAgICAgODIsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDI1NSxcbiAgICAgIDE0MixcbiAgICAgIDEyNCxcbiAgICAgIDE2MixcbiAgICAgIDEzMyxcbiAgICAgIDE4OSxcbiAgICAgIDI0NCxcbiAgICAgIDIsXG4gICAgICAxMTgsXG4gICAgICAyMzAsXG4gICAgICAxODQsXG4gICAgICA5MSxcbiAgICAgIDU2LFxuICAgICAgMTMwLFxuICAgICAgMTg1LFxuICAgICAgNTIsXG4gICAgICAyMTAsXG4gICAgICA4MCxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc1WkZQTktBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDU5MzE3MTU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkBmYXllelwiLFxuICAgIFwibGlkXCI6IFwiMTc5Nzc0OTE1ODg3MjEzOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEh4OVowQkVMUEV5YlVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaZ1YyOUxIM21ZMzc0akowc3dCZ0x1QXhVN2RtS2pDNWlVSXRLcUZRWDJvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVDZUh1Qmt5ck4zN3hRMzVFUXZ1VEUyZlFlQzRva3JXWXJBcUpveHlJMVJDQVFzQlBpM2hsYWdrdTJKTXIxczRFNG5mTlZuY080VkNYUEZ5c3ZkekFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVRZ1hCWnRwUDBrYjRuQzZTVEV6ZW1LZGFENjFLMktuczloRXAyQkdXUURWclYxUFd3RjNMYWJWdkFsaTNYcUhET1RNL2lXQ2pIdXFBL05SMm5mWkJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0NTkzMTcxNTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5NjY1ODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNM1lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU0zWS5qc29uIjogIntcImtleURhdGFcIjpcImxDbnlDOTdhZXlaSkdnSFEwTFJZM1FLSnNtdVRSVXV6WmZKcVN1WTFPdjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzMxMTg0MzY5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI5NDk4NDk4NjJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ELIAKIM-TECH",
  ownername:process.env.OWNER_NAME|| "eliakim Ke",


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
