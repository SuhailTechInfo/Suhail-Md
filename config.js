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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923436062975";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_23_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NixcbiAgICAgICAgMjUxLFxuICAgICAgICA3MixcbiAgICAgICAgMjI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM5LFxuICAgICAgICA0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NixcbiAgICAgICAgOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk5LFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwianF0cFhPQjZFY1FKTFFLWExXZEdUakhvck5LTVVRQm55SURFV1RnVXFCdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQWl5R0c4UlNUeC02SEt3NjFYQm5YQVwiLFxuICBcInBob25lSWRcIjogXCI0ZDdlNzE4Zi01MTI2LTQzOWEtYWY5NS1lZmVlNzY3NzZlY2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgMTIyLFxuICAgICAgMTc2LFxuICAgICAgMjksXG4gICAgICAxNzIsXG4gICAgICA5NCxcbiAgICAgIDc4LFxuICAgICAgMTQ1LFxuICAgICAgMjQ2LFxuICAgICAgOTIsXG4gICAgICA1NyxcbiAgICAgIDEzNixcbiAgICAgIDU1LFxuICAgICAgNzAsXG4gICAgICAyMSxcbiAgICAgIDE4MixcbiAgICAgIDEyOSxcbiAgICAgIDE0MixcbiAgICAgIDE4MSxcbiAgICAgIDIxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAyNTEsXG4gICAgICAxOTYsXG4gICAgICAxMDMsXG4gICAgICAyNDUsXG4gICAgICAyMSxcbiAgICAgIDc3LFxuICAgICAgNjEsXG4gICAgICAxNixcbiAgICAgIDg4LFxuICAgICAgMTM4LFxuICAgICAgNDcsXG4gICAgICAxNDEsXG4gICAgICAxODEsXG4gICAgICAxNTYsXG4gICAgICAxMTEsXG4gICAgICAyMzcsXG4gICAgICAxNTMsXG4gICAgICA5OCxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJQRjVYNkFQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MzYwNjI5NzU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3ODMzMTg0MDQ1ODk1MDoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMU3l4YXNFRUpXNTByVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR2RXRqQjQvalhJWEJ5VFg1SlNZdCtjaEgwZFlGZC90RW5OZ3VZWXQxa2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicHpjSHR1RUNxQkhncG02YnpZL0dTVlB0L2xsdHBBSDlRRTNIYlBjVVJpVEZ5dHlzNGhabHhxK1dDV1o3MXBoV3ZScTlmVGhZam10M1BLbTlNS09sRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNUhFblRxT1JrWWcwWDdEU1ExeHJhVXlmSUJmc3lsajA4cnAyU3JXNmI5RThSU2cxZWExNHd1ZWZMYVhEVlpiZUN4OUNqWmQyMWdLbjhmbTRmc1ZmQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDM2MDYyOTc1OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzExMjYwMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlWZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVZkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiR2E4K2pxQTJVM3FGSklXN2JHWXVGQUlFWExjNjYzZENqbVVEdGIzS0NNbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTY1MDU2MzA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Usman-Malik-Khan,


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
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || " true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
