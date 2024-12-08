const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "GmB3XIAS#xE1yOkOZTnuTpo2D87q11DMRFn5pge9DHGavCGWt3QY",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",    
}
