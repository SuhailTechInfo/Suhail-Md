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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_04_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1LFxuICAgICAgICA1NixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcwLFxuICAgICAgICAzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMixcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI4LFxuICAgICAgICA0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibWxnMm1KclphQkcvY1RWUm9CR2o3YjMyeFZOUzdwZ0FvUWVhRUlsRWdyTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNVEtZUhhNGZRMTZNWTh5ODk0LVY3d1wiLFxuICBcInBob25lSWRcIjogXCIxZGYzMjU4MC02ZjcyLTRmOGUtOWE5OS1lYWNkMzkyMDE1YjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUxLFxuICAgICAgNCxcbiAgICAgIDI0NixcbiAgICAgIDIyMCxcbiAgICAgIDY1LFxuICAgICAgMTUyLFxuICAgICAgNTksXG4gICAgICAxNTksXG4gICAgICAxMDAsXG4gICAgICAxNDAsXG4gICAgICA0MixcbiAgICAgIDE0MSxcbiAgICAgIDI0MixcbiAgICAgIDAsXG4gICAgICA0NyxcbiAgICAgIDE1OSxcbiAgICAgIDcxLFxuICAgICAgMjAyLFxuICAgICAgMTY3LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMjM0LFxuICAgICAgMTg5LFxuICAgICAgNzgsXG4gICAgICA0LFxuICAgICAgNTUsXG4gICAgICAxNDMsXG4gICAgICAxNzMsXG4gICAgICA5OSxcbiAgICAgIDY3LFxuICAgICAgMjE0LFxuICAgICAgMjI1LFxuICAgICAgNjEsXG4gICAgICAyNTIsXG4gICAgICA5LFxuICAgICAgMjIzLFxuICAgICAgMjIzLFxuICAgICAgMjMwLFxuICAgICAgOTMsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRaUVRGWFJXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM5MDYyMTI3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ0MTUyNzMzNTY5MDg5OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTE9QaHBvR0VKam55YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGd1BBWTFCOGVmUzJ3K3hIb0hCbDRZc1RNTFB3bG1pODMrckE4V0hkZFFRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlZNWkyRUFvc2RXTzhHb2VvYzVaNXJVWGkyNDhFZ2hncStpeDc4Wkt6RmpHeDNZMGFwbUZBbFJpZWlFKzJ6WEQ5bGxuZlk4OWFMV2tZYVNjR0JBMUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBCdHZjem55NGgwcDdrdG1mQlBsbjVyaExQeHlqQ1BGV0tyZngxRVg5WnpRenhPZzRKU2dvVGt3QWtSQS9YeUpsR0VYSGtleGNzUks1blM0V0lzM2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzkwNjIxMjc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk3MTAzNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
