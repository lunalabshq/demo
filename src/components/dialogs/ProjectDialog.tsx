"use client"

import {
    Button,
    DatePicker, Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Input,
    Textarea, useToast
} from "lunalabs-ui"
import {VisuallyHidden} from "@radix-ui/react-visually-hidden"
import {StatusSelect} from "@/components/selects/StatusSelect"
import {TopicSelect} from "@/components/selects/TopicSelect"
import {PenLine, Plus} from "lucide-react"
import type React from "react"
import { useState } from "react"
import {PrioritySelect} from "@/components/selects/PrioritySelect"

function ProjectDialog() {
    const [open, setOpen] = useState(false)
    const { addToast } = useToast()

    const onSubmit = () => {
        setOpen(false)
        addToast({
            title: "Project created",
            subtitle: "Go to the project page to see all your projects.",
            icon: <PenLine size={24} />,
            position: "br",
            duration: 5000
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    data-state={open ? "open" : "closed"}
                    className={"w-max px-2 data-[state=open]:bg-inverted/10 data-[state=open]:text-primary"}
                    variant={"ghost"}
                >
                    <Plus size={16} />
                </Button>
            </DialogTrigger>
            <DialogContent className={"p-4"}>
                <VisuallyHidden>
                    <DialogHeader>
                        <DialogTitle>
                            Create Project
                        </DialogTitle>
                    </DialogHeader>
                </VisuallyHidden>
                <div className={"flex flex-col gap-4"}>
                    <Input placeholder={"Project Name"} className={"bg-black/10 border-main/20 text-primary focus-visible:ring-0 shadow-none placeholder-white"}/>
                    <Textarea placeholder={"Project Description"} className={"border-0 focus-visible:ring-0 shadow-none"}/>
                </div>
                <div className={"flex gap-2"}>
                    <StatusSelect/>
                    <PrioritySelect/>
                    <TopicSelect/>
                    <DatePicker title={"Due Date"} className={"px-2"}/>
                </div>
                <DialogFooter>
                    <Button variant="primary" type={"submit"} onClick={onSubmit}>Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export { ProjectDialog }