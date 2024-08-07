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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_28_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTExLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4LFxuICAgICAgICA3MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDMwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY0LFxuICAgICAgICA3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDczLFxuICAgICAgICAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBtaEhESTdIWC9xOW1Sbms1MVNlMjBQTDVSQ1JqQ25iRTJlZUw3NGhnWEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODAzOTgxMDE1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDM3MjdCMjcwMTlGQjI5NjAyQTEyQUQ0MkIwMzAwMjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMDQ0NTIyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBreThWWFV6VF9lS3UxeVE3QXZuQWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODMxYzU5YzctM2VmMy00ZTA2LTlmNWQtNDRjYTY1N2M5MjM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMjQzLFxuICAgICAgMjAxLFxuICAgICAgMjQ3LFxuICAgICAgMjMsXG4gICAgICAxMzUsXG4gICAgICAxMzksXG4gICAgICAxMCxcbiAgICAgIDIzNyxcbiAgICAgIDEzNSxcbiAgICAgIDIxNSxcbiAgICAgIDIyMyxcbiAgICAgIDk5LFxuICAgICAgMTYzLFxuICAgICAgNTUsXG4gICAgICA0OSxcbiAgICAgIDY5LFxuICAgICAgODMsXG4gICAgICAyMyxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAyNTMsXG4gICAgICAxNjMsXG4gICAgICA2NixcbiAgICAgIDEyOSxcbiAgICAgIDYwLFxuICAgICAgODksXG4gICAgICAxOTksXG4gICAgICAxMjksXG4gICAgICA4OSxcbiAgICAgIDI0NyxcbiAgICAgIDU4LFxuICAgICAgMTA4LFxuICAgICAgOTYsXG4gICAgICA5NSxcbiAgICAgIDUzLFxuICAgICAgMTEsXG4gICAgICAxODUsXG4gICAgICA4OSxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXTlA4REpCRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzOTgxMDE1OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdlrPwnZeS8J2XhfCdlr7wnZeLIPCdmIDwnZe48J2fsFwiLFxuICAgIFwibGlkXCI6IFwiNTY1NDM3NDc3Njg1NTY6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUNvaEswRkVLR2x6clVHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0WDFPSnJMUjExNHpHNTdiTitiRWlIUlh2eE1DM0MzZXRGQ0IwWkt6ejBnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJ4OGc4ZjZUTnpTRng1VTNVZmhQd3FlM1VxTmtJR1NySXJtc01TVWNBcHZyVFhSZ09LWWxvZkVRWXdkWEpJN0RvbEZpYWw2OVpPeFBnbzJiQXg3QUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpLS0tQa0preUxibUhKeXFBNGkwYXdscko1Y0VwdHZJUWFpNitEREFCcjRDNDBhcUJnajlPUTI3RTQvOTU4bThocUJUWGNBRDZ3dU1mcHRjOCtHMGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzk4MTAxNTk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA0NDUxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9RUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1FRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTlJJQ3pvaElCbWF6VzZWN29aa0tsM0hnTWdFcFFsSTNFVkFUbjg1dWZVUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDM2NjE5Nzc2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
