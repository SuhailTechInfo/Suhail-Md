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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_24_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNixcbiAgICAgICAgMTc2LFxuICAgICAgICA2NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI5LFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDU4LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDg4LFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgwLFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgxLFxuICAgICAgICA3MixcbiAgICAgICAgMjMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5IVXIxUzk2SDVHQTJ1RGFhZ2RNbXVzWGJNUlpSYXVZOEJyZXVHV2cwb0E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTU1OTg5MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA3NkJGOUQ5QzEwQzUwMTk2MzQ4MkRDMTIzQzMyQ0I0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIxNTQ5NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwMjBScWcyWlJTS1BGRnJsQml0RUlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAxZTRhODcyLTkwYmYtNGUwNi04YTA2LWJjNTMyNzY5YmExOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDE2NCxcbiAgICAgIDkxLFxuICAgICAgMjMsXG4gICAgICAxMyxcbiAgICAgIDU5LFxuICAgICAgMTYzLFxuICAgICAgMjUyLFxuICAgICAgMjA2LFxuICAgICAgMTY4LFxuICAgICAgOTEsXG4gICAgICAxMDIsXG4gICAgICAyMzQsXG4gICAgICAzNixcbiAgICAgIDE4NCxcbiAgICAgIDI0MyxcbiAgICAgIDQwLFxuICAgICAgNDAsXG4gICAgICAxODMsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDUzLFxuICAgICAgMTY3LFxuICAgICAgMjI0LFxuICAgICAgMjMyLFxuICAgICAgNjIsXG4gICAgICAxOTQsXG4gICAgICA5NyxcbiAgICAgIDE5NCxcbiAgICAgIDE1OCxcbiAgICAgIDE0NyxcbiAgICAgIDIyNSxcbiAgICAgIDE4OCxcbiAgICAgIDMwLFxuICAgICAgMTgxLFxuICAgICAgOTQsXG4gICAgICA1LFxuICAgICAgMjEyLFxuICAgICAgOTksXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJQzRxMXNRKzlQZXRBWVlCQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInp6eDlWRGdwVzYvTUl0Nkxvbkw4RnJNK2xJRCszMHk0YzlYcm1KUVo4UTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ0Y4U3daZE9xOHZWMVRvVFVtRVUwQmNCaEdlT1ZMU1ZIS2o2bnowbEhRRE1xSS8wRksrRS9BdytBandSWUZmYmlSR01VK3cwQ1QrN0xtMFVNNFRiQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicUx3Q09hR0ZnS3pVS1ZzbUJicFdJb1lyZngvTUVqeFAva01uMHZpMVNZeGtIWDZsUkhDM09MN1U3bXZ4TTQ0WVNOSXVrN0FmRUVBVEpKSTh1WmpVaGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxNTU5ODkzMzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDQwMzI5MjQ3MTcxNjI6NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzE1NTk4OTMzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjE1NDg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREsrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFESysuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlZ3RZQ2NlQ2U0bzFYVnZoMklJTVZCOHc3c2FDNHhwa2Jyd3AveUhScGFBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTU1MjUxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREtfXy5qc29uIjogIntcImtleURhdGFcIjpcIlVEU2RDOTlvWXh5MUNrZll5SW9GR2tBazZKTjhQMFVSY1VTUk43U09TWlU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkxNTUyNTEyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFETEEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyN3VIWXpkQVY4aEFNNGw0Zk0reGx6QXZZUytTczRKdktyUmlITExxTFVvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTU1MjUxMixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjE1NDgxMDQwXCJ9Igp9"  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
