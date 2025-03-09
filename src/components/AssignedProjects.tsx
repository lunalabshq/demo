"use client"

import {StatusIcon} from "@/components/StatusIcon"
import {Button, DropdownMenu, type MenuItem, tooltip} from "lunalabs-ui"
import {Binoculars, CheckCheck, EllipsisVertical, ExternalLink, Share} from "lucide-react"
import type React from "react"
import {projects} from "@/lib/mockup-data/projects"
import {TopicBadge} from "@/components/TopicBadge"

function AssignedProjects() {

    const dropdownItems: MenuItem[] = [
        {label: "Project Actions", type: "label"},
        {label: "Share", type: "item", icon: <Share size={12}/>},
        {label: "Open", type: "item", icon: <ExternalLink size={12}/>},
        {label: "Complete", type: "item", icon: <CheckCheck size={12}/>}
    ]

    const buttonTooltip = tooltip<HTMLButtonElement>({
        message: "Go to projects page",
        anchor: "lc"
    })

    return (
        <div className={"flex flex-col gap-4 w-full bg-tertiary rounded-md p-4"}>
            <div className={"flex items-center justify-between"}>
                <p className={"font-medium text-primary"}>{`Assigned Projects (${projects.length})`}</p>
                <Button className={"gap-2 text-sm"} variant={"ghost"} {...buttonTooltip}>
                    <Binoculars size={14}/>
                    View All
                </Button>
            </div>
            <div className={"flex flex-col"}>
                {projects.map((project) => (
                    <div key={project.title} className={"flex w-full text-sm h-10 gap-4 justify-between items-center pl-4"}>

                        <div className={"flex gap-4 items-center"}>
                            <StatusIcon statusName={project.status}/>
                            <div className={"text-primary"}>{project.title}</div>
                            <TopicBadge topicName={project.topic}/>
                        </div>

                        <div className={"flex gap-4 items-center"}>
                            <div className={"text-tertiary text-xs"}>{project.deadline}</div>
                            <DropdownMenu asChild items={dropdownItems} align={"end"}>
                                <Button className={"px-1.5"} variant={"default"}>
                                    <EllipsisVertical size={16}/>
                                </Button>
                            </DropdownMenu>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {AssignedProjects}