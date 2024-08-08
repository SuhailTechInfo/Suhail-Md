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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349164488665";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_22_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgzLFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MixcbiAgICAgICAgMTk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDksXG4gICAgICAgIDQyLFxuICAgICAgICA5MixcbiAgICAgICAgMjI1LFxuICAgICAgICA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNixcbiAgICAgICAgODMsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODksXG4gICAgICAgIDg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDgxLFxuICAgICAgICA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI4LFxuICAgICAgICA5MyxcbiAgICAgICAgNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlp1Mld2bStiSkhSeWsrTkl3R00rem1KR1JUOWdUazNyakVWTUJoMUtzMDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2NDQ4ODY2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTE2RDcwQTVCOTIzNDg3Rjc4NjdCMUY5RTBDRTUyRjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMTQ4NTI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJMamg1QTNMUlhlYXFWc3ZiNUtRYndcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGJlNDU3MTctYWMwNC00NzA0LTliOTctOGM0ZDNjMTYyMzY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgNTQsXG4gICAgICAxOTcsXG4gICAgICAxMDMsXG4gICAgICAxMzEsXG4gICAgICA3NCxcbiAgICAgIDcwLFxuICAgICAgMTYzLFxuICAgICAgMSxcbiAgICAgIDIxOCxcbiAgICAgIDE0OSxcbiAgICAgIDE4NixcbiAgICAgIDE0OCxcbiAgICAgIDEwNixcbiAgICAgIDU2LFxuICAgICAgMzYsXG4gICAgICAxMTIsXG4gICAgICAxNzMsXG4gICAgICAyMDYsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAyNTAsXG4gICAgICAyMjgsXG4gICAgICAxMzIsXG4gICAgICAyNDcsXG4gICAgICAxNjksXG4gICAgICAxNzEsXG4gICAgICAxNzAsXG4gICAgICA4MyxcbiAgICAgIDE5LFxuICAgICAgNSxcbiAgICAgIDE1MCxcbiAgICAgIDE3MCxcbiAgICAgIDE4MSxcbiAgICAgIDIyMCxcbiAgICAgIDQsXG4gICAgICA2NixcbiAgICAgIDEzOSxcbiAgICAgIDI2LFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkdQMk1ZMTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjQ0ODg2NjU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyODMxMjYzNDU0NDE5NzoxMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTw5Djgp1SxJLDhVDDi1JcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJV2MyVTRRNU5IVXRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVGaHpVaXR1OSt6R3JLWmtuYVdoRWVBakNYaGh2TVlYeEJmTnVNOGVqd3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY1N3eXM5MzFpLzd6a1FyUVFMYTQ4U3JtS25MR2hBN0p2eXhTbm1uZTEwOHpTY1REQ0dHQVpsMkZlQ1F3c3p5MG1aQU9wODRqUFUwQm5JZnBoQi9LQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSnFFcjlKTS9QOVdVaFhTSUxRVGF2ekVUYjlWQ1BZRDdZNG5uR0tDTG1XeFd3L2s4ck5TUnNsTFNzMVo2V3ZLWngwaDU4RXA1NWpjbEFLOG81WCthaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NDQ4ODY2NToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMTQ4NTE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWtuXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNa24uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnSVkzNUdWMUkzbFN0RVhtUllTRkVMTmN3SE1zeUduQWpLMkNwbUVqaUxFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NTAzOTYyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIzMTQ4NTIyOTg5XCJ9Igp9"  // PUT your SESSION_ID 


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
