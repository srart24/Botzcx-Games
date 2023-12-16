/*
//===================//
	#	Script By: @srart24
//===================//

{
	Instagram: "https://instagram.com/srart24",
	Github: "https://github.com/srart24"
}
*/


exports.derex = async (m, srart24) => {
  const regexIg = /https:\/\/www\.instagram\.com\/[^\s]+/g;
  const regextt = /https:\/\/(?:www|vt|vm)\.tiktok\.com\/[^\s]+/g;
  
  const urlig = m.text.match(regexIg);
  const urltt = m.text.match(regextt);

if (urlig && m.text.startsWith("https")) {
  console.log("Instagram URL Detect");
  try {
    let res = await scraper.downloader.instagram(m.text);
    let hsl = await res.result;

    let sentFiles = [];
    for (var i = 0; i < hsl.length; i++) {
      if (!sentFiles.includes(hsl[i])) {
        await srart24.sendFile(m.chat, hsl[i], 'srart24', wm, m);
        sentFiles.push(hsl[i]);
      }
    }
  } catch (error) {
    console.error(error);
  }
}


  if (urltt && m.text.startsWith("https")) {
    console.log("TikTok URL Detect");
    await scraper.downloader.tiktok(m.text).then(res => {
        const { username, upload, like, share, link } = res.result
		let cap = `
👤 username: ${username}
🏷️ upload: ${upload}
👍 like: ${like}
🎎 share: ${share}
`.trim()
srart24.sendFile(m.chat, link, 'p.mp4', cap, m);
    }).catch(err => {
        console.error(err) 
    });
}

};

exports.antiLink = async (m, srart24, isBotAdmins, isAdmins) => {
	let linkregexgc = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
	let isGroupLink = linkregexgc.exec(m.text)
	if (isGroupLink) {
		if (!isBotAdmins) return m.reply("Link Terdeteksi")
		if (isAdmins) return true
			await srart24.sendMessage(m.chat, { delete: m.key })
			// await srart24.groupParticipantsUpdate(m.chat, [m.sender], "remove")
	}
}
