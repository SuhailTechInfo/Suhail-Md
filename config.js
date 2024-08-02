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


global.SUHAIL_10_10_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICAzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDc0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgxLFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUyLFxuICAgICAgICA0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZczBvZ0JTcDM2YzB0cmw5T05YWEplbm1wcm1WMEUxRlEvdFNXOXVmeERNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxMzk2MjUyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUEwQzBFMzFBRjQ4NjhGQTZCNzY3ODQ5RjhBNDREQkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTkzNDMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1maHNrdWgwVHlDMzJGbWZHWGhwRXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDRiZDkzYmYtYmRmNS00MzFkLTgyNTgtMmYxNzZjZGRhNTJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMTQ0LFxuICAgICAgMTE3LFxuICAgICAgMTc3LFxuICAgICAgNTgsXG4gICAgICAxNzcsXG4gICAgICAyMjMsXG4gICAgICA0LFxuICAgICAgNDcsXG4gICAgICA3NixcbiAgICAgIDYyLFxuICAgICAgMTE3LFxuICAgICAgNzAsXG4gICAgICAyMjAsXG4gICAgICAxODcsXG4gICAgICA1MixcbiAgICAgIDE4NyxcbiAgICAgIDEzNSxcbiAgICAgIDE1LFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDIwNixcbiAgICAgIDQwLFxuICAgICAgMTI2LFxuICAgICAgNTEsXG4gICAgICAyMDQsXG4gICAgICAxMjQsXG4gICAgICA4NyxcbiAgICAgIDIwNixcbiAgICAgIDIzNixcbiAgICAgIDI0OSxcbiAgICAgIDE3NSxcbiAgICAgIDMzLFxuICAgICAgMTQwLFxuICAgICAgMjQwLFxuICAgICAgMTQyLFxuICAgICAgMTgsXG4gICAgICAxODQsXG4gICAgICAyMjAsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0s3MjdSV0hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxMzk2MjUyNToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJvbWVvXCIsXG4gICAgXCJsaWRcIjogXCIyNDUxMzU2Nzc4ODIzNzY6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTJsdHFrREVJL2hzclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoY3VZUmV1WHFWVmd6algySC9FZUZDYTVIY1RockZsRHk2UzJMV1pkbFdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhPMlBtbVRpaUxmME4rclpxVlhQNHdsTEFtb1FPS2NGTWtCSjR1c0U1bGI5dzJJdHIvZ3o0eFI4ODlBY1YrNDIvMmEzOFlWUGpleHkwVzV1WTY0cERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJDZ1daUXNlZEQxZ0xOSHNIbHNmRktUWEdMSzY2cE5rRGhxMjMzRzlJblhrdnh2b3Exbnk1YytIS1l5T3hGZFQ4TGl6LzJmVEpLN09Dak9Hb0RBNkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMzk2MjUyNToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTkzNDI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjFmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCMWYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyQnNRS3pOVFV3dE4yVkNVRDNQdC9Vc0FWWjZQMmpiSUFIWUwydHlseUpRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg5MjE3OTA4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNTkzNDMxNjgwXCJ9Igp9 = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


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
