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
global.gurl  =process.env.GURL  || "https://wa.me/message/E3WLNO4GSPOHA1";
global.website=process.env.GURL || "https://wa.me/message/E3WLNO4GSPOHA1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348162195613";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_00_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxODksXG4gICAgICAgIDIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDg4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS3hsSWtabncveHdKZVFjSWFFcnJ0YVFWOVFtNGZsb2YwSjdZRmU3enBDQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRElvbWJsLXBTMjJHOHl6MmE0VGNPUVwiLFxuICBcInBob25lSWRcIjogXCI4Nzk0OGExMS02OTk5LTQyZDctYTRmMS0yZmFiYzRjZTc0M2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDEsXG4gICAgICAyMjEsXG4gICAgICAyMTcsXG4gICAgICA0NixcbiAgICAgIDE3MSxcbiAgICAgIDIyNyxcbiAgICAgIDc5LFxuICAgICAgNDksXG4gICAgICAyMjEsXG4gICAgICAxODEsXG4gICAgICAxNixcbiAgICAgIDE0OSxcbiAgICAgIDI0OSxcbiAgICAgIDIyMixcbiAgICAgIDEyMixcbiAgICAgIDEwNSxcbiAgICAgIDk2LFxuICAgICAgMjM2LFxuICAgICAgMTUyLFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICAxMDMsXG4gICAgICA2MSxcbiAgICAgIDIwNSxcbiAgICAgIDE2LFxuICAgICAgMjI4LFxuICAgICAgOTQsXG4gICAgICAxNTcsXG4gICAgICAxNTYsXG4gICAgICA4MCxcbiAgICAgIDE4NixcbiAgICAgIDE0MCxcbiAgICAgIDI0NixcbiAgICAgIDE4MixcbiAgICAgIDIyMixcbiAgICAgIDE3MixcbiAgICAgIDIyNixcbiAgICAgIDgwLFxuICAgICAgMTI4LFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDNOMXZRREVOK3JvN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJidnBiaHhINC9LQldDNkNkVGM5dGRsUGY4dW16WENCVEpOZENvODFqWlVnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImU1c2Ztc1NhUkhaaEZoUEo0V1g1alBXSy9KQk5rdk9qdGFZZ1dFWTRWTE5XR0ZobDhxMjEwU0tJWlVqL0tTc01WMGJJN2l5VGkwKzEzczRMUGtWTUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVtWjRXZkhSRzIvQ0xYWXVoVXBwU0I4bzNzNWozWElRcjUxTytJVUhtV2E0SkhidW1Jc0tYM0RZbHYxV2NwdklueWJCQXlJcWt4MlphU0ZqVWtSY2p3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyNTkyNTk0MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ2NzM3ODgzMjU5Nzg6MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjU5MjU5NDA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzQwODM2XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "garri-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "garri",


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
