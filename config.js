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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348037820665";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_02_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMixcbiAgICAgICAgOTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU4LFxuICAgICAgICA5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc2LFxuICAgICAgICA4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICA5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAxLFxuICAgICAgICA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImNDek5WVUZZNmlCTm9XQ29oT0RiUzIzOTdaMmhYNWpEYzRxTUQvejN5cTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODAzNzgyMDY2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkNERDk5NUI2NDY3NEU3MUZEOUI4ODNDMjMzRjlBODJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNzgzNzQ3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkllTW8zRGU2UjhHdVJpVzhoMTg4LUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTVhOGUwYmYtMzBiYy00NTM3LWFmNWQtZTc3MDBlZTA5ZDc0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNixcbiAgICAgIDE4LFxuICAgICAgMTAxLFxuICAgICAgMzUsXG4gICAgICA0OCxcbiAgICAgIDIwOSxcbiAgICAgIDE4MixcbiAgICAgIDk5LFxuICAgICAgMzQsXG4gICAgICA5OSxcbiAgICAgIDE1OCxcbiAgICAgIDk0LFxuICAgICAgMjAyLFxuICAgICAgMTUsXG4gICAgICAyMTQsXG4gICAgICAxODIsXG4gICAgICAyNTQsXG4gICAgICA4MyxcbiAgICAgIDI0OSxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDIyOSxcbiAgICAgIDE5LFxuICAgICAgMjExLFxuICAgICAgODMsXG4gICAgICAxMDYsXG4gICAgICA4MCxcbiAgICAgIDIzMSxcbiAgICAgIDIxMixcbiAgICAgIDEyOSxcbiAgICAgIDk1LFxuICAgICAgMjE1LFxuICAgICAgNDAsXG4gICAgICA4LFxuICAgICAgMjQzLFxuICAgICAgMTc2LFxuICAgICAgMjQ5LFxuICAgICAgODgsXG4gICAgICA0OSxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk3VENQODdHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDM3ODIwNjY1OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzQ1OTE0ODI4NDc0MDQ6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDZ3cEdBUStLKyt0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJyLzBhN0ZpNnU1U0greU13dkJEN1M1Y3UxSVBLK2h6R0wvQnJGUmVSOWtRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVsdFpTQUZCMHVVRE9qcU16NXEzWklKVHM2K1JzeEJBazJjMkJySG4yUHdJVFR6VGY4Umo4elVwOURJTXg4S0lxb2k3MzFaUmxNNDQ2dUh5Q0JubEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNBZ1JYb2YzSllJcTZmTG0zRUVGTkkvcStTay9ORFhHM2k1NExWang0ZTBKNFNpVVVLbW9rdFRETXhmT2tBQm5WSnI2WHNPNFRWRE12VEYvUHkzR2hnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzc4MjA2NjU6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3ODM3NDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGd0VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ3RS5qc29uIjogIntcImtleURhdGFcIjpcIkVzcXk1amdiOCtUS3ZlTEtadE5uYkI5SHZ2d3c4MlJBUXdUNGN6Z3lXNlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAxOTIyNjc5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Douma",
  packname: process.env.PACK_NAME || "soka",
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
