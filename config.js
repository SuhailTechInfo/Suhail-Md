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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923038610003";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923038610003,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_42_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICA3LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDI1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDc4LFxuICAgICAgICA2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NixcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxLFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDExLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDUzLFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJQejVyY3NLRndwY1V5enNZTmVlajlKdEJ4c0g4ZDdTK1ZJRWNPZHhXZUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpoUEJsbVN3VFE2ei1JTkRJZHBrSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDEyMTBjZjctYWViMi00MTAzLWEyMDgtOTgyMzEzOGQ4MmQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDQ1LFxuICAgICAgMTQwLFxuICAgICAgNjgsXG4gICAgICAyMTUsXG4gICAgICAxMjAsXG4gICAgICA5NCxcbiAgICAgIDQzLFxuICAgICAgMzcsXG4gICAgICAyMTcsXG4gICAgICA0OCxcbiAgICAgIDE4OSxcbiAgICAgIDEwNixcbiAgICAgIDE4NyxcbiAgICAgIDE4MCxcbiAgICAgIDg1LFxuICAgICAgNTgsXG4gICAgICA0NSxcbiAgICAgIDY5LFxuICAgICAgODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTczLFxuICAgICAgMjUsXG4gICAgICAxMjYsXG4gICAgICAxOCxcbiAgICAgIDEyMyxcbiAgICAgIDY4LFxuICAgICAgMTU0LFxuICAgICAgNjQsXG4gICAgICA4NyxcbiAgICAgIDExNCxcbiAgICAgIDUsXG4gICAgICAyMzcsXG4gICAgICA2MSxcbiAgICAgIDE0OCxcbiAgICAgIDc5LFxuICAgICAgMTU2LFxuICAgICAgMTM0LFxuICAgICAgNTAsXG4gICAgICA3NixcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZORU5RN1JGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMzg2MTAwMDM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU3MzU1MDY5MTc3ODYwOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjdCdWRVQ0VKUDdqYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUeFIwQmduWlRnR2I2Tzc5R0JxdzB6TnIyek83V1ZMdEhZYXNQVnExeVJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk16RFJiVHhjQW9sMTE0SWFwM2VFZG1ISkRlSDV0UzBtdmZJSmZ1TXJLSkx0MHZsbERQTnJYbjlRcXFVd3BWVExEazlaVEJub2Z5b1NZWWxiNHdWSEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIld0MStRWkNVVzF0OUZBTFlUdHFkc1UyT1dOaDIzUExkblZldzlwNmxwUXR1c3VGdmJ1TzhoUUhRbFBnY3BpWXl4LzBQR016clFiL0QxNVo0akQ1T0NnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzODYxMDAwMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5OTA1NTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQaUtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBpSy5qc29uIjogIntcImtleURhdGFcIjpcIjlrczhGWVNLRERGWFBmak1SR2JEZ0lrbDVHaGhwME5rQ1NoL2VXZGJIUjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE2MDcxMDcwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE5OTA1NTUyMjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MHKING",
  ownername:process.env.OWNER_NAME|| "MUDASSAR",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "MUDASSAR"  ).toUpperCase(),



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
