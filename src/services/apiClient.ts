import axios from "axios";
import {env} from "@/core/data/env/client";
import {ApiResponse} from "@/types/api";
import {getTranslator} from "@/locales/config/translation";

export const apiClient = axios.create({
    baseURL: env.NEXT_PUBLIC_API_URL, // Replace with your API URL
    headers: {
        "Content-Type": "application/json",
    },
});


// Centralized error extraction
export function extractErrorMessage(
    error: unknown,
    translator: (key: string) => string
): string {
    if (axios.isAxiosError(error) && error.response?.data) {
        const {message} = error.response.data;
        return message || translator("services.unknownError");
    }
    return translator("services.serverError");
}

// Handle API responses
export async function handleResponse<T>(
    request: Promise<any>,
    translator?: (key: string) => string
): Promise<ApiResponse<T>> {
    const t = translator || (await getTranslator());
    try {
        const response = await request;
        return {success: true, data: response.data as T};
    } catch (error) {
        console.error("API Error:", error);
        return {success: false, error: extractErrorMessage(error, t)};
    }
}
