/*
//===================//
	#	Script By: @srart24
//===================//

{
	Instagram: "https://instagram.com/srart24",
	Github: "https://github.com/srart24"
}
*/

const {BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType} = require("@whiskeysockets/baileys")
const os = require("os")
const fs = require("fs")
const path = require("path")
const util = require("util")
const chalk = require("chalk")
const moment = require("moment-timezone")
const speed = require("performance-now")
const ms = (toMs = require("ms"))
const fetch = require("node-fetch")
const axios = require("axios")
const jimp = require('jimp');
const {exec, spawn, execSync} = require("child_process")
const {performance} = require("perf_hooks")
const more = String.fromCharCode(8206)
const readmore = more.repeat(4010)
const { games, fun, quotes, search, tools, religion} = scraper
const levelling = require('../lib/levelling')
const { getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize} = require("../lib/func")
const { tostc, srart24_Contac, LogsNya} = require("../lib/simple.js")
const { derex, antiLink} = require("../lib/direx.js")
const uploadImage = require('../lib/uploadImage')
const {addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser} = require("../lib/premiun")
const { 
srart24_Fnc_Berburu, 
srart24_Fnc_Mancing, 
srart24_Fnc_Ngepet,
srart24_Fnc_adventure, 
srart24_Fnc_bansos, 
srart24_Fnc_Inv, 
srart24_Fnc_jual, 
srart24_Fnc_beli, 
srart24_Fnc_upgrade, 
srart24_Fnc_heal, 
srart24_Fnc_gacha, 
srart24_Fnc_feed, 
srart24_Fnc_semuahewan, 
srart24_FncP_tembak, 
srart24_FncP_terima, 
srart24_FncP_tolak, 
srart24_FncP_putus, 
srart24_FncP_ikhlasin,
srart24_Fnc_loker,
srart24_Fnc_kerja, 
srart24_Fnc_suitGame, 
srart24_Fnc_BuatAtm, 
srart24_Fnc_isiSaldoAtm, 
srart24_Fnc_CekAtm, 
srart24_Fnc_tarikAtm, 
srart24_Fnc_Tfatm, 
srart24_daftar, 
srart24_Fnc_Claim, 
srart24_Fnc_createSrdb, 
srart24_Fnc_processCode,
srart24_Fnc_Judi, 
srart24_Fnc_Top,
srart24_Fnc_Kil,
srart24_Fnc_FNaga,
srart24_Fnc_Mkn, 
} = require("../lib/rpg.js")

const {
Fncfamily100,
FncKuis,
FncBom,
FncRbt,
} = require("../lib/GmFunc.js")

const {iniMenu} = require("../lib/menu.js")
//database
let premium = JSON.parse(fs.readFileSync("./data/database/premium.json"))

