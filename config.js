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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_58_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAzNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICAzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNixcbiAgICAgICAgMjMyLFxuICAgICAgICA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MixcbiAgICAgICAgMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTc5LFxuICAgICAgICA5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODksXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDU4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg1LFxuICAgICAgICA4MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5LFxuICAgICAgICAxNixcbiAgICAgICAgMjQxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4eGM4OWhqVUpFKzNpYUtVaU5RK2M2aFZUcnlHcEI0NU5acEgxRTdGN1FNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCbEFGZDZCY1FsT2I5OGJMdUlocnFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk3M2Q3MDdhLWI3MGItNDNkZC04MGNhLWFiMzQ4MjBjMjhhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDEyMixcbiAgICAgIDI1MyxcbiAgICAgIDE3MSxcbiAgICAgIDIzOSxcbiAgICAgIDUyLFxuICAgICAgMzIsXG4gICAgICAyNTUsXG4gICAgICAxNzcsXG4gICAgICAxMDksXG4gICAgICAyMTEsXG4gICAgICAxNzMsXG4gICAgICAyMjMsXG4gICAgICA2MixcbiAgICAgIDIyLFxuICAgICAgMTE2LFxuICAgICAgODMsXG4gICAgICAxMzUsXG4gICAgICA0MSxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMTYwLFxuICAgICAgMTEsXG4gICAgICAxMzMsXG4gICAgICAyMTgsXG4gICAgICAyMjcsXG4gICAgICAxMCxcbiAgICAgIDEsXG4gICAgICAxMTYsXG4gICAgICAxMzcsXG4gICAgICAyMDIsXG4gICAgICA2MixcbiAgICAgIDE1MSxcbiAgICAgIDE5NyxcbiAgICAgIDE5NyxcbiAgICAgIDE1NyxcbiAgICAgIDIyNixcbiAgICAgIDEyMCxcbiAgICAgIDM3LFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDFZRVozVzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA1MjI2NzkyNDozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA4NDY5NTc1NjUxNTM5OjM3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pQTTk5UUZFTk8xLzdNR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib0xEOFR0QmlFYkRkeGdFQnpyOHIrWGtZNHBWbkNPQjN4Y2NiTGlxL1l3WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrVmpPVVpBRUVqQTEzZ0hreW40M3hqYy9jM1VCRGFpdmtiYVI1NWZwMlgyVHBUUEplcDRqbFA0UFJvalZVVFhyam42K2RtWjg3Z2xFaXRpaGZhZ3RDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGem9RZ0hIWkJrNmFaTGdoK0QvNVM0UDR0VXNaQnZEWUpQMHdNbXVGdDhCMWM0YkZnMGZhbE1pVW5vdnY3QUsvcVFXMGFJTTM5dnhHMFZHSFZZMHJCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNTIyNjc5MjQ6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjU1MTI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFF5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEUXkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrOEljOTFpTkd4YlVjRXlHeWg0VkEvTEkvMm5Gdk5yVVJFQ2plQ3N6YlFBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MjAyOTc0ODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
