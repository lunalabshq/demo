"use client"

import {Button, SidebarTrigger} from "lunalabs-ui"
import {Bell} from "lucide-react"

function HeadBar() {
    return (
        <div className={"h-12 sticky top-0 w-full bg-primary border-b border-main p-2"}>
            <SidebarTrigger/>
            <Button
                variant={"ghost"}
            >
                <Bell size={16}/>
            </Button>
        </div>
    )
}

export default HeadBar