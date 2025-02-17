import React from "react"
import type {Meta, StoryObj} from "@storybook/react"
import {ProgressBar} from "@/components/ui/ProgressBar"

const meta: Meta<typeof ProgressBar> = {
    title: "Components/ProgressBar",
    component: ProgressBar,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
    render: () => {
        return (
            <div className={"flex flex-col p-32 space-y-2 bg-secondary"}>
                <ProgressBar value={25} className={"w-40"}/>
            </div>
        )
    }
}