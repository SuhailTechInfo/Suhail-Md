const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="eliakimkiplagat12@yahoo.com"
global.location="kapsabet,kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "AFRICA/KENYA";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || 
global.website=process.env.GURL || 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ELIAKIM TECH


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254728705726";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728705726,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_39_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMTYwLFxuICAgICAgICAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDg4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDksXG4gICAgICAgIDMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDksXG4gICAgICAgIDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICA3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgNjQsXG4gICAgICAgIDk4LFxuICAgICAgICA2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKN3ZGT0NlRFpSaUR1YnRCV0J2TldYVDg3Wm9VZGZYRDNqQ2FMSm5qNW5FPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyUXlfWGw1LVFRbVlMUXhiWEZzaU93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjllMmNiMjNmLTk3ZmYtNGQ3Ni05MGVmLWJmNGZiZGE3MGVhZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICA0OCxcbiAgICAgIDU2LFxuICAgICAgMTQxLFxuICAgICAgMTQ2LFxuICAgICAgNDgsXG4gICAgICAxNTYsXG4gICAgICA1NSxcbiAgICAgIDE4LFxuICAgICAgNjEsXG4gICAgICAxNDYsXG4gICAgICA3OCxcbiAgICAgIDkzLFxuICAgICAgMTg3LFxuICAgICAgMjcsXG4gICAgICAyMjQsXG4gICAgICAxNDUsXG4gICAgICA3NyxcbiAgICAgIDIzOCxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAyMjUsXG4gICAgICAyMixcbiAgICAgIDE0OSxcbiAgICAgIDEzNyxcbiAgICAgIDMxLFxuICAgICAgMjQ3LFxuICAgICAgMTEzLFxuICAgICAgMjAzLFxuICAgICAgMTE2LFxuICAgICAgMzksXG4gICAgICAxOTAsXG4gICAgICAxOTIsXG4gICAgICAyMjUsXG4gICAgICA5LFxuICAgICAgMTQ2LFxuICAgICAgNTIsXG4gICAgICAyNDgsXG4gICAgICA1OSxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0RkdUN1FSSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI4NzA1NzI2OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTE1NjE5NTIwNTk0NDc6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW5yKzdrQkVOcnl1YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5ZGVOKzFhbHczZ1pIOUZQUDFmWmJFUXY2TjRUbjhVNCtDR2FvOW5tNWdNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZ2am5jdkovUDFNQll1UXh0a011dTlaN1g1VDlTcFVxbGxjUkhqcEIzdytkU3F2dDFzWmRnNGdYSzhGR1YrVjhGTkh1TjRzYTR3OXhxSmxDdkdJekR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhHNk9tN1Q5TTdVWXZMSTRuUmZRZlRwbUFQK1dLbmxOKzBjc2J6U0o2SDQ4aWRhc0R2Vm1FcXMwb3RidHg2OFhOZnpKN3ppUW1ibk1UUmloTUlJdWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyODcwNTcyNjo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzEwMzY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGtoXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMa2guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJaDh4NndkKzZHTWk2QTN2TTRwSmhYWU5PK2NNMlBNR3laL2d1dVIvc2d3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM5MDAwMjEyMCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjcwNDg5OTU4MFwifSIKfQ==" 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ELIAKIM-TECH",
  ownername:process.env.OWNER_NAME|| "Eliakim",


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
