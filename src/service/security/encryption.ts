// import crypto from "crypto";

// export class Encryption {
//     private sha256: string;
//     private aes256ecb: string;
//     private aes256gcm: string;
//     private aes256cbc: string;
//     private ivLen: number;

//     constructor() {
//         this.sha256 = "sha256";
//         this.aes256ecb = "aes-256-ecb";
//         this.aes256gcm = "aes-256-gcm";
//         this.aes256cbc = "aes-256-cbc";
//         this.ivLen = 12;
//     }

//     HmacSHA256(key: string, text: string): Buffer {
//         return crypto.createHmac(this.sha256, key).update(text).digest();
//     }

//     HmacSHA256ToHex(key: string, text: string): string {
//         return crypto.createHmac(this.sha256, key).update(text).digest("hex");
//     }

//     encrypt256ecb(plaintext: string, key: string): string {
//         const cipher = crypto.createCipheriv(this.aes256ecb, key, "");
//         let ciphertext = cipher.update(plaintext, "utf8", "hex");
//         ciphertext += cipher.final("hex");
//         return ciphertext;
//     }

//     encrypt256ecbBase64(plaintext: string, key: string): string {
//         const cipher = crypto.createCipheriv(this.aes256ecb, key, "");
//         let ciphertext = cipher.update(plaintext, "utf8", "base64");
//         ciphertext += cipher.final("base64");
//         return ciphertext;
//     }

//     decrypt256ecb(ciphertext: string, key: string): string {
//         const decipher = crypto.createDecipheriv(this.aes256ecb, key, "");
//         let plaintext = decipher.update(ciphertext, "hex", "utf8");
//         plaintext += decipher.final("utf8");
//         return plaintext;
//     }

//     encrypt256cbc(plaintext: string, key: string): string {
//         const iv = Buffer.from("0123456789ABCDEF", "utf8");
//         const keyAes = Buffer.from(key, "base64");
//         const cipher = crypto.createCipheriv(this.aes256cbc, keyAes, iv);
//         let ciphertext = cipher.update(plaintext, "utf8", "hex");
//         ciphertext += cipher.final("hex");
//         return ciphertext;
//     }

//     decrypt256cbc(ciphertext: string, key: string): string {
//         const iv = Buffer.from("0123456789ABCDEF", "utf8");
//         const keyAes = Buffer.from(key, "base64");
//         const decipher = crypto.createDecipheriv(this.aes256cbc, keyAes, iv);
//         let plaintext = decipher.update(ciphertext, "hex", "utf8");
//         plaintext += decipher.final("utf8");
//         return plaintext;
//     }

//     encrypt256GCM(text: string, key: string): string {
//         const iv = crypto.randomBytes(this.ivLen);
//         const encryptKeyDecode = Buffer.from(key, "base64");

//         // Cast as CipherGCM to access getAuthTag
//         const cipher = crypto.createCipheriv(this.aes256gcm, encryptKeyDecode, iv) as crypto.CipherGCM;

//         const encrypted = Buffer.concat([
//             cipher.update(text, "utf8"),
//             cipher.final(),
//         ]);

//         const tag = cipher.getAuthTag(); // Works with CipherGCM type
//         return Buffer.concat([iv, encrypted, tag]).toString("base64");
//     }

//     decrypt256GCM(encryptData: string, key: string): string {
//         const encryptKeyDecode = Buffer.from(key, "base64");
//         const bData = Buffer.from(encryptData, "base64");

//         const iv = bData.slice(0, this.ivLen);
//         const tag = bData.slice(bData.length - 16);
//         const text = bData.slice(this.ivLen, bData.length - 16);

//         // Cast as DecipherGCM to access setAuthTag
//         const decipher = crypto.createDecipheriv(this.aes256gcm, encryptKeyDecode, iv) as crypto.DecipherGCM;
//         decipher.setAuthTag(tag); // Works with DecipherGCM type

//         const decrypted = decipher.update(text, undefined, "utf8") + decipher.final("utf8");
//         return decrypted;
//     }

//     hashSha256(txt: string): string {
//         const hash = crypto.createHash(this.sha256);
//         return hash.update(txt).digest("base64");
//     }
// }
