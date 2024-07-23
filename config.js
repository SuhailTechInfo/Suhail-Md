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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=false" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "22898555306" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "221768649590";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22898555306";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,221768649590";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,221768649590";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "221768649590,221768649590";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_18_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDY0LFxuICAgICAgICA1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgODksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDYyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA3LFxuICAgICAgICA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NixcbiAgICAgICAgMjI2LFxuICAgICAgICA0OSxcbiAgICAgICAgOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQwLFxuICAgICAgICA0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICA5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc5LFxuICAgICAgICA3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZlT3BoRlkycWI2YTJoMm85ZmpWanR2REdFelo3bDBDY0ZzMk1zWCtwR3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRHLUpOWko0UkstOUM0a0hqR3JaREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmMzOGQzNTAtNzlkZS00MDcyLWE2ZTktNWZlYjkyZGE1NjAzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDExOSxcbiAgICAgIDg4LFxuICAgICAgOTIsXG4gICAgICA1MyxcbiAgICAgIDEyOSxcbiAgICAgIDEyNixcbiAgICAgIDE0MSxcbiAgICAgIDEyNyxcbiAgICAgIDIzNSxcbiAgICAgIDIzNCxcbiAgICAgIDEyMyxcbiAgICAgIDYwLFxuICAgICAgMTAzLFxuICAgICAgMTQwLFxuICAgICAgODcsXG4gICAgICAyNDYsXG4gICAgICAxMTAsXG4gICAgICA1OSxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgMjM5LFxuICAgICAgODcsXG4gICAgICAzNSxcbiAgICAgIDE0OSxcbiAgICAgIDE0NixcbiAgICAgIDI0NSxcbiAgICAgIDIxNyxcbiAgICAgIDExLFxuICAgICAgMTA4LFxuICAgICAgMTk0LFxuICAgICAgMjI3LFxuICAgICAgMTI1LFxuICAgICAgMTQxLFxuICAgICAgNjMsXG4gICAgICAyNTAsXG4gICAgICA2NyxcbiAgICAgIDQ2LFxuICAgICAgMTU4LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEtWSk5FQlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMTc2ODY0OTU5MDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVWx0aW1hdGVcIixcbiAgICBcImxpZFwiOiBcIjEyNjU0NzM2OTQwNjY2MDo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3eXhla0hFSUNIL3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL1g2L2w3UmxwYXpUYVB4VXB0SFlYN0ZVUUhEcEZoTEptbHdLQlJIZkkxMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWOVowMTZiZWthZTJRYkJwQUpTeU1kb29tWFF4d0oxMjJueTFudVB3Q2JHb1JNN1dKTUlIWXdKeTRMTEhPYVZ5UnZKZElucCsxQzZ0djB4d1NqM2JCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrZFpNNnFjR0JLZkdqU0hEQlpjZmdxUlpHaytpeXU3OHBPdXYxajIydXNnaWZNL0NRaW1EWHUwWTBJRkprbHRKVnJjM2ZZQjA3ZzNBaE9WREcrVGNnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjE3Njg2NDk1OTA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzI5OTMxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "Noah's S. Legacy ",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Noah's S. Legacy ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

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
