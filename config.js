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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743982206";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_25_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDc3LFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICA5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImY4VC90LzJwZktwdUhsMm5QeDZ0blQrTU4rUUwrNFROUEVkWFkzR1FsTUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImsyVnhjeDVLU1Blck96TTlTeUd2c2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzY5ZWZkNDAtZmU3MS00ODI3LWIyZmUtMzk2MWFhZDQzYjQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDExNixcbiAgICAgIDUyLFxuICAgICAgMTkyLFxuICAgICAgMTgwLFxuICAgICAgMTc5LFxuICAgICAgNjIsXG4gICAgICAyMDIsXG4gICAgICA5NyxcbiAgICAgIDY0LFxuICAgICAgMTcsXG4gICAgICA2OCxcbiAgICAgIDI1MyxcbiAgICAgIDY0LFxuICAgICAgNjMsXG4gICAgICA0MixcbiAgICAgIDU0LFxuICAgICAgMjEwLFxuICAgICAgMTUyLFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDI1NSxcbiAgICAgIDIyMixcbiAgICAgIDEyNixcbiAgICAgIDEzOSxcbiAgICAgIDE2NSxcbiAgICAgIDE3MixcbiAgICAgIDE3OSxcbiAgICAgIDExNixcbiAgICAgIDEzMyxcbiAgICAgIDUxLFxuICAgICAgMjQwLFxuICAgICAgNDAsXG4gICAgICAxMDUsXG4gICAgICAxMDMsXG4gICAgICA0OSxcbiAgICAgIDI0MixcbiAgICAgIDI5LFxuICAgICAgODIsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNMUFOQ044TFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQzOTgyMjA2OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwifmBgYEJFUkEgVEVDSGBgYH5cIixcbiAgICBcImxpZFwiOiBcIjI2MDk1ODMzNzM4MDQyODo2MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZng5Tm9HRVBLTnRyVUdHQTRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRPcVVvc3MwUjZWeUpFOWtNSWM2ZzBrV3duUkhGaHp3RUR3akZMZU9weEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia0xMS3RxanNXYmwxSW95b1lSaWZERVNKWXdGWnR4Q2RkZXBOVkhSV3VjaWNab2xJY0IzYUZxOW1KR2lidlppNVBRMTZlZERyREhrR0h2VDhXZjVvRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0wyNThYaE9wc3JVSW1Da2tIOHRJTTV0Wnk4N2pjcktRakRJeGhianY3NU4rUDhTTmRZdnN5VjUxeS9IZW8rWFN0ZHZYY3lyM0RpcTlOb3ZuSHovaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQzOTgyMjA2OjYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NDgzMTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMYi9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxiLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "BRUCE BERA",


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
