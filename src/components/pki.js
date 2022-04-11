const rsa = require('js-crypto-rsa');
// import rsa from 'js-crypto-rsa/dist/index.js';

export async function encrypt(text, publicKey) {
  let encryptedText=''
  await rsa.encrypt(
      Buffer.from(text),
      publicKey,
      'SHA-256',
      ).then((encrypted) => {
          encryptedText = encrypted;
  })
  return encryptedText;
}


export async function decrypt(encrypted, key) {
let decryptedText = ''
await rsa.decrypt(
  encrypted,
  key,
  'SHA-256',
).then((decrypted) => {
    decryptedText= decrypted
});
return Buffer.from(decryptedText).toString()
}
