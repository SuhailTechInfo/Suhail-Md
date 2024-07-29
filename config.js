const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Awesomeking995/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348147214587";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "234xxxxxxxx,234xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Toomuchsteez",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_45_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc0LFxuICAgICAgICA1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMixcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQUUdOcVdOK0hVNXl2NURwMW9lSGhBcXltTmZZZElrN3dTbHFjNG9Wa2x3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDcyMTQ1ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlFRkJFNzE0RDM2NjBDNkIxRERDQUFEQzM2RkM0NTU0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI0NjMyNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLZl84NW8wVlJkYVBFNDNQREhfallRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRlY2YyYjE1LWM1Y2ItNDc4OS1hMmRiLWYyODBmYTUxYTY4N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDEwOSxcbiAgICAgIDIwOSxcbiAgICAgIDE4MyxcbiAgICAgIDIwNyxcbiAgICAgIDEzNixcbiAgICAgIDExNCxcbiAgICAgIDEzMyxcbiAgICAgIDE3NyxcbiAgICAgIDI1NCxcbiAgICAgIDgzLFxuICAgICAgMTY0LFxuICAgICAgMTgwLFxuICAgICAgMTQ2LFxuICAgICAgMTk0LFxuICAgICAgMTEsXG4gICAgICAyMjUsXG4gICAgICA1OSxcbiAgICAgIDE1NSxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNDAsXG4gICAgICA3MCxcbiAgICAgIDE3MixcbiAgICAgIDM5LFxuICAgICAgMzcsXG4gICAgICAyNCxcbiAgICAgIDUwLFxuICAgICAgNTcsXG4gICAgICAzNyxcbiAgICAgIDExMCxcbiAgICAgIDI1MixcbiAgICAgIDE4LFxuICAgICAgODQsXG4gICAgICAxOCxcbiAgICAgIDU0LFxuICAgICAgMjE1LFxuICAgICAgMjM4LFxuICAgICAgMjQyLFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZRSFhMTEdNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ3MjE0NTg3OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTI3NTkyOTUxNTIxNDU6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmZUOHRjREVLakpuYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrSXlvcVc1QThNT1J6MWNmbVoxKzVBTTQ2ejJ1TDhiNGgrN003b204aHpjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIiszMEZ5UmN4YXRUSDVWL2JDcExhYVZ6OTdpRVFMSzlVbjdYOXJRczBudEdqZ210Uml1eWU2WHMrMnZqRHRsQ2s0OTAyWW44UGpOUFoyTUN4S1VvbERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFWTGJPTnBRc1grdDVLNjB2VE1Md0kxMHc3TDZuNDlrWlA2TDZoc1FvanJRVDAySjFESEZsMEx5c3BQN1c1cFQ1am1rYm1mV0lDSGdMZ01lckdzWUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDcyMTQ1ODc6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNDYzMTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMRC9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxELy5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "Sugar",



};




























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
 
