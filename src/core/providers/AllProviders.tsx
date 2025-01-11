"use client"
import {SessionProvider} from "next-auth/react";
import React, {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export default function AllProviders({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </SessionProvider>
    )
}
