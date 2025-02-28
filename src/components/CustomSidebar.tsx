"use client"

import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarFooter,
    SidebarProvider,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    DropdownMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    Avatar,
    AvatarImage,
    AvatarFallback,
    SidebarInset,
    SidebarTrigger,
    Breadcrumb,
    BreadcrumbSeparator,
    BreadcrumbItem,
    BreadcrumbPage,
    BreadcrumbLink, MenuItem, Button
} from "lunalabs-ui"
import {projects} from "@/data"
import {Box, Calendar, ChevronsUpDown, LayoutPanelLeft, MoreHorizontal} from "lucide-react"

function CustomSidebar() {

    const profileItems: MenuItem[] = [
    ]

    const projectItems: MenuItem[] = [

    ]

    const sidebarItems = [
        {
            title: "Dashboard",
            url: "",
            icon: <LayoutPanelLeft size={16} />
        },
        {
            title: "Projects",
            url: "https://luna-labs.github.io/icons/",
            icon: <Box size={16} />
        },
        {
            title: "Contact",
            url: "https://luna-labs.github.io/icons/",
            icon: <Calendar size={16} />
        },
    ]

    return (
        <SidebarProvider>
            <Sidebar collapsible="icon">
                <SidebarHeader/>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Platform</SidebarGroupLabel>
                            <SidebarMenu>
                                {sidebarItems?.map((item: any) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton>
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
                                    <DropdownMenu items={projectItems}>
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
                            <DropdownMenu items={profileItems}>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-secondary data-[state=open]:text-primary justify-between"
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
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <hr className="mr-2 h-4 border-main" />
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
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="aspect-video rounded-xl bg-muted/50" />
                        <div className="aspect-video rounded-xl bg-muted/50" />
                        <div className="aspect-video rounded-xl bg-muted/50" />
                    </div>
                    <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default CustomSidebar