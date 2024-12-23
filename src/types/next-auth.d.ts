import "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        username: string;
        email: string;
        is_active?: boolean;
        is_staff?: boolean;
    }

    interface Session {
        user: User;
    }

    interface JWT {
        user: User;
    }
}
