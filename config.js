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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_45_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDYxLFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3MixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDksXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLQ0ZYeFhSNldBdllyV0wrbUVmeW01MDlnY0x4UEZBZDRDbVdQUWhHaTNjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJseUlBN3dUZFNQNkMyd0RHVHdZV1lRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlYzRmM2NhLTMwZGEtNDc5YS1iMjMyLWYyZGJhMzQwNmVhMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDE3NixcbiAgICAgIDE4NyxcbiAgICAgIDIyLFxuICAgICAgMTQ1LFxuICAgICAgNTksXG4gICAgICAyNDQsXG4gICAgICAyMzcsXG4gICAgICAyLFxuICAgICAgMjM3LFxuICAgICAgMTA1LFxuICAgICAgNzAsXG4gICAgICA3NCxcbiAgICAgIDIzNixcbiAgICAgIDQyLFxuICAgICAgMTYzLFxuICAgICAgMTM3LFxuICAgICAgMjMsXG4gICAgICAxMTQsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk5LFxuICAgICAgMTY4LFxuICAgICAgMjIzLFxuICAgICAgMTEyLFxuICAgICAgMjIxLFxuICAgICAgNjIsXG4gICAgICAyMSxcbiAgICAgIDI0MyxcbiAgICAgIDg4LFxuICAgICAgMjExLFxuICAgICAgMjA3LFxuICAgICAgNjAsXG4gICAgICAxNTMsXG4gICAgICAyNTEsXG4gICAgICAxMyxcbiAgICAgIDE3NyxcbiAgICAgIDE2MSxcbiAgICAgIDIzMCxcbiAgICAgIDE5NyxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKODI2Q1hIRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjA1NDQ3Njg6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZWu8J2Vs/CdlbTwnZW28J2WgCDkuYPkuYNcXFwi5Y2EXCIsXG4gICAgXCJsaWRcIjogXCIxMzg1ODYxOTYzMTYyMDg6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHV5MExRQkVMN3VnN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqTDdjMmpxZFZJVWRtZDQwcCtHM2VpSlVZR3psMWNSN0kramhzeWl3Zmw0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZJTnZ4NTlzVmljd2t1eUVXRy9tQjhkYkRvVUQ5SEZPNVJhMkRpTEtuTDk5enhtR0ladkh3am1sMGZsVEJPK0pQMXpSSWdrYmxDOTFPN0RtRlJNUUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhuRERFdEcxSnlvV3Jza1RxNzNiR05RR05WTlIrYTcyaCtZajE1U0lvdWswS09ySmNhd1BwUDRXa0hvVUZCSit3Q2Y5M3k1OGxONmE3eXZ1MXFLZWh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYwNTQ0NzY4OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MjUxMDlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
