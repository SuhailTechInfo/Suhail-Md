const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://github.com/SuhailTechInfo/Suhail-Md"                       // put your app url here,
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254706380563";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_16_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICA4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDYxLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwLFxuICAgICAgICA4MixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMixcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMwLFxuICAgICAgICA4MixcbiAgICAgICAgOTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NixcbiAgICAgICAgMjE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjExLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4LFxuICAgICAgICAyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDksXG4gICAgICAgIDU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUTDBSV2t3RE9XKzdjclZEWjZSS202Qk9iVjl2Z1Y1Wk5nR3IvKy8vd3JrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwNjM4MDU2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTAyM0YyMzg3MUY1NjFGNDMxQzQ3RkMyMzIyRDlGMzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjgzNzg3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjA2WldzaEs5UUtxUENJczRZYWZ3N2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTU5NWZjZTQtN2RhZS00Mzg1LWFkNWEtNDQyZDdkMGRjYmJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgMTQyLFxuICAgICAgMjYsXG4gICAgICA5MixcbiAgICAgIDIsXG4gICAgICAxMzYsXG4gICAgICAyMTcsXG4gICAgICAxODcsXG4gICAgICA5NixcbiAgICAgIDEyOCxcbiAgICAgIDE0OCxcbiAgICAgIDk4LFxuICAgICAgOCxcbiAgICAgIDk5LFxuICAgICAgMjMsXG4gICAgICAxODQsXG4gICAgICAyMTIsXG4gICAgICAxNzUsXG4gICAgICAxNDksXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAxMzgsXG4gICAgICAxNjYsXG4gICAgICA1OCxcbiAgICAgIDI0NixcbiAgICAgIDcsXG4gICAgICAyMjMsXG4gICAgICAxODEsXG4gICAgICAxMzEsXG4gICAgICA3LFxuICAgICAgMTEzLFxuICAgICAgMjE0LFxuICAgICAgMTE5LFxuICAgICAgNDUsXG4gICAgICA1MyxcbiAgICAgIDIzMixcbiAgICAgIDE1MSxcbiAgICAgIDU3LFxuICAgICAgMjM4LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjlBWFhMNjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNjM4MDU2MzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NzU2Njc4MTM5OTEyOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04yUS9JUURFSUdqdUxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYTBldkthQ1VadERtYm40RXE2Y2VSN1Bwem1HbW5ZQWRsM2FUWUxpV3AyTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1Q2EvMDVBeVk1MzhYYzVVZ3p2enV1akxDVnBPaXNVRjB4TmJhMjBaZ3VNM2dZUjF2YzdSdEtBWGtuc053MU0vU2hVRnMvRWt6d2oyQWNpbHZ5TGRCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVcnF3K1Rvdk5qSjV5TzNzQ2lFRGVselRXejlhZW5sbmZnK21uN3ZLVUpvZVBYcGFNVDI1UERuWnl6ZnhmZDVoYmhaTGo1OW1VcE55UnAwb0NuTE9nZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDYzODA1NjM6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY4Mzc4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ2VFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnZULmpzb24iOiAie1wia2V5RGF0YVwiOlwiYzlra0xPOWk0d2x1TWE4eElzdjBzM2ZhbW9CM1lXOTlRRm9IWHNRTmZ0ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MTU3Mjg3MzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI2MTg3NzI4NzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
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
