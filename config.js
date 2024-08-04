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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349028603185";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_39_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODcsXG4gICAgICAgIDY0LFxuICAgICAgICA4NixcbiAgICAgICAgNixcbiAgICAgICAgNzYsXG4gICAgICAgIDMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgODksXG4gICAgICAgIDE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNixcbiAgICAgICAgMjI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDkwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuOEp1bkVGZUV5d1l2NWxYUnpZbHdaMlhDeUpnTEhRa2MxaStBWkh1YnEwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjg2MDMxODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNCQzMwMUE3MDBENzcwOEM3NjI2MzJGRDZCRjY2QzRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjgwMDM0OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjg2MDMxODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZDRURBQzk2MTM4NUFBNEQwQjI1NDIxNzQ4NEE1MEZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjgwMDM0OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuLWJxRHZDWFIyRzE4R2I2bHVueWNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAyYTc5ZjMwLWUzY2UtNDIyZi04N2Y4LTg3M2Q0ZjI4ODM2NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDEyMyxcbiAgICAgIDIwNCxcbiAgICAgIDc4LFxuICAgICAgMTQ0LFxuICAgICAgNTQsXG4gICAgICAxODIsXG4gICAgICAxNzYsXG4gICAgICAzOSxcbiAgICAgIDE4NSxcbiAgICAgIDEyNixcbiAgICAgIDE2MyxcbiAgICAgIDI0OSxcbiAgICAgIDIxNCxcbiAgICAgIDUyLFxuICAgICAgMjIxLFxuICAgICAgNTEsXG4gICAgICA3NixcbiAgICAgIDEwMSxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgNTksXG4gICAgICAyNDYsXG4gICAgICAyMDcsXG4gICAgICAxMTAsXG4gICAgICAxMDIsXG4gICAgICAxMzIsXG4gICAgICA1MCxcbiAgICAgIDY0LFxuICAgICAgMTY4LFxuICAgICAgMjM2LFxuICAgICAgMjUyLFxuICAgICAgMyxcbiAgICAgIDQ5LFxuICAgICAgNzYsXG4gICAgICAxMTQsXG4gICAgICAyNDEsXG4gICAgICAyNDEsXG4gICAgICAxNTcsXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjMyOFdKWkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjg2MDMxODU6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MDcwNzE1NTE4OTk2OjI1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk/Nr82vcM2vza96za/Nr3nNr82vbc2vza9vza/Nr27Nr82vZc2vza90XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEw0emFrQkVOU3h2N1VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxUWdPWlF2UUxvUWJMQW5ZZW0rZFV2RGhxa2I4RlFwZWV1NUd5K2JYN1djPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlF1d1BuOXM1YmNLdXIxUDlxMFV1TkQzMEM4RTJtaWxUSnVQbU1mK01GZStvRlJiTExucWhLbHdROERmTmhVK28zeEk4NDJhN01VMXpNOGgzQUUzK0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjB1a04xMjFxN0s4RDZTRjFPZGVTRUZLRjh3UU5jcjYrSWFtaWFhUThCRUx5Y0kxVENNTE9oNFFaMzBlTlQyTDhiUE01ZzFyaUh5SjFrZEgxTmRMUkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjg2MDMxODU6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI4MDAzNDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQU01cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBTTS5qc29uIjogIntcImtleURhdGFcIjpcIlRyKzF0QjRmZ08xMWpWdEEzaERmS1NoY0xOUmhJdGFnUXIyRlRWQWlONlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU1Njk1NjYyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyNzk1NDQ4MDMyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Oͯͯpͯͯzͯͯyͯͯmͯͯoͯͯnͯͯeͯͯtͯ",


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
