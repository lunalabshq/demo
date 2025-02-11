import React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import {ContextMenu, MenuItem} from "@/components/ui/ContextMenu"
import {GitMerge} from "lucide-react"

const meta: Meta<typeof ContextMenu> = {
    title: "Components/ContextMenu",
    component: ContextMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {
    render: () => {

        const [open, setOpen] = React.useState(true);

        const items: MenuItem[] = [
            {label: "Label", type: "label"},
            {label: "Item 2", type: "item", icon: <GitMerge size={12}/>},
            {label: "Item 3", type: "item"},
            {label: "Checkbox", type: "checkbox", checked: true, onCheckedChange: (checked) => console.log(checked)},
            {label: "Checkbox 2", type: "checkbox", checked: false, onCheckedChange: (checked) => console.log(checked)},
            {label: "Seperator", type: "separator"},
            {label: "Submenu", type: "sub", items: [
                {label: "Subitem 1", type: "item"},
                {label: "Subitem 2", type: "item"},
            ]},
        ];


        return (
            <ContextMenu onOpenChange={setOpen} items={items}>
                <div>Open</div>
            </ContextMenu>
        );
    },
};