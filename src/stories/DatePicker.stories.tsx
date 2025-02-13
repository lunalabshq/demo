import React from 'react';
import type {Meta, StoryObj} from "@storybook/react";
import {DatePicker} from "@/components/ui/DatePicker"

const meta: Meta<typeof DatePicker> = {
    title: "Components/DatePicker",
    component: DatePicker,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
    render: () => {

        return (
            <div className={"flex flex-col space-y-2 p-32 bg-secondary"}>
                <DatePicker title={"Select a date"} mode={"range"}/>
            </div>
        );
    },
};