import {JwtPayload} from "jwt-decode";

export interface User {
    id: string; // Read-only field
    username: string; // Required, minLength: 1, maxLength: 255
    email: string; // Required, valid email format, minLength: 1, maxLength: 255
    is_active?: boolean; // Optional, read-only
    is_staff?: boolean; // Optional, read-only
}

export interface Token {
    access: string;
    refresh: string;
}

export interface CustomJwtPayload extends JwtPayload {
    user_id: number;
    user: User;
}


