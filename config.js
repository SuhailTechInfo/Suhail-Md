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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_12_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDksXG4gICAgICAgIDY5LFxuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyLFxuICAgICAgICA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic2RyRVFPRmRrZ2VPa2xRZHRNRlNBdENRWVE0ZFZ2Zk1peWhENjJuc0pVYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOGtHM1RzZ3VRSWFUVWN5TkRidE5rUVwiLFxuICBcInBob25lSWRcIjogXCJhMTdkOWNmNy1hM2RhLTRmNzgtYTJlMC00MmIxYmJmZjVjYWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIyLFxuICAgICAgNzQsXG4gICAgICAyNTMsXG4gICAgICA3MCxcbiAgICAgIDExMixcbiAgICAgIDEyLFxuICAgICAgMTczLFxuICAgICAgOTQsXG4gICAgICAzMCxcbiAgICAgIDMwLFxuICAgICAgMTQ4LFxuICAgICAgMTU0LFxuICAgICAgMjM3LFxuICAgICAgMTQzLFxuICAgICAgMTQzLFxuICAgICAgMzAsXG4gICAgICAxMTIsXG4gICAgICAxNTMsXG4gICAgICA0NyxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDE3NyxcbiAgICAgIDkxLFxuICAgICAgMjA5LFxuICAgICAgOTEsXG4gICAgICAyMSxcbiAgICAgIDIxOSxcbiAgICAgIDE2MCxcbiAgICAgIDIyOSxcbiAgICAgIDEyNixcbiAgICAgIDIzNSxcbiAgICAgIDY2LFxuICAgICAgMjExLFxuICAgICAgMTMyLFxuICAgICAgMTIzLFxuICAgICAgMjI0LFxuICAgICAgNzIsXG4gICAgICA0OCxcbiAgICAgIDU3LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVlFNEVNS0RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjk4Nzk2NTQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU1OTgwNzI5OTc0OTczOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzJyaExZSEVQbnprclVHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5SVA0WXBCVFpSQS9nR0FURVhEMHU1Q0dmalNEZkdoTklMT3poNlBvbEhFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFiVkpjU2UzeHJmRG5WeGw3S3BIOXFuYzd4eGxEZ0NlUDRPZ20vK1BCYllQaHdYV3N5MVZQRUdmWG5yYnBlUGxlSWw5ajJhdEZMeWN5RzNMQU01UEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlTbGZwaVJaTjJrU3RZK3BNQ0lCazBhL1VDdGtlb2tsRnhxL0UzSWwyMk1BZ3JZd2VXNUtmelhUMVA0Mm1MVllVOVJITGVIU3ZaZ3hDYjVURGRoRmp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjk4Nzk2NTQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDcxNTQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjdNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKN00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwOU01dTc0Y1IxL0pJV0ZqZVhqRmVnN2g5ZE9lR00rN2ZDT0wrYnVSRWFFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5OTIzNjU0ODUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
