import type {Meta, StoryObj} from "@storybook/react";
import {useState} from "react"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/Popover"
import Button from "@/components/ui/Button"

const meta: Meta<typeof Popover> = {
    title: "Components/Popover",
    component: Popover,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Popover>

export const Default: Story = {
    render: () => {
        return (
            <Popover>
                <PopoverTrigger asChild>
                    <Button>Open popover</Button>
                </PopoverTrigger>
                <PopoverContent side={"top"}>
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Dimensions</h4>
                            <p className="text-sm text-muted-foreground">
                                Set the dimensions for the layer.
                            </p>
                        </div>
                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <label htmlFor="width">Width</label>
                                <input
                                    id="width"
                                    defaultValue="100%"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <label htmlFor="maxWidth">Max. width</label>
                                <input
                                    id="maxWidth"
                                    defaultValue="300px"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <label htmlFor="height">Height</label>
                                <input
                                    id="height"
                                    defaultValue="25px"
                                    className="col-span-2 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <label htmlFor="maxHeight">Max. height</label>
                                <input
                                    id="maxHeight"
                                    defaultValue="none"
                                    className="col-span-2 h-8"
                                />
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        )
    }
};