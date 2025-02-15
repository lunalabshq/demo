import React from 'react';
import type {Meta, StoryObj} from "@storybook/react";
import {Toast} from "@/components/ui/Toast"
import Button from "@/components/ui/Button"
import ToastProvider, {useToast} from "@/components/ui/ToastProvider"

const meta: Meta<typeof Toast> = {
    title: "Components/Toast",
    component: Toast,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Toast>

export const Default: Story = {
    render: () => {


        return (
            <div className={"w-screen h-screen"}>
                <ToastProvider>
                    <div className={"h-screen w-screen"}>
                        <Button onClick={() => {
                            const {addToast} = useToast()
                            addToast({title: "Test", subtitle: "Subtitle", position: "br"})
                        }}>
                            Add Toast
                        </Button>
                    </div>
                </ToastProvider>
            </div>
        );
    },
};