"use client"

import {Button, Command, CommandEmpty,
    CommandGroup, CommandInput, CommandItem, CommandList, Popover, PopoverContent, PopoverTrigger} from "lunalabs-ui"
import {allStatus, Status, StatusIcon} from "@/components/StatusIcon"
import {CheckIcon, Hexagon} from "lucide-react"
import {useState} from "react"

interface StatusSelectProps {
    status?: Status | null
}

function StatusSelect({status}: StatusSelectProps) {
    const [value, setValue] = useState<string| null>(status?.name ?? null)
    const [open, setOpen] = useState(false)

    const handleStatusChange = (status: string) => {
        setValue(status)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <Button className={"font-normal text-[13px] items-center gap-2"}>
                    {value ? <StatusIcon statusName={value}/> : <Hexagon size={12} />}
                    {value ?? "Status"}
                </Button>
            </PopoverTrigger>
            <PopoverContent className={"border-0 p-0 w-[160px]"} align={"start"}>
                <Command>
                    <CommandInput placeholder="Select a status..." />
                    <CommandList>
                        <CommandEmpty>No status found.</CommandEmpty>
                        <CommandGroup>
                            {allStatus.map((item) => (
                                <CommandItem
                                    key={item.name}
                                    value={item.name}
                                    onSelect={() => handleStatusChange(item.name)}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-2">
                                        <item.icon />
                                        {item.name}
                                    </div>
                                    {value === item.name && <CheckIcon size={16} className="ml-auto" />}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export { StatusSelect }