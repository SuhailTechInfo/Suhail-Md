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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237697824510";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_35_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDU3LFxuICAgICAgICA1MixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDU3LFxuICAgICAgICA3MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgzLFxuICAgICAgICAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMixcbiAgICAgICAgMTcyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNSxcbiAgICAgICAgMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxLFxuICAgICAgICAwLFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMxLFxuICAgICAgICAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDksXG4gICAgICAgIDgyLFxuICAgICAgICA5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMixcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjcGZpV3YrUDVyUmE0bTZFSURxNDhuU3FTQ3Z5UGtYK01JaGphRGRoOVRFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY5NzgyNDUxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkMxN0EzOUFENTdGRURFOUVGREYwMjMwODJFQTVEREFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNzIwMTAwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9ZdlpTajV6UTY2SDRCaFJrdEdyLVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzFkY2I0OTEtYzRjNi00NjZkLWFlYTItMDZkZDBiYWJiODliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDE1LFxuICAgICAgNDIsXG4gICAgICAxMjcsXG4gICAgICAyMyxcbiAgICAgIDkzLFxuICAgICAgMjQsXG4gICAgICA0LFxuICAgICAgNzgsXG4gICAgICAxODgsXG4gICAgICA4MSxcbiAgICAgIDE2NSxcbiAgICAgIDI0MyxcbiAgICAgIDUzLFxuICAgICAgMzIsXG4gICAgICA4MSxcbiAgICAgIDE5NixcbiAgICAgIDUwLFxuICAgICAgMjIwLFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICAyNTUsXG4gICAgICAzMyxcbiAgICAgIDIyNyxcbiAgICAgIDE0MSxcbiAgICAgIDYyLFxuICAgICAgMTgzLFxuICAgICAgMTIyLFxuICAgICAgMjIsXG4gICAgICA2MyxcbiAgICAgIDI1LFxuICAgICAgOTksXG4gICAgICAxODksXG4gICAgICAxMCxcbiAgICAgIDEzMSxcbiAgICAgIDIxMCxcbiAgICAgIDQwLFxuICAgICAgMTcsXG4gICAgICAxMjgsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOaVNsT2NGRUo2Ni9iUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBPR0JidE9qQWVVU1NtMVNZT3hXSTdET0ZHUUFhWFVMbm9GZmFRYW9EeG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL2V6bFJNVDZ3MXQ2dWJvV0RlcGhYTnR4Nk5zcG90V1kvemdDREU3M0h4dmZuKzdtN1IyaGRzdFdhb2tKR0hyMm52VGhBNnFvWm53OWoreXk1OWhXQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYlNXV3d4VDR6VnZSTUVpVzl0aHVUamFXWitBWHBiTEdtTzNkUjdweGZ2UlJydmhIYi94TitxWmZTOGYwMVgvbXBZRmFiZGVtZzRkTURQZkNMQUlKaVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2OTc4MjQ1MTA6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJiZXRvbWl4IHNob3BcIixcbiAgICBcImxpZFwiOiBcIjIxNDk4MDYyODYzOTg1MDo0NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY5NzgyNDUxMDo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MjAwOTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNcUNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1wKy5qc29uIjogIntcImtleURhdGFcIjpcImR4MUVvUWZNWmo1S044ZkhxK1BnY25CQlNLNHZPZndud3ZHTkhGd1VwQVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU1ODUxNDAwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXBfXy5qc29uIjogIntcImtleURhdGFcIjpcIldsbkptQW9OZ2pWWUZDQlpLSDBYVVB5M1JaV2pDekxpTjlUQjRFcVVDMUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU1ODUxNDAwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTYyNDUwMTcwM1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1xQS5qc29uIjogIntcImtleURhdGFcIjpcIlVxNG1TcGZNZWpGdHp5RjZwQkhzOWNCN1cxOC8zRUcrcGxNZDk5Q3BzcUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU1ODUxNDAwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjMxMDYwMTcxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXFCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTFJ0aVpWZlBqckxNSFpWVGJJTjZTMmg4d2tJMWdwNWxlTzdNQWNqRkNFVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTU4NTE0MDA4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNcUMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2NzEwRE9kTnpZbHNWV1pLc2I0dW1qNjB6QVpwbzl5N0ZPUWZJNGtSNTlrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NTg1MTQwMDgsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTYzNDE4NDcwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Monsieur Richy",


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
