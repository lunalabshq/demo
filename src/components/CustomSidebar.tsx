"use client"

import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarFooter,
    SidebarGroupLabel,
    SidebarMenu,
    DropdownMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    Avatar,
    AvatarImage,
    AvatarFallback,
    useSidebar,
    PopoverTrigger,
    SidebarMenuItem,
    PopoverContent,
    Popover, Button, DialogTrigger,
    Dialog,
} from "lunalabs-ui"
import {projects} from "@/lib/mockup-data/projects"
import {
    Box,
    Calendar,
    ChevronsUpDown,
    LayoutPanelLeft,
    LogOut,
    MoreHorizontal,
    Plus,
    Settings,
    Share,
    Trash,
    User
} from "lucide-react"
import type { MenuItem } from "@/lib/menu-types"
import type React from "react"
import {cn} from "@/lib/utils"
import { ProjectDialog } from "./dialogs/ProjectDialog"
import { useState } from "react"

function CustomSidebar() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const { state } = useSidebar()

    const projectItems: MenuItem[] = [
        {label: "Project Actions", type: "label"},
        {label: "Share Project", type: "item", icon: <Share size={12}/>},
        {label: "Delete", type: "item", icon: <Trash size={12}/>},
        {label: "Leave", type: "item", icon: <LogOut size={12}/>}
    ]

    const sidebarItems = [
        {
            title: "Dashboard",
            url: "",
            icon: <LayoutPanelLeft size={16} />,
            selected: true,
            tooltip: {
                message: "Dashboard",
            }
        },
        {
            title: "Projects",
            url: "projects",
            icon: <Box size={16} />,
            selected: false,
            tooltip: {
                message: "Projects",
            }
        },
        {
            title: "Calendar",
            url: "",
            icon: <Calendar size={16} />,
            selected: false,
            tooltip: {
                message: "Calendar",
            }
        },
    ]

    return (
        <Sidebar collapsible="icon" className={"sticky border-none"}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className={"flex items-center justify-between gap-4 h-8 pt-3 group-data-[collapsible=icon]:hidden"}>
                        <div className={"w-full h-8 flex items-center justify-center bg-brand/20 text-secondary rounded-md font-mono shadow-md"}>
                            Acme Inc.
                        </div>
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                            <DialogTrigger asChild>
                                <Button
                                    data-state={dialogOpen ? "open" : "closed"}
                                    className={"w-max px-2 data-[state=open]:bg-inverted/10 data-[state=open]:text-primary"}
                                    variant={"ghost"}
                                >
                                    <Plus size={16} />
                                </Button>
                            </DialogTrigger>
                            <ProjectDialog/>
                        </Dialog>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarMenu>
                        {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                        {sidebarItems?.map((item: any) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton isActive={item.selected}>
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
                                <DropdownMenu items={projectItems} asChild={true} align={"start"} side={"right"}>
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
                        <Popover>
                            <PopoverTrigger asChild>
                                <SidebarMenuButton
                                    className={cn(
                                        "h-12 mb-2 data-[state=open]:bg-secondary data-[state=open]:text-primary justify-between",
                                        "group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:hover:bg-transparent",
                                        "group-data-[collapsible=icon]:!h-12 transition-all"
                                    )}
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
                            </PopoverTrigger>
                            <PopoverContent
                                className={"p-1 w-48 gap-1"}
                                side={state === "expanded" ? "top" : "right"}
                                align={state === "expanded" ? "start" : "end"}
                                sideOffset={state === "expanded" ? 8 : 16}

                            >
                                <div className={"flex gap-2 px-2 py-1 items-center rounded-md hover:bg-secondary hover:text-primary"}>
                                    <User size={16}/>
                                    <p>Profile</p>
                                </div>
                                <div className={"flex gap-2 px-2 py-1 items-center rounded-md hover:bg-secondary hover:text-primary"}>
                                    <Settings size={16}/>
                                    <p>Settings</p>
                                </div>
                                <div className={"flex gap-2 px-2 py-1 items-center rounded-md hover:bg-error/10 text-error"}>
                                    <LogOut size={16}/>
                                    <p>Logout</p>
                                </div>

                            </PopoverContent>
                        </Popover>

                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default CustomSidebar