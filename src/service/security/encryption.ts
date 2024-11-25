import { NativeModules, Platform } from 'react-native'
var Aes = NativeModules.Aes

export class Encryption {
    private sha256: string;
    private ivLen: number;
    private aes256cbc: string;
    private aes256gcm: string;

    constructor() {
        this.sha256 = "sha256";
        this.ivLen = 12;
        this.aes256cbc = "aes-256-cbc";
        this.aes256gcm = "aes-256-gcm";
    }

    async encrypt256cbc(plaintext: string, key: string): Promise<string> {
        const iv = "0123456789ABCDEF";
        try {
            const ciphertext = await Aes.encrypt(plaintext, key, iv, this.aes256cbc);
            return ciphertext;
        } catch (error) {
            console.error("Error encrypting with AES-256-CBC:", error);
            throw error;
        }
    }

    async decrypt256cbc(ciphertext: string, key: string): Promise<string> {
        const iv = "0123456789ABCDEF";
        try {
            const plaintext = await Aes.decrypt(ciphertext, key, iv, this.aes256cbc);
            return plaintext;
        } catch (error) {
            console.error("Error decrypting with AES-256-CBC:", error);
            throw error;
        }
    }

    async encrypt256GCM(text: string, key: string): Promise<{ ciphertext: string; iv: string }> {
        const iv = await Aes.randomKey(this.ivLen);
        try {
            const ciphertext = await Aes.encrypt(text, key, iv, this.aes256gcm);
            return { ciphertext, iv };
        } catch (error) {
            console.error("Error encrypting with AES-256-GCM:", error);
            throw error;
        }
    }

    async decrypt256GCM(
        encryptedData: { ciphertext: string; },
        key: string
    ): Promise<string> {
        const iv: number = this.ivLen
        const { ciphertext } = encryptedData;
        try {
            const plaintext = await Aes.decrypt(ciphertext, key, iv, this.aes256gcm);
            return plaintext;
        } catch (error) {
            console.error("Error decrypting with AES-256-GCM:", error);
            throw error;
        }
    }

    async hashSha256(txt: string): Promise<string> {
        try {
            const hash = await Aes.sha256(txt);
            return hash;
        } catch (error) {
            console.error("Error hashing with SHA-256:", error);
            throw error;
        }
    }
}
