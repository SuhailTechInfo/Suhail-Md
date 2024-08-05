const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email =""
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴋ" 


global.devs = "923097982747" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923097982747";




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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_09_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NixcbiAgICAgICAgMjMxLFxuICAgICAgICA0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICA4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDI1LFxuICAgICAgICAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTM0LFxuICAgICAgICAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInNWblljRlk5QnlsaWw5V2NydnF5MjZVa1Z1U3VnZWJJT0tFNWJOdlh0TEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDk3OTgyNzQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCOTE1OUEyNzM1NUQzRTBGRkNFQTk5QzA0ODNFQTJGRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI4ODg1NTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwOTc5ODI3NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE2QkVBRTkzMTFERUY3NzIwMjk5ODVDNDYyMEI5ODBCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjg4ODU1MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFRWM0YXJsdVRGMnBYSkdfME1LNTR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNmYjdlNGIxLTFiZmEtNDI2Yi1iMzU5LTRlMGZjYjI5YjY2ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjYsXG4gICAgICAxMTksXG4gICAgICAzNyxcbiAgICAgIDEyMCxcbiAgICAgIDM4LFxuICAgICAgMjUxLFxuICAgICAgMjUwLFxuICAgICAgMTg3LFxuICAgICAgMTAsXG4gICAgICA1NixcbiAgICAgIDIzMyxcbiAgICAgIDIwNixcbiAgICAgIDIzNCxcbiAgICAgIDE4NCxcbiAgICAgIDEzOCxcbiAgICAgIDksXG4gICAgICAxNjMsXG4gICAgICAyMDIsXG4gICAgICAxNDYsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICA3LFxuICAgICAgMjMyLFxuICAgICAgMTk5LFxuICAgICAgNjYsXG4gICAgICAyMjcsXG4gICAgICAyMTksXG4gICAgICAxMTQsXG4gICAgICA3MSxcbiAgICAgIDIyNyxcbiAgICAgIDYyLFxuICAgICAgMjMsXG4gICAgICA2NCxcbiAgICAgIDU5LFxuICAgICAgNzksXG4gICAgICAxNzAsXG4gICAgICAyMyxcbiAgICAgIDcsXG4gICAgICAxNjMsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxV0U0NDRCNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDk3OTgyNzQ3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzQ4NTY1NDk1ODg5OTU6MTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKald0cndCRU9EaXhMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNUSkxBaHZlREp6RndYRXRiejMzbDNhSk1KRGdndkpEMTZyRmJvYmhBeFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiclhGTXZVMUJsbFdPVGkxMW1qZTFlSTJWK1MwY0V5dzBGdlZRQUo2ckxCYlRuREk4bjVQRUNmTkhZWmlURWovRnR3aFloMGFoWlp4dUNYRkxkSVVRRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSXpDNzZQdzVvUXo0dWJ5bWtxS2RHRVVMdnpnNHQ2MWlBWm9GTWtJL1FvbFlqdmVjWlBJU2NnanVRKzU4ZldxbnE2U25iOTNscHlZQ1J6TU1KaUtqQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDk3OTgyNzQ3OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI4ODg1NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQT05cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBPTi5qc29uIjogIntcImtleURhdGFcIjpcIlJlSXQ3N1prSlFDMGttSUxOdW9jbGtENUxnbjhFenpjQm14NzlabFl3ZlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzk1MTYwMzQ0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI4ODg1NDg5NTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "AK", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴋ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ᴀᴋ",
  ownername:process.env.OWNER_NAME|| "𝐀𝐊",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝙰𝚔"  ).toUpperCase(),



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
