import React from 'react';
import type {Meta, StoryObj} from "@storybook/react";
import {ContextMenu, type MenuItem} from "@/components/ui/ContextMenu"
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

        const [open, setOpen] = React.useState(false);
        const [checked, setChecked] = React.useState(true);
        const [checked2, setChecked2] = React.useState(false);

        const items: MenuItem[] = [
            {label: "Label", type: "label"},
            {label: "Item 2", type: "item", icon: <GitMerge size={12}/>},
            {label: "Item 3", type: "item", shortcut: "Shift+L"},
            {label: "Checkbox", type: "checkbox", checked: checked, onCheckedChange: (s) => setChecked(s)},
            {label: "Checkbox 2", type: "checkbox", checked: checked2, onCheckedChange: (s) => setChecked2(s)},
            {type: "separator"},
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