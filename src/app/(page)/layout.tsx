"use client"

import type {ReactNode} from "react"
import CustomSidebar from "@/components/CustomSidebar"

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <div className={"w-screen h-screen flex flex-row"}>
            <CustomSidebar/>
            {children}
        </div>
    )
}