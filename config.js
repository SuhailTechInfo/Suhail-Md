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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_10_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODgsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyLFxuICAgICAgICA5NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDc3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMTI0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY4LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYwLFxuICAgICAgICA0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhQVJ6WkdBRzJsbDdIWTZDVXNvODRFaHd1SjZMY3pyejVFeGg3SnRDdE1NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5WTgtR1RJZlQwU1pJWDBabjFBMmp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjg2ZDk0ZDI4LTU0MjQtNDJlZi1hZTUyLTI2YmQ4MjkwMjY1YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDM3LFxuICAgICAgMTY2LFxuICAgICAgNzEsXG4gICAgICAyMDUsXG4gICAgICAyMjUsXG4gICAgICA0MSxcbiAgICAgIDE1OCxcbiAgICAgIDIwNyxcbiAgICAgIDY3LFxuICAgICAgMjEwLFxuICAgICAgMTAwLFxuICAgICAgMTI2LFxuICAgICAgMTcxLFxuICAgICAgMjA5LFxuICAgICAgMjAzLFxuICAgICAgMTM4LFxuICAgICAgNjksXG4gICAgICAxNDgsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICA1MixcbiAgICAgIDIzLFxuICAgICAgMTk0LFxuICAgICAgMzEsXG4gICAgICAxODQsXG4gICAgICA2NCxcbiAgICAgIDExOSxcbiAgICAgIDE2MSxcbiAgICAgIDg4LFxuICAgICAgNTAsXG4gICAgICAzNyxcbiAgICAgIDIxMyxcbiAgICAgIDEzNyxcbiAgICAgIDE0OSxcbiAgICAgIDEwMixcbiAgICAgIDIxMSxcbiAgICAgIDIyOSxcbiAgICAgIDExNSxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllRRlczNTFRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTEzMTQ3MzU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMDA2OTkxMzE3MDA5NToxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLL0ZnY0VKRU1PQXpyVUdHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFLNDFGd0c1eGF1WkpZM2hsNkpDUzFSNWFLM2cwMDdtRC9BL1lnRkVmQWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVVBKcW5zYXR6aXovZEVhemN0RCsxd3RhOTlkZWxLWXAxa3A1ejU4Zk5kRWRZeUFNeXA3MnBvUCtqbFJuLytEUGhHclpncTBHcDZHM3pMYlp2TURKQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwickZ2dGk2OVgrWjVjY05XVmtTSVh0WHdveEdlQ3hJUk1HWWhWWk0rSUZTYlBOWTZWb1hlZ3pjUlhIRGphSkFBOHJ5N3h3Q1cwYkRZWDBPenNWYjR2aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjkxMzE0NzM1OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDM5ODE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFVuXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQVW4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhdzhUejVReHN0Q1p4ZzJjbEYzRWJXSVhJOFJIYTlXZHgxV0UxMk1yVTg4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1NTIyNTkyNDcsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOls3LDEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIzMDMwNTM1MjU1XCJ9Igp9"  // PUT your SESSION_ID 


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
