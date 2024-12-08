const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/4e4dfe896a9ebe434ff7a.jpg`},caption: `Hello ${pushname}, hello iam created by Hashan Sathsara🌝❤️‍🔥 !`},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
