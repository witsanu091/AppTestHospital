import { callPartnerApi } from '.';
import { UserModel } from '../../models/userModels';
import { AxiosRequestConfig } from 'axios';

class UserCallApi {
    static async getUser(id: number, keySecret: string): Promise<UserModel | null> {
        try {
            const requestParams: AxiosRequestConfig = {
                method: 'get',
                url: `/users/${id}`
            };

            const response = await callPartnerApi({ requestParams, keySecret });
            if (response.status === 200) {
                return response.data as UserModel;
            } else {
                console.error("Failed to fetch user data:", response);
                throw new Error("Failed to fetch user data");
            }
        } catch (error) {
            console.error("Error in getUser:", error);
            throw new Error("Error fetching user data");
        }
    }

    static async updateUser(id: number, data: Partial<UserModel>, keySecret: string): Promise<UserModel | null> {
        try {
            const requestParams: AxiosRequestConfig = {
                method: 'put',
                url: `/users/${id}`,
                data
            };

            const response = await callPartnerApi({ requestParams, keySecret });
            if (response.status === 200) {
                return response.data as UserModel;
            } else {
                console.error("Failed to update user data:", response);
                throw new Error("Failed to update user data");
            }
        } catch (error) {
            console.error("Error in updateUser:", error);
            throw new Error("Error updating user data");
        }
    }
}

export default UserCallApi;
