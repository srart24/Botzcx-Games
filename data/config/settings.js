/*
//===================//
	#	Script By: @srart24
//===================//

{
	Instagram: "https://instagram.com/srart24",
	Github: "https://github.com/srart24",
	Email: "mysrart24@gmail.com"
}
*/


const fs = require('fs')
const chalk = require('chalk')



// Owner
global.owner = ['17272417784', '628xxxxxxx']

// Untuk Tampilan Kontak
global.cNomor = "628xxxxxxx" 
global.cNama = "@srart24"

global.eml = 'mysrart24@gmail.com'
global.ytb = null
global.git = 'https://github.com/srart24'
global.instag = 'https://instagram.com/srart24'
global.web = 'https://srart24.xyz'

//sticker setting
global.packname = 'Script Bot:'
global.author = 'https://github.com/srart24/Botzcx-games'

// BOT SETTINGS
global.idgcBot = "120363186924097740@g.us" // Ketik > m.chat untuk mendapat id group
global.linkgcBot = 'https://chat.whatsapp.com/' // Link Grup Nya
global.joinGcBot = false // isi dulu ID Group  baru ubah ke true

// Janagn Lupa Bernafas ;v
global.namaBot = 'Botzcx-games'
global.wm = "Bot By; @srart24"
global.Modepublic = false
global.autoread = false
global.autoread_sw = false
global.conpsn = true // true Jika ingin menampilkan pesan di Console 

// reply pesan
global.replyUrl = "https://github.com/srart24/Botzcx-games"
global.thumb = "https://i.ibb.co/HtY26kD/srart24.jpg"


// Ucapan Anunya
/*
gunakan "@user" Untuk Tag orang
gunakan "@gc" Untuk Nama Group
*/

global.Upromote = "Selamat Kepada @user \nKamu Naik Jabatan Jadi Admin Group @gc"
global.Udemote = "Jiahaha @user \nTurun Jabatan Jadi Babu Group"
global.Uwelcome = "Hallo @user \nSelamat Datang Di Group @gc\nDan Silahkan Keluar"
global.Ubye = "Selamat Tinggal @user Semoga Tenang Di Sana"


// Respon
global.Responya = {
    done: '✅ Done',
    prem: '❎ Fitur ini hanya dapat digunakan oleh pengguna premium',
    admin: '❎ Fitur ini hanya dapat digunakan oleh admin grup',
    botAdmin: '❎ Fitur ini hanya dapat digunakan ketika bot adalah admin grup',
    owner: '❎ Fitur ini hanya dapat digunakan oleh owner bot',
    group: '❎ Fitur ini hanya untuk di dalam grup',
    private: '❎ Fitur ini hanya untuk obrolan pribadi',
    wait: 'Dalam proses...',
    error: '❎ Terjadi Kesalahan!',
    reg: '[❕] Silahkan Ketik Daftar Terlebih Dahulu Untuk Memakai Bot'
}


// Rpg - Harga Jual Hewan
global.hargaHewan = {
		babi: 10000,
		kerbau: 15000,
		kanguru: 20000,
		kelinci: 8000,
		ayam: 8000,
		bebek: 8000,
		rusa: 25000,
		zebra: 30000,
		tupai: 12000,
		kambing: 16000,
		kepiting: 5000,
		gurita: 7000,
		cumi: 6000,
		buntal: 8000,
		dory: 10000,
		lumba: 15000,
		lobster: 12000,
		udang: 8000,
		ikan: 11000,
		orca: 35000,
	}	


// Mau Pake Hapus bagian  /* sampai */
// cara pake  let res = fetch(API('sr', '/tools/downloaders/instagram', { url: m.text }, 'apikey'));
/*
global.srart24_API = {
  sr: 'https://api.srart24.xyz',
}
global.srart24_APIKeys = {
  'https://api.srart24.xyz': 'mesrart24'
}
*/



let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.blueBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})