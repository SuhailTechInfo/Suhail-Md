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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_51_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDgwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5WNStaR2paTUtzOWZ3Y0JjREZaNVpqQzdjRGhNREhNLzNoVXNsZDh4UGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzA5MDYzODc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RjQ4RTYwNkZDMTgzMUVBN0M3RjEyRUY4QTFCNTc5RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2NzUwODFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUVZmZ2U3R1NUY0ttX0RSQVppaENXQVwiLFxuICBcInBob25lSWRcIjogXCI2Njk2YjAxYi1kYzQ0LTQ0ZTctOTY4MC00YmIzZjU2MThhNmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgNTgsXG4gICAgICAxNjksXG4gICAgICA2MCxcbiAgICAgIDI0MSxcbiAgICAgIDk0LFxuICAgICAgNDUsXG4gICAgICAxNDIsXG4gICAgICAxNDIsXG4gICAgICA1MCxcbiAgICAgIDYwLFxuICAgICAgNzksXG4gICAgICAyMDUsXG4gICAgICAxMTcsXG4gICAgICAxMjEsXG4gICAgICA0NCxcbiAgICAgIDE2NixcbiAgICAgIDIyOCxcbiAgICAgIDIzMCxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMTY3LFxuICAgICAgODAsXG4gICAgICAyMjYsXG4gICAgICAxNDEsXG4gICAgICA0NCxcbiAgICAgIDE2MCxcbiAgICAgIDIxMixcbiAgICAgIDIwOCxcbiAgICAgIDY4LFxuICAgICAgODQsXG4gICAgICA1OSxcbiAgICAgIDIzNixcbiAgICAgIDMwLFxuICAgICAgMjQxLFxuICAgICAgMjEyLFxuICAgICAgNDMsXG4gICAgICAxNTQsXG4gICAgICAxMDcsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQzlWU01TV0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMwOTA2Mzg3NDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdvdmVybm1lbnQgQWdlbnRcIixcbiAgICBcImxpZFwiOiBcIjIyNzkzODc0NjI5NDUyNjoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOMk54NUFERUlIZnQ3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImloNjlKdVYxVkdhWHRwTGZ4dFpBY21NVEtvRVNnaE1lQlhPaGJRNjA2UTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibVFyb1IwK0FaRDJ6Mmd2YnZEQkJ6VVlWSG5jU21uZjdKa2tGeFZCeXd1SEZNU05VT1FnN1NIZWRCeGhQK2c5NldMRlV4WEdNeGxrZVIydDQ4aGZCQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNGM3YkduYWtpaXYzT3AzZ0czOHVYNUJ3ZG9EM09hT2YvdU9JWFNXVUdPQVRkc1R4SGYwRkZIc25LNXkxRUErS1I2NVBXdHZOQ3JsbnVhWWFsc1ZUakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzA5MDYzODc0OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY3NTA3NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
