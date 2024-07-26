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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_04_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg1LFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDU1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNixcbiAgICAgICAgMjI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjAvVU84VHc5OHZBM3JKWWppZXZBTWRQWk9rWnJaTjJ3MmYxUzFDcWJNYjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1Njc4MjkyMTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MTVFQTI1QTE1NzQ1QjgzRTJFODJGRDFCMThFQUQyMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE5ODgyNjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT2xfdkZVSkxRWTJjNmdzeG83LXk2UVwiLFxuICBcInBob25lSWRcIjogXCIzM2E0MWI4Ni02ZGYwLTRlOGMtOWI2Zi0wYTYzMDAyNzI2Y2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgODUsXG4gICAgICAxNzQsXG4gICAgICAxNDEsXG4gICAgICAyMDYsXG4gICAgICA3MixcbiAgICAgIDE5NixcbiAgICAgIDEyMCxcbiAgICAgIDE1NSxcbiAgICAgIDczLFxuICAgICAgMjQxLFxuICAgICAgNjEsXG4gICAgICA1OCxcbiAgICAgIDkyLFxuICAgICAgNTEsXG4gICAgICA3MyxcbiAgICAgIDE0MixcbiAgICAgIDUwLFxuICAgICAgMjM3LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDE1NCxcbiAgICAgIDIzOCxcbiAgICAgIDIyNSxcbiAgICAgIDE4MCxcbiAgICAgIDE1NyxcbiAgICAgIDE5OSxcbiAgICAgIDE4MSxcbiAgICAgIDEyMSxcbiAgICAgIDc4LFxuICAgICAgMTU2LFxuICAgICAgMTg5LFxuICAgICAgMzQsXG4gICAgICAxMjksXG4gICAgICAxMjcsXG4gICAgICAxNDIsXG4gICAgICAxOTMsXG4gICAgICAyMDMsXG4gICAgICAxNTMsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOExOREMxUE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTY3ODI5MjE1MDo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc1Mjk5MjgzNTA5MzI1OjkwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfkIfwn4W18J+FtPCfhbjwn4W78J+FsPCfhb1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYmJ2bG9RbyttTnRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklyTlBINmd2ZmlacGxEYVVYazVMZkNuZm9XYnA1Unp3OEVoWCtkS1ozVkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNHgrNHJjemtjNlRLVHZWRCs4VzZGK1hRZktrKzNWSWwzTm8wMW9PTjdwVGhzclBrSGJIN2xITW1UL0VRUEZWL3ppUGcySS84TldqTzdCUlkwcW8zQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUE1QMkd3elB0dVpNRUc1RkJlZXRaUnY0bEorS3AzdWpkbHY2Mm02L2I3bExoZzVtVlhDalJmS0pkZnpqVHQyNUFrQ0l6VStDMjBPemtqRWkzSGdZQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njc4MjkyMTUwOjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTk4ODI2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVMelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUx6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSFQ2TFU1enh4YitBL282NDljdVN1aFFoOVZzcDNuK3QyS1dPK3dDeko1Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODk3NzEyNTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTk4ODI2Njk4NlwifSIKfQ=="  // PUT your SESSION_ID 


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
