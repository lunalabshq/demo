import React from "react"
import type {Meta, StoryObj} from "@storybook/react"
import {Textarea} from "@/components/ui/Textarea"

const meta: Meta<typeof Textarea> = {
    title: "Components/Textarea",
    component: Textarea,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
    render: () => {
        return (
            <div className={"flex flex-col space-y-2 p-32 bg-secondary"}>
                <Textarea placeholder={"placeholder"}/>
            </div>
        )
    }
}

