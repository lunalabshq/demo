import {Tooltip} from "@/components/ui/Tooltip"
import {TooltipProvider, useTooltip} from "@/components/ui/TooltipProvider"
import type {Meta, StoryObj} from "@storybook/react"
import React from "react"
import {Button} from "@/components/ui/Button"

const meta: Meta<typeof Tooltip> = {
    title: "Components/Tooltip",
    component: Tooltip,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Tooltip>

const TooltipTemplate = () => {
    const { addTooltip, removeTooltip } = useTooltip()

    return (
        <div className={"h-screen w-screen flex flex-col space-y-2 items-center justify-center"}>

            <Button
                onMouseEnter={(e) => {
                    addTooltip({
                        message: "Build your application",
                        shortcut: "B",
                        anchor: "rc",
                        trigger: e.currentTarget.getBoundingClientRect(),
                    });
                }}
                onMouseLeave={() => removeTooltip()}
            >
                Build
            </Button>

            <Button
                onMouseEnter={(e) => {
                    addTooltip({
                        message: "Create a fork",
                        shortcut: "F",
                        anchor: "rc",
                        trigger: e.currentTarget.getBoundingClientRect(),
                    });
                }}
                onMouseLeave={() => removeTooltip()}
            >
                Fork
            </Button>

        </div>
    );
}

export const Default: Story = {
    render: () => {
        return (
            <div className={"w-screen h-screen"}>
                <TooltipProvider>
                    <TooltipTemplate/>
                </TooltipProvider>
            </div>
        )
    }
}