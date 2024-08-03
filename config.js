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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_35_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA4LFxuICAgICAgICA2NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY5LFxuICAgICAgICA1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDc1LFxuICAgICAgICA3NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgODQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMwLFxuICAgICAgICA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAwLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDk2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiajloT1Mxa2drUmsvQW4vUyszZW5UdndjaDIzdXhybFlZVWZxanF1RE1laz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjM2MDE1MjU5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjQzMjUzNDkzQkI4RkUyQ0RGRjhGNEQzQzI1RThERjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjQ1MzM1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIzNjAxNTI1OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM2RTBBRTAyMTMzQTkyN0Q1OTNFQzExMzJCNEQ2QjYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY0NTMzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqa3lUem81bFNadVhueUNReHVnTnpnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRjZjg1NjFjLTVlMDQtNGY0NC1iMjJkLTYzZWY4ZDJhYzAwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDE3MSxcbiAgICAgIDk2LFxuICAgICAgOCxcbiAgICAgIDIyNyxcbiAgICAgIDI0NyxcbiAgICAgIDEyMyxcbiAgICAgIDI1LFxuICAgICAgMjUsXG4gICAgICAxNjYsXG4gICAgICAxNDUsXG4gICAgICAyNTQsXG4gICAgICAxMTMsXG4gICAgICAxMjYsXG4gICAgICAxNzQsXG4gICAgICAxMjIsXG4gICAgICAzNSxcbiAgICAgIDE1NCxcbiAgICAgIDU1LFxuICAgICAgNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgMzEsXG4gICAgICAxOTgsXG4gICAgICA0MyxcbiAgICAgIDE4NSxcbiAgICAgIDIzLFxuICAgICAgMTE2LFxuICAgICAgMTE4LFxuICAgICAgMTY2LFxuICAgICAgMjM4LFxuICAgICAgMTA3LFxuICAgICAgNjMsXG4gICAgICAyNDgsXG4gICAgICAyMTYsXG4gICAgICA1LFxuICAgICAgMjUyLFxuICAgICAgNzcsXG4gICAgICAxNjUsXG4gICAgICAxMTgsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSTVhXNU05S1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIzNjAxNTI1OTU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEzNDgyMDYyMTY0MTk2OjZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUmlwX2luZHJhIOKYr++4j/CfjLnwn6WAXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2FTNXNFREVORDJ0YlVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPTkM1dDk2eFFoaStlY2xjZFl4bERDNGdqdkNpYk5GeWh5SWE5M2VvQlRnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1RQTRrYVRtSHFsa015WjBNbklWdENyNTE5NGZaSTVKMjUxZU8zQ084SkxheGdNczVIeXhHeFMrTExybWUvVnkxREx0RFRzQk9ZSzgwa2VubFhtcEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBudWpnWm1LVlkvNXU5czVOUnhUNzFTQktiQXFkQS9QSk1RVWR0TTNqODQ1Y3FrNmhnL0JuS2ZJU0VOSDhCbmhZaXpXcGwwT1AwejI2bzBRQmVxU2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMzYwMTUyNTk1OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NDUzMzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNV1JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1XUi5qc29uIjogIntcImtleURhdGFcIjpcImQ1aEw0dExYQkFlL3JqUDVhdEhuYXMvRzFxeDlEMEhnWVpqcERWZitzZjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTQzMjk0ODIyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2NDUyMTg4NzNcIn0iCn0="  // PUT your SESSION_ID 


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
