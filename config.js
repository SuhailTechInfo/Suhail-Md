noconst fs = require('fs-extra')
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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255678292150,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_14_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICA0LFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NixcbiAgICAgICAgMTE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyLFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgODQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMTI3LFxuICAgICAgICA3LFxuICAgICAgICA4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNyxcbiAgICAgICAgMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDY1LFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICA5NixcbiAgICAgICAgMTk0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNixcbiAgICAgICAgNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzcDQvSCtEQ2htU2xSTU5idEdudFFWNi9zVmpDUnRHWnpldUwrdVhhYTBjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTY3ODI5MjE1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzU0OTMyQkY0MzMyNDUyMEEyODc5MzZBNURGNDZBMDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMzc3NjY0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInY3MS1oc0luU2h5ekNiWldJMGhIbHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzE4YTY2OWQtYzIzMC00YzAzLTljYzMtMmViMjEzNzQ1NTg5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDczLFxuICAgICAgNDYsXG4gICAgICAyMTgsXG4gICAgICAxMTgsXG4gICAgICAyNTMsXG4gICAgICAxNDUsXG4gICAgICAxNDYsXG4gICAgICAxODAsXG4gICAgICAxNDMsXG4gICAgICA4MSxcbiAgICAgIDIxNyxcbiAgICAgIDE1OSxcbiAgICAgIDE1OCxcbiAgICAgIDIxNyxcbiAgICAgIDEwNCxcbiAgICAgIDcyLFxuICAgICAgMTU5LFxuICAgICAgMTc2LFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxNCxcbiAgICAgIDE0NyxcbiAgICAgIDIxMSxcbiAgICAgIDMyLFxuICAgICAgMTkzLFxuICAgICAgMzcsXG4gICAgICAyOCxcbiAgICAgIDE4OCxcbiAgICAgIDk0LFxuICAgICAgNDYsXG4gICAgICAyMTUsXG4gICAgICAxNzEsXG4gICAgICAyNDEsXG4gICAgICAxNzcsXG4gICAgICAyMTUsXG4gICAgICA3MCxcbiAgICAgIDE5MCxcbiAgICAgIDIyLFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVBMUFpLRkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY3ODI5MjE1MDo5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc1Mjk5MjgzNTA5MzI1Ojk4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfkIfwn4W18J+FtPCfhbjwn4W78J+FsPCfhb1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQemJ2bG9RdWN1bHRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklyTlBINmd2ZmlacGxEYVVYazVMZkNuZm9XYnA1Unp3OEVoWCtkS1ozVkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWnlHaFdMQnoweXU5MWNOcjd3eExIUGhCdWlVY0sxMXVBK3BVb0dQZWkzczZ0bEhkRFJVbWFoSEFKL0VQSDBuVkUzUTZnT3hCdmZ0TGt6UzY4ZnRrQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSFRWRG94OXNXSURMWUxKcGR3TUorT1NLMXdZQmt3NW5nNDdDWDVNUUpOQkpod3FzYnVRL3JFaHlGaVkvZ0d1bEJEQlN0Z1cvZmlReWtxdjk3MlZzQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njc4MjkyMTUwOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjM3NzY2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNNWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ01YLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZmxkaVY2S2Q3NExFNVZwajJZaVVPazlIcjZSQTlKSDZCaDB1RkJma3FQOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODk3NzEyNjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjM3NzY2NDU2NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "feilan",
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
