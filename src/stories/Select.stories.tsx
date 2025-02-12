import React from 'react';
import type {Meta, StoryObj} from "@storybook/react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue
} from "@/components/ui/Select"
import {GitMerge} from "lucide-react"

const meta: Meta<typeof Select> = {
    title: "Components/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>

export const Default: Story = {
    render: () => {

        return (
            <div className={"flex flex-col p-32 space-y-2 bg-secondary"}>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <GitMerge size={14}/>
                        <SelectValue placeholder="Select a fruit"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectSeparator />
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        );
    },
};