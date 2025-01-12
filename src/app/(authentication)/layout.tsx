import React from "react";
import {redirect} from "next/navigation";
import {auth} from "@/auth";


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await auth();
    if (session) redirect("/")
    return (
        <div className="bg-primaryBackgroundColor">
            {children}
        </div>
    );
}
