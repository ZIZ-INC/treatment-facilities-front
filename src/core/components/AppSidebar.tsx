"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/shared/components/ui/sidebar"
import {useTranslations} from "next-intl";
import {generateCommonMenuItems, generateManagerMenuItems} from "@/core/utils/sidebar";
import {useSession} from "next-auth/react";
import Image from "next/image";


export function AppSidebar() {
    const t = useTranslations("core.components.AppSidebar")
    const {data} = useSession()

    const commonItems = generateCommonMenuItems(t);
    const managerItems = generateManagerMenuItems(t);
    return (
        <Sidebar>
            <SidebarHeader className="py-0 px-12 h-24">
                <Image src="assets/Logo.svg" alt="logo" width={254} height={96}/>
            </SidebarHeader>
            <SidebarContent className="gap-8 mt-5">
                <SidebarGroup className="px-12 gap-4">
                    <SidebarGroupLabel className="text-md font-thin text-sidebar-primary-foreground">{t("calculators")}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-8">
                            {commonItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon style={{width: 32, height: 32}}/>
                                            <span className="text-lg">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {data?.user?.is_superuser && (
                    <SidebarGroup className="px-12 gap-4">
                        <SidebarGroupLabel className="text-md font-thin text-sidebar-primary-foreground">{t("managerInstruments")}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu className="gap-8">
                                {managerItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon style={{width: 32, height: 32}}/>
                                                <span className="text-lg">{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                )}
            </SidebarContent>
        </Sidebar>
    )
}
