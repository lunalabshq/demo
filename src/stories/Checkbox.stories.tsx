import React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import {Checkbox} from "@/components/ui/Checkbox"

const meta: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
    render: () => {

        return (
            <div className={"flex flex-col p-32 space-y-2 bg-secondary"}>
                <Checkbox size={"sm"}/>
                <Checkbox size={"md"}/>
                <Checkbox size={"lg"}/>
            </div>
        );
    },
};