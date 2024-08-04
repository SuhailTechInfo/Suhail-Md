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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348106863636";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set IMG-20240804-WA0037.jpg
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2348106863636";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  || "2348106863636";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_10_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIwLFxuICAgICAgICA3NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICA0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc4LFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICA2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICA4MixcbiAgICAgICAgMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDM5LFxuICAgICAgICA3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDg0LFxuICAgICAgICA0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxaVkVVTkk4b2dTaU5sRDhzbk9aeUE2M056NjdZQVRyYlIwNlEyVmhyZDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1uMWJMaW9zVDVlbW5FS3g3TkZ2bUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmEwZjI1MzUtZTc5My00NjQ1LWEzZDQtOWFhNDNmMjVjNmRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDc0LFxuICAgICAgODAsXG4gICAgICA2MyxcbiAgICAgIDE3MyxcbiAgICAgIDEzNixcbiAgICAgIDIwMyxcbiAgICAgIDEyLFxuICAgICAgNDUsXG4gICAgICA4LFxuICAgICAgNTYsXG4gICAgICAyMTcsXG4gICAgICAxMDYsXG4gICAgICA1MyxcbiAgICAgIDEyMixcbiAgICAgIDE3NyxcbiAgICAgIDQwLFxuICAgICAgMixcbiAgICAgIDE1OSxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgNDYsXG4gICAgICAyNTEsXG4gICAgICAyMzIsXG4gICAgICAxNDUsXG4gICAgICAxMjUsXG4gICAgICAyMjYsXG4gICAgICAxMzgsXG4gICAgICA5NSxcbiAgICAgIDcxLFxuICAgICAgMTg4LFxuICAgICAgMjQxLFxuICAgICAgMTU1LFxuICAgICAgMTk3LFxuICAgICAgMTgxLFxuICAgICAgMjAxLFxuICAgICAgMTM3LFxuICAgICAgNTgsXG4gICAgICAyMDgsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPQ05rSmtERU9MUHZyVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImx0TUFTckVwekZWVHpJMG9NQWNxbWdWc2dNZmRLc2UrRnhlNGtDL3hobTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVEdDUEpsTHFDbDVNeHh3SDUrZHIwalNZR2p2bmpGYXhpS3ZiNXF3eitpQWVQZDRzOGdEUFo4Y1c0bHZCUkx2NW1uM1BWaERXMnNHdkN3S1p3Q1VMQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidVViSHNZNGU4SnJXSjNwMmN5aUk2QVRudTJZUmZQa2dBZkM4SkFiTGY2SWNCNmIwUkNrZEZjWnBtVFcvMmRraEdJTnpZdXczelhhOS83Z0xMdWwxREE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA2ODYzNjM2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNjczNzQ4ODM0NzM2ODozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIklDRVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwNjg2MzYzNjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc4NzgxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtiK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2IrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVkxKNzN6azYrUDRCYU5QU0tsd1BVUHhXb01pQXBFSjh0N1hJMjdQWFZOST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTc5OTkwNzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtiX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqWlZQL253ZFRYbjZDaTFERzM5S3RiK3ZqMUxmQW9uTTVMaUw4NFFnK3FVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg1Nzk5OTA3MixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIyNzg3NjY2MzIzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "GOJO",
  ownername:process.env.OWNER_NAME|| "AYANOKOJI KIYOTAKA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|"all",
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
