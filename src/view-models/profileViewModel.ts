import UserCallApi from '../service/api-service/callApiUser';
import { UserModel } from '../models/userModels';

import { useUserStore } from '../stores/userStorage';

export const useProfileViewModel = () => {
    const { user, setUser } = useUserStore();

    const loadUserProfile = async (id: number) => {
        try {
            const secretKey = process.env.KEY_ENCRYPT || ""
            const userData = await UserCallApi.getUser(id, secretKey);
            if (userData) setUser(userData);
        } catch (error) {
            console.error("Failed to load user profile:", error);
        }
    };

    const saveUserProfile = async (id: number, updatedData: Partial<UserModel>) => {
        try {
            const secretKey = process.env.KEY_ENCRYPT || ""
            const updatedUser = await UserCallApi.updateUser(id, updatedData, secretKey);
            if (updatedUser) setUser(updatedUser);
        } catch (error) {
            console.error("Failed to save user profile:", error);
        }
    };

    return {
        user,
        loadUserProfile,
        saveUserProfile,
    };
};
