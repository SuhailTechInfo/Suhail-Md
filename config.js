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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_46_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNDksXG4gICAgICAgIDg1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNixcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MyxcbiAgICAgICAgOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NixcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDU1LFxuICAgICAgICAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI4LFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibm9MOHVJTktpZ1R2ZWYydVVldVBvRHBTT1d2SXhDbDdvYVFCekpkSGRRVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODY4MzU4NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE3NDY0QTlFN0QwMTQ0OTE5MUExRkJGM0UyQzYxN0NBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTkzNjc5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI4NjgzNTg3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDIwREZDNDE0RDI1MjYyOUMyMjQ0QTUzRDRCRDFEMTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTM2Nzk2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImN1Q2I1YkNqU1NtNXpOZHBqWkphQ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGE3ZWRmODEtMmIwZS00NTI3LTlmYjMtYjcwYjE4ZjJhZjg2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDIwMSxcbiAgICAgIDEwMyxcbiAgICAgIDExOCxcbiAgICAgIDEwMixcbiAgICAgIDIwNixcbiAgICAgIDYxLFxuICAgICAgMjA3LFxuICAgICAgMTY0LFxuICAgICAgMjQ1LFxuICAgICAgOTUsXG4gICAgICAxNTIsXG4gICAgICA5LFxuICAgICAgNzEsXG4gICAgICAyMjcsXG4gICAgICA3OCxcbiAgICAgIDM4LFxuICAgICAgMjExLFxuICAgICAgMTMyLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMjQ5LFxuICAgICAgOTYsXG4gICAgICAxNzYsXG4gICAgICAyNTEsXG4gICAgICAyNDcsXG4gICAgICAxODQsXG4gICAgICA4NCxcbiAgICAgIDEwOSxcbiAgICAgIDQzLFxuICAgICAgMjEwLFxuICAgICAgMTYzLFxuICAgICAgMjAyLFxuICAgICAgMTg1LFxuICAgICAgMTk2LFxuICAgICAgMTU4LFxuICAgICAgMTgyLFxuICAgICAgMjM1LFxuICAgICAgNzMsXG4gICAgICAxNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUtSQk5ZUERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI4NjgzNTg3Njo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjc3NjIyMTkxNzE4NzA6OTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+lt9qp2YDZgNmA2YDYp9mE2Kcg2ojYp9qp2YDZgNmA2YDZgNmI8J+lt1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0llZjVtd1FsTmVLdFFZWUJDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUWcyU0FyTlZtSHV4QzExdWw0Z1oyMFdFaUV0bDVGTnNFWGhlTk4wYmNsVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxdld2eE92ZlkzSVA2YU5DOFJRcWpXMGdBeENPeStYR2FQV3l0SGFCeHJ2djA1OEFSSXZzN2VpRngvNk5WSUprbjhJRHM1cVRwOUFvZEhQdms4MXFCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHZkFvczNIMGQ2OHZzWmprR3drWnRWb1Z1VjA0MHZDN0VQTFNGaGlvNyszZDc5R1RYMnV2OVhJWUx4MVNQVWUrSVV6djNPV0VIdnhWdmtHZllKQm5oQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyODY4MzU4NzY6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkzNjc5MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYyc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjJzLmpzb24iOiAie1wia2V5RGF0YVwiOlwid3pDTG5jMEcxNEk1a3NyK3ozV05wSlAxaWlhUWE0WjBrMjE3OWpBVGJhbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjgxNjc1NTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc1MDA3MDIyMVwifSIKfQ=="  // PUT your SESSION_ID 


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
