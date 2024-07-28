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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_36_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc5LFxuICAgICAgICA5MixcbiAgICAgICAgMTk2LFxuICAgICAgICAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgODcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU0LFxuICAgICAgICA0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NixcbiAgICAgICAgMjI3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTksXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInloMGJiclhHNGo1REVRaEJDckE3QWJEZ1NQOHBaNndLZHdtdTV5dEhQOTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRHVjNGVjdOVEwtbkhFYV9ETURObEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGRlMjhkMjEtZGVlNC00NzI4LThjZjQtYjIyYzRlYzFjNjEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDE5NyxcbiAgICAgIDIxLFxuICAgICAgMTc0LFxuICAgICAgOTgsXG4gICAgICAxMzAsXG4gICAgICAxNjYsXG4gICAgICA0MSxcbiAgICAgIDE5OSxcbiAgICAgIDk3LFxuICAgICAgMTUxLFxuICAgICAgMTUzLFxuICAgICAgNjYsXG4gICAgICAyOCxcbiAgICAgIDE0MCxcbiAgICAgIDIwOSxcbiAgICAgIDQ2LFxuICAgICAgNzUsXG4gICAgICAyNDMsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxODEsXG4gICAgICAxOTcsXG4gICAgICAxNTksXG4gICAgICAxNSxcbiAgICAgIDExMyxcbiAgICAgIDcyLFxuICAgICAgMjE1LFxuICAgICAgNzgsXG4gICAgICAxMTcsXG4gICAgICA3OSxcbiAgICAgIDk1LFxuICAgICAgNjgsXG4gICAgICA5MCxcbiAgICAgIDEzOCxcbiAgICAgIDUxLFxuICAgICAgNDgsXG4gICAgICAyMTYsXG4gICAgICA2MCxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKV0xXN0pOV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4MTU5MDQ5NDg1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyOTY5OTY5MDg3Mjg5MToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ002TDhzRUhFT21QbTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNjdBM1p5THgyMmF3dVRXN1NjYitnWDdzT2dVTWZrQjB1alFXaTZ6ZXR6dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnL3ROZTBxM2dkVlBpUXhPMWtTcGtUUUJuNDRwSFlmRnMvL3l1c3lCNStDUGROWm1DVnhVajBFekFodGRmWFpBZENiMGlCOFVBQ1V2SmxaYlJsQWhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrSlYrTHdFN0ZMdGJ1YWJTSVAvVTcwRmJzZHpNMG5ZdlBxRDBhelRLZU01MUcreXcxdTBxYWVjR2pPRHA0NzRrLzlXNEorTTVvNGRsM3dTMEVYN2pCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTgxNTkwNDk0ODU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjIwNjE4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVQU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVBTLmpzb24iOiAie1wia2V5RGF0YVwiOlwidGVKb1dQK3FQRDRJenVQQzR0UjV4OXJ1Z3NKcmkwM0ljWnk4ZVlkaVc0MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDE3MjMyMzM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyMDYxOTQ1MjJcIn0iCn0="  // PUT your SESSION_ID 


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
