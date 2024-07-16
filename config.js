const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_11_39_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI3LFxuICAgICAgICA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgODUsXG4gICAgICAgIDQxLFxuICAgICAgICAzLFxuICAgICAgICA1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1LFxuICAgICAgICA0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDgxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA1LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgwLFxuICAgICAgICA3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxLFxuICAgICAgICA3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4NlFTQmdIeEhCa202YmxtNXVRLzExWXgveis4a0NOSXBpK1ZSOFhYaC80PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDcyMTQ1ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE2NTdBMkY2MjgxNDQ1M0QwQ0ZFRENCMzUxMDIwNUFBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTEyOTk0NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1bW85VVcxVVFXLTlRZVhzX2F0dkFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc1MzcyMzhkLTEyZTUtNDM2ZC04NjA3LWMxODU2Y2JkZjM5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAxMjUsXG4gICAgICAxNTIsXG4gICAgICAxNjksXG4gICAgICA3OCxcbiAgICAgIDEyOCxcbiAgICAgIDE0NCxcbiAgICAgIDEyLFxuICAgICAgMjQxLFxuICAgICAgMSxcbiAgICAgIDE3MCxcbiAgICAgIDExNSxcbiAgICAgIDU1LFxuICAgICAgMTUsXG4gICAgICAxMTcsXG4gICAgICAxMDcsXG4gICAgICAyMzEsXG4gICAgICAxMTgsXG4gICAgICAyMDcsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICA2NyxcbiAgICAgIDM1LFxuICAgICAgMjUyLFxuICAgICAgMTYzLFxuICAgICAgMTksXG4gICAgICAxMDIsXG4gICAgICAxNzUsXG4gICAgICA4LFxuICAgICAgMzUsXG4gICAgICA4OCxcbiAgICAgIDE4MSxcbiAgICAgIDU0LFxuICAgICAgNTcsXG4gICAgICAxOTEsXG4gICAgICA4NCxcbiAgICAgIDExNixcbiAgICAgIDI0NixcbiAgICAgIDE2LFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjE4ODU3Rjc4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ3MjE0NTg3OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTI3NTkyOTUxNTIxNDU6MjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkxUOHRjREVOSzMyYlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrSXlvcVc1QThNT1J6MWNmbVoxKzVBTTQ2ejJ1TDhiNGgrN003b204aHpjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRmRlIwU1RDREpXOERVeGowaHkydFVYNWRuSEhFSlg2cVBSNFNZMVQzUVlTVktaREp2czgweUdmUXlxeGs3YWREb1d0OHZKN09TOGlnUHgwSnZMVURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5TYlBpTGdKVmtHb1VReUtaU21lN3d1NVl3SEIwSFFqakdabjM4UUNBcjArcFRaU25KY3hjWW4xSElnQ2hMZlBQYUUzV2tvUEM4RWN6YXUyTFR5bkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDcyMTQ1ODc6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMjk5NDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMRC9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxELy5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
