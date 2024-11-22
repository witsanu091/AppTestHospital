// src/stores/userStore.ts
import { create } from 'zustand';
import { getStorage, getToken, setStorage } from './storage';
import { UserModel } from '../models/userModels';


interface UserState {
    token: string | null;
    setToken: (token: string) => Promise<void>;
    clearToken: () => Promise<void>;
    fetchToken: () => Promise<void>;
    user: UserModel | null;
    setUser: (user: UserModel) => void;
}

export const useUserStore = create<UserState>((set) => ({
    token: null,
    user: null,
    setToken: async (token) => {
        await setStorage('token', token);
        set({ token });
    },

    clearToken: async () => {
        await setStorage('token', '');
        set({ token: null });
    },

    fetchToken: async () => {
        const token = await getToken();
        set({ token });
    },

    setUser: async (user) => {
        await setStorage('user', JSON.stringify(user));
        set({ user })
    },
    // getUser: async () => {
    //     const userString = getStorage('user');
    //     const user = JSON.parse(`${userString}`)
    //     return user ? user : null;
    // }

}));


export const getUserFromStorage = (): UserModel | null => {
    const userString = getStorage('user');
    const user = JSON.parse(`${userString}`)
    return user ? user : null;
};

