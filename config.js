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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_54_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODksXG4gICAgICAgIDk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODksXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMixcbiAgICAgICAgMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY2LFxuICAgICAgICA2LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY3LFxuICAgICAgICAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNyxcbiAgICAgICAgODksXG4gICAgICAgIDYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDExMixcbiAgICAgICAgMzksXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjloNWFOdGUrcDR5MkhTdXJ4bkNxTHV5clhBSkZFNzhrQzRDRFk3TnFCbDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1Njc4MjkyMTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNTc5QUMzOUQ3ODQ0ODNFODc1MzRERjY1MUYwNEEzOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE5ODA0NDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWTJkRFdOWDdUNU9qYk15UGxoOFp2d1wiLFxuICBcInBob25lSWRcIjogXCJiMDk5MzUzMC0xYjBlLTQ5NjctOTJkYy00OGNjODE2YzNhZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgODEsXG4gICAgICAyMjQsXG4gICAgICA4NCxcbiAgICAgIDE4MyxcbiAgICAgIDE4NCxcbiAgICAgIDE0MCxcbiAgICAgIDE0LFxuICAgICAgMTYxLFxuICAgICAgMTEsXG4gICAgICAxNjMsXG4gICAgICAyMTMsXG4gICAgICAxOTYsXG4gICAgICAyMzAsXG4gICAgICA2NCxcbiAgICAgIDI1MixcbiAgICAgIDIwMyxcbiAgICAgIDY5LFxuICAgICAgMjA5LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDEzMCxcbiAgICAgIDE0OSxcbiAgICAgIDg2LFxuICAgICAgNCxcbiAgICAgIDEzNSxcbiAgICAgIDE2MixcbiAgICAgIDIxMixcbiAgICAgIDE2NCxcbiAgICAgIDE3NixcbiAgICAgIDE5NixcbiAgICAgIDEyNCxcbiAgICAgIDM3LFxuICAgICAgMTE3LFxuICAgICAgMjQsXG4gICAgICAxOTEsXG4gICAgICA3NyxcbiAgICAgIDkwLFxuICAgICAgMjQ4LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJEUldLQkJEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2NzgyOTIxNTA6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NTI5OTI4MzUwOTMyNTo4OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5CH8J+FtfCfhbTwn4W48J+Fu/CfhbDwn4W9XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFhidmxvUWs2eU50UVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJck5QSDZndmZpWnBsRGFVWGs1TGZDbmZvV2JwNVJ6dzhFaFgrZEtaM1ZFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJ0MWppRTRYN0Zyd2FzOHRuLzUxTzRwckpiQndqaTBUdXhWOUVFN043V2Z0bzlMSDB3QlZ0SWlYQlhIdW1oanF1Nld2N0VndCtEcUR4S01YMVNUS0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNGdzNTZThSUThXdVRyeWlZcU05REF1TkpDYVYzMzYxNDkvaXVIczRoMTcyaUVPcXVhSW1MVUhHRE94MHpiOHZWMkF4cVJwQTFIbDQxMmtkaHFyb2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY3ODI5MjE1MDo4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5ODA0MzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFTHdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVMdy5qc29uIjogIntcImtleURhdGFcIjpcIkh5bVVZK1NzMXlmU04xdEZUcGVzdHo3cFRYSmppRjNSWHhUMEFkbGxBUjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5NzcxMjUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5ODAyMzM2ODVcIn0iCn0="  // PUT your SESSION_ID 


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
