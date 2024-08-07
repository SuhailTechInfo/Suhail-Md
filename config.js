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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_32_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjksXG4gICAgICAgIDE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDY2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA5OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk2LFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMixcbiAgICAgICAgODgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMCxcbiAgICAgICAgODAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAzNixcbiAgICAgICAgMTQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyLFxuICAgICAgICA4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICA4MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlE3YVlRaHF5dFFUN0tXckZBOG5CQktHaGV3ZFRpeDdtd21OQjlUbER4Tkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJTT2Rab24xUUkyX2RkQWtUXzRBdEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjVmNWRmYTMtZWJjZi00NGYyLWI5NjgtZjYzYjFlMWVjYTUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDE3OCxcbiAgICAgIDEwOCxcbiAgICAgIDI1MyxcbiAgICAgIDE1LFxuICAgICAgMTEyLFxuICAgICAgNzAsXG4gICAgICAxNjcsXG4gICAgICAxNjcsXG4gICAgICAxODQsXG4gICAgICA2NSxcbiAgICAgIDgyLFxuICAgICAgNzgsXG4gICAgICA3NyxcbiAgICAgIDExOSxcbiAgICAgIDE4MyxcbiAgICAgIDgwLFxuICAgICAgMTExLFxuICAgICAgMTU3LFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgMTkxLFxuICAgICAgMTQwLFxuICAgICAgMjQ0LFxuICAgICAgMTAwLFxuICAgICAgMjIwLFxuICAgICAgMjQ2LFxuICAgICAgMjIzLFxuICAgICAgNDUsXG4gICAgICAxMTMsXG4gICAgICAyNTUsXG4gICAgICAyNDIsXG4gICAgICAyMjksXG4gICAgICA0MixcbiAgICAgIDEyOCxcbiAgICAgIDI1MCxcbiAgICAgIDgxLFxuICAgICAgOTIsXG4gICAgICAxMzAsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHVjZGNEZCQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3Njk0MjY2NzczOjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXIgR3VpbGxhdW1lXCIsXG4gICAgXCJsaWRcIjogXCI3OTg1NjY3OTI4ODg1Mjo0M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOR1AyNlVDRUpTYjE3UUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImwwV1dROTQ5WTNTWnR2aGFOeUZqbGRWUHdua25kbi9QZy93OWJnTDFGU3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNEdpeVZFNy9IMHhUeDZCeEZ3SjZSbDVnUUN1cmkzQXlObUVhZEFEbVBiQk9PU3hqQkJZdVRqd0hERnBCcE9tTVBSMlcrUzVPU0MwSnl4UU5nTGliQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNmEvWDVQM3hxTnlNWkQyc0UxWjhwVGtIZ0JOVHNpVzZ5VDhsUm9Tck9mOFZUN2JFQWpNc0hLK1VFVGNRbitnY0xCV1h3ZkhEdGZ3bHJReWJ1Mk1YQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3Njk0MjY2NzczOjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDkzNTI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFUvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEVS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
