import React from "react"
import type {Meta, StoryObj} from "@storybook/react"
import {Toast} from "@/components/ui/Toast"
import {Button} from "@/components/ui/Button"
import ToastProvider, {useToast} from "@/components/ui/ToastProvider"

const meta: Meta<typeof Toast> = {
    title: "Components/Toast",
    component: Toast,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Toast>

const ToastDemo = () => {
    const { addToast } = useToast();

    return (
        <div className="h-screen w-screen">
            <Button
                onClick={() => {
                    addToast({ title: "Test", subtitle: "Subtitle", position: "br", actionButton: true, onAction: () => console.log("Action"), closeButton: true})
                }}
            >
                Add Toast
            </Button>
        </div>
    );
};

export const Default: Story = {
    render: () => (
        <ToastProvider>
            <ToastDemo />
        </ToastProvider>
    )
}