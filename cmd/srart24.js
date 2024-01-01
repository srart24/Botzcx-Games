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
let { JSDOM } = require('jsdom')
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
		let comsr = prefixes.some(prefix => mText.startsWith(prefix));
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
        const isAdm = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAdmins = isOwners || isAdm
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
		
		// memindahkan Block Dari Main.js ke Sini
		let blockList = await srart24.fetchBlocklist()
		let isBlock = [...blockList].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
		if (isBlock) return
		
		if (m.isGroup && db.data.setting[m.chat].isBanned && !isOwners) return
	
		// Mode Public
		if(!Modepublic && !isOwners) return
		
		// Function
	
		
		global.mMain = ['menu', 'runtime', 'ping', 'owner', 'banlist', 'get', 'getref'];
		global.mGroup = ['infogc', 'gc', 'welcome', 'antilink', 'antibot', 'revoke', 'setppgc', 'linkgc', 'tagall', 'hidetag', 'promote', 'demote', 'kick', 'linkgc', 'opentime', 'closetime'];
		global.mRpg = ['top', 'level', 'adunaga', 'membunuh', 'tembak', 'terima', 'putus', 'tolak', 'ikhlasin', 'carikerja', 'kerja', 'claim', 'atm', 'buatatm', 'nabung', 'tarik', 'transfer', 'bansos', 'memakan',  'adventure', 'berburu', 'mancing', 'gacha', 'judi', 'heal', 'hewan', 'feed', 'ngepet', 'inv', 'jual', 'beli', 'upgrade', 'bom', 'tpk'];
		global.mOwner = ['public', 'self', 'bangc', 'unbangc', 'stwm', 'cdrf', 'ban', 'unban', 'block', 'unblock', 'setppbot', 'clearsession', 'getsession', 'join', 'offbot'];
		global.mgmys = ['family100', 'caklontong', 'asahotak', 'susunkata', 'tebakkata', 'siapakahaku', 'tekateki', 'tebakkalimat', 'tebaklirik', 'tebakbendera', 'tebakgambar', 'tebakanime', 'tebakgame']
		global.mStc = ['stiker', 'smeme', 'qc', 'emojimix']
		global.mFun = ['getpp', 'upload', 'font', 'translate', 'pinterest', 'gimg', 'npm', 'igstalk', 'cuaca', 'alquran', 'doaharian', 'asmaulhusna', 'wangy', 'cekiq', 'kapankah', 'gantengcek', 'cantikcek', 'simi', 'quotes', 'puisi', 'pantun', 'bucin', 'faktaunik', 'katabijak', 'sad', 'katailham', 'truth', 'dare'];
		

		function checkTextInArrays(text) {
  			return mMain.includes(text) || mGroup.includes(text) || mRpg.includes(text) || mOwner.includes(text) || mStc.includes(text) || mgmys.includes(text) || mFun.includes(text)
		}
		
		if (cmd && checkTextInArrays(cmd)) {
			if (global.joinGcBot) {
				let gcmy = await srart24.GcBotJoin(sender)
				let textp = "```Silahkan Masuk Group Bot Untuk Menggunakan Bot```"
				const externalAdReply = {
     				   title: global.namaBot,
  				      body: "Bot By; @srart24",
    				    thumbnailUrl: thumb,
      				  sourceUrl: global.linkgcBot,
       				 mediaType: 1,
      				  showAdAttribution: true,
     				   renderLargerThumbnail: true
  					  };

    				const contextInfo = {
        				mentionedJid: srart24.parseMention(textp),
        				externalAdReply: externalAdReply
  					  };

 				   const options = { quoted: m };
				if(!gcmy) {
					 return srart24.reply(m.chat, textp, m, { contextInfo }, options);
				}
			}
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
				let target = m.mentionedJid[0]
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
						let stc = await tostc(media, false, packname, author)
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
						const stiker = await tostc(memeTemplate, false, packname, author)
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
			
			case "bangc": {
				if (!isOwners) return m.reply(Responya.owner)
				if (db.data.setting[m.chat].isBanned) {
					return m.reply("Udah Ke Ban Gc Nya Woy")
				} else
				db.data.setting[m.chat].isBanned = true
				m.reply(Responya.done)
			} break
			
			case "unbangc": {
				if (!isOwners) return m.reply(Responya.owner)
				if (!db.data.setting[m.chat].isBanned) {
					return m.reply("Engga Ke Ban Gc Nya Woy")
				} else
				db.data.setting[m.chat].isBanned = false
				m.reply(Responya.done)
			} break
			
			 case 'backup':
                if (!isOwners) return m.reply(Responya.owner)
                exec('zip -r backup.zip * -x "node_modules/*" -x ".git/*" -x "data/database/*" -x "data/session/*" -x "package-lock.json"', (error, stdout, stderr) => {
    if (error) {
        return;
    }
    sendBackupFile();
});

async function sendBackupFile() {
    try {
        let malas = await fs.readFileSync('./backup.zip');
        await srart24.sendMessage(m.chat, {
            document: malas,
            mimetype: 'application/zip',
            fileName: 'backup.zip'
        }, {
            quoted: m
        });
    } catch (readFileError) {
        console.error(`Error reading or sending backup file: ${readFileError.message}`);
    }
}

                break

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
					let Iniwm = args[0] ? text : "@srart24࿐"
					if (/webp/.test(mime)) {
						let media = await quoted.download()
						let stc = await tostc(media, false, Iniwm, "")
						m.Stc(stc)
					} else {
						return m.reply(`reply stiker dan ketik ${prefix + command}`)
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
					if(!lang || !teks) return m.reply("cara penggunaan: translate kode bahasa|Teks\n\ncontoh: translate en|hallo sayang")
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
					try {
					let res = await search.cuaca(text)
					let json = await res.result
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
} catch (e) {
     m.reply(e)
    }

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
				
				
				case "font": {
					
    (async () => {
        try {
            const response = await axios.get('http://qaz.wtf/u/convert.cgi', {
                params: {
                    text: encodeURIComponent(text || m.quoted && m.quoted.text || m.text)
                }
            });

            const html = response.data;
            const dom = new JSDOM(html);
            const table = dom.window.document.querySelector('table').children[0].children;
            const obj = {};

            for (let tr of table) {
                let name = tr.querySelector('.aname').innerHTML;
                let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '');
                obj[name + (obj[name] ? ' Reversed' : '')] = content;
            }

            srart24.reply(m.chat, Object.entries(obj).map(([name, value]) => `*${name}*\n${value}`).join`\n\n`, m);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    })();
} break;

				
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
			
			case "infogc": {
				if (!m.isGroup) return m.reply(Responya.group)
				let gc = await srart24.groupMetadata(m.chat)
				let pp = await srart24.FotoProfile(m.chat)
				const groupAdmins = getGroupAdmins(gc.participants)
				let pgc = db.data.setting[m.chat]
        		let listAdmin = groupAdmins.map((v, i) => `👤 ${i + 1}. @${v.split('@')[0]}`).join('\n')
				let capo = `
## *INFO*

🆔 *ID:* ${gc.id}
📛 *Nama:* ${gc.subject}
👥 *Total Anggota:* ${gc.participants.length} Anggota
👤 *Pembuat Grup:* ${gc.owner ? `@${gc.owner.split`@`[0]}` : 'Tidak Tersedia'}

*Group Admins:*
${listAdmin}

*Deskripsi:* 
${gc.desc ? gc.desc : "Kosong kek Hati lu"}



## *SETTING*

╭────────────────
│ Welcome: ${pgc.welcome ? "✅️" : "❌️"}
│ Anti Link: ${pgc.antiLink ? "✅️" : "❌️"}
│ Anti Bot: ${pgc.antiBot ? "✅️" : "❌️"}
│ setWelcome: ${pgc.SRwelcome ? "Sudah Di Atur" : "Belom Di Atur"} 
╰────────────────`.trim()

				srart24.sendFile(m.chat, pp, 'pp.jpg', capo, m, false, { mentions: srart24.parseMention(capo) })
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
