const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://qazi:Muhammadshaheer1.@qazi.b4aieig.mongodb.net/?retryWrites=true&w=majority&appName=Qazi"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_10_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICA5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTY1LFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICA3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICA0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAyLFxuICAgICAgICA5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVVXpXenp1Vjh0eUFUNE9OWnZKRkFaaWpWT09VRUpXUW1pMDBQa2luS2YwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzMxOTE5ODMyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUQ1RTE5RjIzNEEyMEQ0MTZCREY4QTdDRTlDRjY5NDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNzUxODUxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndjVlMyZE1MVG5Lbkh5Xzd5NUhxNXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzMxOWQyNjItMDdhMy00ZDY0LTgwNTgtNGUwNDMyYjFjYmQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDE2NyxcbiAgICAgIDEzNyxcbiAgICAgIDI0NCxcbiAgICAgIDE3NSxcbiAgICAgIDE3NCxcbiAgICAgIDM0LFxuICAgICAgNjcsXG4gICAgICA0NSxcbiAgICAgIDY3LFxuICAgICAgMTI0LFxuICAgICAgMjMxLFxuICAgICAgMjQ2LFxuICAgICAgNzcsXG4gICAgICA5OCxcbiAgICAgIDE5MSxcbiAgICAgIDc2LFxuICAgICAgMzAsXG4gICAgICA1NCxcbiAgICAgIDgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMTcyLFxuICAgICAgOCxcbiAgICAgIDExLFxuICAgICAgMTc1LFxuICAgICAgMTYxLFxuICAgICAgMjUwLFxuICAgICAgMTIwLFxuICAgICAgODIsXG4gICAgICA3NCxcbiAgICAgIDI1MixcbiAgICAgIDIxOSxcbiAgICAgIDIwMyxcbiAgICAgIDIxMSxcbiAgICAgIDE2LFxuICAgICAgMjUsXG4gICAgICAxODQsXG4gICAgICAxMTEsXG4gICAgICAxNDAsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMlhGUDdBNzFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxOTE5ODMyMToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmbLwnZqY8J2ajfCdmo4g8J2ZsvCdmpvwnZqK8J2ajPCdmpTwnZqO8J2am1wiLFxuICAgIFwibGlkXCI6IFwiMTc2ODYyODk0NDk3ODEzOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05hS25lSUdFT0cydkxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVVV4Qi81UDR6cVdRUUwwMHlmWkFEcWNoT0o2N1hiK3owK05wRHRRZlQyYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPcWpEVy94NThzSlhJdUxMWmlpRmovYys1eXh1SC9sL0JLM0VyZHBuQzM5dmp3NU9FYUtnaTlWa0ZHUmdFMUFUd1Fsd0plTHplOUIvakNHMHU5Z2pBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqZFo2UGZFTEdlN1ZzOXZMUk9oNktnMFJvV3dvM0g3dCtMUVhWSVdKTlRrS0xUbis4aC9odVd5L2hWREk4QzlxTUVUaXRBZkpuaXhMVnlLTDJjS2VBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMTkxOTgzMjE6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc1MTg0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI2L1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjYvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
