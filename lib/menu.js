/*
//===================//
	#	Script By: @srart24
//===================//

{
	Instagram: "https://instagram.com/srart24",
	Github: "https://github.com/srart24"
}
*/

exports.iniMenu = async (m, srart24, isOwners) => {
	const { srart24_nama, srart24_umur, srart24_alamat, srart24_nomor, srart24_kelamin } = global.db.data.users[m.sender]
	let eml = (srart24_kelamin === 'L') ? "👨‍⚖️" : (srart24_kelamin === 'P') ? "👩‍⚖️" : "";
	let jkl = srart24_kelamin === "L" ? "👨‍⚖️ Gender: *Laki-Laki*" : srart24_kelamin === "P" ? "👩‍⚖️ Gender: *Perempuan*" : "Waria"
	let cap = `Hallo ${srart24_nama} 🖐`
	let str = `
╭────────────────
│ ${eml} Nama: *${srart24_nama}*
│ ☠️ Umur: *${srart24_umur} Tahun*
│ ${jkl}
│ 🏠 Alamat: *${srart24_alamat}*
│ 📱 Nomor: *+${srart24_nomor}*
╰────────────────

╭──── Main ────────
${mMain.map(item => `│ ❐➣ ${item}`).join('\n')}
╰────────────────
${m.isGroup ? `
╭──── Grup ────────
${mGroup.map(item => `│ ❐➣ ${item}`).join('\n')}
╰────────────────\n` : ''}
╭────── Rpg ───────
${mRpg.map(item => `│ ❐➣ ${item}`).join('\n')}
╰────────────────

╭────── Games ───────
${mgmys.map(item => `│ ❐➣ ${item}`).join('\n')}
╰────────────────

╭────── Fun ───────
${mFun.map(item => `│ ❐➣ ${item}`).join('\n')}
╰────────────────

╭────── Sticker ───────
${mStc.map(item => `│ ❐➣ ${item}`).join('\n')}
╰────────────────
${isOwners ? `
╭────── Owner ──────
${mOwner.map(item => `│ ❐➣ ${item}`).join('\n')}
╰────────────────` : ''} 
`;

srart24.sendPdf(m.chat, str, cap, m)
}