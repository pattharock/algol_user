// import rsa from 'js-crypto-rsa';
// const rsa = require('js-crypto-rsa');

// async function encrypt(text, publicKey) {
//   let encryptedText=''
//   await rsa.encrypt(
//       Buffer.from(text),
//       publicKey,
//       'SHA-256',
//       ).then((encrypted) => {
//           encryptedText = encrypted;
//   })
//   return encryptedText;
// }


// async function decrypt(encrypted, key) {
// let decryptedText = ''
// await rsa.decrypt(
//   encrypted,
//   key,
//   'SHA-256',
// ).then((decrypted) => {
//     decryptedText= decrypted
// });
// return Buffer.from(decryptedText).toString()
// }

// export {encrypt, decrypt};