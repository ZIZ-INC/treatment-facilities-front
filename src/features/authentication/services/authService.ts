import {ApiResponse} from "@/types/api";
import {apiClient, handleResponse} from "@/services/apiClient";
import {clearTokens, getRefreshToken, setAccessToken, setRefreshToken,} from "./tokenHelpers";
import {getTranslator} from "@/locales/config/translation";
import {IToken} from "@/features/authentication/type";


// Register a new user
export const registerUser = async (
    username: string,
    email: string,
    password: string
): Promise<ApiResponse<IToken>> => {
    const t = await getTranslator();
    return handleResponse<IToken>(
        apiClient.post("/pool_user/register/", {username, email, password}),
        t
    );
};

// Log in a user
export const loginUser = async (
    email: string,
    password: string
): Promise<ApiResponse<IToken>> => {
    const t = await getTranslator();
    const response = await handleResponse<IToken>(
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
