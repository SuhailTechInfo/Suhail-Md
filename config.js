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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_43_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4LFxuICAgICAgICA3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI2LFxuICAgICAgICA1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICA3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI4LFxuICAgICAgICA0NixcbiAgICAgICAgMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDUzLFxuICAgICAgICA2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQyLFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDksXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk2LFxuICAgICAgICA1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDYxLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyLFxuICAgICAgICA1NixcbiAgICAgICAgMTksXG4gICAgICAgIDQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MixcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpUMzMwL3U1cHZKUlFiQ3J4aFJrM3VZaXpndEx1WkQ0TWFmNGhuM0lVTjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk43N0FjZ3BHUkIybHpWSktGcEpGeXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2VhMDUwYjQtZmFiNC00ZDQ0LWE2MWMtY2QzNzc5NzAyZjg2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDMzLFxuICAgICAgMTQsXG4gICAgICA5NyxcbiAgICAgIDIxMyxcbiAgICAgIDg2LFxuICAgICAgMTQsXG4gICAgICAxMTAsXG4gICAgICA2NSxcbiAgICAgIDIyMCxcbiAgICAgIDEzMyxcbiAgICAgIDE3NSxcbiAgICAgIDcyLFxuICAgICAgOTIsXG4gICAgICAxOSxcbiAgICAgIDI0MyxcbiAgICAgIDY1LFxuICAgICAgMzUsXG4gICAgICAxMjcsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgOTMsXG4gICAgICAyNCxcbiAgICAgIDE2OSxcbiAgICAgIDE4MyxcbiAgICAgIDExMCxcbiAgICAgIDQwLFxuICAgICAgNjQsXG4gICAgICAxNTIsXG4gICAgICAxMSxcbiAgICAgIDIxMyxcbiAgICAgIDk4LFxuICAgICAgMTcsXG4gICAgICAxMTEsXG4gICAgICA4MyxcbiAgICAgIDEyOSxcbiAgICAgIDcyLFxuICAgICAgMjgsXG4gICAgICAxNDMsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKNzVXQVNKRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMTMyNTYxNDo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQxOTkxNzY5ODA5MTUwOjUzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01teTd1NENFS2JDaExVR0dBb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia1ArVm8yMUVaMHFuS0FkY25Jckd3RFFoR0lyTXVsakZYM3VGYVBCV3JuTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkTDR3clV0MUg1RThtYVVrZ203aWNYVVYwdUR3aXdBd1lrN1lLdDdjT1FseGVNb0hOSExWRWp6VmthQ080UHNTT3F6SEx5aGlpMmd3UkVEVGlBaEdCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvUHJRY3dCRmROSW5ZVXpoK25kNlZkVGxQNStidWhwZFZTMzRjRXpVTGtxQUNINHppeEtwK29tOHNDVmw3WWhjWCt4SEQ1MGRvVmtRblplWmpBS0pndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIxMzI1NjE0OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODM1ODE3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
