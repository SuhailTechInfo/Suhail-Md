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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_24_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc5LFxuICAgICAgICA4MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3LFxuICAgICAgICA5NixcbiAgICAgICAgODUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU4LFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAzNixcbiAgICAgICAgNixcbiAgICAgICAgMTM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDcyLFxuICAgICAgICAxODksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk0LFxuICAgICAgICA4NSxcbiAgICAgICAgNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE1LFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDkyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMixcbiAgICAgICAgNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIM3FQUXVCbkx3clZ2M1R6OXgrWFQwUUR0dkpmSGplN2hGRjBhNHgyVTJzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKaGxVeFF2UVRFT21tbnZmbm16OUVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ2YzdjYjdkLTdiMGYtNDMxZS04NTA5LWJhNDUwZTFjNzAzN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICAzNCxcbiAgICAgIDIxMCxcbiAgICAgIDE2MSxcbiAgICAgIDE5NyxcbiAgICAgIDE5NSxcbiAgICAgIDIxMyxcbiAgICAgIDQwLFxuICAgICAgMTIxLFxuICAgICAgMTc1LFxuICAgICAgMjksXG4gICAgICA3NSxcbiAgICAgIDE3NixcbiAgICAgIDEzNSxcbiAgICAgIDEzOCxcbiAgICAgIDIxMyxcbiAgICAgIDIzOSxcbiAgICAgIDI0MixcbiAgICAgIDIxNixcbiAgICAgIDE4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxNjEsXG4gICAgICA3MSxcbiAgICAgIDEwMyxcbiAgICAgIDIwMSxcbiAgICAgIDU0LFxuICAgICAgMTAsXG4gICAgICAyMzYsXG4gICAgICAzMyxcbiAgICAgIDE1OSxcbiAgICAgIDI0NyxcbiAgICAgIDksXG4gICAgICAyMTIsXG4gICAgICA5NyxcbiAgICAgIDcxLFxuICAgICAgNzgsXG4gICAgICAyMzIsXG4gICAgICAzNyxcbiAgICAgIDIzNCxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLWTMxQkpLWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA2MDAyMjcyOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSXQncyBCcmlhblwiLFxuICAgIFwibGlkXCI6IFwiMTYwMzkxNzYyMDYzNTM5OjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04ySzFvUUhFTkthbzdVR0dBd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiODNDanNOUXlnNzFReEIrSE1VelhtbU42RzJrclUyRHNKWjNJOHlFNWloST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0dHdiUk16WVRrbmgzUDFQMDN6bkJ6eUI3bjkxMEQwQ0E4QkJRRHdPQXEvWGV2Rm1kSE5FZU0wZUZyTVRXVWdZOS9UaWdWWlU5K1VVaUxaTm9JTlhCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYRGt1VWR3S2R0WFE5cndGM3RiZ1pyZXpzOVd6d0pxQ25FS3p3WFRMaGg1dmtKZlBJMW84QkNwOXYwTHBodllPU09nYzYvODVGQ25pR2o2a0J1ZnFpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDYwMDIyNzI6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzM4NjQ1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkJZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOQlkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvcTVPeHR3bFJFUGRaK1hQN1B3bXNra3pTbkovYjJWdWRNUzgvejVqWERnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODg4NDcxOTcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
