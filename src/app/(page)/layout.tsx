"use client"

import type {ReactNode} from "react"
import CustomSidebar from "@/components/CustomSidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbPage,
    Input, KeyboardShortcut,
    SidebarInset,
    SidebarProvider,
    SidebarTrigger, ToastProvider
} from "lunalabs-ui"
import Notification from "@/components/Notification"

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <ToastProvider>
            <SidebarProvider className={"w-auto bg-primary"}>
                <CustomSidebar/>
                <div className={"flex flex-col gap-4 m-4 ml-0 rounded-md w-full min-h-[calc(100vh-2rem)] bg-secondary border border-main/40"}>
                    <div className="flex top-0 h-12 shrink-0 items-center gap-4 rounded-t-md border-b border-main/40 px-4 bg-secondary shadow-xs justify-between">
                        <div className={"flex items-center gap-3"}>
                            <SidebarTrigger className="-ml-1" size={18}/>
                            <div className={"h-5 w-px border-r-2 border-main"}/>
                            <Breadcrumb>
                                <BreadcrumbItem className="hidden md:block mt-0.5">
                                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        <div className={"flex items-center gap-4"}>
                            <Input className="w-72 bg-secondary shadow-none" placeholder="Search..."/>
                            <Notification/>
                        </div>

                    </div>
                    <div className="flex flex-1 flex-col p-4 pt-0">
                        {children}
                    </div>
                </div>
            </SidebarProvider>
        </ToastProvider>
    )
}