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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "918882829982,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_15_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDk2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDksXG4gICAgICAgIDUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgNjksXG4gICAgICAgIDIzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNyxcbiAgICAgICAgODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5hVmEybWJ4QnBlL1hnaGVRNDBXTjVkQ1plTi9BQ0FvVVMwZVFwYXVRQk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZmQThrRWJYUkxhbm1ramJYTG42cHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjVkMDExYTktM2UxMS00ZTNkLTgwZmQtOTY2MzhkMTVkYTFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDk4LFxuICAgICAgOTIsXG4gICAgICAxMjMsXG4gICAgICAxMDcsXG4gICAgICA0MCxcbiAgICAgIDQ1LFxuICAgICAgMjM5LFxuICAgICAgMjksXG4gICAgICAyMCxcbiAgICAgIDE5NCxcbiAgICAgIDE5NyxcbiAgICAgIDYyLFxuICAgICAgNDcsXG4gICAgICAyMjMsXG4gICAgICAxMTgsXG4gICAgICAxNjAsXG4gICAgICAxMDIsXG4gICAgICAyMzAsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDE4MSxcbiAgICAgIDUwLFxuICAgICAgMTk4LFxuICAgICAgMTg4LFxuICAgICAgMTkzLFxuICAgICAgNDksXG4gICAgICA5NCxcbiAgICAgIDE0MyxcbiAgICAgIDU3LFxuICAgICAgMjExLFxuICAgICAgMTYyLFxuICAgICAgMTg5LFxuICAgICAgMzUsXG4gICAgICAyMzcsXG4gICAgICAxMzgsXG4gICAgICAyMDAsXG4gICAgICAyMjEsXG4gICAgICAyNDgsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkRLN0xDMkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ0MzMwMTkwMTM4Mjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOGqfCdkJTGnsyExpnGnsyE8J2amM+Jxp7MhPCThqogICAgICAgICAgICAgICAgICAgID7wnZ+R8J2Ql1wiLFxuICAgIFwibGlkXCI6IFwiOTkxMzI3MTEwNzgyNjo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05IbHZnVVF5b2FIdFFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWFZGRGdhdzhKNUl0aVdGVnFjNUlEd2FMWTcycG1YQjl2RzA3OHZnTDIxND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKT3A5T242bXppTExPL0hRYVhoK2E3Zll3dytDTFJtVWZEYzJKdStLblZFSWpFL0paUHNialBNZ01NUnMvbmthdDVkMWR0Mk9SNkE1YVdwUUtoVTVEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJhNENoYmlLSDlRbHRxSnZ0R2o3TVJ0cHgweTFscnFLR3YzdVAvOXRNektlMFphNlhqZXBWaEY3TStwRzR1VE0rNVRjcnp4Z2NVcmYxTGxacGlncTNpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDMzMDE5MDEzODI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODc3MzI2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmhxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGaHEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSNjhBR1NETmxLVkJEaXl6RUdYQUdUUG9RUVNQL211V0tXbHdGYVlhbytFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTE0NTc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxODc3Mjg3NjE2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Dev_X_bot",
  ownername:process.env.OWNER_NAME|| "𖧹─‌ͥ ⷨ┼𝐃͢𝛊ᩴ𝛎𝛄𝛂⃕𝛈𝛅𝐥┫ 🩵",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Dev_X_bot"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
