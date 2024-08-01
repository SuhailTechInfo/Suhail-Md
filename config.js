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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94757734216";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_35_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI5LFxuICAgICAgICA5MixcbiAgICAgICAgODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDksXG4gICAgICAgIDE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQwLFxuICAgICAgICA1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDksXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDUxLFxuICAgICAgICAyOSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlpYnRUMmhDQjFvNlBXUS82aStzM2lBY1Nlc3BxRzZpeStVeFFDakwzM009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NTc3MzQyMTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRBNjZCM0I1MkJBQjgwQ0NDN0MwQzM1RkIwREJDQUVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjUwNDk0NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYY2JuTGxJS1FqZWtaUFZsWFZhUTZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYwMjZmY2RiLWM2OWYtNDMyZC05MzExLWJlOTVhMDJhZDg1MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDE5MSxcbiAgICAgIDEyNCxcbiAgICAgIDIxNSxcbiAgICAgIDE4NCxcbiAgICAgIDUsXG4gICAgICAyNDgsXG4gICAgICAyMjcsXG4gICAgICAxMzcsXG4gICAgICAyNTUsXG4gICAgICAxMTgsXG4gICAgICAxMzcsXG4gICAgICAxMDQsXG4gICAgICA3OSxcbiAgICAgIDEzMCxcbiAgICAgIDQsXG4gICAgICAxNSxcbiAgICAgIDEyNixcbiAgICAgIDIwNixcbiAgICAgIDEzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDIyOCxcbiAgICAgIDIzNCxcbiAgICAgIDcsXG4gICAgICAyMjUsXG4gICAgICAxMzMsXG4gICAgICA1LFxuICAgICAgMTMxLFxuICAgICAgMjI4LFxuICAgICAgMTc2LFxuICAgICAgMTE1LFxuICAgICAgMTczLFxuICAgICAgODMsXG4gICAgICA5NyxcbiAgICAgIDUxLFxuICAgICAgNTAsXG4gICAgICA0LFxuICAgICAgNDcsXG4gICAgICAyMjYsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4Vzg4UVlCUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTc3MzQyMTY6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM4ODAxMTM3MjY2OTE5OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPY1B4RG9yYTIxQmhnQklBQW9BQT09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZW5uRThCaWpEMkdzQmo2N2tHdmNBSGdhUWEzVklRaEsvWS9ubFdSQ1Nudz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMdnBGRjhsS3FRWFF1VGtpU1pNVUQxTjdNdGJSclRFUjdTYXdKRWFLRncvWWxNM1I0SlJZZHVuaTV1REtWWUJ5am9qdEMybFJaaXdONW1va0wydWVBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjYVZiajZkQi95UVdFL1FzbEo4WUEwYVFETjdyditlbmVqT0ZhclBqL083MzJXV2psNHJuS1owbzg5UklCcGk4S1hGazlNMiswYkZRclBiNFZlWCtEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1NzczNDIxNjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTA0OTQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWptXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJam0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyRm5tWEdjR3VQaFZMTktGWVd1UHVmck1VM2VsMUN0Zlk4eENzaGxkaGlZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMzU3OTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI1MDQ2NDYyMjJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SITHUWA MD",
  ownername:process.env.OWNER_NAME|| "SITHU",


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
