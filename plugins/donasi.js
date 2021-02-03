let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Im3 [05807174320]
│ • Smartfren [08819547416]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
