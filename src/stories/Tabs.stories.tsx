import React from 'react';
import type {Meta, StoryObj} from "@storybook/react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/Tabs"

const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
    render: () => {

        return (
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    bnagnkga
                </TabsContent>
                <TabsContent value="password">
                    amglaga
                </TabsContent>
            </Tabs>
        );
    },
};