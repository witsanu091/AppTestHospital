export interface ApiResponse {
    isBase64Encoded: boolean;
    statusCode: number;
    body: ApiResponseData
}

export interface ApiResponseData {
    user_message: string;
    developer_message: string;
    response_date_time: string;
    response_code: string;
    response_data: any;
}
