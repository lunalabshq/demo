import React from 'react';
import type {Meta, StoryObj} from "@storybook/react";
import {ProgressBar} from "@/components/ui/ProgressBar"

const meta: Meta<typeof ProgressBar> = {
    title: "Components/ProgressBar",
    component: ProgressBar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
    render: () => {

        return (
            <ProgressBar value={25}/>
        );
    },
};