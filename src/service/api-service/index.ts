import { AxiosRequestConfig, AxiosResponse } from "axios";
// import { Encryption } from "../security/encryption";
import { httpClient } from "../httpClient";
import { Encryption } from "../security/encryption";

const encryption = new Encryption();

interface DecryptBodyResponse {
    success: boolean;
    data: any;
    error?: Error;
}

interface CallPartnerApiParams {
    requestParams: AxiosRequestConfig;
    keySecret: string;
}

interface CallPartnerApiResponse {
    status: number;
    data: any;
    original_data: any;
}


export const decryptBody = async (
    body: { data: string; },
    key: string
): Promise<DecryptBodyResponse> => {
    try {
        const resBody = await encryption.decrypt256GCM(
            { ciphertext: body.data },
            key
        );
        return { success: true, data: JSON.parse(resBody), error: undefined };
    } catch (error) {
        console.error("Decryption error:", error);
        return { success: false, data: body, error: error as Error };
    }
};

export const callPartnerApi = async ({ requestParams, keySecret }: CallPartnerApiParams): Promise<CallPartnerApiResponse> => {
    let responseBody: any = null;
    console.log("🚀  process.env.BASE_URL_API:", process.env.BASE_URL_API)

    const response: AxiosResponse | { status: number; statusText: string; data: any } = await httpClient.request(requestParams).catch((error) => {
        return error.response
            ? error.response
            : { status: 408, statusText: error.message, data: error.message };
    });

    const { status, data } = response;

    if (status === 408) {
        responseBody = data;
    } else {
        try {
            const decryptedBody = decryptBody(data.body, keySecret);
            responseBody = (await decryptedBody).success ? (await decryptedBody).data : data;
        } catch (error) {
            console.error("Decryption or processing error:", error);
            responseBody = data;
        }
    }

    return { status, data: responseBody, original_data: data };
};

