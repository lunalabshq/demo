"use client"

import type {ReactNode} from "react"
import CustomSidebar from "@/components/CustomSidebar"
import {
    Avatar, AvatarFallback,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, BreadcrumbPage,
    BreadcrumbSeparator, Button, Input, Popover, PopoverContent, PopoverTrigger,
    SidebarInset, SidebarProvider,
    SidebarTrigger
} from "lunalabs-ui"
import {Bell} from "lucide-react"
import {notifications} from "@/data"
import Notification from "@/components/Notification"

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <SidebarProvider className={"w-auto"}>
            <CustomSidebar/>
            <SidebarInset className={"bg-secondary"}>
                <div className="flex top-0 h-12 shrink-0 items-center gap-4 border-b border-main px-4 bg-secondary shadow-xs justify-between">
                    <div className={"flex items-center gap-4"}>
                        <SidebarTrigger className="-ml-1" size={18}/>
                        <Breadcrumb>
                            <BreadcrumbItem className="hidden md:block mt-0.5">
                                <BreadcrumbPage>Dashboard</BreadcrumbPage>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className={"flex items-center gap-4"}>
                        <Input className="w-80 bg-secondary shadow-none" placeholder="Search..."/>
                        <Notification/>
                    </div>

                </div>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
)
}