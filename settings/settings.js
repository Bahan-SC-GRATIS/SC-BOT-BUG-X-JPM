global.nomorbot = '62xxx'
global.namabot = 'AanzCuyxzz-V2'
global.namaowner = 'AanzCuxyzz'
global.urlfoto = 'https://e.top4top.io/p_3229zf3gp0.jpg'
global.link = 'https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D'
//Cpanel V1
global.domain = ''
global.apikey = ''
global.capikey = ''
//Cpanel V2
global.domain2 = ''
global.apikey2 = ''
global.capikey2 = ''
global.eggs = '15'
global.locc = '1'
//Cpanel V3
global.domain3 = ''
global.apikey3 = ''
global.capikey3 = ''
//ettings Apikey And Qris Order Kuota
global.Merchant = 'Info Ini Is Id Merchant Ya'
global.idOrkut = 'Ini Isi Qris Merchantnya'
global.ApiOrkut = '895965317326849802014841OKCT3A85BD1682B851EFE592AB050017DD82'
//Settings Payment
global.dana = '6285813708397'
global.gopay = '6285813708397'
global.ovo = 'Lom Ada Hhew'
//Setting Gif
module.exports = {
  videoUrls: [
    'https://files.catbox.moe/s5sslo.mp4',
    'https://files.catbox.moe/m3xnbh.mp4',
    'https://files.catbox.moe/iyqnvx.mp4',
  ]}
if (!global.menuVideoIndex) {
    global.menuVideoIndex = 0;
    }
global.kiw = '`'
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
