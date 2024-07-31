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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e548c60375272c01182ff.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348132770719";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348132770719";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_51_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OCxcbiAgICAgICAgNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyLFxuICAgICAgICAzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU1LFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgOTksXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDYyLFxuICAgICAgICA2MixcbiAgICAgICAgOTksXG4gICAgICAgIDM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4M1pSYUFYNXNnVzRlZXFBWWlESDBGcWE5OTZwajgzVGVCd0tac3hMbEg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqc3J2OHl3M1FkR25KVmF4dEVKVUNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjllNWIzYjJhLWRjYTUtNGRlMC04YjRmLTkyNTU5YmI2OTY1N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICA2MixcbiAgICAgIDExNyxcbiAgICAgIDk5LFxuICAgICAgMjQyLFxuICAgICAgMTU5LFxuICAgICAgNTksXG4gICAgICAxMDksXG4gICAgICAxMTAsXG4gICAgICAyMjcsXG4gICAgICAxMDcsXG4gICAgICAxMzYsXG4gICAgICAyNDEsXG4gICAgICAxMDgsXG4gICAgICA2MCxcbiAgICAgIDI1LFxuICAgICAgMTY1LFxuICAgICAgMTkxLFxuICAgICAgNDksXG4gICAgICAxMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY4LFxuICAgICAgMTk4LFxuICAgICAgMTI2LFxuICAgICAgMTY5LFxuICAgICAgMjA3LFxuICAgICAgMTE3LFxuICAgICAgNCxcbiAgICAgIDE2OSxcbiAgICAgIDEwNyxcbiAgICAgIDE0OSxcbiAgICAgIDIzMyxcbiAgICAgIDExMixcbiAgICAgIDEzMSxcbiAgICAgIDE3NixcbiAgICAgIDEzMyxcbiAgICAgIDE1OSxcbiAgICAgIDIwNCxcbiAgICAgIDEwOSxcbiAgICAgIDEwNyxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZTdyWmdGRU9TZXFiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjUwL20vT01COUVVeEVMWk1IUXRmWG4yc0tRN2RueGk3S2lyb1BNYWJMM2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTWFzL21yZlU4Smk1Y25Nd1hqd3c3YVdETHRqTitCbVdpb0NvcG5aQ0MyRmFodU9tcDY2NUErUndsTlhBeGh4WmxWZ1BoSTUwREdBUmFINGtWaUZ4QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibmZEMlBpcEFaYXdFTEN5ZGhUZVNNTTlyK0RmdFJIZGw4bmdCZ3o1d1RwcGgvNXN5M25LTlRwYmtXQTdudk8rRmlGT1c5RFl3b2VIay83MnRPOHNZZ0E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTMyNzcwNzE5Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDk1NTI0MzkzMzc0OTo3N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzI3NzA3MTk6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0Mzc0ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEVXBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURVcC5qc29uIjogIntcImtleURhdGFcIjpcIlVoeGRtd094dW03OHhUMEFuWUtqdms4ZVZLRmVlMWRUT2FVSGV3UStZajg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM5MzI1Mzc4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNDM3NDg2Mjg3XCJ9Igp9" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "OFFICIAL BOT",
  ownername:process.env.OWNER_NAME|| "OFFICIAL_KY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "OFFICIAL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "b609d9045dc207b50c24c04316394ed7";
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
