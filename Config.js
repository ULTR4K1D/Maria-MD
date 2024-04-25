const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "27656607736"],
global.ownername = process.env.OWNER_NAME || "ULTR4K1D ",
global.ytname = "YT: ULTRAPLANETS TECHNOLOGY "
global.socialm = "Facebook: ULTRAPLANETS TECHNOLOGY "
global.location = "ZIMBABWEAN"

global.botname = process.env.BOTNAME || "DEMON-HUNTER",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "ULTR4K1D ",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "ULTR4K1D ",
//console view/theme
global.themeemoji = '🧩'
global.wm = "ULTRAPLANETS TECH"

//theme link
global.link = 'https://whatsapp.com/channel/0029VaHsksk9cDDeu1mtEd1z'

//custom prefix
global.prefa = process.env.PREFIX,

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *Here you go, mate!* ',
    prem: '🍭 *Mate, this feature is reserved for premium users only*',
    admin: '🍭 *Mate, this feature is reserved for admins only*',
    botAdmin: '🍭 *Dude, this feature can only be used when the bot is a group admin* ',
    owner: '🍭 *Mate, this feature is reserved for the owner only*',
    group: '🍭 *mate, this feature is exclusively for groups*',
    private: '🍭 *Mate, this feature is exclusively for private chats*',
    wait: '🍭 *processing...* ',    
    error: '🍭 *Oh mate, there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
