"use client"

import type {ReactNode} from "react"
import CustomSidebar from "@/components/CustomSidebar"
import HeadBar from "@/components/HeadBar"
import {SidebarProvider} from "lunalabs-ui"

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <SidebarProvider>
            <div className={"w-screen h-screen flex flex-row"}>
                <CustomSidebar/>
                <div className={"h-screen w-full flex flex-col"}>
                    <HeadBar/>
                    {children}
                </div>

            </div>
        </SidebarProvider>
    )
}