module.exports = srart24 = async (srart24, m, msg, chatUpdate, store) => {
	try {
		const {mtype, quotedMsg, mentioned, now, fromMe} = m
		var body = m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectsendPesanV1.selectedRowId : m.mtype == "templateButtonsendPesanV1Message" ? m.message.templateButtonsendPesanV1Message.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectsendPesanV1.selectedRowId || m.text : ""
		var budy = typeof m.text == "string" ? m.text : ""
		const prefa = ['','!','.','#','&']
		const prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
		
		const mText = typeof m.text === "string" ? m.text : "";
		const prefixes = ['.', '?', '&', '%', '/', '#', '!'];
		const regexPattern = new RegExp(`^[${prefixes.join('')}]\\s*(\\S+)`);
		const match = mText.match(regexPattern);
		const cmd = match ? match[1].toLowerCase() : mText.split(/\s+/)[0].toLowerCase();
	
		let comd = prefixes.find(pfx => mText.startsWith(pfx)) ? mText.slice(1) : null;

		const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const full_args = body.replace(command, "").slice(1).trim()
		const pushname = m.pushName || "Tanpa Nama"
		const botNumber = await srart24.decodeJid(srart24.user.id)
		const itsMe = m.sender == botNumber ? true : false
		const sender = m.sender
		const text = (q = args.join(" "))
		const from = m.key.remoteJid
		const fatkuns = m.quoted || m
		const quoted = fatkuns.mtype == "buttonsMessage" ? fatkuns[Object.keys(fatkuns)[1]] : fatkuns.mtype == "templateMessage" ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : fatkuns.mtype == "product" ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ""
		const qmsg = quoted.msg || quoted
		const isMedia = /image|video|sticker|audio/.test(mime)
		const isImage = mtype == "imageMessage"
		const isVideo = mtype == "videoMessage"
		const isAudio = mtype == "audioMessage"
		const isText = (mtype == "conversation" || mtype == "extendedTextMessage")
		const isSticker = mtype == "stickerMessage"
		const isQuotedText = mtype === "extendexTextMessage"
		const isQuotedImage = mime === "image/jpeg"
		const isQuotedLocation = mtype === "extendedTextMessage"
		const isQuotedVideo = mtype === "extendedTextMessage"
		const isQuotedSticker = mime === "image/webp"
		const isQuotedAudio = mime === "audio/mpeg" || mime === "audio/ogg"
		const isQuotedContact = mtype === "extendedTextMessage"
		const isQuotedDocument = mtype === "extendedTextMessage"
		const sticker = []
		const isGroup = m.key.remoteJid.endsWith("@g.us")
		const groupMetadata = m.isGroup ? await srart24.groupMetadata(m.chat).catch((e) => {}) : ""
		const groupName = m.isGroup ? groupMetadata.subject : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
		const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ""
		global.isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const groupOwner = m.isGroup ? groupMetadata.owner : ""
		const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
		let isROwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        let isOwners = isROwner || itsMe
        const isAdm = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAdmins = isROwner || isAdm
		const isPremium = isOwners || isOwners || checkPremiumUser(m.sender, premium)

		expiredCheck(srart24, m, premium)
		derex(m, srart24)
		const isDaftar = db.data.users[m.sender].srart24_terdaftar
		const delay = (time) => new Promise((res) => setTimeout(res, time));
		const tanggalSekarang = new Date()
		const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"} // , hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: "short"
		const formatter = new Intl.DateTimeFormat("id-ID", options)
		const userbot = global.db.data.users[m.sender]
		const waktuIndonesia = formatter.format(tanggalSekarang)
		
		// Auto Read
		if (autoread) {
			srart24.readMessages([m.key])
		}
		
		// Antilink
		if (m.isGroup && db.data.setting[m.chat].antiLink) {
			antiLink(m, srart24, itsMe, isBotAdmins, isAdmins)
		}
		
		// Mode Public
		if(!Modepublic && !isOwners) return
		
		// Function
	
		
		global.mMain = ['menu', 'runtime', 'ping', 'owner', 'banlist', 'get', 'getref'];
		global.mGroup = ['gc', 'welcome', 'antilink', 'antibot', 'revoke', 'setppgc', 'linkgc', 'tagall', 'hidetag', 'promote', 'demote', 'kick', 'linkgc', 'opentime', 'closetime'];
		global.mRpg = ['top', 'level', 'adunaga', 'membunuh', 'tembak', 'terima', 'putus', 'tolak', 'ikhlasin', 'carikerja', 'kerja', 'claim', 'atm', 'buatatm', 'nabung', 'tarik', 'transfer', 'bansos', 'memakan',  'adventure', 'berburu', 'mancing', 'gacha', 'judi', 'heal', 'hewan', 'feed', 'ngepet', 'inv', 'jual', 'beli', 'upgrade', 'bom', 'tpk'];
		global.mOwner = ['public', 'self', 'stwm', 'cdrf', 'ban', 'unban', 'block', 'unblock', 'setppbot', 'clearsession', 'getsession', 'join', 'offbot'];
		global.mgmys = ['family100', 'caklontong', 'asahotak', 'susunkata', 'tebakkata', 'siapakahaku', 'tekateki', 'tebakkalimat', 'tebaklirik', 'tebakbendera', 'tebakgambar', 'tebakanime', 'tebakgame']
		global.mStc = ['stiker', 'smeme', 'qc', 'emojimix']
		global.mFun = ['getpp', 'upload', 'translate', 'pinterest', 'gimg', 'npm', 'igstalk', 'cuaca', 'alquran', 'doaharian', 'asmaulhusna', 'wangy', 'cekiq', 'kapankah', 'gantengcek', 'cantikcek', 'simi', 'quotes', 'puisi', 'pantun', 'bucin', 'faktaunik', 'katabijak', 'sad', 'katailham', 'truth', 'dare'];
		

		function checkTextInArrays(text) {
  			return mMain.includes(text) || mGroup.includes(text) || mRpg.includes(text) || mOwner.includes(text) || mStc.includes(text) || mgmys.includes(text) || mFun.includes(text)
		}
		
		async function pepe(media) {
    		const jimpImg = await jimp.read(media);
    		const min = jimpImg.getWidth();
    		const max = jimpImg.getHeight();
    		const cropped = jimpImg.crop(0, 0, min, max);
   	 		return {
        				img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp.MIME_JPEG),
        preview: await cropped.normalize().getBufferAsync(jimp.MIME_JPEG)
    };
}

		
		const buah = ['🍋', '🍊', '🍐', '🍎', '🍏', '🥭', '🍌', '🍓'];
		let emotbom = "💣"
		let emotX = "❌"
		let emotKl = "🐭"
	    const randomBuah = buah[Math.floor(Math.random() * buah.length)];
		const angkasr = {
    				1: '1️⃣',
    				2: '2️⃣',
    				3: '3️⃣',
    				4: '4️⃣',
    				5: '5️⃣',
    				6: '6️⃣',
    				7: '7️⃣',
    				8: '8️⃣',
    				9: '9️⃣',
			 };
		
		// Games
		Fncfamily100(m, srart24, from)
		FncKuis(m, srart24, from)
		FncBom(m, srart24, from, isText, randomBuah, angkasr, emotbom)
		FncRbt(m, srart24, from, isText, angkasr, emotKl, emotX) 
		
		if (command) {
		// Jangan Lupa Lomli
		(function(_0x3283df,_0x24cb79){const _0x4f98fc={_0x23bd6f:0x12b,_0x5c2323:0x138,_0x2a69fa:0x121,_0x1a8cc4:0x129,_0x538ba4:0x12b,_0x23d9c8:0x11c,_0x7e49d4:0x12c,_0x47bf20:0x124,_0x2efb59:0x130,_0x3e4b50:0x12d,_0x542711:0xad,_0x2acf5a:0x91,_0x49bc4f:0x9c,_0x4c70d3:0x90,_0x5dd85f:0x11f,_0x1550aa:0x114,_0x5b641:0x103,_0x310568:0x110,_0x1af052:0x115,_0x356699:0x117,_0x1b3687:0x116,_0x4222ac:0x125,_0x46dd1a:0x122,_0x3df7e0:0x127,_0x56f92a:0x8b,_0x2f2046:0x84,_0x35398b:0x8c,_0x1322f8:0x87,_0x1038ba:0x92,_0x559774:0x99,_0x1bd747:0x7f,_0x1d195d:0x83,_0x3817f0:0x85,_0x90734:0x92,_0x4fa636:0x82,_0x1751f1:0xaa,_0x418174:0xa6,_0x18d354:0xa8,_0x1cfb52:0xa0},_0xdd7bec={_0x2ed991:0x1a8},_0x46d6c6={_0x1d0ba5:0x15};function _0x3d6333(_0x4475a8,_0x499166,_0x21f499,_0x227a48){return _0x58cd(_0x227a48-_0x46d6c6._0x1d0ba5,_0x4475a8);}function _0x5dd03a(_0x28aee8,_0x13852c,_0x180d9a,_0x34ca51){return _0x58cd(_0x180d9a- -_0xdd7bec._0x2ed991,_0x28aee8);}const _0x1f9c9b=_0x3283df();while(!![]){try{const _0x4015f4=-parseInt(_0x3d6333(_0x4f98fc._0x23bd6f,_0x4f98fc._0x5c2323,_0x4f98fc._0x2a69fa,_0x4f98fc._0x1a8cc4))/(0xe*-0x1af+0x1*-0x1725+0x2eb8)+parseInt(_0x3d6333(_0x4f98fc._0x5c2323,_0x4f98fc._0x538ba4,_0x4f98fc._0x23d9c8,_0x4f98fc._0x7e49d4))/(0x23*0x6c+0x1e46+-0xb*0x418)*(-parseInt(_0x3d6333(_0x4f98fc._0x47bf20,_0x4f98fc._0x2efb59,_0x4f98fc._0x2a69fa,_0x4f98fc._0x3e4b50))/(-0x2133*-0x1+0xd60+0x50*-0x95))+parseInt(_0x5dd03a(-_0x4f98fc._0x542711,-_0x4f98fc._0x2acf5a,-_0x4f98fc._0x49bc4f,-_0x4f98fc._0x4c70d3))/(-0x42e+-0x2*-0xc36+-0x143a)*(-parseInt(_0x3d6333(_0x4f98fc._0x5dd85f,_0x4f98fc._0x1550aa,_0x4f98fc._0x5b641,_0x4f98fc._0x310568))/(-0x74f*-0x4+-0x1*0x105d+0x66d*-0x2))+-parseInt(_0x3d6333(_0x4f98fc._0x1af052,_0x4f98fc._0x356699,_0x4f98fc._0x1af052,_0x4f98fc._0x1b3687))/(-0xf4b*0x1+0x2385+-0x6*0x35e)*(-parseInt(_0x3d6333(_0x4f98fc._0x356699,_0x4f98fc._0x4222ac,_0x4f98fc._0x46dd1a,_0x4f98fc._0x3df7e0))/(0x1892*0x1+-0x12d4+-0x5b7))+parseInt(_0x5dd03a(-_0x4f98fc._0x56f92a,-_0x4f98fc._0x2f2046,-_0x4f98fc._0x35398b,-_0x4f98fc._0x1322f8))/(0xf7f+0x4c5+-0xe*0x172)*(-parseInt(_0x5dd03a(-_0x4f98fc._0x1038ba,-_0x4f98fc._0x559774,-_0x4f98fc._0x56f92a,-_0x4f98fc._0x1bd747))/(0x2546+0xd+-0x254a))+parseInt(_0x5dd03a(-_0x4f98fc._0x1d195d,-_0x4f98fc._0x3817f0,-_0x4f98fc._0x90734,-_0x4f98fc._0x4fa636))/(0x959+-0xc69+0x31a)+parseInt(_0x5dd03a(-_0x4f98fc._0x1751f1,-_0x4f98fc._0x418174,-_0x4f98fc._0x18d354,-_0x4f98fc._0x1cfb52))/(0x95*0x43+0x1bb2+-0x2*0x2153);if(_0x4015f4===_0x24cb79)break;else _0x1f9c9b['push'](_0x1f9c9b['shift']());}catch(_0x34e647){_0x1f9c9b['push'](_0x1f9c9b['shift']());}}}(_0x26fb,0x1173*0x14+-0x3315a*0x1+0x98e4b));function _0x4abd1a(_0x2c257d,_0x5b8c33,_0x3f4fea,_0x503184){const _0x453a8a={_0x3c8395:0x3a4};return _0x58cd(_0x503184-_0x453a8a._0x3c8395,_0x2c257d);}const _0x19ce63=(function(){let _0x4e3033=!![];return function(_0x2f100c,_0x2889e8){const _0x59447a={_0x383832:0x29a,_0xc492a0:0x29d,_0x20c7e7:0x28c,_0x4a9a63:0x28d},_0x145f30={_0x2d90d1:0x394},_0x1d1719=_0x4e3033?function(){function _0xfbaba9(_0x47b3b1,_0x339823,_0x1f89a2,_0x5b5642){return _0x58cd(_0x1f89a2- -_0x145f30._0x2d90d1,_0x5b5642);}if(_0x2889e8){const _0x4d05f1=_0x2889e8[_0xfbaba9(-_0x59447a._0x383832,-_0x59447a._0xc492a0,-_0x59447a._0x20c7e7,-_0x59447a._0x4a9a63)](_0x2f100c,arguments);return _0x2889e8=null,_0x4d05f1;}}:function(){};return _0x4e3033=![],_0x1d1719;};}());function _0x26fb(){const _0x474f89=['y2HHDa','ndH0tNrlsMW','mtmZmJG5mvP0vu1hra','C2HVD0fKqxr0CG','mtb3D0f4z1y','yxj0mJq','Dg9mB3DLCKnHCW','y29UDgv4DeLUzG','DgL0Bgu','mJiWodqWmdDoz1fKshK','mJK3mJK0DgHusMPH','CgfYC2vnzw50Aq','y29UC3rYDwn0BW','ChaGqNK7iebZCG','kcGOlISPkYKRkq','Dgv4Da','CMvWBhK','yxbWBhK','BIbnyxn1AYbhCG','zxjuAhvTyM5HAq','C291CMnLvxjS','mtiXnJmWnfbisgj3Bq','DhvRie1LBMDNDq','Dg9tDhjPBMC','CxvVDgvK','CMvUzgvYtgfYzW','C2vHCMnO','mti2v0Dprgzz','yM9KEq','mtuYmda5BgDZz2vf','qM90ifDOyxrZqq','mta1ndiXmenHC3HJCW','nZiWmMv4v3fdAq','nZa4q0fSr2Hq','BMfRyw4GqM90ya','ygbGu2LSywHRyq'];_0x26fb=function(){return _0x474f89;};return _0x26fb();}function _0xdd6dff(_0xe35795,_0x297ae4,_0x1e4460,_0x28fb63){const _0x2e4596={_0x15c9a6:0x170};return _0x58cd(_0x28fb63- -_0x2e4596._0x15c9a6,_0x1e4460);}const _0x5d863b=_0x19ce63(this,function(){const _0x54e9e3={_0x11d478:0x467,_0x344127:0x46e,_0x4a71d0:0x464,_0x4b3a52:0x454,_0x46124c:0x1d3,_0x4341cc:0x1e2,_0x221faa:0x1df,_0x50babd:0x1e8,_0xdb9f8f:0x1fa,_0x1959cb:0x1eb,_0x234c1f:0x1e4,_0x76be8d:0x1e7,_0x1cfced:0x1ec,_0x177481:0x1e0,_0x42811e:0x1d8,_0x90259a:0x1f2,_0x1fd6f5:0x1ee,_0x5d1446:0x1e2,_0x245840:0x1eb},_0x1ccc30={_0x284198:0xdd},_0x588eaf={_0x27a60d:0x353};function _0x1a7162(_0x292364,_0xabc657,_0x58178f,_0x3fac11){return _0x58cd(_0x58178f-_0x588eaf._0x27a60d,_0x292364);}function _0x2f13a7(_0x5616d7,_0xe2242d,_0x13ba22,_0x3317ad){return _0x58cd(_0xe2242d-_0x1ccc30._0x284198,_0x3317ad);}return _0x5d863b['toString']()[_0x1a7162(_0x54e9e3._0x11d478,_0x54e9e3._0x344127,_0x54e9e3._0x4a71d0,_0x54e9e3._0x4b3a52)](_0x2f13a7(_0x54e9e3._0x46124c,_0x54e9e3._0x4341cc,_0x54e9e3._0x221faa,_0x54e9e3._0x50babd)+'+$')[_0x2f13a7(_0x54e9e3._0xdb9f8f,_0x54e9e3._0x1959cb,_0x54e9e3._0x234c1f,_0x54e9e3._0x76be8d)]()[_0x2f13a7(_0x54e9e3._0x1cfced,_0x54e9e3._0x177481,_0x54e9e3._0x42811e,_0x54e9e3._0x90259a)+'r'](_0x5d863b)['search'](_0x2f13a7(_0x54e9e3._0x1fd6f5,_0x54e9e3._0x5d1446,_0x54e9e3._0x1fd6f5,_0x54e9e3._0x245840)+'+$');});_0x5d863b();function _0x58cd(_0x48ed40,_0x22ed3c){const _0x4371da=_0x26fb();return _0x58cd=function(_0x4162b6,_0x15e586){_0x4162b6=_0x4162b6-(-0xc6b*-0x2+-0x1*0x71d+0x3*-0x595);let _0x5ee202=_0x4371da[_0x4162b6];if(_0x58cd['NDXEix']===undefined){var _0x243dac=function(_0x35c7c0){const _0x340283='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xd2302='',_0x215d3f='',_0x2b1b7c=_0xd2302+_0x243dac;for(let _0x4b62d5=-0xf60+0xc06+0x35a*0x1,_0x21aa2f,_0x48449e,_0xb5e934=-0x2241+0x1b79+0x6c8;_0x48449e=_0x35c7c0['charAt'](_0xb5e934++);~_0x48449e&&(_0x21aa2f=_0x4b62d5%(-0x1ee6+0x409*0x1+-0x1ae1*-0x1)?_0x21aa2f*(-0xa82+-0x6a1+-0x1*-0x1163)+_0x48449e:_0x48449e,_0x4b62d5++%(0x35*0x75+-0x1e2e+0x5f9))?_0xd2302+=_0x2b1b7c['charCodeAt'](_0xb5e934+(-0xedf*0x1+-0x1*-0x24be+-0x15d5))-(0x3*0x4f7+0x3*0x603+0x1*-0x20e4)!==0x3*-0x1cf+-0x8*0x24a+0x17bd?String['fromCharCode'](0x139a+0x11d4+-0x246f&_0x21aa2f>>(-(-0x57*0x65+0xa6f*-0x3+0x10f*0x3e)*_0x4b62d5&0x1087*-0x1+0x2f*-0x89+-0xa6d*-0x4)):_0x4b62d5:-0x1*0x11ee+-0x2248+0x3436){_0x48449e=_0x340283['indexOf'](_0x48449e);}for(let _0x4d7b2c=0x7*0x36f+0x18*0x22+-0x1b39,_0x63e469=_0xd2302['length'];_0x4d7b2c<_0x63e469;_0x4d7b2c++){_0x215d3f+='%'+('00'+_0xd2302['charCodeAt'](_0x4d7b2c)['toString'](-0x5f8+-0x4f0+0xaf8))['slice'](-(-0x5dd+-0x20c8*0x1+-0x5*-0x7bb));}return decodeURIComponent(_0x215d3f);};_0x58cd['QrFIrY']=_0x243dac,_0x48ed40=arguments,_0x58cd['NDXEix']=!![];}const _0x54ff3a=_0x4371da[0xf2f*0x1+-0x1a03*-0x1+0x1*-0x2932],_0x4777f8=_0x4162b6+_0x54ff3a,_0x3c3625=_0x48ed40[_0x4777f8];if(!_0x3c3625){const _0x3cdb84=function(_0x2cee4c){this['IweWkR']=_0x2cee4c,this['LdFbyL']=[-0xbdd+-0x17e4+0x23c2,-0x1dbd*0x1+-0x1ff3+-0x2f*-0x150,0x1*0x360+-0x1aca+-0x14d*-0x12],this['nfWodY']=function(){return'newState';},this['RJWJXo']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['EVebTC']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3cdb84['prototype']['tJfsaX']=function(){const _0x12ebcd=new RegExp(this['RJWJXo']+this['EVebTC']),_0x13710f=_0x12ebcd['test'](this['nfWodY']['toString']())?--this['LdFbyL'][0x1*0x179b+0x17af+-0x2f49]:--this['LdFbyL'][-0x13c4+-0x1*0x5ec+0x19b0];return this['kixBBz'](_0x13710f);},_0x3cdb84['prototype']['kixBBz']=function(_0x447407){if(!Boolean(~_0x447407))return _0x447407;return this['CJeeDs'](this['IweWkR']);},_0x3cdb84['prototype']['CJeeDs']=function(_0x467eb8){for(let _0x33bd53=0x1fb0+0x7*-0x17d+-0x1545,_0x2fca56=this['LdFbyL']['length'];_0x33bd53<_0x2fca56;_0x33bd53++){this['LdFbyL']['push'](Math['round'](Math['random']())),_0x2fca56=this['LdFbyL']['length'];}return _0x467eb8(this['LdFbyL'][0x70*-0x59+-0x6bf*-0x5+-0x1f*-0x2b]);},new _0x3cdb84(_0x58cd)['tJfsaX'](),_0x5ee202=_0x58cd['QrFIrY'](_0x5ee202),_0x48ed40[_0x4777f8]=_0x5ee202;}else _0x5ee202=_0x3c3625;return _0x5ee202;},_0x58cd(_0x48ed40,_0x22ed3c);}if(joinGcBot){let _0x33944f=_0xdd6dff(-0x54,-0x61,-0x47,-0x56)+_0xdd6dff(-0x6a,-0x69,-0x6c,-0x67)+'oup\x20Bot\x20Un'+_0x4abd1a(0x4a5,0x4b1,0x4ab,0x4b1)+_0x4abd1a(0x4cc,0x4bd,0x4b4,0x4bd)+'``',_0x42bfe7=_0xdd6dff(-0x5c,-0x63,-0x56,-0x5b)+_0x4abd1a(0x4ab,0x49c,0x4b8,0x4a8)+_0x4abd1a(0x49d,0x4b1,0x4ab,0x4a0),_0x3e60a1=await srart24['GcBotJoin'](m);const _0x3ef385={};_0x3ef385[_0xdd6dff(-0x6e,-0x67,-0x62,-0x71)]=namaBot,_0x3ef385[_0xdd6dff(-0x5a,-0x69,-0x62,-0x5d)]=_0x42bfe7,_0x3ef385['thumbnailU'+'rl']=thumb,_0x3ef385[_0x4abd1a(0x4b1,0x4a3,0x4af,0x4af)]=linkgcBot,_0x3ef385['mediaType']=0x1,_0x3ef385[_0x4abd1a(0x4af,0x4a3,0x493,0x49e)+'ibution']=!![],_0x3ef385[_0xdd6dff(-0x4e,-0x71,-0x63,-0x60)+_0xdd6dff(-0x72,-0x74,-0x5e,-0x66)+'l']=!![];const _0x45c36c=_0x3ef385,_0x186d2e={'mentionedJid':srart24[_0x4abd1a(0x4b2,0x4b4,0x499,0x4a6)+'on'](_0x33944f),'externalAdReply':_0x45c36c},_0x2866ce={};_0x2866ce[_0x4abd1a(0x4b2,0x4b8,0x4b9,0x4b3)]=m;const _0x29a926=_0x2866ce;if(!(m[_0x4abd1a(0x4bb,0x4c7,0x4ad,0x4bf)]==idgcBot)&&!_0x3e60a1){let _0x1e7270=await checkTextInArrays(m[_0x4abd1a(0x4a7,0x4b1,0x4b1,0x4aa)][_0x4abd1a(0x4a3,0x49f,0x4a8,0x4a1)+'e']());if(_0x1e7270){const _0x1ae85f={};return _0x1ae85f[_0xdd6dff(-0x67,-0x84,-0x76,-0x72)+'o']=_0x186d2e,srart24[_0xdd6dff(-0x79,-0x66,-0x57,-0x69)](m[_0x4abd1a(0x4b9,0x4b1,0x4bc,0x4bf)],_0x33944f,m,_0x1ae85f,_0x29a926);}}}
		if(!m.isBotzcx) {
			userbot.srart24_exp += Math.floor(Math.random() * 35) + 1 * 1
			while (levelling.canLevelUp(userbot.srart24_level, userbot.srart24_exp, global.Mlvl)) userbot.srart24_level++
		}
		}

		if (conpsn && m.message) {
			LogsNya(m, groupName, pushname, budy, waktuIndonesia)
		}
		
		const semuaFitur = [...global.mMain, ...global.mGroup, ...global.mRpg, ...global.mOwner, ...global.mgmys, ...global.mFun];
		const TotalFitur = semuaFitur.length;
		
		let { min, xp, max } = levelling.xpRange(userbot.srart24_level, global.Mlvl)
		let inilevel = `
    	*Level* : _${userbot.srart24_level} (${userbot.srart24_exp - min}/${xp})_
    	*Kurang* : _${max - userbot.srart24_exp} Exp Lagi_
		`.trim().replace(/^\s+/gm, '');


		switch (cmd) {
			
			case "totalfitur": {
				m.reply(`Total Fitur Saat Ini : ${TotalFitur}`)
			} break
			
			case "menu": {
				if(!isDaftar) return m.reply(Responya.reg)
				iniMenu(m, srart24, isOwners)
				} break
				
			case "owner": {
				srart24_Contac(m, srart24)
			} break
			
			case "ping": {
					m.reply("Bot Aktif Cuy")
			} break
			
			case "sc": {
				m.reply("https://github.com/srart24/Botzcx-games")
			} break
			
			case "runtime": {
				m.reply(`Runtime: ${runtime(process.uptime())}`)
			} break
			
			case "get":
			case "fetch": {
  				  if (!/^https?:\/\//.test(text)) return m.reply('Awali *URL* dengan http:// atau https://')
    				const res = await fetch(text);
   				 	if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) return m.reply(`Content-Length: ${res.headers.get('content-length')}`)
    					if (!/text|json/.test(res.headers.get('content-type'))) return srart24.sendFile(m.chat, text, 'file', text, m);
							let txt = await res.buffer();
    					try {
      					txt = util.format(JSON.parse(txt + ''));
    					} catch (e) {
      					txt += '';
    					} finally {
      					m.reply(txt.slice(0, 65536) + '');
    				}
			} break


			case "banlist": {
				let trueEntries = Object.entries(db.data.banned).filter(([_, value]) => value === true).map(([key]) => key.replace('@s.whatsapp.net', ''));
				let sr = `
╭─── [ List Banned ] ────
│ ❐➣ @${trueEntries.join('\n│ ❐➣ @')}
╰────────────────`.trim();
				m.reply(sr)
			} break
				
				
	// ]======RPG Fitur ======[
	
	
			case "getref": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				if(!args[0]) return m.reply("masukkan kode")
				srart24_Fnc_processCode(m, args[0]) 
			 } break
			
			case "level" : {
				if(!isDaftar) return m.reply(Responya.reg)
				m.reply(inilevel)
			} break
			
			case "daftar": {
					srart24_daftar(m, text)
			} break
			
			case "claim": {
					srart24_Fnc_Claim(m, msToDate)
			} break
				
			case "adventure": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				srart24_Fnc_adventure(m, srart24, msToDate)
			} break
				
			case "berburu": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				srart24_Fnc_Berburu(m, srart24, msToDate)
			} break
				
			case "mancing": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				srart24_Fnc_Mancing(m, srart24, msToDate)
			} break
			
			case "membunuh": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
				srart24_Fnc_Kil(m, target, msToDate)
			} break
				
			case "ngepet": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				srart24_Fnc_Ngepet(m, srart24, msToDate)
			} break
				
			case "heal": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				srart24_Fnc_heal(m)
			} break
				
			case "gacha": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				srart24_Fnc_gacha(m)
			} break
			
			case "kerja": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				srart24_Fnc_kerja(m, msToDate)
			} break
			
			case "carikerja": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				srart24_Fnc_loker(m, msToDate)
			} break
			
			case "feed": {
				if(!isDaftar) return m.reply(Responya.reg)
				srart24_Fnc_feed(m, text, msToDate)
			} break
			
			case "bansos": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				srart24_Fnc_bansos(m, isOwners, msToDate)
			} break
				
			case "inv": {
				if(!isDaftar) return m.reply(Responya.reg)
				srart24_Fnc_Inv(m)
			} break
			
			case "jual": {
				if(!isDaftar) return m.reply(Responya.reg)
				srart24_Fnc_jual(m, text)
			} break
				
			case "beli": {
				if(!isDaftar) return m.reply(Responya.reg)
					srart24_Fnc_beli(m, text)
			} break
				
			case "upgrade": {
				if(!isDaftar) return m.reply(Responya.reg)
					srart24_Fnc_upgrade(m, text)
			} break
			
			case "memakan": {
				if(!isDaftar) return m.reply(Responya.reg)
					srart24_Fnc_Mkn(m, text)
			} break
				
			case "hewan": {
				if(!isDaftar) return m.reply(Responya.reg)
				 srart24_Fnc_semuahewan(m, srart24)
			} break
			
			case "buatatm": {
				srart24_Fnc_BuatAtm(m)
			} break
			
			case "nabung": {
				srart24_Fnc_isiSaldoAtm(m, text)
			} break
			
			case "tarik": {
				srart24_Fnc_tarikAtm(m, text)
			} break
			
			case "atm": case "bank": {
				srart24_Fnc_CekAtm(m)
			} break
			
			case "transfer": case "tf": {
				let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
				srart24_Fnc_Tfatm(m, target, text, waktuIndonesia)
			} break
			
			case "judi": {
				srart24_Fnc_Judi(m, text, isOwners)
			} break
			
			case "lb": case "learderboard": case "top": {
				if (m.isGroup) return m.reply(Responya.private)
				srart24_Fnc_Top(m, text)
			} break
			
			case "adunaga": {
				if(!isDaftar) return m.reply(Responya.reg)
				if (!m.isGroup) return m.reply(Responya.group)
				srart24_Fnc_FNaga(m, from, delay)
			} break
				
				
		// ]======BATAS-RPG======[
		
		
		// ]======Sticker======[
		
		case "sticker": case "stiker": case "s": {
			if(!isDaftar) return m.reply(Responya.reg)
					if (!quoted) return m.reply(`reply foto dan ketik ${prefix + command}`)
					if (/image/.test(mime)) {
						let media = await quoted.download()
						let stc = await tostc(media, false, global.packname, global.author)
						m.Stc(stc)
					} else {
						return m.reply(`reply foto dan ketik ${prefix + command}`)
					}
				} break
				
				case "ejm": case "emojimix": {
					if(!isDaftar) return m.reply(Responya.reg)
      				 var [emoji1, emoji2] = text.split`+`
   					if (!(emoji1 && emoji2)) return m.reply('*Contoh penggunaan:\n\n*.emojimix 🤨+😣*')
 	  			try {
						let res = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
						let jsn = await res.json()
						let hs = await jsn.results[0].url
						var stiker = await tostc(hs, false, packname, author)
          				m.Stc(stiker)
         			} catch (e) {
        				console.log(e)
        			await m.reply("Kombinasi Tidak Di Temukan")
   			 }
					
				}
				break
				
				
				case "qc": {
				if(!isDaftar) return m.reply(Responya.reg)
					let pp = await srart24.FotoProfile(m.sender)
					if (!text) return m.reply("textnya mana")
					if (text.length > 50) return m.reply("Maksimal 50 Teks!")
					const obj = {
						type: "quote",
						format: "png",
						backgroundColor: "#ffffff",
						width: 512,
						height: 768,
						scale: 2,
						messages: [
							{
								entities: [],
								avatar: true,
								from: {
									id: 1,
									name: m.pushName,
									photo: {
										url: pp,
									},
								},
								text: text,
								replyMessage: {},
							},
						],
					}

					try {
						const json = await axios.post("https://bot.lyo.su/quote/generate", obj, {
							headers: {
								"Content-Type": "application/json",
							},
						})

						const buffer = Buffer.from(json.data.result.image, "base64")
						var stiker = await tostc(buffer, false, packname, author)
						m.Stc(stiker)
					} catch (e) {
						console.log(e)
						await m.reply("Error Cuy")
					}
				}
				break
				
				case "smeme": {
					if(!isDaftar) return m.reply(Responya.reg)
					if (!quoted) return m.reply(`reply foto dan ketik ${prefix + command}`)
					const [atas, bawah] = text.split('|');
					if(!text) return m.reply("textnya mana")
					try {
					if (/image/.test(mime)) {
						let media = await quoted.download()
						let pr = await uploadImage(media).catch(() => null)
						const memeTemplate = bawah ? `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${pr}` : `https://api.memegen.link/images/custom/_/${atas}.png?background=${pr}`;
						const stiker = await tostc(memeTemplate, false, packname, author);
						return m.Stc(stiker);
						}
					} catch (e) {
						console.log(e)
						await m.reply("Error Cuy")
					}
				}
				break
				


		// ] ======Gmes Fitur ======[
		
		case "family100": {
			let timeout = 65000
			let winScore = 10000
			if (from in srart24.family100)  return srart24.reply(from, 'Masih ada soal belum terjawab di chat ini', srart24.family100[from].msg)
			let res = await games.family100();
			let json = res.result
			console.log(json)
			let caption = `
*Soal:* ${json.pertanyaan}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find((v) => v.includes(" ")) ? `( Beberapa jawaban terdapat spasi ) ` : "" } \nRp.${winScore} tiap jawaban benar `.trim()
srart24.family100[from] = {
	from,
	msg: await m.reply(caption),
	...json,
	terjawab: Array.from(json.jawaban, () => false),
	winScore,
}

		} break
		
		case "caklontong":
		case "asahotak":
		case "susunkata":
		case "tebakkata":
		case "siapakahaku":
		case "tekateki":
		case "tebakkalimat":
		case "tebaklirik": {
			if (from in srart24.gamessr) return srart24.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', srart24.gamessr[from][2])
			let timeout = 65000
			let uang = 10000
			let res = await scraper.games[command]()
			let jsons = res.result

			let pertanyaan = jsons.pertanyaan
			let jawaban = jsons.jawaban
			let dsc = jsons.deskripsi || null
			let type = jsons.tipe || null
			let hint = jawaban.replace(/[b-df-np-z]/gi, " ▢ ")
			let jnis = type ? `type: ${type}\n` : ""
			let dsk = dsc ? `\nAlasan: *${dsc}*\n` : ""
			let teks = `Waktu habis\nJawabannya adalah: *${jawaban}*${dsk}`.trim()
			let cap = `${command.toUpperCase()}

${pertanyaan}
${jnis}
Waktu *${parseInt(timeout / 1000)} detik*
Bantuan: ${hint}
Bonus: 
Rp. ${uang}
`.trim()

	srart24.gamessr[from] = [ 
	jawaban, 
	uang, 
	await m.reply(cap),
	setTimeout(() => {
     if (srart24.gamessr[from]) srart24.reply(m.chat, teks, srart24.gamessr[from][2])
      delete srart24.gamessr[from];
       }, timeout),
       dsc
	];
		} break
		
		case "tebakgame":
		case "tebakbendera":
		case "tebakanime":
		case "tebakgambar": {
			if (from in srart24.gamessr) return srart24.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', srart24.gamessr[from][2])
			let timeout = 65000
			let uang = 10000
			let res = await scraper.games[command]();
let jsons = res.result

let pertanyaan = jsons.img;
let jawaban = jsons.jawaban;
let hint = jawaban.replace(/[b-df-np-z]/gi, ' ▢ ');
let teks = `Waktu habis\nJawabannya adalah: *${jawaban}*`.trim();

let cap = `
Timeout *${parseInt(timeout / 1000)} detik*
Bantuan: ${hint}
Bonus: 
Rp.${uang}
`.trim()

    srart24.gamessr[from] = [ 
	jawaban, 
	uang, 
	await m.FotoUrl(pertanyaan, cap),
	setTimeout(() => {
      if (srart24.gamessr[from]) {
      srart24.reply(m.chat, teks, srart24.gamessr[from][2])
      delete srart24.gamessr[from];
      }
    }, timeout)
	 ];
    
		} break
		
		
		
		// ]======BATAS-Games======[
		case "suit": {
			if(!isDaftar) return m.reply(Responya.reg)
			if (!m.isGroup) return m.reply(Responya.group)
			srart24_Fnc_suitGame(m, text);
		} break
		
		case "bom" : {
  			if (from in srart24.gameBoms) return m.reply('Masih ada game di chat ini');
			  if (from in srart24.gameKln) return m.reply('Masih ada permainan  berlangsung di grup ini.');
 			 	let board = `${angkasr[1]} ${angkasr[2]} ${angkasr[3]}\n${angkasr[4]} ${angkasr[5]} ${angkasr[6]}\n${angkasr[7]} ${angkasr[8]} ${angkasr[9]}`;
  				let bomb = Math.floor(Math.random() * 9) + 1;
  				srart24.gameBoms[from] = { board: board,bomb: bomb,selectedNumbers: new Set(),};
  				m.reply(`Games Boms Di Mulai!\n\n${board}\n\nSilahkan pilih Angka 1 Sampai 9\nJika Menemukan Bom Kalah\nJika Cuma Tersisa Bom Menang`);
		} break
		
		case 'tpk': {
			  if (from in srart24.gameKln) return m.reply('Masih ada permainan  berlangsung di grup ini.');
			  if (from in srart24.gameBoms) return m.reply('Masih ada game di chat ini');
				  let board = `${angkasr[1]} ${angkasr[2]} ${angkasr[3]}\n${angkasr[4]} ${angkasr[5]} ${angkasr[6]}\n${angkasr[7]} ${angkasr[8]} ${angkasr[9]}`;
 				 let emojiIndex = Math.floor(Math.random() * 9) + 1;
  				srart24.gameKln[from] = { board: board, emojiIndex: emojiIndex, remainingAttempts: 3, };
  				m.reply(`Games Tebak Persembunyian Kelinci ( TPK )\n\n${board}\n\nSilahkan tebak di antara angka 1 - 9\nuntuk menemukan kelinci Yang Sembunyi\nKamu memiliki 3 kesempatan menebak.`);
		} break;
		
		
		// ]====== Pacar ======[
		
		case "tembak": {
			if(!isDaftar) return m.reply(Responya.reg)
				let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
				srart24_FncP_tembak(m, srart24, sender, target)
		} break
		
		
		case "terima": {
			if(!isDaftar) return m.reply(Responya.reg)
			let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
			srart24_FncP_terima(m, sender, target)
		} break
		
		case "tolak": {
			if(!isDaftar) return m.reply(Responya.reg)
			let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
			srart24_FncP_tolak(m, sender, target)
		} break
		
		case "putus": {
			if(!isDaftar) return m.reply(Responya.reg)
			srart24_FncP_putus(m, sender)
		} break
		
		case "ikhlasin": {
			if(!isDaftar) return m.reply(Responya.reg)
			srart24_FncP_ikhlasin(m, sender)
		} break
		
		
		// ]======Owner Fitur ======[
		
		
			case "public": {
				if (!isOwners) return m.reply(Responya.owner)
				Modepublic = true
				m.reply(Responya.done)
			}	break
			
			case "self": {
				if (!isOwners) return m.reply(Responya.owner)
				Modepublic = false
				m.reply(Responya.done)
			}	break
			
			case "cdrf": {
				if (!isOwners) return m.reply(Responya.owner)
				srart24_Fnc_createSrdb(m, text, prefix, command)
			} break
			
			case "ban": {
				if (!isOwners) return m.reply(Responya.owner)
				let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
				if(target == "@s.whatsapp.net") return m.reply("Tag Orang Yang Akan Di ban")
				if (!db.data.banned.hasOwnProperty(target)) return m.reply("User Tidak Ada Di Database")
				if (db.data.banned[target]) return m.reply("Udah Terkena Ban Dia")
				db.data.banned[target] = true
				m.reply(`Berhasil Banned @${target.split`@`[0]}`)
			}	break
			
			case "unban": {
				if (!isOwners) return m.reply(Responya.owner)
				let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
				if(target == "@s.whatsapp.net") return m.reply("Tag Orang Yang Akan Di unban")
				if (!db.data.banned.hasOwnProperty(target)) return m.reply("User Tidak Ada Di Database")
				if (!db.data.banned[target]) return m.reply("Engga Terbanned Dia")
				db.data.banned[target] = false
				m.reply(`Berhasil Banned @${target.split`@`[0]}`)
			}	break

			case "clearsession": {
				{
					if (!isOwners) return m.reply(Responya.owner)
					fs.readdir("./data/session", async function (err, files) {
						if (err) {
							console.log("Err: " + err)
							return m.reply("Err: " + err)
						}
						let filteredArray = await files.filter((item) => item.startsWith("pre-key") || item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state"))
						console.log(filteredArray.length)
						let teks = `Detected ${filteredArray.length} junk files\n\n`
						if (filteredArray.length == 0) return m.reply(teks)
						filteredArray.map(function (e, i) {
							teks += i + 1 + `. ${e}\n`
						})
						console.log(teks)
						await sleep(2000)
						m.reply("Dalam Proses...")
						await filteredArray.forEach(function (file) {
							fs.unlinkSync(`./data/session/${file}`)
						})
						await sleep(2000)
						m.reply("Berhasil")
					})
				}
				}	break
			
			case "getsession": {
				if (!isOwners) return m.reply(Responya.owner)
				m.reply("Wait a moment, currently retrieving your session file")
				let sesi = await fs.readFileSync("./data/session/creds.json")
				srart24.sendMessage(
					m.chat,
					{
						document: sesi,
						mimetype: "application/json",
						fileName: "creds.json",
					},
					{
						quoted: m,
					}
				)
				}	break
				
				case "join": {
				try {
					if (!isOwners) return m.reply(Responya.owner)
					if (!text) return m.reply("Enter Group Link!")
					if (!isUrl(args[0]) && !args[0].includes("whatsapp.com")) return m.reply("Link Invalid!")
					m.reply(Responya.wait)
					let result = args[0].split("https://chat.whatsapp.com/")[1]
					await srart24
						.groupAcceptInvite(result)
						.then((res) => m.reply(Responya.done))
						.catch((err) => m.reply(json(err)))
				} catch {
					m.reply("Failed to join the Group")
				}
				}	break
				
			case "offbot": {
				if (!isOwners) return m.reply(Responya.owner)
				m.reply(`Goodbye🖐`)
				await sleep(3000)
				process.exit()
				}	break
			
			case "setppbot": {
				if (!isOwners) return m.reply(Responya.owner)
				if (!quoted) return m.reply('Reply Foto')
				if (!/image/.test(mime)) return m.reply('Reply Foto')
				if (/webp/.test(mime)) return m.reply('Reply Foto')
				   try {
            let media = await quoted.download()
            let { img } = await pepe(media);
            await srart24.query({
                tag: 'iq',
                attrs: {
                    to: botNumber,
                    type: 'set',
                    xmlns: 'w:profile:picture'
                },
                content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    }
                ]
            });
            m.reply('Berhasil Memperbarui Foto profil');
        } catch (e) {
            console.log(e);
            m.reply('Terjadi kesalahan, coba lagi nanti.');
        }
				}
				break
				
			case "block": {
				if (!isOwners) return m.reply(Responya.owner)
				let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
				await srart24
					.updateBlockStatus(blockw, "block")
					.then((res) => m.reply(Responya.done))
					.catch((err) => m.reply(json(err)))
				}	break
				
			case "unblock": {
				if (!isOwners) return m.reply(Responya.owner)
				let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
				await srart24
					.updateBlockStatus(blockww, "unblock")
					.then((res) => m.reply(Responya.done))
					.catch((err) => m.reply(json(err)))
				}	break
				
			case "del":
				{
					if (!isOwners) return m.reply(Responya.done)
					if (!m.quoted) throw false
					let {chat, fromMe, id, isBaileys} = m.quoted
					if (!isBaileys) return m.reply("Ga Bisa Cuy")
					srart24.sendMessage(m.chat, {
						delete: {
							remoteJid: m.chat,
							fromMe: true,
							id: m.quoted.id,
							participant: m.quoted.sender,
						},
					})
				}
				break
				
				case "stwm": {
					if (!isOwners) return m.reply(Responya.done)
					if (!quoted) return
					if (/webp/.test(mime)) {
						let media = await quoted.download()
						let stc = await tostc(media, false, "@srart24࿐", global.author)
						m.Stc(stc)
					} else {
						return m.reply(`reply foto dan ketik ${prefix + command}`)
					}
				} break
				
	// ]======Fun Fitur ======[
				
				case "wangy": {
					let anu = args[0]
					if (!anu) return m.reply("textnya mana")
					  let res = await fun.wangy(anu)
  						return m.reply(res.result);
				} break;
				
				case "cekiq": {
					if (text) return
					  let res = await fun.cekIQ()
  						return m.reply(res.result);
				} break;

				case "kapankah": {
					if (!text) return m.reply("textnya mana")
					  let res = await fun.kapankah(text)
  						return m.reply(res.result);
				} break;
				
				case "gantengcek": {
					if (text) return
					  let res = await fun.gantengcek()
  						return m.reply(res.result);
				} break;
				
				case "cantikcek": {
					if (text) return
					  let res = await fun.cantikcek()
  						return m.reply(res.result);
				} break;
				
				case "simi": {
					if (!text) return m.reply("Apaaa ?")
					  let res = await fun.simsimi(text)
  						return m.reply(res.result);
				} break;
				
				case "tagme": {
					if (text) return
  						return m.reply(`@${sender.split`@`[0]}`);
				} break;
				
				
				case "quotes":
				case "puisi":
				case "pantun":
				case "bucin":
				case "faktaunik":
				case "katabijak":
				case "sad":
				case "katailham":
				case "truth":
				case "dare": {
					  let jsn = await quotes[command]();
					  let hasil = await jsn.result;
					  let anu = `
─────〔 *${command.toUpperCase()}* 〕─────

${hasil}
  `;
 				 m.reply(anu);
				} break;
				
				
				case "translate": {
					const [lang, teks] = text.split('|');
					if(!lang || !teks) return m.reply("contoh: translate en|hallo sayang")
					let res = await tools.translate(lang, teks)
					return m.reply(res.result)
				} break
				
				case "gimg": {
					if(!text) return m.reply("cari apa?")
					let res = await search.gImg(text)
					return m.FotoUrl(res.random, text)
				} break
				
				case "pinterest": {
					if(!text) return m.reply("cari apa?")
					let res = await search.pinterest(text)
					return m.FotoUrl(res.random, text)
				} break
				
				case "npm": {
					if(!text) return m.reply("apa?")
					let res = await search.npm(text)
					return m.reply(res.result)
				} break
				
				case "cuaca": {
					if(!text) return m.reply("apa?")
					let res = await search.cuaca(text)
					let json = await res.result
	if(!json.Cuaca) throw 'Tidak Di Temukan'
	m.reply(`
🌍 Lokasi: ${json.Lokasi}
🌐 Negara: ${json.Negara}
☁️ Cuaca: ${json.Cuaca}
🌡️ Suhu saat ini: ${json['Suhu saat ini']} °C
🔥 Suhu tertinggi: ${json['Suhu tertinggi']} °C
❄️ Suhu terendah: ${json['Suhu terendah']} °C
💧 Kelembapan: ${json.Kelembapan} %
💨 Angin: ${json.Angin} km/jam
`);


				} break
				
				case "doaharian": {
					if (text) return
					let hsl = await religion.doaharian()
					let cap = `
========================

*${hsl.title}*

arab: ${hsl.arabic}
latin: ${hsl.latin}
translate: ${hsl.translation}

=========================
`.trim()
m.reply(cap)
				} break
				
				case "alquran": {
					const [surah, ayat] = text.split('/');
					if(!surah || !ayat) return m.reply("contoh: alquran 17/32")
					let res = await religion.quran(surah, ayat)
					let mes = `
${res.result.arab}
    
${res.result.latin}

# Tafsir
${res.result.tafsir}
`.trim()
					if(res.status == 200) {
					let pkl = await m.reply(mes)
					await srart24.sendMessage(m.chat, { audio: { url: res.result.audio }, mimetype: 'audio/mp4', ptt: true}, { quoted: pkl })
					return 
					} else m.reply("Error")
				} break
				
				case "asmaulhusna": {
					if (!text) return m.reply(`Contoh: .${command} 1`)
					if (text < 1 || text > 99) return m.reply("minimal 1 & maksimal 99")
					let hsl = await religion.asmaulhusna(text)
let cap = `
========================

latin: ${hsl.latin}
arab: ${hsl.arab}
tr_id: ${hsl.tr_id}
tr_en: ${hsl.tr_en}

=========================
`.trim()
m.reply(cap)
				} break
				
			  case "upload": {
					if(!isDaftar) return m.reply(Responya.reg)
					if (!quoted) return m.reply(`reply foto dan ketik ${prefix + command}`)
					if (/image/.test(mime)) {
						let media = await quoted.download()
						let pr = await uploadImage(media).catch(() => null)
						m.reply(pr)
					} else {
						return m.reply(`reply foto dan ketik ${prefix + command}`)
					}
				} break
				
				case "getpp" : {
					let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
					let ppu = await srart24.FotoProfile(target)
					m.FotoUrl(ppu)
				} break
				
			// ]======Group Fitur ======[
			
			case "welcome": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
					if (text == "on") {
						db.data.setting[m.chat].welcome = true
						m.reply(Responya.done)
					} else if (text == "off") {
						db.data.setting[m.chat].welcome = false
						m.reply(Responya.done)
					} else {
						m.reply("Contoh:\n\nwelcome on\nwelcome off")
					}
			} break
			
			case "antilink": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
					if (text == "on") {
						db.data.setting[m.chat].antiLink = true
						m.reply(Responya.done)
					} else if (text == "off") {
						db.data.setting[m.chat].antiLink = false
						m.reply(Responya.done)
					} else {
						m.reply("Contoh:\n\nantilink on\nantilink off")
					}
			} break
			
			case "antibot": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
					if (text == "on") {
						db.data.setting[m.chat].antiBot = true
						m.reply(Responya.done)
					} else if (text == "off") {
						db.data.setting[m.chat].antiBot = false
						m.reply(Responya.done)
					} else {
						m.reply("Contoh:\n\nantibot on\nantibot off")
					}
			} break

			case "closetime": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
				if (args[1] == "detik") {
					var timer = args[0] * `1000`
				} else if (args[1] == "menit") {
					var timer = args[0] * `60000`
				} else if (args[1] == "jam") {
					var timer = args[0] * `3600000`
				} else if (args[1] == "hari") {
					var timer = args[0] * `86400000`
				} else {
					return m.reply("*Choose:*\ndetik\nmenit\njam\nhari\n\n*Contoh*\n10 detik")
				}
				m.reply(`Grup Akan Di Tutup Dalam ${q}`)
				setTimeout(() => {
					var nomor = m.participant
					const close = `Group Telah Di Tutup`
					srart24.groupSettingUpdate(m.chat, "announcement")
					m.reply(close)
				}, timer)
				}	break
				
			case "opentime": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
				if (args[1] == "detik") {
					var timer = args[0] * `1000`
				} else if (args[1] == "menit") {
					var timer = args[0] * `60000`
				} else if (args[1] == "jam") {
					var timer = args[0] * `3600000`
				} else if (args[1] == "hari") {
					var timer = args[0] * `86400000`
				} else {
					return m.reply("*Choose:*\ndetik\nmenit\njam\nhari\n\n*Contoh*\n10 detik")
				}
				m.reply(`Grup Akan Di Buka Dalam ${q}`)
				setTimeout(() => {
					var nomor = m.participant
					const open = `Group Telah Di Buka`
					srart24.groupSettingUpdate(m.chat, "not_announcement")
					m.reply(open)
				}, timer)
				}	break
				
			case "kick": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isGroupOwner && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
				let anuanu = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
				await srart24
					.groupParticipantsUpdate(m.chat, [anuanu], "remove")
					.then((res) => m.reply(Responya.done))
					.catch((err) => m.reply(json(err)))
				}	break
			
			
			case "promote":
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isGroupOwner && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
				let Gegelu = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
				await srart24
					.groupParticipantsUpdate(m.chat, [Gegelu], "promote")
					.then((res) => m.reply(Responya.done))
					.catch((err) => m.reply(json(err)))
				break
				
			case "demote": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isGroupOwner && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
				let Gegelua = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
				await srart24
					.groupParticipantsUpdate(m.chat, [Gegelua], "demote")
					.then((res) => m.reply(Responya.done))
					.catch((err) => m.reply(json(err)))
				} break
				
			
			case "setppgc": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
				if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
				if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
				if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
				try {
            let media = await quoted.download()
            let { img } = await pepe(media);
            await srart24.query({
                tag: 'iq',
                attrs: {
                    to: botNumber,
                    type: 'set',
                    xmlns: 'w:profile:picture'
                },
                content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    }
                ]
            });
            m.reply('Berhasil Memperbarui Foto profil');
        } catch (e) {
            console.log(e);
            m.reply('Terjadi kesalahan, coba lagi nanti.');
        }
				}
				break
				
			case "tagall": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isGroupOwner && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
				let teks = `╭───── [ Tag All ] ─────\n│\n`;
				for (let i = 0; i < participants.length; i++) {
    				teks += `│ ❐➣ ${i + 1}. @${participants[i].id.split('@')[0]}\n`;
				}
					teks += ` |\n╰────────────────`;

                srart24.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
				}	break
				
			case "hidetag": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isGroupOwner && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
				srart24.sendMessage(
					m.chat,
					{
						text: q ? q : "",
						mentions: participants.map((a) => a.id),
					},
					{
						quoted: m,
					}
				)
				}	break
				
			case "gc": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isGroupOwner && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
				if (args[0] === "tutup") {
					await srart24
						.groupSettingUpdate(m.chat, "announcement")
						.then((res) => m.reply(Responya.done))
						.catch((err) => m.reply(json(err)))
				} else if (args[0] === "buka") {
					await srart24
						.groupSettingUpdate(m.chat, "not_announcement")
						.then((res) => m.reply(Responya.done))
						.catch((err) => m.reply(json(err)))
				} else {
					m.reply(`Contoh: gc buka/tutup`)
				}
				}	break
			
			case "linkgc": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
				let response = await srart24.groupInviteCode(m.chat)
				m.reply(`https://chat.whatsapp.com/${response}`)
				}	break
				
			case "revoke": 
			case "resetlink": {
				if (!m.isGroup) return m.reply(Responya.group)
				if (!isAdmins && !isGroupOwner && !isOwners) return m.reply(Responya.admin)
				if (!isBotAdmins) return m.reply(Responya.botAdmin)
				await srart24
					.groupRevokeInvite(m.chat)
					.then((res) => {
						m.reply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
					})
					.catch((err) => m.reply(json(err)))
				}	break
			
			default:
				if (budy.startsWith("=>")) {
					if (!isOwners) return m.reply(Responya.owner)

					function Return(ih) {
						sat = JSON.stringify(ih, null, 2)
						bkg = util.format(st)
						if (st == undefined) {
							bkg = util.format(ih)
						}
						return m.reply(bkg)
					}
					try {
						m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
					} catch (e) {
						m.reply(String(e))
					}
				}

				if (budy.startsWith(">")) {
					if (!isOwners) return m.reply(Responya.owner)
					try {
						let evaled = await eval(budy.slice(2))
						if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
						await m.reply(evaled)
					} catch (err) {
						await m.reply(String(err))
					}
				}

				if (budy.startsWith("$")) {
					if (!isOwners) return m.reply(Responya.owner)
					exec(budy.slice(2), (err, stdout) => {
						if (err) return m.reply(err)
						if (stdout) return m.reply(stdout)
					})
				}
				
 			  if (db.data.users[m.sender].srart24_atm < 0) return
    				if (db.data.users[m.sender].srart24_uang < 0) {
      			  let transferAmount = Math.min(db.data.users[m.sender].srart24_atm, Math.abs(db.data.users[m.sender].srart24_uang));
      				db.data.users[m.sender].srart24_uang += transferAmount;
      				db.data.users[m.sender].srart24_atm -= transferAmount;
 				}
 
 			  if (comd && !checkTextInArrays(cmd)) {
 						if(!isDaftar) return m.reply(Responya.reg)
						  iniMenu(m, srart24, isOwners)
 					// return m.reply(`command *${prefix + cmd}* Tidak Ada Di Menu\nMakanya Baca Menu Nya Sayangku 🥰🥰🥰`)
 			}

		}
	} catch (err) {
		srart24.reply(cNomor + "@s.whatsapp.net", util.format(err), m)
		m.reply("Error Cuy")
		console.log(util.format(err))
	}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

process.on("uncaughtException", function (err) {
	global.db.save()
	let e = String(err)
	if (e.includes("Socket connection timeout")) return
	if (e.includes("item-not-found")) return
	if (e.includes("rate-overlimit")) return
	if (e.includes("Connection Closed")) return
	if (e.includes("Timed Out")) return
	if (e.includes("Value not found")) return
	console.log("Caught exception: ", err)
})
