"use client"

import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarFooter,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    DropdownMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    Avatar,
    AvatarImage,
} from "lunalabs-ui"
import {projects} from "@/data"
import type { MenuItem } from "@/lib/menu-types"
import type React from "react"

const CustomSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {

    const profileItems: MenuItem[] = [
    ]

    const projectItems: MenuItem[] = [
    ]

    const sidebarItems = [
        {
            title: "Dashboard",
            url: "",
        },
        {
            title: "Projects",
        },
        {
        },
    ]

    return (
            <Sidebar collapsible="icon" className={"sticky"}>
                <SidebarHeader/>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Platform</SidebarGroupLabel>
                            <SidebarMenu>
                                {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                                {sidebarItems?.map((item: any) => (
                                    <SidebarMenuItem key={item.title}>
                                            {item.icon}
                                            <a href={item.url}>
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                    </SidebarGroup>
                    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                        <SidebarGroupLabel>Projects</SidebarGroupLabel>
                        <SidebarMenu>
                            {projects.map((item) => (
                                <SidebarMenuItem key={item.title} className={"h-8"}>
                                    <SidebarMenuButton asChild className={"h-8"}>
                                        <a href={item.url}>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                        <SidebarMenuAction showOnHover asChild>
                                            <MoreHorizontal />
                                            <span className="sr-only">More</span>
                                        </SidebarMenuAction>
                                    </DropdownMenu>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem>
                                <SidebarMenuButton className="text-secondary/70">
                                    <MoreHorizontal className="text-secondary/70" />
                                    <span>More</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                                <SidebarMenuButton
                                    className="h-10 data-[state=open]:bg-secondary data-[state=open]:text-primary justify-between group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:hover:bg-transparent group-data-[collapsible=icon]:!h-10"
                                >
                                    <div className={"flex flex-row space-x-2"}>
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={""} alt={""} />
                                            <AvatarFallback/>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">{"Guest"}</span>
                                            <span className="truncate text-xs">{"guest@email.com"}</span>
                                        </div>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4" />
                                </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
    )
}

export default CustomSidebar