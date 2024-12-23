import axios from "axios";
import {env} from "@/data/env/server";

export const apiClient = axios.create({
    baseURL: env.API_URL, // Replace with your API URL
    headers: {
        "Content-Type": "application/json",
    },
});
