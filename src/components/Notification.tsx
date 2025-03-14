"use client"

import {Avatar, AvatarFallback, Button, Popover, PopoverContent, PopoverTrigger} from "lunalabs-ui"
import {Bell} from "lucide-react"
import {notifications} from "@/lib/mockup-data/notifications"
import {useState} from "react"

function Notification() {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    data-state={open ? "open" : "closed"}
                    className="hidden md:block items-center p-2 data-[state=open]:bg-inverted/10 data-[state=open]:text-primary"
                    variant={"ghost"}
                >
                    <Bell size={18} strokeWidth={2.5}/>
                </Button>
            </PopoverTrigger>
            <PopoverContent align={"end"} className={"p-1 space-y-1"}>
                {notifications.map((item) => (
                    <div key={item.title} className="flex gap-4 items-center px-2 py-1 rounded-md hover:bg-secondary text-xs cursor-pointer">
                        <Avatar className="h-6 w-6">
                            <AvatarFallback className={item.color}/>
                        </Avatar>
                        <div className={"w-full"}>
                            <div className="font-semibold">{item.title}</div>
                            <div className="text-secondary">{item.description}</div>
                        </div>
                        <p className={"mt-1 text-end italic text-tertiary"}>{item.time}</p>

                    </div>
                ))}
            </PopoverContent>
        </Popover>
    )
}

export default Notification