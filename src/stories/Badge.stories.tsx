import React from 'react';
import {Meta, StoryObj} from "@storybook/react";
import Badge from "@/components/ui/Badge"
import {Info} from "lucide-react"

const meta: Meta<typeof Badge> = {
    title: "Components/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>

export const Default: Story = {
    render: () => {

        return (
            <div className={"flex flex-col space-y-2 p-32 bg-secondary"}>
                <Badge title={"Default"}/>
                <Badge title={"Brand"} variant={"brand"}/>
                <Badge title={"Success"} variant={"success"}/>
                <Badge title={"Warning"} variant={"warning"}/>
                <Badge title={"Error"} variant={"error"}/>
                <Badge title={"Info"} variant={"info"}/>
                <Badge title={"Info"} icon={<Info size={14}/>} variant={"info"}/>
            </div>
        );
    },
};