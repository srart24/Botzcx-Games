/*
//===================//
	#	Script By: @srart24
//===================//

{
		Instagram: "https://instagram.com/srart24",
		Github: "https://github.com/srart24"
}
*/


exports.srart24DB = async (m, srart24) => {
	const isNumber = (x) => typeof x === "number" && !isNaN(x)
	try {
		let user = global.db.data.users[m.sender]
		if (typeof user !== "object") global.db.data.users[m.sender] = {}
		if (user) {
			// default
			if (!("srart24_nama" in user)) user.srart24_nama = ""
			if (!("srart24_umur" in user)) user.srart24_umur = ""
			if (!("srart24_kelamin" in user)) user.srart24_kelamin = ""
			if (!("srart24_alamat" in user)) user.srart24_alamat = ""
			if (!("srart24_nomor" in user)) user.srart24_nomor = ""
			if (!("srart24_terdaftar" in user)) user.srart24_terdaftar = false
			if (!("srart24_status" in user)) user.srart24_status = "pengangguran"
			if (!("srart24_pasangan" in user)) user.srart24_pasangan = ""
			if (!isNumber(user.srart24_uang)) user.srart24_uang = 1000000
			if (!("srart24_Aatm" in user)) user.srart24_Aatm = false
			if (!isNumber(user.srart24_atm)) user.srart24_atm = 0
			if (!isNumber(user.srart24_health)) user.srart24_health = 100
			if (!isNumber(user.srart24_potion)) user.srart24_potion = 0

			// Ngepet
			if (!isNumber(user.srart24_lilin)) user.srart24_lilin = 5
			if (!isNumber(user.srart24_korek)) user.srart24_korek = 1

			// pet
			if (!isNumber(user.srart24_naga)) user.srart24_naga = 0
			if (!isNumber(user.srart24_rajawali)) user.srart24_rajawali = 0
			if (!isNumber(user.srart24_kucing)) user.srart24_kucing = 0

			if (!isNumber(user.srart24_naga_)) user.srart24_naga_ = 0
			if (!isNumber(user.srart24_rajawali_)) user.srart24_rajawali_ = 0
			if (!isNumber(user.srart24_kucing)) user.srart24_kucing_ = 0

			if (!isNumber(user.srart24_makananpet)) user.srart24_makananpet = 0

			// Rpg-Berburu
			if (!isNumber(user.srart24_babi)) user.srart24_babi = 0
			if (!isNumber(user.srart24_kerbau)) user.srart24_kerbau = 0
			if (!isNumber(user.srart24_kanguru)) user.srart24_kanguru = 0
			if (!isNumber(user.srart24_kelinci)) user.srart24_kelinci = 0
			if (!isNumber(user.srart24_ayam)) user.srart24_ayam = 0
			if (!isNumber(user.srart24_bebek)) user.srart24_bebek = 0
			if (!isNumber(user.srart24_rusa)) user.srart24_rusa = 0
			if (!isNumber(user.srart24_zebra)) user.srart24_zebra = 0
			if (!isNumber(user.srart24_tupai)) user.srart24_tupai = 0
			if (!isNumber(user.srart24_kambing)) user.srart24_kambing = 0

			// Rpg-Mancing
			if (!isNumber(user.srart24_kepiting)) user.srart24_kepiting = 0
			if (!isNumber(user.srart24_gurita)) user.srart24_gurita = 0
			if (!isNumber(user.srart24_cumi)) user.srart24_cumi = 0
			if (!isNumber(user.srart24_buntal)) user.srart24_buntal = 0
			if (!isNumber(user.srart24_dory)) user.srart24_dory = 0
			if (!isNumber(user.srart24_lumba)) user.srart24_lumba = 0
			if (!isNumber(user.srart24_lobster)) user.srart24_lobster = 0
			if (!isNumber(user.srart24_udang)) user.srart24_udang = 0
			if (!isNumber(user.srart24_ikan)) user.srart24_ikan = 0
			if (!isNumber(user.srart24_orca)) user.srart24_orca = 0

			// RPG
			if (!isNumber(user.srart24_pancing)) user.srart24_pancing = 0
			if (!isNumber(user.srart24_panah)) user.srart24_panah = 0
			if (!isNumber(user.srart24_armor)) user.srart24_armor = 0

			// Adventure
			if (!isNumber(user.srart24_diamond)) user.srart24_diamond = 0
			if (!isNumber(user.srart24_gold)) user.srart24_gold = 0
			if (!isNumber(user.srart24_kayu)) user.srart24_kayu = 0
			if (!isNumber(user.srart24_apel)) user.srart24_apel = 0
			if (!isNumber(user.srart24_mangga)) user.srart24_mangga = 0
			if (!isNumber(user.srart24_pisang)) user.srart24_pisang = 0

			// Buat Cd
			if (!isNumber(user.srart24_CD_Claim)) user.srart24_CD_Claim = 0
			if (!isNumber(user.srart24_CD_Adventure)) user.srart24_CD_Adventure = 0
			if (!isNumber(user.srart24_CD_Bansos)) user.srart24_CD_Bansos = 0
			if (!isNumber(user.srart24_CD_Berburu)) user.srart24_CD_Berburu = 0
			if (!isNumber(user.srart24_CD_Mancing)) user.srart24_CD_Mancing = 0
			if (!isNumber(user.srart24_CD_Kerja)) user.srart24_CD_Kerja = 0
			if (!isNumber(user.srart24_CD_Ngepet)) user.srart24_CD_Ngepet = 0
			if (!isNumber(user.srart24_CD_loker)) user.srart24_CD_loker = 0
			
			// CD makan Pet
			if (!isNumber(user.srart24_CD_Fnaga)) user.srart24_CD_Fnaga = 0
			if (!isNumber(user.srart24_CD_Frajawali)) user.srart24_CD_Frajawali = 0
			if (!isNumber(user.srart24_CD_Fkucing)) user.srart24_CD_Fkucing = 0
			
		} else
			global.db.data.users[m.sender] = {
				// default
				srart24_nama: srart24.getName(m.sender),
				srart24_umur: "",
				srart24_kelamin: "",
				srart24_alamat: "",
				srart24_nomor: `${m.sender.split`@`[0]}`,
				srart24_terdaftar: false,
				srart24_status: "pengangguran",
				srart24_uang: 1000000,
				srart24_Aatm: false,
				srart24_atm: 0,
				srart24_health: 100,
				srart24_potion: 0,
				srart24_pasangan: "",

				// Ngepet
				srart24_lilin: 5,
				srart24_korek: 1,

				// pet
				srart24_naga: 0,
				srart24_rajawali: 0,
				srart24_kucing: 0,
				srart24_naga_: 0,
				srart24_rajawali_: 0,
				srart24_kucing_: 0,
				srart24_makananpet: 0,

				// Rpg-Berburu
				srart24_babi: 0,
				srart24_kerbau: 0,
				srart24_kanguru: 0,
				srart24_kelinci: 0,
				srart24_ayam: 0,
				srart24_bebek: 0,
				srart24_rusa: 0,
				srart24_zebra: 0,
				srart24_tupai: 0,
				srart24_kambing: 0,

				// Rpg-Mancing
				srart24_kepiting: 0,
				srart24_gurita: 0,
				srart24_cumi: 0,
				srart24_buntal: 0,
				srart24_dory: 0,
				srart24_lumba: 0,
				srart24_lobster: 0,
				srart24_udang: 0,
				srart24_ikan: 0,
				srart24_orca: 0,

				// RPG
				srart24_pancing: 0,
				srart24_panah: 0,
				srart24_armor: 0,

				// Adventure
				srart24_diamond: 0,
				srart24_gold: 0,
				srart24_kayu: 0,
				srart24_apel: 0,
				srart24_mangga: 0,
				srart24_pisang: 0,

				// Buat Cd
				srart24_CD_Claim: 0,
				srart24_CD_Adventure: 0,
				srart24_CD_Bansos: 0,
				srart24_CD_Berburu: 0,
				srart24_CD_Mancing: 0,
				srart24_CD_Kerja: 0,
				srart24_CD_Ngepet: 0,
				srart24_CD_loker: 0,
				
				// Cd Makan pet
				srart24_CD_Fnaga: 0,
				srart24_CD_Frajawali: 0,
				srart24_CD_Fkucing: 0,
			}

		let chatId = m.chat.toString()
		if (chatId.includes("@g.us")) {
			let chat = global.db.data.setting[chatId]
			if (typeof chat !== "object") global.db.data.setting[chatId] = {}

			if (chat) {
				if (!("welcome" in chat)) chat.welcome = false
				if (!("antiLink" in chat)) chat.antiLink = false
				if (!("antiBot" in chat)) chat.antiBot = false
			} else {
				global.db.data.setting[chatId] = {
					welcome: false,
					antiLink: false,
					antiBot: false,
				}
			}
		}
		
		let chatsn = m.sender.toString()
		if (chatId.includes("@s.whatsapp.net")) {
			let banlist = global.db.data.banned[chatsn]
			if (typeof banlist !== "object") global.db.data.banned[chatsn] = false
		}
		
	} catch (e) {
		console.error(e)
	}
}
