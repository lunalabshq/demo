"use client"

import type {ReactNode} from "react"
import CustomSidebar from "@/components/CustomSidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, BreadcrumbPage,
    BreadcrumbSeparator,
    SidebarInset, SidebarProvider,
    SidebarTrigger
} from "lunalabs-ui"

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <SidebarProvider className={"w-auto"}>
            <CustomSidebar/>
            <SidebarInset className={"bg-secondary"}>
                <div className="flex top-0 h-12 shrink-0 items-center gap-4 border-b border-main px-4 bg-secondary shadow-xs">
                    <SidebarTrigger className="-ml-1" size={18}/>
                    <Breadcrumb>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="#">
                                Building Your Application
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
)
}