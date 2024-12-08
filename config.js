const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "yjZz1YiT#CY1QUpZfSK7QxYSIfPletvlLQXTXLW9l94uD9trddVE",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",    
}
