import React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import {
    Toolbar,
    ToolbarButton,
    ToolbarLink,
    ToolbarSeparator,
    ToolbarToggleGroup,
    ToolbarToggleItem
} from "@/components/ui/Toolbar"
import {AlignCenter, AlignLeft, AlignRight, Bold, Italic, Strikethrough} from "lucide-react"

const meta: Meta<typeof Toolbar> = {
    title: "Components/Toolbar",
    component: Toolbar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Toolbar>

export const Default: Story = {
    render: () => {

        return (
            <div className={"flex flex-col space-y-2 p-32 bg-secondary"}>
                <Toolbar>
                    <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
                        <ToolbarToggleItem
                            className="ToolbarToggleItem"
                            value="bold"
                            aria-label="Bold"
                        >
                            <Bold size={16} />
                        </ToolbarToggleItem>
                        <ToolbarToggleItem
                            className="ToolbarToggleItem"
                            value="italic"
                            aria-label="Italic"
                        >
                            <Italic size={16}/>
                        </ToolbarToggleItem>
                        <ToolbarToggleItem
                            className="ToolbarToggleItem"
                            value="strikethrough"
                            aria-label="Strike through"
                        >
                            <Strikethrough size={16}/>
                        </ToolbarToggleItem>
                    </ToolbarToggleGroup>
                    <ToolbarSeparator className="ToolbarSeparator" />
                    <ToolbarToggleGroup
                        type="single"
                        defaultValue="center"
                        aria-label="Text alignment"
                    >
                        <ToolbarToggleItem
                            className="ToolbarToggleItem"
                            value="left"
                            aria-label="Left aligned"
                        >
                            <AlignLeft size={16}/>
                        </ToolbarToggleItem>
                        <ToolbarToggleItem
                            className="ToolbarToggleItem"
                            value="center"
                            aria-label="Center aligned"
                        >
                            <AlignCenter size={16}/>
                        </ToolbarToggleItem>
                        <ToolbarToggleItem
                            className="ToolbarToggleItem"
                            value="right"
                            aria-label="Right aligned"
                        >
                            <AlignRight size={16}/>
                        </ToolbarToggleItem>
                    </ToolbarToggleGroup>
                    <ToolbarSeparator className="ToolbarSeparator" />
                    <ToolbarLink
                        className="ToolbarLink"
                        href="#"
                        target="_blank"
                        style={{ marginRight: 10 }}
                    >
                        Edited 2 hours ago
                    </ToolbarLink>
                    <ToolbarButton className="ToolbarButton" style={{ marginLeft: "auto" }}>
                        Share
                    </ToolbarButton>
                </Toolbar>
            </div>
        );
    },
};