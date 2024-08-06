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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250779072323";




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
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_30_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTA4LFxuICAgICAgICA3MixcbiAgICAgICAgMjE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY2LFxuICAgICAgICA5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM5LFxuICAgICAgICA5OSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDY0LFxuICAgICAgICA4OCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDY2LFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKRHFlbTd4algxY2lOWlhwL2EreWtiMlNYMjZ1REVRNGpoVDlaTzczeHA4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhLVpfcEJXOVNULThpMTdkQ0FpeFR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI1YTQ3Y2FhLWE0NmYtNDEyOC1hMjE4LWYzMTkyMmIzNWMxNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAyMjUsXG4gICAgICAxODAsXG4gICAgICA5LFxuICAgICAgMTMsXG4gICAgICAyMDQsXG4gICAgICAyOSxcbiAgICAgIDE5NSxcbiAgICAgIDEwNixcbiAgICAgIDU0LFxuICAgICAgMTE2LFxuICAgICAgMTg1LFxuICAgICAgMjUxLFxuICAgICAgNzcsXG4gICAgICAxNzQsXG4gICAgICA2MSxcbiAgICAgIDc5LFxuICAgICAgNSxcbiAgICAgIDEwNCxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAyNDEsXG4gICAgICA3NyxcbiAgICAgIDYxLFxuICAgICAgMjIwLFxuICAgICAgMjUsXG4gICAgICAzLFxuICAgICAgMjEyLFxuICAgICAgNTgsXG4gICAgICAxMTIsXG4gICAgICA4NCxcbiAgICAgIDM2LFxuICAgICAgMjE5LFxuICAgICAgMjEyLFxuICAgICAgMTAxLFxuICAgICAgMjE1LFxuICAgICAgMTUyLFxuICAgICAgMTQ0LFxuICAgICAgNCxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNNUTVBU0oyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU3OTA3MjMyMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTU4NDQzNDQ0ODM5OTU6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMalRoY1FHRUw2VXZiVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlN5eFYyS3RSSWZqSjVXZVdwakl6RXVoZEhoN1NZUlNra01xeGxCRlN4VDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRW5zK01pNHYyc0ZNbE5MMGN0cVBRNURyZGxFTVNwZWU1TEZ6V2xSbGpwMXZqRG1tNUVWMTVLcmRDTFJxV1RrL1VUekhBZVJTVHBiaWNoMHlqQ0VSQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZng0UFJlMDlJa0kyZ21sN3lBYW9KbHFlYnNJdlc3U1hIWm82N0w1TDRJWE80L3h0Zlc5WmZBNTJ6ejFTNVZLTWhtSTB1VW5FZE8vRVZNa1krMjMxaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NzkwNzIzMjM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzYzODQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1kxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHWTEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNdDJjM05UcXgzaEpIVzVLQzArMUdVS3FQdjVrd2dYS3Q2TjRMWGhFb3hzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTMzMTE2NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjU0NzM4Njc4MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "✓",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𝐒𝐚𝐝✬𝐁𝐨𝐲",
  botname : process.env.BOT_NAME  || "𝐒𝐚𝐝✬𝐁𝐨𝐲",
  ownername:process.env.OWNER_NAME|| "𝐒𝐚𝐝✬𝐁𝐨𝐭 𝐌𝐝",


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
