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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_49_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc5LFxuICAgICAgICA5MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODksXG4gICAgICAgIDY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NixcbiAgICAgICAgMTAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNSxcbiAgICAgICAgODksXG4gICAgICAgIDQ3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6ZTdLVWRjbFZMYVE5V0JtWW4wMnlvSDRyRlY4S1gyVWtjZmRpVm1QaHhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtU3ppYlFSOFJ0eWRjdmV4NXVyampBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2MWM3NzQ1LTI2M2QtNDE1ZC04ZjE3LTM2MDA0MmIwMjRmNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDIyMSxcbiAgICAgIDc4LFxuICAgICAgMTYzLFxuICAgICAgMTU4LFxuICAgICAgMjMxLFxuICAgICAgNyxcbiAgICAgIDExMixcbiAgICAgIDIzMixcbiAgICAgIDIwMixcbiAgICAgIDE4OSxcbiAgICAgIDIyMSxcbiAgICAgIDExMSxcbiAgICAgIDIyMixcbiAgICAgIDQwLFxuICAgICAgMTAwLFxuICAgICAgMzcsXG4gICAgICAxNjEsXG4gICAgICAyNDMsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgMTQ5LFxuICAgICAgMTM5LFxuICAgICAgMTA1LFxuICAgICAgMTM3LFxuICAgICAgMTAzLFxuICAgICAgMTEzLFxuICAgICAgMjE5LFxuICAgICAgMjEwLFxuICAgICAgMjEzLFxuICAgICAgMjExLFxuICAgICAgMTUxLFxuICAgICAgMjAxLFxuICAgICAgMTI2LFxuICAgICAgMjIsXG4gICAgICAyMjAsXG4gICAgICAxMCxcbiAgICAgIDE0LFxuICAgICAgMjI5LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUhORlg4TkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY5MTMxNDczNToxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIwMDY5OTEzMTcwMDk1OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0svRmdjRUpFTksxMDdVR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYUs0MUZ3RzV4YXVaSlkzaGw2SkNTMVI1YUszZzAwN21EL0EvWWdGRWZBYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0TThhVnlZUFdHSVV2anExVFV0VWpkMU9BSldvRzZFTEN6cW1tWUU1OFdpMWJZL1pkemxpZ2l5ZlRsbEVDZ3lCM1JqS3A3LzlXUlRmMWt4TGM2TFRBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyK1lLdUVmb3pwYmk5WittT1JIK3VyL3l5M2dKOFErc09DcDE1Mm1jN1Azdmlxcm1XWmlmK1FBbUo4VVVMV2dCWkJjUWdkSlc4Y282dVRQdXBOM0JCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2OTEzMTQ3MzU6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxMjg1MzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQVWlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBVaS5qc29uIjogIntcImtleURhdGFcIjpcImpJclpxMlp5cE1rSVJBZmRSd1F2cit3WGE4SVhkN0tVUFpGWHg0UFJMekE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjU1MjI1OTI0NyxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIzMDI3OTk2MTYzXCJ9Igp9"  // PUT your SESSION_ID 


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
