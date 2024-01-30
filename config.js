const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "923184474176"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI|| ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "true" 
global.blockJids= process.env.BLOCK_JID || "false"
global.scan="https://replit.com/@SuhailTechInfo/Secktor-Bot?v=1";
global.gurl= process.env.GURL   || "https://youtube.com/c/SuhailTechInfo";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.website =process.env.GURL|| "https://github.com/SuhailTechInfo/Suhail-Md" ; 
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.THUMB_IMAGE=process.env.THUMB_IMAGE||"https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ;






global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,923184474176";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "1",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.6",
  caption:process.env.CAPTION || "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ™*\n*ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇᴅ* • 𝟭𝟰/𝟭𝟮/𝟮𝟬𝟮𝟯" ,// ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️👁️🙈💋 ",
  botname: process.env.BOT_NAME   || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  sessionName:process.env.SESSION_ID|| "SUHAIL_12_49_01_29_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNkZ1ZUl1M3RseDdIWmFhU1R5TDVhM250SUNGTDlSM0FyUFBreHlUWXBFaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjF4TGVIM3hmbWsxbTExNmp1eStZQ214a29oRFlZRTVFZE9OL1BIc3NDejg9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0FIczZqcG9lSTQ1NkdWRFdIRmhuZ1NWblNEbDRFa3JqMzhNdFk3dmpGaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIldDaDYvOXZnaXcweXJzejlNK0lRMTNoTFB3VTR4emtFUjN2Smc4K3Z5QnM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibUlOclVXbjRIUjh6NG4vSmw4OVVaUkVGVUwxajg0WEZ4c1pUaG9DUFYzMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk1iT2ZmSStnM3o0N0JqZTJjQThtMHMzamFYZHg0U3NqUU5LSTBoVmh6Um89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtTDhlbkROUnhRTklpRmdwRXAwYVFMNnQ1S2RTMXFOQTc5VUU4WlJHRVhBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUUlwMXhsVE8rQXNCanM2dDQxNG82Z1pqUHh5RlBBZGdGVGt3STBkckVRMD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJuK2hpdGZIVjl4Vkx5YmFVNDhrNm1JSHZKWXRlUEdRT3VYR2NMODY5djBlM21QRjBlNEpsSm9jb2NWY25kVzIvR083MDRFT3lpbWNxYzFKSE5nOStEUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjcsXCJhZHZTZWNyZXRLZXlcIjpcImtibTJxUy9uUkpLT1pPYklUWmhtTGpHeDBGSHNnQUpRK3BUNnRhM05NU009XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5OTQ0MDA3NDQwNTBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiMTQ1MzNCN0EwODI2QTMxQjY5NzA1N0FFMDU2MkYyM0VcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwNjUzMjUzOX0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5OTQ0MDA3NDQwNTBAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiRTA5OTdDRDFFODUyQjI2QzY4MkFFQ0YzQ0VCMDdCRDNcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwNjUzMjU0MH1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIlVzR3NqWlUzUnZPUnVMRm9EaVlwMWdcIixcInBob25lSWRcIjpcImMyNmU0ZTE1LWY1ZWQtNGVmYy05OWY5LTRhNmFkYmZmN2I1Y1wiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiSTU4eUIxNCtZTFBOQ3d4MW1Za240VWJmUjdnPVwifSxcInJlZ2lzdGVyZWRcIjpmYWxzZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJaNEpkSFhSeitSZWJJVlJtTERQejdTUTdCelk9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0s2cWk5QUZFTE85M3EwR0dBRWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJyRW1lcmdJWlJaVGl3MVoraUdsWnlmNHhGTmpQRzBGT284RW1uNU9oRDNnPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiWFZTNjcweDFrZisxWVdOYnduRGM2ZFZGdzlTNXBTL1VudDMvN1BmZXloQzVrT1VZV3RlWERvMU83WWFrMzhyQ1N5Mnl6SW5xWjh6b283Mks0dkZDRHc9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJqelExbXY5aVpxU1BZd1NnbVk4Nnd4dzhTT3NrNDVCVWNCREdCK1FUeFlVRnowYmdVNWV0NVNUWW1mcjFPcGpnVmdjUWN4dU1ycXZ4TzFoOGs0OGFCUT09XCJ9LFwibWVcIjp7XCJpZFwiOlwiOTk0NDAwNzQ0MDUwOjVAcy53aGF0c2FwcC5uZXRcIixcIm5hbWVcIjpcIkRlaGErXCIsXCJsaWRcIjpcIjYxODUyMjA5OTYzMDIyOjVAbGlkXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTk0NDAwNzQ0MDUwOjVAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCYXhKbnE0Q0dVV1U0c05XZm9ocFdjbitNUlRZenh0QlRxUEJKcCtUb1E5NFwifX1dLFwicGxhdGZvcm1cIjpcInNtYmFcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDY1MzI1MzUsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBT3FXXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3FXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSEhzZXlSUzBSOE5QNEJ5S0lSUTRYOGp6WUoxN1JsWVpJU1BNNXJBWHR2VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTEwMTM1MDg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDY1MzI1NDUxMDJcIn0iCn0=",
  userImages:process.env.USER_IMAGES|| "",
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || "3",
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "true", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "true",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "true",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || false,
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| false,
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
