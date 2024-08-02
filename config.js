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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348168768580";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168768580";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_21_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICA3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYwLFxuICAgICAgICA0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMzLFxuICAgICAgICA0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNixcbiAgICAgICAgMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDc2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY0MwVnBhelcrQTIrZnhBNjA1V21kQmg5a2pRaXJRd1VTajNUb3BSOGpGST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSW00T3B1RzBTUVMxaWw2V29QVnh1Z1wiLFxuICBcInBob25lSWRcIjogXCJjYjZjOWE0Ny02MmMyLTQxNzAtYmQ1My05ODg3NDkwYWIzYTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICAxNjUsXG4gICAgICAxNDgsXG4gICAgICAyMjQsXG4gICAgICA4NyxcbiAgICAgIDIyMSxcbiAgICAgIDk1LFxuICAgICAgNjIsXG4gICAgICAyNyxcbiAgICAgIDg3LFxuICAgICAgMixcbiAgICAgIDE4OSxcbiAgICAgIDE3MSxcbiAgICAgIDEwMixcbiAgICAgIDk1LFxuICAgICAgMTQ1LFxuICAgICAgNDgsXG4gICAgICAyNTQsXG4gICAgICAyMjksXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTkzLFxuICAgICAgMTQwLFxuICAgICAgMTY4LFxuICAgICAgMjA3LFxuICAgICAgMjA5LFxuICAgICAgMTI5LFxuICAgICAgMTQ0LFxuICAgICAgMTk0LFxuICAgICAgMTc0LFxuICAgICAgMjQ3LFxuICAgICAgMTAsXG4gICAgICAxODYsXG4gICAgICA1OCxcbiAgICAgIDEyNyxcbiAgICAgIDE4OSxcbiAgICAgIDE4MSxcbiAgICAgIDg2LFxuICAgICAgMjIwLFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLRC9nTXdHRUkyUHRMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImF5Y0lSN2JUVnVZcDFyTnhzaFVLUmVGZmp3TWJLVzFoa0dQVExqU1ZGV0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicVg4aGFRM3JtTS9mV01NNFFPUG5rMmN6MVRKYmdZbVhTSEtVUlUvT2FqckoxcHQ4RHRxa1FXRjFQaDNzVFB6Q1FjQ2NmWFphbUVYQnh5WlNFUjlZQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL0VnWWpZSWFMa1R1NXhuUGsvNzdSdGhSdUx5Q2dQRmk5NTBxa2lYeXQ0RzU5Vm9VVlJ5cGs4RkJ1MWQxUnVJRTZyMjZhNWNoM2c2V0xsQjlncE5zQ0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY4NzY4NTgwOjg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDkwODY2NjE5MTA3Njk6ODhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY4NzY4NTgwOjg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjE1Njk3XG59Igp9"  // PUT your SESSION_ID 


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
