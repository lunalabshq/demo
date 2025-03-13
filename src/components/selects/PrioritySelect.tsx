"use client"

import {
    Button,
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    Popover,
    PopoverContent,
    PopoverTrigger
} from "lunalabs-ui"
import {CheckIcon, Tag, TriangleAlert} from "lucide-react"
import {useState} from "react"
import {cn} from "@/lib/utils"
import {allPriorities, Priority, PriorityBadge} from "@/components/PriorityBadge"

interface PrioritySelectProps {
    priority?: Priority | null
}

function PrioritySelect({priority}: PrioritySelectProps) {
    const [value, setValue] = useState<string| null>(priority?.name ?? null)
    const [open, setOpen] = useState(false)

    const handlePriorityChange = (priority: string) => {
        setValue(priority)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    data-state={open ? "open" : "closed"}
                    className={cn("font-normal text-[13px] items-center gap-2 data-[state=open]:bg-inverted/10 data-[state=open]:text-primary px-2")}
                >
                    {value ? <PriorityBadge priorityName={value}/> : <TriangleAlert size={12} />}
                    {value ? "" : "Priority"}
                </Button>
            </PopoverTrigger>
            <PopoverContent className={"border-0 p-0 w-[160px]"} align={"start"}>
                <Command>
                    <CommandList>
                        <CommandGroup>
                            {allPriorities.map((item) => (
                                <CommandItem
                                    key={item.name}
                                    value={item.name}
                                    onSelect={() => handlePriorityChange(item.name)}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-2">
                                        <item.badge />
                                        <span>{item.name}</span>
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

export { PrioritySelect }