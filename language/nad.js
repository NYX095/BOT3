exports.wait = () => {
	return`*「❗」WAIT ANJ🗿🤙*`
}

exports.succes = () => {
	return`*「 SUKSES TOD🤙🗿 」*`
}

exports.lvlon = () => {
	return`*「❗」LEVELING ON 🗿🤙*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING OFF🗿🤙*`
}

exports.lvlnul = () => {
	return`*「❗」LEVEL LU MASIH KOSONG ANJ🗿*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUP BELUM AKTIF COK🗿*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFWNYA HIDUPIN DLU COK😎🤙\nKITA NOBAR🗿🤙*`
}

exports.noregis = () => {
	return`*「❗」VERIFIKASI DLU ANJ🗿🤙「❗」*\n\nketik : @verify`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY AJA NIH BRO, LU UDH GW BANNED SU🗿 :V*`
}

exports.premium = (prefix) => {
	return`Lu Siapa? Ini Fitur Buat Premium Doang Su🗿
Upgrade Ke Premium Dlu Tod🗿🤙
Kalo Lu minat Chat Owner Gw Anj 🐧🤙
Ketik : ${prefix}owner`
}

exports.rediregis = () => {
	return`*Lu udah verify Anj -_-*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba reply/tag ulang cok*`
}

exports.linkga = () => {
	return`*「❗」Linknya Kaga Valid Bro🗿🤙*`
}

exports.groupo = () => {
	return`*「❗」Cuman Bisa Buat Di Grup😎🤙*`
}

exports.ownerb = () => {
	return`*「❗」Owner Gw Doang Yang Bisa Make Ni Fitur🥴🤙*`
}

exports.ownerg = () => {
	return`*「❗」Owner Grup Ini Doang Yang Bisa Make Cok🗿🤙*`
}

exports.admin = () => {
	return`*「❗」Admin Grup Doang Yang Bisa Make Mek🥴🤙*`
}

exports.badmin = () => {
	return`*「❗」JADIIN GW ADMIN DLU LAH🤙🗿*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 gw banned lu anj*`
}

exports.wrongf = () => {
	return`*「🗿」Teks nya mana su🗿?*`
}

exports.clears = () => {
	return`*Sukses Tod😎🤙*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
\`\`\`➸ Nama : ${pushname}\`\`\`
\`\`\`➸ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Xp : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ Level : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*maaf ${pushname} limit lu hari ini habis*
*Limit di reset tiap jam 24:00*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 10K : 1 Bulan\`\`\`
\`\`\`Jika berminat silahkan hubungi owner\`\`\`
\`\`\`Kirim perintah : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit lu : ${isPrem ? '999999' : `${limitCounts}`}

Upgrade premium cok, biar bebas gunain bot`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ NOMOR : ${sender.split("@")[0]}
┃│➸ UANG : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONASI LAH GA DONASI MATI 🗿*
Pulsa : 081216465289
Dana : 085815163593

Donasi Supaya Lu Dapet Pahala Tong🗿🤙`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *IKLAN ${botName}* 」 ]----- 🔰
──────────────────────────────
◯ *DAFTAR SEWA & BUAT BOT :*
◯ *SEWA : 10K/GRUP (BULAN)*
◯ *BUAT : 30K (BISA JADI OWNER)*
◯ *PEMBAYARAN BISA MELALUI :*
◯ *OVO, GOPAY, DANA, PULSA+5K*
──────────────────────────────
◯ *KEUNTUNGAN SEWA BOT :*
◯ *1. BISA MEMASUKAN BOT KE GROUP*
◯ *2. BISA MENGGUNAKAN FITUR PREMIUM*
◯ *KEUNTUNGAN BUAT BOT :*
◯ *1. BISA MENJADI OWNER BOT SENDIRI*
◯ *2. BISA MENGGANTI NAMA BOT SENDIRI*
◯ *3. BISA MEMBAWA BOT KE GROUP*
◯ *4. BISA MENGGUNAKAN COMMAND OWNER*
◯ *5. BISA MENYEWAKAN BOT KEMBALI*
──────────────────────────────
◯ *JIKA MINAT IKLAN DIATAS*
◯ *HARAP HUBUNGI NOMOR DIBAWAH :*
◯ *wa.me/${ownerNumbers}*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}