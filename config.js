const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="elshabah.youtyoube@gmail.com"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_17_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICA1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxLFxuICAgICAgICA0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICA5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMixcbiAgICAgICAgOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODksXG4gICAgICAgIDE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZ4elh3eVcrVnRZMzIrUmlHVE0yUDRhQ0lsKzhnNExGRTRIN0hJUm4xelk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFMOVUydENxUlRhRVRnNVVRbEdZMkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjJhZGYxZDEtNWM5OC00OGQ2LTgyMWYtMjNhNzg3NzE2N2MyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDE0MSxcbiAgICAgIDExNSxcbiAgICAgIDgzLFxuICAgICAgMjIzLFxuICAgICAgMjA2LFxuICAgICAgMjUzLFxuICAgICAgMjMsXG4gICAgICAxODUsXG4gICAgICAxNjEsXG4gICAgICAyMCxcbiAgICAgIDE1MyxcbiAgICAgIDE3NCxcbiAgICAgIDEyNixcbiAgICAgIDY5LFxuICAgICAgMjM1LFxuICAgICAgNixcbiAgICAgIDEzLFxuICAgICAgMTYzLFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMTM0LFxuICAgICAgNjcsXG4gICAgICAyMDAsXG4gICAgICAyMjIsXG4gICAgICAxNzcsXG4gICAgICAyMTIsXG4gICAgICA4MCxcbiAgICAgIDE4NCxcbiAgICAgIDUxLFxuICAgICAgMTcxLFxuICAgICAgMjA5LFxuICAgICAgMTQ4LFxuICAgICAgMTUxLFxuICAgICAgMjA1LFxuICAgICAgMTI1LFxuICAgICAgMjEzLFxuICAgICAgMzIsXG4gICAgICAxNTQsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNSENTWkhYM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTk0NDAyOTYwMjAwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYwNzAxMzI2NDc5NDg0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW1MbExZR0VKalYwTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWazJnQXdXeU1lT0RqcytvMm84RVJrNHZzVWZXSWprZUoyVHBJR0R3elVBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNzUXh0bnY3eFFsTG83MmdqM0JCNXFkUG0vTU9UZkFua0pnMVVabllZd1pUT3kvbStuVjVncG0wa0tOMWx3KzJqZCtsS2h5WGNod1lYR2ZXSldmSEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVRbGM1MEdmSlBJWHN6bG5CM1hseWprRERoM3JkOTdadXZpM3RvYUx1bzlpbFc4VGpEeFJlMlVYVEV2TWdVanJidEVaKzZNdDEwL1JJdmFyb2xQbWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwMjk2MDIwMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA4MzQyMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "elshabah-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ELSHABAH",


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
