import React from "react";
import {Header} from "@/core/components/Header";
import {Footer} from "@/core/components/Footer";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col h-dvh bg-primaryBackgroundColor">
            {/* Header */}
            <div className="min-h-16 max-h-32 flex-shrink-0">
                <Header/>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {children}
            </div>

            {/* Footer */}
            <div className="h-16 border-t flex-shrink-0">
                <Footer/>
            </div>
        </div>
    );
}
