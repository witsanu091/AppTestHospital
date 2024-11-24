import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export const setStorage = (key: string, value: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        try {
            storage.set(key, value);
            resolve('success');
        } catch (e) {
            reject(e);
            console.log(e);
        }
    });
};

export const getStorage = (key: string): Promise<string> => {
    return new Promise((resolve) => {
        try {
            const value = storage.getString(key);
            resolve(value ?? '');
        } catch (e) {
            resolve('');
        }
    });
};

export const clearStorage = (): Promise<string> => {
    return new Promise((resolve) => {
        try {
            storage.clearAll();
            resolve('success');
        } catch (e) {
            resolve('');
        }
    });
};


export const getToken = (): Promise<string> => {
    return new Promise((resolve) => {
        try {
            const token = storage.getString('token');
            resolve(token ?? '');
        } catch (error) {
            console.log(error);
            resolve('');
        }
    });
};

export const getLanguage = (): Promise<string> => {
    return new Promise((resolve) => {
        try {
            const language = storage.getString('language');
            resolve(language ?? '');
        } catch (error) {
            console.log(error);
            resolve('');
        }
    });
};