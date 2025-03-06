"use client"

import {assignedTasks} from "@/lib/mockup-data/assigned-tasks"
import {StatusIcon} from "@/components/StatusIcon"
import {Button, DropdownMenu, type MenuItem} from "lunalabs-ui"
import {Binoculars, CheckCheck, EllipsisVertical, ExternalLink, Share} from "lucide-react"
import type React from "react"

function AssignedTasks() {

    const dropdownItems: MenuItem[] = [
        {label: "Task Actions", type: "label"},
        {label: "Share", type: "item", icon: <Share size={12}/>},
        {label: "Open", type: "item", icon: <ExternalLink size={12}/>},
        {label: "Complete", type: "item", icon: <CheckCheck size={12}/>}
    ]

    return (
        <div className={"flex flex-col gap-4 w-full bg-tertiary rounded-md p-4"}>
            <div className={"flex items-center justify-between"}>
                <p className={"font-medium text-primary"}>{`Assigned Tasks (${assignedTasks.length})`}</p>
                <Button className={"gap-2 text-sm"} variant={"ghost"}>
                    <Binoculars size={14}/>
                    View All
                </Button>
            </div>
            <div className={"flex flex-col"}>
                {assignedTasks.map((task) => (
                    <div key={task.title} className={"flex w-full text-sm h-10 gap-4 justify-between items-center pl-4"}>

                        <div className={"flex gap-4 items-center"}>
                            <StatusIcon statusName={task.status}/>
                            <div className={"text-secondary"}>{task.title}</div>
                        </div>

                        <div className={"flex gap-4 items-center"}>
                            <div className={"text-tertiary text-xs"}>{task.deadline}</div>
                            <DropdownMenu asChild items={dropdownItems} align={"end"}>
                                <Button className={"px-1.5 border border-main"} variant={"ghost"}>
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

export {AssignedTasks}