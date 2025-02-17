import React from "react"
import type {Meta, StoryObj} from "@storybook/react"
import {Info} from "lucide-react"
import {Callout} from "@/components/ui/Callout"

const meta: Meta<typeof Callout> = {
    title: "Components/Callout",
    component: Callout,
    parameters: { layout: "centered" },
    tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof Callout>

export const Default: Story = {
    render: () => {
        return (
            <div className={"flex flex-col space-y-2 p-32 bg-secondary"}>
                <Callout variant={"default"}>
                    <div className={"flex flex-row space-x-2"}>
                        <Info size={60}/>
                        <div className={"flex flex-col space-y-1"}>
                            <p className={"font-medium"}>This is a title</p>
                            <p className={""}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus es</p>
                        </div>
                    </div>
                </Callout>
                <Callout variant={"brand"}>
                    <div className={"flex flex-row space-x-2"}>
                        <Info size={60}/>
                        <div className={"flex flex-col space-y-1"}>
                            <p className={"font-medium"}>This is a title</p>
                            <p className={""}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus es</p>
                        </div>
                    </div>
                </Callout>
                <Callout variant={"success"}>
                    <div className={"flex flex-row space-x-2"}>
                        <Info size={60}/>
                        <div className={"flex flex-col space-y-1"}>
                            <p className={"font-medium"}>This is a title</p>
                            <p className={""}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus es</p>
                        </div>
                    </div>
                </Callout>
                <Callout variant={"warning"}>
                    <div className={"flex flex-row space-x-2"}>
                        <Info size={60}/>
                        <div className={"flex flex-col space-y-1"}>
                            <p className={"font-medium"}>This is a title</p>
                            <p className={""}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus es</p>
                        </div>
                    </div>
                </Callout>
                <Callout variant={"error"}>
                    <div className={"flex flex-row space-x-2"}>
                        <Info size={60}/>
                        <div className={"flex flex-col space-y-1"}>
                            <p className={"font-medium"}>This is a title</p>
                            <p className={""}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus es</p>
                        </div>
                    </div>
                </Callout>
                <Callout variant={"info"}>
                    <div className={"flex flex-row space-x-2"}>
                        <Info size={60}/>
                        <div className={"flex flex-col space-y-1"}>
                            <p className={"font-medium"}>This is a title</p>
                            <p className={""}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus es</p>
                        </div>
                    </div>
                </Callout>
            </div>
        )
    }
}