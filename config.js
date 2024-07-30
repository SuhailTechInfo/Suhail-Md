const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="gideonkipyegon2003@gmail.com"
global.location="Nairobi, Kenya."


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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "+254704706667";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254704706667";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true ";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_34_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA2LFxuICAgICAgICA2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODgsXG4gICAgICAgIDc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc3LFxuICAgICAgICA5MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAyOSxcbiAgICAgICAgODksXG4gICAgICAgIDc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM2LFxuICAgICAgICA2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDgyLFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwMnhzMzdIdmkrblluZklZaU5GOGpGS2xsa010cEUrS00yK24wK0RkZGZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4NGZFTkQ2RlFxQ1ZSTXBBZUZWcVdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE5YWIyNWNlLTVkMzAtNDRjYS04ZTliLTNiY2RmZTc2NWE4OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICAyMDYsXG4gICAgICAxODMsXG4gICAgICA5MyxcbiAgICAgIDk2LFxuICAgICAgMTQ4LFxuICAgICAgNTEsXG4gICAgICAxNjksXG4gICAgICA4OCxcbiAgICAgIDExMixcbiAgICAgIDUxLFxuICAgICAgMjM4LFxuICAgICAgNTksXG4gICAgICAyNTMsXG4gICAgICAyNixcbiAgICAgIDYzLFxuICAgICAgMzYsXG4gICAgICAxODAsXG4gICAgICAxNDEsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAxNDAsXG4gICAgICAyMCxcbiAgICAgIDExOSxcbiAgICAgIDE2MixcbiAgICAgIDQxLFxuICAgICAgMjQ5LFxuICAgICAgNTUsXG4gICAgICAxMTQsXG4gICAgICA5MyxcbiAgICAgIDE0OCxcbiAgICAgIDE4MixcbiAgICAgIDE5NixcbiAgICAgIDc5LFxuICAgICAgOTIsXG4gICAgICA2NSxcbiAgICAgIDIzMixcbiAgICAgIDIyNyxcbiAgICAgIDc3LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFlSMU1BRURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNDcwNjY2NzoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA4ODY5MTgzMzY5Mjc5OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B6UjIxc1FodFdsdFFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ1FSVmxBOGFSeEhrVTY5QmNXSng4T1o1OE5qZEF1MGN2bk8yd2lJaEp6RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJSzQ5UjlvcXJYQXJ6RGNjektmWUhxSTZOaTlqL3hlMlhyWkE2QkpWaGJOcVRMdW4yY0dYTzlpcTAva2lOYzg3S3hzNkxzQUd6WFZlQTBHWXNMbUNEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzWmpDSGY3b2Y3eldtNnpiUEh6Tkk0ZVJlQVRUY3Q2RWZvMTZmbjZuM3RNNHlOc2ZZZXA3Wnc1d210TmtCUm9md1lWZFlBUlRkd1RpWVlpM2oxOGZBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDQ3MDY2Njc6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjM3ODg4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURocFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGhwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ2VVRE1NRmpIR3Zsek51SHMyNzZGVVRIY3ZReUVJRng5Z1JldnpNMVYzdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTIzNDIyNjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjI3MzQwNTAyNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CYBERGHOST",
  ownername:process.env.OWNER_NAME|| "LATRO",


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
