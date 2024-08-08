const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://whatsapp.com/channel/0029VajDO3nFnSz732kIsA1g"                       // put your app url here,
global.email ="oyaremiobawole4@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajDO3nFnSz732kIsA1g";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajDO3nFnSz732kIsA1g" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349013100204";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_00_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgyLFxuICAgICAgICA4LFxuICAgICAgICA4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICAzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDczLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMixcbiAgICAgICAgMjQyLFxuICAgICAgICA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM1LFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDUyLFxuICAgICAgICA3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNCxcbiAgICAgICAgODYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU5LFxuICAgICAgICA5MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICA3MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYeWtjd3lvVmNmYzk0ZmJ0YlF6YnEzOFk3em1RaVBpRGE5VXJ2WmwxS3dVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpSWJ6TXpSb1ItV1V1UGlSOEc4RmhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc0Nzc2N2MxLWExY2MtNDZiMy04MjRhLTBkZTkyNDdkY2U0ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICAxOTgsXG4gICAgICAxMTIsXG4gICAgICAxNDQsXG4gICAgICA1MyxcbiAgICAgIDU5LFxuICAgICAgMjQ1LFxuICAgICAgMzgsXG4gICAgICAyMDIsXG4gICAgICAyMzMsXG4gICAgICAyNDEsXG4gICAgICA0OSxcbiAgICAgIDIyNSxcbiAgICAgIDczLFxuICAgICAgNjgsXG4gICAgICAxMDcsXG4gICAgICAyMCxcbiAgICAgIDE4NSxcbiAgICAgIDIwMyxcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDIwLFxuICAgICAgNzQsXG4gICAgICAxNTIsXG4gICAgICAxNjMsXG4gICAgICAxNDAsXG4gICAgICAxNTgsXG4gICAgICAxNDAsXG4gICAgICAzMCxcbiAgICAgIDI3LFxuICAgICAgNzYsXG4gICAgICAyMTcsXG4gICAgICAxNDYsXG4gICAgICA1MSxcbiAgICAgIDE1MCxcbiAgICAgIDE2MSxcbiAgICAgIDgxLFxuICAgICAgNTksXG4gICAgICAyMyxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBQ1ZISlZTUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMzEwMDIwNDo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgyNjM5NDQwOTY1ODc2Ojk2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BtbytKRUNFT2ZZeUxVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiejVtNGZ0NjlOeFFtdkZNejZVbGlsazdtWjlCV1lVaUl0SzM4WWJ3NlFIND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnZzQzK3dPancwV0xnbFl5WEdRbE9qMFNwU3ZlRWZWa3ZpWDBuOG1NdU5IanhsL0dpV2RQQmd0dTlOait2NnJsSXF0YVFsdlVma0dMbDBkSWtYdFFBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlUGVsbFdmTzVtTEYrYmU1R1BCck8vaEpOTERyQmVkcEVwazcxZHgyVjE2cDRYRkRsanVYZW9iVGdrcDgvK2trcWxwam5SakxHTEphZkZxcUwxaW9qQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEzMTAwMjA0Ojk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk1MjgxMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "iceking",
  ownername:process.env.OWNER_NAME|| "iceking",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ICEKING"  ).toUpperCase(),



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
