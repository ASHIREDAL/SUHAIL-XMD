const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254729984157";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_21_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQyLFxuICAgICAgICA0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc1LFxuICAgICAgICA1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM2LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0Vi9aQ1VWd1d5ZnlqdHl1YWJNMFBBcTM2ZllRU2d1UmZxRnppZE1OTXZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhRmtjTlZURlN5R003SWdlMzlQSUxBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY3ZWVjOWJiLThmMzQtNDg0ZS05NzJkLWU4ZGFhMTI2NjU2N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDIzNSxcbiAgICAgIDIzMixcbiAgICAgIDE2OSxcbiAgICAgIDgxLFxuICAgICAgMixcbiAgICAgIDE0NSxcbiAgICAgIDkxLFxuICAgICAgMTE4LFxuICAgICAgNTUsXG4gICAgICAxOTUsXG4gICAgICAyNDEsXG4gICAgICA1NCxcbiAgICAgIDEzOSxcbiAgICAgIDM3LFxuICAgICAgMjAsXG4gICAgICAxMDksXG4gICAgICAyNTMsXG4gICAgICAxOTgsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDE1NixcbiAgICAgIDIxMixcbiAgICAgIDIyLFxuICAgICAgOTksXG4gICAgICAyNyxcbiAgICAgIDEwNCxcbiAgICAgIDE2MCxcbiAgICAgIDE2MCxcbiAgICAgIDY2LFxuICAgICAgNTEsXG4gICAgICAyMTEsXG4gICAgICAxMDAsXG4gICAgICAxODksXG4gICAgICAyNDIsXG4gICAgICA3NyxcbiAgICAgIDU5LFxuICAgICAgMjEzLFxuICAgICAgNDIsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTTkNKNVRLWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI5OTg0MTU3OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDQwNDIwNTUzNTQ3NDo1OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTHFncDBHRUtXbCtyZ0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInExeWNHRDRHbHFXK2ZqVUV2QkdjbTBMV1doeUZ4NmFZMmV3ODdGQnBzelU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOWtpWlh0ZjNRZXV4dlliR0FWWmo0VndVeDNaSjJoaWV2VG1NZEovYzB3TmVsSFZxRkpFNkRqMkdRTVJuNUFyMFJQNDRCYkR4YlBaaW5jRTNNb3FIQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWnI3d2kzVUJyTk05TVIwZVVLTzFFSWhUdjE2SGlkeXhMRnBjYmRNY1BQaDJQeUZRYXROTXZqRUs1RVdpenlIYlJqMG1CdDJUamdNTndGTXJnSkgxQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI5OTg0MTU3OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMDU2ODczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDUyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFINTIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwcUdaR2N1ZExhdWkrK2YxQjNXVTc2NjJ1UWIrNVNvQ05mN0NlOEl5TGtFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NzE0NzY1MTQsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAwNTY4MjkwNjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "SOMALIAN",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "SOMALIAN-BREED",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
