import React from "react"
import type {Meta, StoryObj} from "@storybook/react"
import {
    Box,
    Calendar, GitMerge,
    Settings2,
    Users
} from "lucide-react"
import {
    Sidebar,
    SidebarCollapsible,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarItem, SidebarProfile,
    SidebarProvider
} from "@/components/ui/Sidebar"
import Badge from "@/components/ui/Badge"
import type {TooltipProps} from "@/components/ui/Tooltip"
import type {MenuItem} from "@/lib/menu-types"

const meta: Meta<typeof Sidebar> = {
    title: "Components/Sidebar",
    component: Sidebar,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
    render: () => {

        const badge = <Badge title={"New"} variant={"info"} className={"bg-info/20 border-info/40 rounded-md"}/>

        const tooltip: Omit<TooltipProps, "trigger"> = {
            message: "List of Projects",
            anchor: "rc"
        }

        const items: MenuItem[] = [
            {label: "Label", type: "label"},
            {label: "Item 2", type: "item", icon: <GitMerge size={12}/>},
            {label: "Item 3", type: "item", shortcut: "Shift+L"},
            {type: "separator"},
            {label: "Submenu", type: "sub", items: [
                {label: "Subitem 1", type: "item"},
                {label: "Subitem 2", type: "item"}
            ]}
        ]

        return (
            <SidebarProvider>
                <Sidebar collapsible="icon">
                    <SidebarHeader/>
                    <SidebarContent>
                        <SidebarGroup label={"Menu"}>
                            <SidebarItem label={"Projects"} icon={<Box size={16}/>} tooltip={tooltip}/>
                            <SidebarItem label={"Teams"} icon={<Users size={16}/>} badge={badge}/>
                            <SidebarItem label={"Calendar"} icon={<Calendar size={16}/>} menuItems={items}/>
                        </SidebarGroup>
                        <SidebarGroup label={"Collapsible"}>
                            <SidebarCollapsible mainItem={{label: "Settings", icon: <Settings2 size={16}/>}}>
                                <SidebarItem label={"General"}/>
                                <SidebarItem label={"Audio"}/>
                                <SidebarItem label={"Video"}/>
                            </SidebarCollapsible>
                        </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarProfile name={"mvriu5"} email={"marius.ahsmus@gmail.com"} avatar={""}/>
                    </SidebarFooter>
                </Sidebar>
            </SidebarProvider>
        )
    }
}