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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347131071158";




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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 

SUHAIL_05_55_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNixcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1LFxuICAgICAgICA2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgNDksXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDU5LFxuICAgICAgICAxOSxcbiAgICAgICAgNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTc0LFxuICAgICAgICA4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwSDBFTDFNd0RNenpoODV3YTErbTNLODRjSVRHeWk1czBmVmdYL2VxWXhBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4ZjlMcGxJZVRuYTFSdDB3dGd0T1J3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjcyYjA0MDdlLTJkNGEtNGZhZS1hNGFkLWE1YjA4ZjdmMmE3YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAyMSxcbiAgICAgIDIwOSxcbiAgICAgIDEwNSxcbiAgICAgIDE2NCxcbiAgICAgIDc4LFxuICAgICAgMTQ5LFxuICAgICAgMjI2LFxuICAgICAgNTQsXG4gICAgICA3NyxcbiAgICAgIDc3LFxuICAgICAgMTEwLFxuICAgICAgMTc1LFxuICAgICAgMzksXG4gICAgICAxMjMsXG4gICAgICAyMTAsXG4gICAgICA5OCxcbiAgICAgIDE4MixcbiAgICAgIDE3OCxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgODEsXG4gICAgICAxMDQsXG4gICAgICAxMSxcbiAgICAgIDIxMSxcbiAgICAgIDk0LFxuICAgICAgODMsXG4gICAgICAyNTEsXG4gICAgICAxNjQsXG4gICAgICAxMjEsXG4gICAgICAyMjMsXG4gICAgICAyMDksXG4gICAgICAxNDEsXG4gICAgICAxMzIsXG4gICAgICAyNyxcbiAgICAgIDk0LFxuICAgICAgMCxcbiAgICAgIDIzNSxcbiAgICAgIDE0LFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBNTEExU1BRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTMxMDcxMTU4OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzM0NTMwOTgzNzc0Njk6NDZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1QyOHpvUTM2NkN0UVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSNTBCaUdCQnhJUDlXcUhjMVhjRVpXVm5GNjE2MGdEYU9iSktCUHk1bW5vPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxCUWNFMTQyWkIrUkErYTdJbUhVZytEYmRKL1JvdkNEZmppR3lLY3hFRGttclVJVTV0czJNMlZmT1liWnJOSjI2U1FLOWk2WWtNa0FrV0FHRjlabkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjF3Ky9QcGdLVWQzTEhwcXIrdTkvM3V2Vk84RkQrMWtIb0ttTHFmcExKUytIWWNjaUpYd2FxTFNxbnR4ZGNSNHdublB4ZDdzT0hqUWxBRXZ4ek1yOUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzEwNzExNTg6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MDA1NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDdDlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUN0OS5qc29uIjogIntcImtleURhdGFcIjpcIkFmV2t4SjBsM0Q2ditOQ1BNeVJIUzhGMDZBY0s2TGVXY1h1TVJQc0Y2Qzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzNTM0MTE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNDM4NDk4NjUyXCJ9Igp9
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
