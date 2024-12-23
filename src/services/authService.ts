import {Token, User} from "@/types/user";
import {ApiResponse} from "@/types/api";
import {apiClient} from "@/services/apiClient";
import {
    getAccessToken,
    getRefreshToken,
    setAccessToken,
    setRefreshToken,
    clearTokens,
} from "@/services/tokenHelpers";
import {getTranslator} from "@/i18n/translation";
import axios from "axios";

// Centralized error extraction
function extractErrorMessage(
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
async function handleResponse<T>(
    request: Promise<any>,
    translator?: (key: string) => string
): Promise<ApiResponse<T>> {
    const t = translator || (await getTranslator());
    try {
        const response = await request;
        return {success: true, data: response.data};
    } catch (error) {
        console.error("API Error:", error);
        return {success: false, error: extractErrorMessage(error, t)};
    }
}

// Register a new user
export const registerUser = async (
    username: string,
    email: string,
    password: string
): Promise<ApiResponse<Token>> => {
    const t = await getTranslator();
    return handleResponse<Token>(
        apiClient.post("/pool_user/register/", {username, email, password}),
        t
    );
};

// Log in a user
export const loginUser = async (
    email: string,
    password: string
): Promise<ApiResponse<Token>> => {
    const t = await getTranslator();
    const response = await handleResponse<Token>(
        apiClient.post("/pool_user/login/", {email, password}),
        t
    );

    // Store tokens on successful login
    if (response.success) {
        const {access, refresh} = response.data as any; // Adjust if tokens are nested
        await setAccessToken(access);
        await setRefreshToken(refresh);
    }

    return response;
};

// Refresh the access token
export const refreshToken = async (): Promise<string> => {
    const refresh = getRefreshToken();

    if (!refresh) {
        await clearTokens();
        throw new Error("Refresh token not found. Please log in again.");
    }

    const t = await getTranslator();
    const response = await handleResponse<{ access: string }>(
        apiClient.post("/token/refresh/", {refresh}),
        t
    );

    if (response.success) {
        await setAccessToken(response.data.access);
        return response.data.access;
    } else {
        await clearTokens();
        throw new Error(response.error || "Failed to refresh token.");
    }
};
