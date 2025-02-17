import React from "react"
import type {Meta, StoryObj} from "@storybook/react"
import {Slider} from "@/components/ui/Slider"

const meta: Meta<typeof Slider> = {
    title: "Components/Slider",
    component: Slider,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Slider>

export const Default: Story = {
    render: () => {

        return (
            <div className={"flex flex-col p-32 space-y-2 bg-secondary"}>
                <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className={"w-96"}
                />
            </div>
        )
    }
}