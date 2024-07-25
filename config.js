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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348161211372";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_26_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDczLFxuICAgICAgICAyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEyLFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU5LFxuICAgICAgICA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDc5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NixcbiAgICAgICAgODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibFpESnJDaVZQOHlxSkdyeDVXa0dGRmpJTmtsTW1YcVJiem9IQU5qWk5rST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQzI0MU12OFFRYTYwSGYycVpJdVQwUVwiLFxuICBcInBob25lSWRcIjogXCI5NzYxMmQ3NC1kMWM2LTQ1N2QtOTIyMi0wZGI5ZTY5MGNhZTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAzMyxcbiAgICAgIDQ4LFxuICAgICAgMTMxLFxuICAgICAgMzQsXG4gICAgICAxMzMsXG4gICAgICA4OCxcbiAgICAgIDE0MixcbiAgICAgIDE1OSxcbiAgICAgIDEwNSxcbiAgICAgIDQzLFxuICAgICAgMTEyLFxuICAgICAgMTgyLFxuICAgICAgMTIyLFxuICAgICAgMjI0LFxuICAgICAgMTA0LFxuICAgICAgMTQ3LFxuICAgICAgNzIsXG4gICAgICAxNTMsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICA4NCxcbiAgICAgIDEzOSxcbiAgICAgIDYwLFxuICAgICAgNDUsXG4gICAgICA3LFxuICAgICAgMjQ4LFxuICAgICAgMTQ1LFxuICAgICAgNjcsXG4gICAgICAxNjIsXG4gICAgICAyMzcsXG4gICAgICAyNDYsXG4gICAgICA2NixcbiAgICAgIDczLFxuICAgICAgMTAsXG4gICAgICAyMSxcbiAgICAgIDIyNCxcbiAgICAgIDQ5LFxuICAgICAgMjAxLFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFaQkhMWkJNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYxMjExMzcyOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzg0NzIwOTQ1NTgxNzoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNQy85QlFRLzQrc3RBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpRUTJEOTcwdnpDQ0NTRDhqLzh2SjJ3TkFDK0dMbktnQWJZZDQwVk5MMmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMkkycEdwNjZJQTdMcmlKeDNkS0J1azdPODJlZ3VDVE9BVndqOEpIWnFWOG5ybkkyMGhsemN2T0p3QlcxUXJTYnczd0xRK0FZVWRLV3hzbC90bjdVRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMHhkYjA4bUcxRXZmRWJUMWh0enJlSEpaWHo1QmR3RHVPdkhMUVIrOU5GbG1pSUFLQTFBdnVrRkVWSzZrSlB1cGVrRCtLMjAyZGovYWZwK2FyNU1uRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MTIxMTM3MjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM4NzU4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU52UFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnZQLmpzb24iOiAie1wia2V5RGF0YVwiOlwicy94clNYbGE2Zm9ZRUI2dnBuVzBYcEVwNnp6YU1Xbk90WkMxRHN5SUl2QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mzg1MTcxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMzUyNjIxMTY5XCJ9Igp9"  // PUT your SESSION_ID 


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
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "recording", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
