import React from 'react';
import type {Meta, StoryObj} from "@storybook/react";
import {
    Breadcrumb, BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/Breadcrumb"

const meta: Meta<typeof Breadcrumb> = {
    title: "Components/Breadcrumb",
    component: Breadcrumb,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
    render: () => {

        return (
            <div className={"flex flex-col space-y-2 p-32 bg-secondary w-96"}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator type={"slash"}/>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator type={"slash"}/>
                    <BreadcrumbEllipsis/>
                    <BreadcrumbSeparator type={"slash"}/>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    },
};