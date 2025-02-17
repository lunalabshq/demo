import React from "react"
import type {Meta, StoryObj} from "@storybook/react"
import {Switch} from "@/components/ui/Switch"

const meta: Meta<typeof Switch> = {
    title: "Components/Switch",
    component: Switch,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
    render: () => {
        return (
            <div className={"flex flex-row items-center p-32 space-x-2 bg-secondary"}>
                <p className={"text-primary text-sm"}>Switch On/Off</p>
                <Switch/>
            </div>
        )
    }
}