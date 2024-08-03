const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://qazi:Muhammadshaheer1.@qazi.b4aieig.mongodb.net/?retryWrites=true&w=majority&appName=Qazi"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_44_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDk5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0LFxuICAgICAgICA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTczLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MixcbiAgICAgICAgMzYsXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDgzLFxuICAgICAgICA0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICA0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDM2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNldsclR3QmJYYXhLK2RxanFSNHhUSS9hSU04dnN4UFdYdGVSM0UydW9OVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0pXekYxcklTWS1RWjRBeExYX18zZ1wiLFxuICBcInBob25lSWRcIjogXCI5NGQwN2UwMy1hZmJhLTQyNTAtYTA5ZS1mOWZlYjkxMDI3ODVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgNTAsXG4gICAgICAxMDEsXG4gICAgICAzNSxcbiAgICAgIDE2NSxcbiAgICAgIDE3NyxcbiAgICAgIDI1MCxcbiAgICAgIDQ1LFxuICAgICAgMTk4LFxuICAgICAgNjEsXG4gICAgICAyNDYsXG4gICAgICA1NSxcbiAgICAgIDQ4LFxuICAgICAgMjMsXG4gICAgICAyMCxcbiAgICAgIDE5MSxcbiAgICAgIDEzMyxcbiAgICAgIDEyMixcbiAgICAgIDIwMyxcbiAgICAgIDEwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICA0OCxcbiAgICAgIDcwLFxuICAgICAgMTQzLFxuICAgICAgMTMxLFxuICAgICAgMjA0LFxuICAgICAgMzYsXG4gICAgICAxMDAsXG4gICAgICAxODksXG4gICAgICAyMDIsXG4gICAgICA0LFxuICAgICAgMTUwLFxuICAgICAgMzQsXG4gICAgICA1NSxcbiAgICAgIDIxLFxuICAgICAgMTkyLFxuICAgICAgMTQwLFxuICAgICAgMTA2LFxuICAgICAgMjQ5LFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0hDSDg2MjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxOTE5ODMyMTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZsvCdmpjwnZqN8J2ajiDwnZmy8J2am/CdmorwnZqM8J2alPCdmo7wnZqbXCIsXG4gICAgXCJsaWRcIjogXCIxNzY4NjI4OTQ0OTc4MTM6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOV0tuZUlHRUpEMXViVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVVeEIvNVA0enFXUVFMMDB5ZlpBRHFjaE9KNjdYYit6MCtOcER0UWZUMmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUU8wditzWVNId1VReGtUTWIweFZTYk14MFJINTVacVFuKzZrZTg1RG12RVZRMmhxZTQ0Z1NVR01NemRoYTZZU2tQck9tNk1NNk9ZQ3NqTTl4eVZxQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNUhhM01lUlZUOFNyY3o1UmF3bFRaMFFBaVhXWmVjYkxPMmRiQnVRSDlaTFByakN4U0hjWWRJaDF3cWFkR3ArZk9PYnRtVithcmtwbUlDWW1JVU5HaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE5MTk4MzIxOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjcxMDY3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5CUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkJRLmpzb24iOiAie1wia2V5RGF0YVwiOlwieGRrUVBhaGUyRlN3NzJYYll2Rkszb0t2RDN5a05JTEVVenZYb05MMExldz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODE2NjEwMTMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3MTA2Nzg0ODdcIn0iCn0="  // PUT your SESSION_ID 


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
