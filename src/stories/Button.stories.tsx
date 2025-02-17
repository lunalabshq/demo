import React from "react"
import type {Meta, StoryObj} from "@storybook/react"
import {Button} from "@/components/ui/Button"

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    render: () => {
        return (
            <div className={"flex flex-col p-32 space-y-2 bg-secondary"}>
                <Button variant={"default"}>Default</Button>
                <Button variant={"primary"}>Primary</Button>
                <Button variant={"brand"}>Brand</Button>
                <Button variant={"ghost"}>Ghost</Button>

                <Button variant={"default"} disabled>Default</Button>
                <Button variant={"primary"} disabled>Primary</Button>
                <Button variant={"brand"} disabled>Brand</Button>


            </div>
        )
    },
}