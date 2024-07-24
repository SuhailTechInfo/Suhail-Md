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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_21_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcxLFxuICAgICAgICA2LFxuICAgICAgICA4MixcbiAgICAgICAgODksXG4gICAgICAgIDE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQzLFxuICAgICAgICA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgwLFxuICAgICAgICA1NixcbiAgICAgICAgMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk3LFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDkwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsZlVWUFJXK0RqbVNXU3N1cUtua1JTYk4zRnNtU0NNanVrMnhIdzJEdjlNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVamU2T3VHcVR1LWNqTk4xajFZN0JBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyNjIzMmY0LTMwYmItNDI5NS05NmVlLWMzMjYzNmU2NmIwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAxMzcsXG4gICAgICAyMyxcbiAgICAgIDU0LFxuICAgICAgMTQ0LFxuICAgICAgMzYsXG4gICAgICAxNDgsXG4gICAgICAyMTcsXG4gICAgICAxMDcsXG4gICAgICA0MyxcbiAgICAgIDE5NyxcbiAgICAgIDc0LFxuICAgICAgNjQsXG4gICAgICAxMDIsXG4gICAgICAyNDUsXG4gICAgICAxMCxcbiAgICAgIDE0MSxcbiAgICAgIDIwNyxcbiAgICAgIDEwNyxcbiAgICAgIDIwMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAyMCxcbiAgICAgIDEyOCxcbiAgICAgIDE2NCxcbiAgICAgIDExOSxcbiAgICAgIDE4MCxcbiAgICAgIDM1LFxuICAgICAgMTM3LFxuICAgICAgMTUsXG4gICAgICA4OSxcbiAgICAgIDI1MyxcbiAgICAgIDIxNSxcbiAgICAgIDMsXG4gICAgICAyMjAsXG4gICAgICA1OSxcbiAgICAgIDIyNyxcbiAgICAgIDc5LFxuICAgICAgMjQ2LFxuICAgICAgMzEsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1gxR1BRQTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODI5MzY0MjE1OToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTMxOTc4MDA0ODUwNjA6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTM1ZzVJSEVJalhnclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWajY0V2wreWVsaW5lNndZZlMrU214Unk3WjNpaXEzN3NsSXRERFF3ZXlRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkt6clFXM254WUhnRFQwKzZhUTNVLzFsTTlNclRVeVluKzFJb2xQeUM1bWdIN3VTa08xVUZYODBUcFJRT0Q3ZmFZd1JabGVmelYvY1g3UmJBMFVNNEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJVb0wzK0QyTkorTzFEdWdHVFFvNTBwZUxKZFMxUlRWM2UvTTJyN2dyTDJPU2YrOEFSUXBLdXhOTFluVnEranp1M0x0L1l0ZVNQZjJUNjUzQitGSURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODI5MzY0MjE1OToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MDU3MDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMSkNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxKQy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
