import React from "react";
import {redirect} from "next/navigation";
import {auth} from "@/auth";
import {Header} from "@/app/(ui)/_components/Header";
import {Footer} from "@/app/(ui)/_components/Footer";


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await auth();
    if (!session) redirect("/login")

    return (
        <div className="grid grid-rows-[6rem_1fr_6rem] min-h-screen">
            {/* Header */}
            <div className="w-full bg-secondaryBackgroundColor">
                <Header/>
            </div>

            {/* Main Content */}
            <div className="w-full bg-primaryBackgroundColor rounded-xl">
                {children}
            </div>

            {/* Footer */}
            <div className="w-full bg-secondaryBackgroundColor">
                <Footer/>
            </div>
        </div>

    );
}
