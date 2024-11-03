//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/uagjxp.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27630092157";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/6vfu7v.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FGRkFQVjFRRU5ZMDBQT0h3Mk9HK3hYTWRiRHJjd0RubEMwT2NYWGlsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05VYlNxMGRFZkdxa1dENCtzQTNINFFxVk15NDc5SDM1c01MbmI2UEVUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSGhkQXk2dk15NlJ4c0lmUGk4Z2ZTVERqZlVqaWtwMXpiWnQzSkZ2U0ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RGtCUm9SVG45Ly8rWDgzMHo0dy9CdHlrRERsanJaYUhtMWhISjhiL3lJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVPemVYUnYxbWhVUWYyMmJWbUZ3OCs5OGQ5dEFzcjltTkEwUFZlSHBsWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHbFlxYTdrckNNOEZWSjgxQkhVd09ZOXJvTGc3NFpKZWV4ejIrQ1dSVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUREb3lodE5yaXRZSGdtWXRRUytscmdPdVl3a1cwTkM2UzNpaVdWUGVWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGtJM21SZEhXOHEwWVhTcXJBcitBL3plWEJEckc5Ujk5dUNSc2JvcFZIRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVGMjhXZ2FUM3cwbVV1c25iQnFiTXdFbXNJMXVJelpnLzZKY0FtSDNhaTZjREV4eTA0NXpiYVZsNFdjOWd0ZitkMkhidTMvclNVc0k3YkFJZC9BNUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODcsImFkdlNlY3JldEtleSI6IndPbnI4TEk3VEZMVkJER2dIa2RHV3VLYzdaNkRwTXF0WkFCOC9vWERUNWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhhN21PZkhEU1BpR0duSG9nbE5fVlEiLCJwaG9uZUlkIjoiNjFkYTllMjgtMjVmZi00NjA4LWEyZmYtYTBkNmZkZDQ3MmVhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitRRDRZUEZWM3A3TWRuRHd3bWQ1Tm42L3pxMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrc0tUcEpBU1N3TmhrZW5CTHNQMWErR0pUaFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVJGUU42RDkiLCJtZSI6eyJpZCI6IjI3NjMwMDkyMTU3OjJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pEay85Y0JFUCtubmJrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhLMkFaMEdwMU14SEhIei9oTDRvVVdYR243YVdqRXBQYWg2bDMxWnFRV0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5MdTBjTmVpZURzOWduSFlrVjVUczRyTHpjUjlobWE0YzQwSFhVTVNLQXNFYnhyNmhJRkFCVmQ2QUFjVlpyT1RCNEp3RnEwdTAwL01DYjQxS21PWkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRYVVCK3RZYkxRdzBoc0FpRDY4RFpCUXBPdUFLOHIyQ2x6UFBGdXVWNWlWakdzNk15NnczOFYzc0NXdisrYTRiWm9tc243dGMyK0VSeTI1N2x3QnpCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjMwMDkyMTU3OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVN0Z0dkQnFkVE1SeHg4LzRTK0tGRmx4cCsybG94S1Qyb2VwZDlXYWtGZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDYzMDY2OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJSHcifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "-",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`theCyleeBot ❤️🧸™`",
  author: process.env.PACK_AUTHER || "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "c y l e e",
  botname: process.env.BOT_NAME || "theCyleeBot ❤️🧸",
  ownername: process.env.OWNER_NAME || "🦇🅃🅆🄸🅉🅉🅈🦇",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
