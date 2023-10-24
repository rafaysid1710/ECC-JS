
import ECC from 'ecc';


const ecc = new ECC();


function generateKeys() {
  
  const keys = ecc.generateKeys();

  return keys;
}


function encrypt(plaintext, publicKey) {
  
  const ciphertext = ecc.encrypt(plaintext, publicKey);

  return ciphertext;
}


function decrypt(ciphertext, privateKey) {
 
  const plaintext = ecc.decrypt(ciphertext, privateKey);

  return plaintext;
}


export { generateKeys, encrypt, decrypt };
