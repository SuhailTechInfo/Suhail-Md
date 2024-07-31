const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "SUHAIL_21_19_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDksXG4gICAgICAgIDU3LFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICA0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY4LFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzgsXG4gICAgICAgIDM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMzLFxuICAgICAgICA1NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICA3NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVIWitNUmRsTHR0R2gzd2FycVlESTJHY3o2U3NxNDUxSXJ2b1FnVlEvM2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzc2ODIxNzY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5NTIyRTdENEFBMjBCNUZDODI5RUJCRDQ3RkM1QTkyRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0NjA3NTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib1kwNDlBTF9SVkc1cGJhS2RmbmpTd1wiLFxuICBcInBob25lSWRcIjogXCJhNTc2NWY1Ny01MWUzLTRhNmEtYTE0ZS04NDI2MTY2ZDQzYmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAxNzUsXG4gICAgICAxODcsXG4gICAgICAxNDcsXG4gICAgICA1MSxcbiAgICAgIDE1MCxcbiAgICAgIDE0NixcbiAgICAgIDEwLFxuICAgICAgMjAxLFxuICAgICAgMTU0LFxuICAgICAgMjA3LFxuICAgICAgMjUyLFxuICAgICAgMjU1LFxuICAgICAgMCxcbiAgICAgIDIyMSxcbiAgICAgIDE0MixcbiAgICAgIDcxLFxuICAgICAgMzUsXG4gICAgICAyMTksXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMyxcbiAgICAgIDE3MixcbiAgICAgIDEyNSxcbiAgICAgIDM4LFxuICAgICAgOCxcbiAgICAgIDMyLFxuICAgICAgMTgxLFxuICAgICAgMjEzLFxuICAgICAgMjMxLFxuICAgICAgMjQwLFxuICAgICAgMjExLFxuICAgICAgMTI5LFxuICAgICAgMTk3LFxuICAgICAgMjIwLFxuICAgICAgMjM0LFxuICAgICAgNzYsXG4gICAgICA0OCxcbiAgICAgIDIxMixcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhGSkpFMkdIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzY4MjE3NjY6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NTg2ODE5MTkwNzk0NDoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdUYzS2dFRU1UVXFyVUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkwva1Q5SzVnUHY5YzgxOFhOSDRvVjU3N0daRnZOcW1zK201bWNXMXFRVmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiME0xQmxGc3ZSamV2RHB5RGlCd3NCd2lqNUx2SkdZYnYzZ0J0N1ZYTEYvNUhyNjRBZi9IYTh0MUM5Wk0xMWIwQkVzc1N6Mi8wbjdQdkc1Nk9jZERvQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUyt5R1NkVU1iWUxGR1pHU3V2akxKTTVwaGhQR0o0N09SV1Y1QWhMTFBySXdBcDRNR0hUcWVGcnVCSEhwaUM4Nzl3RWM0ZmdZV1NibWFrdXRYV1FSZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc2ODIxNzY2OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ2MDc0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZFTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkVOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMDBHSndFakpJUzB4MW5pRklFa3dqM2lmK0FJQ0JSa1RURG41d0Q0QXRLOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU5MTM1OTc5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjM0NjU4Mzg4M1wifSIKfQ=="                       // put your app url here,
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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


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
