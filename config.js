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

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_43_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDg1LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMTI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU4LFxuICAgICAgICA5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDcxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDMzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRkZMaUZ5SC83OTVnK0lKb0ZQS3FoNC9LUmFQcHE1dDl1MmNXU3ZyQjZGcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaG1qcHZna0FTeEdQdWoyRFZONFl4Z1wiLFxuICBcInBob25lSWRcIjogXCI3OWIzNzM4ZC1jZWRhLTRlZmMtODI0Zi0yODIwMTZhMmE3MWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMzgsXG4gICAgICAxODcsXG4gICAgICA4OSxcbiAgICAgIDE0LFxuICAgICAgMTU3LFxuICAgICAgNTIsXG4gICAgICA0LFxuICAgICAgMTQ3LFxuICAgICAgOTQsXG4gICAgICAyMSxcbiAgICAgIDk2LFxuICAgICAgMjQ2LFxuICAgICAgMTAwLFxuICAgICAgMjMyLFxuICAgICAgMTg0LFxuICAgICAgMTg3LFxuICAgICAgMjIxLFxuICAgICAgMzAsXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMTk3LFxuICAgICAgMjQ0LFxuICAgICAgMTg0LFxuICAgICAgMTEyLFxuICAgICAgMTUyLFxuICAgICAgMTI1LFxuICAgICAgMjYsXG4gICAgICAxMjIsXG4gICAgICAyMzMsXG4gICAgICAyMCxcbiAgICAgIDE0MSxcbiAgICAgIDExNixcbiAgICAgIDE1NixcbiAgICAgIDIwNyxcbiAgICAgIDg1LFxuICAgICAgMTcyLFxuICAgICAgMjEsXG4gICAgICAyMzMsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1ZQVzVKR1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDA0NjMzOTE6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ+VMKlRyDDl82cw5cgR0hPU1Q/wr/CpVR+4oC64oC64oC64oC64oC68JODtVwiLFxuICAgIFwibGlkXCI6IFwiMTM0MzcyNDk3ODIxOTI1OjQ2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xtWHpyUUdFSXJTb0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM2ExNFB1eTFTOUdDZ0FKd29tRko3MWJuekFqZnZHdDBtYTNMYy82RTRuND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2Mk1oZThseFBnZnVMcm5zOFV1a2d1cFBWS1dqQnZ5Rld1Y0NISUtFSVpLd0poYXN2WmVua2VPc2R0OWRwdVhVRG0vODhUNzQ4WXhJQ1FDdjZ3TnNDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvanRzK0czSGxBVmpGRS9kbHErUVJuc0drK3FpeUZvZklWYnV6MXIrTE5zeGQ5bGErUisyUDl4ci9FcEZ6SWhQd1FMUVYvc0pwRkJTNFh5S2tyZTBoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQwNDYzMzkxOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjk2NTkwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
