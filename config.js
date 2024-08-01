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

global.warncount = process.env.WARN_COUNT || 1
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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255696893527,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_00_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDkzLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICA2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQSGVmN0ZHRWo0a0lzMlNpODVZdkV3Mm9CUVBMN1hqQkpmeTMwb0Q0aHRRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGZnJETGstTVJOV3RPVVo0OW8zM3hRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAxMDgyZmM0LTgxYWItNGI3Ny1hYTM5LTY2Yzk1NWJjM2Y5N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTYsXG4gICAgICAyMTksXG4gICAgICAxNjgsXG4gICAgICAyMyxcbiAgICAgIDE0NSxcbiAgICAgIDE5OCxcbiAgICAgIDY0LFxuICAgICAgNDksXG4gICAgICAxNDQsXG4gICAgICAyMjcsXG4gICAgICA4LFxuICAgICAgMjEzLFxuICAgICAgNzAsXG4gICAgICAyMTAsXG4gICAgICAxNyxcbiAgICAgIDYsXG4gICAgICAxMjEsXG4gICAgICA5NSxcbiAgICAgIDQyLFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQxLFxuICAgICAgMjQ2LFxuICAgICAgMTE5LFxuICAgICAgMTI0LFxuICAgICAgNTIsXG4gICAgICAxNzksXG4gICAgICAxMjEsXG4gICAgICAyNDcsXG4gICAgICAxMzMsXG4gICAgICA0MCxcbiAgICAgIDg1LFxuICAgICAgMTUzLFxuICAgICAgMjAsXG4gICAgICAxNDgsXG4gICAgICAyMCxcbiAgICAgIDE0LFxuICAgICAgMTk5LFxuICAgICAgMjI0LFxuICAgICAgMjI4LFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVCUEJLTktNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2OTY4OTM1Mjc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdl6PwnZe/8J2XtvCdl7vwnZew8J2XsvCdmIDwnZiAIPCdmIfwnZiC8J2YgvCdl7VcIixcbiAgICBcImxpZFwiOiBcIjI3MTQ3MjM1MDIwODEwNzo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ016TnUrUUZFT25McXJVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUx0MmtQWlVIQU1ISjZwb3dpVmFVNW11ZVBvQVp4bkcvV0lETDI1OTRSYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWQmRZZkVnS0xNcWt4amJ3SEIzV045YlJCZXZ6MW9QdncwS1c2NWhBUWYyMFQ4TjBCMFlPR3pVeWdzaHorUGZKbXd0dE56RnhITktjajZXRjg1TmpEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSbnJHblhLY2RqQXhaU2liRlp5dnNUWG5QaGxQNFlkVjNiWjJSOXJkelI5cUdORVQ5aWlobm1vV1FhOEFLUlBtcWh4clFBZWh3VnpWMUlJR3N6aUNEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2OTY4OTM1Mjc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ1OTYyOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ZUUH-DESMART",
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
