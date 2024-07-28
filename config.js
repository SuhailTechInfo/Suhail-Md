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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_07_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU3LFxuICAgICAgICA3NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDgwLFxuICAgICAgICA5NixcbiAgICAgICAgODQsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjksXG4gICAgICAgIDk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk3LFxuICAgICAgICAyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk3LFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICA5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTcxLFxuICAgICAgICA3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcyLFxuICAgICAgICA1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgODcsXG4gICAgICAgIDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMixcbiAgICAgICAgMTksXG4gICAgICAgIDQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRWxjaVQyaEg0dTdSWThxbTQ0WEVCVGtKYlRPdFh6MitIdk0vL1lvUHFrQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSjIwQTM0VTJRUmFFNFhqNkd3RFBwUVwiLFxuICBcInBob25lSWRcIjogXCJjYTRkMzRmNy1mZTgwLTQ3MTctODY0NS1lZTRmMjVlNTRhNDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTMsXG4gICAgICAxNjAsXG4gICAgICAyMDYsXG4gICAgICAyMTIsXG4gICAgICAxNixcbiAgICAgIDQ0LFxuICAgICAgMjQyLFxuICAgICAgOTAsXG4gICAgICAxOTgsXG4gICAgICA2OCxcbiAgICAgIDEwOSxcbiAgICAgIDE0NCxcbiAgICAgIDIyLFxuICAgICAgMTE4LFxuICAgICAgMTM0LFxuICAgICAgOTcsXG4gICAgICAyMjQsXG4gICAgICAyMzAsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICA5NCxcbiAgICAgIDQxLFxuICAgICAgMTU2LFxuICAgICAgMTU1LFxuICAgICAgMTM0LFxuICAgICAgMjMyLFxuICAgICAgOTQsXG4gICAgICA4NyxcbiAgICAgIDIxOCxcbiAgICAgIDE1NixcbiAgICAgIDU1LFxuICAgICAgMTE5LFxuICAgICAgODUsXG4gICAgICAxMjYsXG4gICAgICAyMjMsXG4gICAgICAxMDQsXG4gICAgICAyMzUsXG4gICAgICAyNDcsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjM4UVlDMUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1NjMxNzY4MDoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIrwnZCL8J2aq/CdkJTwnZCSIPCdmrPwnZqw8J2QivCdmqvwnZq18J2Qi/CdkJLwnZqv8J2atCDwnZCL8J2atfCdmq/wnZq08J2asPCdkIPwnZqr8J2QklwiLFxuICAgIFwibGlkXCI6IFwiMjI0NTU0MjI4MTc1MDYzOjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pxMm5ma0VFSmVDbTdVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib0VPMXFDOWFSZC9MdWEyOTFLRFVZb2VPZnhaR0tuSDVQaU5vTGFhUDZoUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQbmplS1NGZVdjcjJmbjdCdDQrbnd0Z3d0Q3YrR1oyV2YvM0dxQW5JRHd4MXNGNUtNTlBJT0NtNmlpRW9sUTZaczJscTJpMitwWkN0TCtlREhYS1NCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsVHhFU3BuUVo0MnZXQXRtTnF4QXQ0RUw4T1hYS2toUnNua29DQ3ZVU05wUzl3MU9ibnpJaC9PWTF2bFBtMFljYnRVRGpBNk5naUR1WXNlaGJ0MGtCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTYzMTc2ODA6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyMDQ0NDNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
