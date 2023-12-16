/*
//===================//
	#	Script By: @srart24
//===================//

{
	Instagram: "https://instagram.com/srart24",
	Github: "https://github.com/srart24"
}
*/


const {proto, delay, getContentType} = require("@whiskeysockets/baileys")
const chalk = require("chalk")
const fs = require("fs")
const Crypto = require("crypto")
const axios = require("axios")
const moment = require("moment-timezone")
const {sizeFormatter} = require("human-readable")
const util = require("util")
const Jimp = require("jimp")
const {defaultMaxListeners} = require("stream")

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)

exports.unixTimestampSeconds = unixTimestampSeconds

exports.generateMessageTag = (epoch) => {
	let tag = (0, exports.unixTimestampSeconds)().toString()
	if (epoch) tag += ".--" + epoch // attach epoch if provided
	return tag
}

exports.processTime = (timestamp, now) => {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

exports.getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				DNT: 1,
				"Upgrade-Insecure-Request": 1,
			},
			...options,
			responseType: "arraybuffer",
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.getImg = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				DNT: 1,
				"Upgrade-Insecure-Request": 1,
			},
			...options,
			responseType: "arraybuffer",
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.fetchJson = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "GET",
			url: url,
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
			},
			...options,
		})
		return res.data
	} catch (err) {
		return err
	}
}


exports.runtime = function (seconds) {
	seconds = Number(seconds)
	var d = Math.floor(seconds / (3600 * 24))
	var h = Math.floor((seconds % (3600 * 24)) / 3600)
	var m = Math.floor((seconds % 3600) / 60)
	var s = Math.floor(seconds % 60)
	var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : ""
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : ""
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : ""
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : ""
	return dDisplay + hDisplay + mDisplay + sDisplay
}


exports.clockString = (ms) => {
	let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
	let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
	let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
	return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":")
}

exports.sleep = async (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

exports.isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, "gi"))
}

exports.getTime = (format, date) => {
	if (date) {
		return moment(date).locale("id").format(format)
	} else {
		return moment.tz("Asia/Jakarta").locale("id").format(format)
	}
}

exports.formatDate = (n, locale = "id") => {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	})
}

exports.tanggal = (numer) => {
	myMonths = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
	myDays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum’at", "Sabtu"]
	var tgl = new Date(numer)
	var day = tgl.getDate()
	bulan = tgl.getMonth()
	var thisDay = tgl.getDay(),
		thisDay = myDays[thisDay]
	var yy = tgl.getYear()
	var year = yy < 1000 ? yy + 1900 : yy
	const time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")
	let d = new Date()
	let locale = "id"
	let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime()
	let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor((d * 1 + gmt) / 84600000) % 5]

	return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

exports.jam = (numer, options = {}) => {
	let format = options.format ? options.format : "HH:mm"
	let jam = options?.timeZone ? moment(numer).tz(timeZone).format(format) : moment(numer).format(format)

	return `${jam}`
}

exports.formatp = sizeFormatter({
	std: "JEDEC", //'SI' = default | 'IEC' | 'JEDEC'
	decimalPlaces: 2,
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.json = (string) => {
	return JSON.stringify(string, null, 2)
}

function format(...args) {
	return util.format(...args)
}

exports.logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error("Input and Output must have same length")
	for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}

exports.generateProfilePicture = async (buffer) => {
	const jimp = await Jimp.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
	}
}

exports.bytesToSize = (bytes, decimals = 2) => {
	if (bytes === 0) return "0 Bytes"

	const k = 1024
	const dm = decimals < 0 ? 0 : decimals
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

	const i = Math.floor(Math.log(bytes) / Math.log(k))

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
}

exports.getSizeMedia = (path) => {
	return new Promise((resolve, reject) => {
		if (/http/.test(path)) {
			axios.get(path).then((res) => {
				let length = parseInt(res.headers["content-length"])
				let size = exports.bytesToSize(length, 3)
				if (!isNaN(length)) resolve(size)
			})
		} else if (Buffer.isBuffer(path)) {
			let length = Buffer.byteLength(path)
			let size = exports.bytesToSize(length, 3)
			if (!isNaN(length)) resolve(size)
		} else {
			reject("error cuy")
		}
	})
}

exports.parseMention = (text = "") => {
	return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + "@s.whatsapp.net")
}

exports.getGroupAdmins = (participants) => {
	let admins = []
	for (let i of participants) {
		i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""
	}
	return admins || []
}

exports.reSize = (buffer, ukur1, ukur2) => {
	return new Promise(async (resolve, reject) => {
		var ytta = await Jimp.read(buffer)
		var ab = await ytta.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
		resolve(ab)
	})
}


exports.msToDate = async (ms) => {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
    let sec = Math.floor((ms % (60 * 1000)) / 1000);
    let result = "";
    if (days > 0) result += days + " Hari ";
    if (hours > 0) result += hours + " Jam ";
    if (minutes > 0) result += minutes + " Menit ";
    if (sec > 0 || result === "") result += sec + " Detik";
    return result.trim();
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
