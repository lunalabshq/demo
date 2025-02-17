import React from 'react';
import type {Meta, StoryObj} from "@storybook/react";
import {GitMerge} from "lucide-react"
import {DropdownMenu} from "@/components/ui/Dropdown"
import type {MenuItem} from "@/lib/menu-types"
import Button from "@/components/ui/Button"

const meta: Meta<typeof DropdownMenu> = {
    title: "Components/DropdownMenu",
    component: DropdownMenu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>

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
            <DropdownMenu onOpenChange={setOpen} items={items}>
                <Button>Open</Button>
            </DropdownMenu>
        );
    },
};