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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923488096185";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923488096185,923488096185";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_49_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICA5OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDUwLFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjExLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9GY0twRDFPTit2SUxVS29qK05ZWWNhZThEMnFwR3NlY1pVUjZGZkhoKzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDg4MDk2MTg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQzk1NEEyRTI1MEQ5QTBFOTc3NkRBOEU1Nzk2OTgxMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyMjQ5NjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0ODgwOTYxODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBGMTEwMTk3MTExREVFODlBN0REQkUzRkFBODY4RDVGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjIyNDk2MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLUE5XSjVNWFQxNmlaNlRJLVgyTER3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJhY2EyMjBhLTM5YmUtNDE2Mi04YzIxLTBmYjhkYTZjOTBlMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTksXG4gICAgICA0MCxcbiAgICAgIDIxMixcbiAgICAgIDEzOCxcbiAgICAgIDI0OSxcbiAgICAgIDE3NixcbiAgICAgIDMzLFxuICAgICAgMTM2LFxuICAgICAgMTcwLFxuICAgICAgNzQsXG4gICAgICAyNDksXG4gICAgICAxODQsXG4gICAgICAxNjIsXG4gICAgICAyMjEsXG4gICAgICA1NCxcbiAgICAgIDU4LFxuICAgICAgNzYsXG4gICAgICAxMSxcbiAgICAgIDMxLFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgMTc3LFxuICAgICAgNTAsXG4gICAgICAyOCxcbiAgICAgIDM2LFxuICAgICAgMjcsXG4gICAgICAxNDYsXG4gICAgICAyMjEsXG4gICAgICAyNDUsXG4gICAgICA1OSxcbiAgICAgIDI1LFxuICAgICAgMjAzLFxuICAgICAgMjEzLFxuICAgICAgOTUsXG4gICAgICAyMTksXG4gICAgICA2NCxcbiAgICAgIDI0NSxcbiAgICAgIDE0NCxcbiAgICAgIDk3LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko3QlIyQzRIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0ODgwOTYxODU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc0MjY0MTc5MTgwNTE6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU0FRTEFJTlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPNTQvWUJFTG1pbkxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR1BNdGpiOFlWdWRFSlNBUTNxZWdYZVg2ajJSWkljWTQ5WEMvUzFhUFl5Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDRVpzcHZPaWxVWUhHSjRJeXp3a3VZb05sV1dIVVZNVFVST1BYc1p5OEp1WFRZSHVoWW1aek92bHdVNytpMXhoWmlZV2pudmtSZ09QNnJNOUVHYkNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYcVo2V1JnNWRhU1FSN3BmYVIxaTkxWjIrTEVmS1ZpK2Y1b1R3S0ZERS9CVm8zcXBJSGZac2UvczVzYlUyZWs4bDNxSGdlQ1VqVVAvOVFVQnhsa1ZoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0ODgwOTYxODU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjIyNDk1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUN3YVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3dhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaVBib3c3QUM0M2liR2ZoblBjU1VHQjFUU29IUUt1RlJkMHp2RzBxWGhxQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTc1Mjg3MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjIyNDk2MDM3MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SAQLAIN",
  packname: process.env.PACK_NAME || "SAQLAIN",
  botname : process.env.BOT_NAME  || "SAQLAIN",
  ownername:process.env.OWNER_NAME|| "SAQLAIN",


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
