import React from "react"
import type {Meta, StoryObj} from "@storybook/react"
import {Input} from "@/components/ui/Input"

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
    render: () => {

        return (
            <div className={"flex flex-col space-y-2 p-32 bg-secondary"}>
                <Input type="text" placeholder="Enter your name" />
            </div>
        )
    }
}