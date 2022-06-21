const xlsx = require('node-xlsx');
let workSheetsFromFile = xlsx.parse(`${__dirname}/wallet.xlsx`);
let massWallet = workSheetsFromFile[0].data;
let massWord = [];
for (let i = 1; i < massWallet.length; i++) {
  massWord.push(massWallet[i][2])
}
module.exports = massWord;