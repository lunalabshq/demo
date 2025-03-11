"use client"

import {Button, DialogContent, DialogFooter, DialogHeader, DialogTitle, Input, Textarea} from "lunalabs-ui"
import {VisuallyHidden} from "@radix-ui/react-visually-hidden"
import {StatusSelect} from "@/components/selects/StatusSelect"

function ProjectDialog() {
    return (
        <DialogContent className={"p-4"}>
            <VisuallyHidden>
                <DialogHeader>
                    <DialogTitle>
                        Create Project
                    </DialogTitle>
                </DialogHeader>
            </VisuallyHidden>
            <div className={"flex flex-col gap-4"}>
                <Input placeholder={"Project Name"} />
                <Textarea placeholder={"Project Description"} />
            </div>
            <div className={"flex gap-2"}>
                <StatusSelect status={null} />
            </div>
            <DialogFooter>
                <Button variant="primary" type={"submit"}>Create</Button>
            </DialogFooter>
        </DialogContent>
    )
}

export { ProjectDialog }