import { callPartnerApi } from '.';
import { medicationData } from '../../../assets/data/medicateData';
import { Medication } from '../../models/medicateModels';
import { ApiResponse, ApiResponseData } from '../../models/responseModels';
import { AxiosRequestConfig } from 'axios';

class HealthCallApi {
    static async getHealth(id: number, keySecret: string): Promise<ApiResponseData | null> {
        try {
            const requestParams: AxiosRequestConfig = {
                method: 'get',
                url: `/health/${id}`
            };

            const response = await callPartnerApi({ requestParams, keySecret });
            if (response.status === 200) {
                response.data = medicationData
                return response.data as ApiResponseData;
            } else {
                console.error("Failed to fetch Health data:", response);
                throw new Error("Failed to fetch Health data");
            }
        } catch (error) {
            console.error("Error in getHealth:", error);
            throw new Error("Error fetching Health data");
        }
    }

    static async updateHealth(id: number, data: Partial<Medication>, keySecret: string): Promise<ApiResponseData | null> {
        try {
            const requestParams: AxiosRequestConfig = {
                method: 'put',
                url: `/health/${id}`,
                data
            };

            const response = await callPartnerApi({ requestParams, keySecret });
            if (response.status === 200) {
                return response.data as ApiResponseData;
            } else {
                console.error("Failed to update Health data:", response);
                throw new Error("Failed to update Health data");
            }
        } catch (error) {
            console.error("Error in updateHealth:", error);
            throw new Error("Error updating Health data");
        }
    }
}

export default HealthCallApi;
