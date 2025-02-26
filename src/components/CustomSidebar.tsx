"use client"

import {Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarItem, SidebarProfile, SidebarFooter} from "lunalabs-ui"
import {projects} from "@/data"
import {Box, Calendar, LayoutPanelLeft} from "lucide-react"

function CustomSidebar() {
    return (
        <Sidebar>
            <SidebarHeader/>
            <SidebarContent>
                <SidebarGroup label={"Menu"}>
                    <SidebarItem label={"Dashboard"} icon={<LayoutPanelLeft size={16}/>}/>
                    <SidebarItem label={"Projects"} icon={<Box size={16}/>}/>
                    <SidebarItem label={"Calendar"} icon={<Calendar size={16}/>}/>
                </SidebarGroup>
                <SidebarGroup label={"Projects"}>
                    {projects.map((project) => (
                        <SidebarItem key={project.title} label={project.title} />
                    ))}
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarProfile name={"User123"} email={"user123@gmail.com"} avatar={""}/>
            </SidebarFooter>
        </Sidebar>
    )
}

export default CustomSidebar