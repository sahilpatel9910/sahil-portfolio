import CryptoJS from "crypto-js";

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  const response = await fetch(url);
  const encryptedData = await response.arrayBuffer();

  const encryptedUint8 = new Uint8Array(encryptedData);
  const key = CryptoJS.SHA256(password);

  const ivArray = encryptedUint8.slice(0, 16);
  const iv = CryptoJS.lib.WordArray.create(ivArray as any);

  const dataArray = encryptedUint8.slice(16);
  const ciphertext = CryptoJS.lib.WordArray.create(dataArray as any);

  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: ciphertext,
  });

  const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  const decryptedBuffer = new ArrayBuffer(decrypted.sigBytes);
  const uint8View = new Uint8Array(decryptedBuffer);
  
  for (let i = 0; i < decrypted.sigBytes; i++) {
    uint8View[i] = (decrypted.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
  }

  return decryptedBuffer;
};
