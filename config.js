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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_05_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDg5LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI3LFxuICAgICAgICA1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMjUwLFxuICAgICAgICA1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2LFxuICAgICAgICA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZnFOazBsZHQrTlA3bzdadCsrMy9RSVpyN2dJNWdwcThGVHlwTzNtcE9FWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3ODk1ODI1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDYxNkZDNzhDRkQ4MjM1RUFEMDMyMUU1MkU1QjU5QThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjY5MTQ5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkt2Si1OS2VfUXd5N2YwMnVkdFptNGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjY4NjNkY2YtNTgwMS00ZTAyLThmODAtYzJlOTQxZGE1YjZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDE4NSxcbiAgICAgIDY1LFxuICAgICAgODksXG4gICAgICA0NSxcbiAgICAgIDEzMSxcbiAgICAgIDEwLFxuICAgICAgMTk3LFxuICAgICAgMTU2LFxuICAgICAgMTUyLFxuICAgICAgMjMzLFxuICAgICAgMTY2LFxuICAgICAgNDUsXG4gICAgICAxMjUsXG4gICAgICAxNzQsXG4gICAgICAxNDksXG4gICAgICAyNDIsXG4gICAgICAyMTEsXG4gICAgICAxMDgsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDIyNyxcbiAgICAgIDk5LFxuICAgICAgMjQxLFxuICAgICAgNTgsXG4gICAgICAyMjIsXG4gICAgICA0NixcbiAgICAgIDg3LFxuICAgICAgMjgsXG4gICAgICAyMjksXG4gICAgICAxMzYsXG4gICAgICAxMzMsXG4gICAgICAxMDUsXG4gICAgICAxOTUsXG4gICAgICAxNTgsXG4gICAgICAxOTcsXG4gICAgICAyLFxuICAgICAgOTAsXG4gICAgICAzMixcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllUQTU0OFdQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3ODk1ODI1MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTQ2MzMwOTY2MDE3NTQ6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEYXJrIEJveVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01hRzY1Y0RFTlQ3bnJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidDhhSkpuU3RVcDVSMmludlRNTVRYNm5GdGFlcFJoWGw4QXVva2crYUl4TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJMUJYKzI2M2VoTmJXVVZBRFlPRzVKdHNXejVrTGtWMExndkVpbjgwaGpMU20wSlZTYzZDZVJkTGpPbEIwN2hzc005WUgvenpjdzRwbURvS1RFd1hDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBTXlleEtNT3RYUUtmWFI5QlQrSHh0ZGtmVUtxWi9OUlFPOTlJRVQ5K1QvT2h3RDR3Unk1Yk1KYTBHSEp1anIwZzQrcW14Z29qcXZYcGE5OVlxUURBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3ODk1ODI1MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNjkxNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOemlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU56aS5qc29uIjogIntcImtleURhdGFcIjpcIldtRWxVOU1GeTRuYVRFNW53cUFLOVpzY3JZb2JTYzVoTG1TYitEdkM1S1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODU1Mjk0NzkwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyNjkxNDc0ODhcIn0iCn0="  // PUT your SESSION_ID 


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
