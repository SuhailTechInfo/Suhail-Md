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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_15_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5LFxuICAgICAgICA4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUzLFxuICAgICAgICA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA3LFxuICAgICAgICA1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI5LFxuICAgICAgICA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxODQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNixcbiAgICAgICAgNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQyLFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhc0tjeWxJV0JwemhDTEcrMnBTTFVEY29TOHE2ZmNEM1VlbWFNdWdWc2Z3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzExNjMyNTg2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTU1RUVFQkY3MDdGMDA5MTBBMEU2QzREMkYyQ0I5OTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODg4MTA2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZ3dHNlT3FCVG5pVkdCOEhkWENoMEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzI4NTcyNWEtZjg5ZS00MzdiLTljYTQtYmZmYmE2OTY3ZTBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDE4MSxcbiAgICAgIDIzMCxcbiAgICAgIDcsXG4gICAgICAzNixcbiAgICAgIDEzOCxcbiAgICAgIDE0NyxcbiAgICAgIDYsXG4gICAgICAyMjEsXG4gICAgICAxNjEsXG4gICAgICAxMTUsXG4gICAgICA5OCxcbiAgICAgIDExOCxcbiAgICAgIDIzNyxcbiAgICAgIDE2MyxcbiAgICAgIDE0OSxcbiAgICAgIDE2NyxcbiAgICAgIDE4OSxcbiAgICAgIDEzMSxcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxMTMsXG4gICAgICAxMTksXG4gICAgICAyMDQsXG4gICAgICAxLFxuICAgICAgMjE4LFxuICAgICAgMTMzLFxuICAgICAgNDYsXG4gICAgICAxNDUsXG4gICAgICAxNTIsXG4gICAgICAyMTksXG4gICAgICAxNTYsXG4gICAgICAyNTIsXG4gICAgICA5NixcbiAgICAgIDIwNSxcbiAgICAgIDExLFxuICAgICAgNDAsXG4gICAgICAxNzMsXG4gICAgICAxOTQsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUQ0M0M0JHS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTE2MzI1ODYyOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NDYyMTE5ODA0MTE4NDo1OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLWFNwY29IRU9MYWg3VUdHQmNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZFcC95b1NKZkl4SFJRc29WaS95NVBtT2gyT0pNRGl0TVoyU1hCQ2ZsaW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTG9QeXM2bnlsVzJ3ZXBpaXdVMzZDOHdqcWlhSS9jd0NsbzVzb2hnVEgzUFAwTmlIdElmQUtJT0xOdkl3WXk4VUdWTjBsN0pXQWNiZUg5NitJYTl6REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicjFVWmZVeGpTY2tHMWFTZjhjZ0QrNzZPWG5xaXpXU3ZXMWQxMmVKYlUwL0YwdjVvNWpJMjBqV2pqWXBENUs5UURPQlNQcDBJNlRNQ1YzUlpUSHBxQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTE2MzI1ODYyOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODg4MTAxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFV2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIVXYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0QWFBdFhKbW9LZ0hzK00vYVAxRmpjZDF3dStSUkRRQkVmOHQ4VEJLeUNNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMzQ4NTQxNzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
