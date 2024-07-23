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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_26_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyLFxuICAgICAgICAxMixcbiAgICAgICAgMjAyLFxuICAgICAgICA1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICA2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMixcbiAgICAgICAgODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk4LFxuICAgICAgICA5NixcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg3LFxuICAgICAgICA5MixcbiAgICAgICAgMTExLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1LFxuICAgICAgICAzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXeFRkZndudEVyQm9aSEhzVWlWaVorWDN5ZDMxYUJvTFNNQ0xoUGo4VGFVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzExMjU2MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY3RTYyRUQxQTdEQjgzNzY3QUU5QjUxNzhBQzFGMkU3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTc2OTk3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzExMjU2MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ3RjM0RTYzRUNEMDdGNkREQ0IyQjM2OEEzQjNFQTExXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTc2OTk3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzExMjU2MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjREMzg4RTY2RTNDQzVFRTIyNjcyQzcxRTZDMEE1ODhGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTc2OTk3M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzExMjU2MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNGRDEzQzAwMjdGMDA1MUI4RjFDNDk1NkIwQjg2NUZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTc2OTk3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrTFZyc2ttMlNVbWVBYnJienRncXdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA3YTllNDQ0LTA1ODUtNDEwNy04ODczLTA1ZjBjMTI1ZWM5OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICA3NixcbiAgICAgIDE0NyxcbiAgICAgIDI4LFxuICAgICAgMTk1LFxuICAgICAgMTUyLFxuICAgICAgMTc3LFxuICAgICAgMjAwLFxuICAgICAgMTc2LFxuICAgICAgMTE3LFxuICAgICAgMjM5LFxuICAgICAgMjIxLFxuICAgICAgMzMsXG4gICAgICAxNTYsXG4gICAgICAxMzYsXG4gICAgICAxNDUsXG4gICAgICAxMDIsXG4gICAgICAxOTUsXG4gICAgICAyMjcsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgMzIsXG4gICAgICAxODksXG4gICAgICA5MyxcbiAgICAgIDE0OSxcbiAgICAgIDIwNSxcbiAgICAgIDY0LFxuICAgICAgNjUsXG4gICAgICAxNDUsXG4gICAgICAyMSxcbiAgICAgIDI0NSxcbiAgICAgIDIxLFxuICAgICAgMTAyLFxuICAgICAgMjE4LFxuICAgICAgMTE3LFxuICAgICAgNCxcbiAgICAgIDE4MSxcbiAgICAgIDQ3LFxuICAgICAgMzIsXG4gICAgICAxMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjNFVktYTkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzExMjU2MDQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkphbWlsXCIsXG4gICAgXCJsaWRcIjogXCI1MTAzMzM1NTA3MTYwOToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00yVXhmUUNFTysvZ0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU0tia2kxZnltOUNEekNycnhqTXBXYkMreUIwOVhXMTBRUXd4dE1lbFVYND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5djhZYXFjTnF0UVpGZWVQY1lrOTBQZGdaMkRJMGM4bVVEd2ZpMlY0RUhUK1dhWFp4dmJXYVREVHF1U3poSm5PejhXRWpab0FDMXpSUDBBTXdiNStDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVZ2JweTF4anpEUkE0Y3NxRUFHcVd0bjBzclpzWU5DNmJpTU5laU9FTXdrQ0s0YVc4WmFINTEybGcvd1R2V2dLRE9GK2F1S0l6VUNhMDlVaFUzSTVCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMxMTI1NjA0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc2OTk3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1lNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWU1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNHZ1Z3FXZ1JZVFJGSHdvbnErV3ZoTDRyWGQvUnltdnE1dlErMEFIZ3E4dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3ODEyNzM2NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc2OTk3MTgzMVwifSIKfQ=="  // PUT your SESSION_ID 


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
