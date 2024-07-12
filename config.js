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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_10_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDc1LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE1LFxuICAgICAgICA4MixcbiAgICAgICAgMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDM1LFxuICAgICAgICA1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDMxLFxuICAgICAgICA1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICA3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwLFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwS3EwdzJyNThONXc5K2lGT01DT1F2SjhUZXA3QWZROHQzNTBkcjhyZERZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxN1ROeloxSFJTZXlfWWlpSi1USUxnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyZTZlNWE3LTFkOGEtNGIzYi1hMDZlLTY3YTgzYjkzNWE0ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICA5MCxcbiAgICAgIDIxNSxcbiAgICAgIDEyMixcbiAgICAgIDIzNyxcbiAgICAgIDE5LFxuICAgICAgMTcxLFxuICAgICAgMjQ4LFxuICAgICAgMTAsXG4gICAgICA2OCxcbiAgICAgIDExOCxcbiAgICAgIDE0OCxcbiAgICAgIDIxMSxcbiAgICAgIDUwLFxuICAgICAgMTA5LFxuICAgICAgMTc5LFxuICAgICAgMTk4LFxuICAgICAgMTE2LFxuICAgICAgMjAzLFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICAxNTYsXG4gICAgICAxMzQsXG4gICAgICAxMzYsXG4gICAgICAxMzAsXG4gICAgICA0NyxcbiAgICAgIDU3LFxuICAgICAgMTkyLFxuICAgICAgODAsXG4gICAgICA3NyxcbiAgICAgIDE3OSxcbiAgICAgIDg3LFxuICAgICAgMTQyLFxuICAgICAgMTQ5LFxuICAgICAgMjM3LFxuICAgICAgMTQsXG4gICAgICAyMTQsXG4gICAgICAyNyxcbiAgICAgIDc2LFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcXpuZFVGRUxEWndyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBzZkE3TkxLZDhSRkVYc3EvcUdWTlVYOGVsNU9KNXQ1REpsd3V3VmZBRGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS25LY2hMTzF4dVV5a0hBdlFhdG5EZ1lma01nbFJFM0Y2b0FWMncyVXZuYzAwUkFOZDQ2UHJoamxIcXlvYUhzc3hyeUIyZjNvS1h5a0VGaEJzT2FWQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDdnV3BrZXA4dkl4V3BVK0I1Q2FrTk82L2hKZHNFNkt2U08xS1prb0JoY0F2M0ZJbzlDYThYZUdCK01ESm5JNGovYkdRY0JFa1ZmSXBiSjFlaExNQWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MzExMjA3NzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ2MTgzNjMzMTI5NTk1OjI5QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjMxMTIwNzc6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3NTc0MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCNWlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUI1aS5qc29uIjogIntcImtleURhdGFcIjpcIldCOGVXMTZFV3B6c3JKeThTNThhZ0ZUeENoMWZyUmxnK1ZUMDJXY09zem89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUyMDkxNjkzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMTY0NjMzNDgyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjVqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMmtVK2hnQ2VKRGVZV3ViMG11dC9vL2ZxVGt5WFdabGxuYVZrME5hYnlWQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTIwOTE2OTM3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCNWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLZE9Pbm1iK21RYzAycVZkcGMxVlJYYndmTmNHdEE0VFdicTE5cXpwK3lzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MjA5MTY5MzcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3MTg5NzQxMThcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
