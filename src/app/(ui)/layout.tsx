import React from "react";
import {SidebarProvider} from "@/shared/components/ui/sidebar";
import {AppSidebar} from "@/core/components/AppSidebar";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                {children}
            </main>
        </SidebarProvider>
    );
}
