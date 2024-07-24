const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="elijahchinecheremonah@gmail.com"
global.location="mpape,Abuja."


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347038494997";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_40_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkzLFxuICAgICAgICA0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk3LFxuICAgICAgICA2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MixcbiAgICAgICAgNjksXG4gICAgICAgIDgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTM3LFxuICAgICAgICA1NixcbiAgICAgICAgODYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjZFR2UHUxN0lwaW1mME55c1RLQnpxenE5M1JlbzBWdVhQU1U5Z0JuY1hNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMWVBFSFp4dlJYbW5JbkFTdVltU2xBXCIsXG4gIFwicGhvbmVJZFwiOiBcImY2Y2MzZDZjLTM3Y2UtNGRkYi04OGMzLTU5ZGIzMjNiOGVhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAxMjQsXG4gICAgICAxNjksXG4gICAgICAzOCxcbiAgICAgIDI0MyxcbiAgICAgIDcwLFxuICAgICAgNjcsXG4gICAgICAyMDEsXG4gICAgICAyMzAsXG4gICAgICAyMDEsXG4gICAgICA1NCxcbiAgICAgIDEyNixcbiAgICAgIDEwMCxcbiAgICAgIDIyMyxcbiAgICAgIDIzMixcbiAgICAgIDczLFxuICAgICAgMjI4LFxuICAgICAgNjcsXG4gICAgICAxNDYsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDIzOSxcbiAgICAgIDM1LFxuICAgICAgMTA5LFxuICAgICAgMTk3LFxuICAgICAgNCxcbiAgICAgIDIyNyxcbiAgICAgIDEyMixcbiAgICAgIDE2NixcbiAgICAgIDIyOCxcbiAgICAgIDc3LFxuICAgICAgNDUsXG4gICAgICAyMDcsXG4gICAgICAwLFxuICAgICAgMTcwLFxuICAgICAgMjgsXG4gICAgICA3MCxcbiAgICAgIDEyNCxcbiAgICAgIDE4MSxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzJORTlGTENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzg0OTQ5OTc6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJuby1uYW1lIHRlY2hcIixcbiAgICBcImxpZFwiOiBcIjk3NTM0OTY2MDA1ODQ4OjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0o3OHlJa0ZFT243Z3JVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ0dXUVRQL0lQRzA0azhhdFl3NktjdExuMTdwSjJNa1dXcWNQT3JDZlpDOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDdVpoZmFIRyszVnpqRWt6Ui94U1BkNXpDWlVMK2pqbUJUU3Bha0xlQkpLZzRtdjRURkZRVk1jdWg0Y3lRMGU3TFRBNUx0MXU3RExhbXZKWEJjOTRBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjZVVmMnYyNEl2ODQzL3E4YWRvMkVGc3IwQTBUZHVTNkJtQUJuTk5iaE4zQVFIQlNwQ3JZTjNnU1ZUYjhyR2ZwaHdvSnNQT2Nmc2ZramQ5OE5UdUxDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM4NDk0OTk3OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MTA0MTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHODNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUc4My5qc29uIjogIntcImtleURhdGFcIjpcIlNFV3hZRDlNKzhhNU9VUGRvb0NCOFZaaTNiQ2k4WjI0ak56cE9yQUwyUDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM2MjI0NzE5NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownerme:process.env.OWNER_NAME|| "Elizzy Berry",


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
