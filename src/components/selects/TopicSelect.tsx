"use client"

import {Button, Command, CommandEmpty,
    CommandGroup, CommandInput, CommandItem, CommandList, Popover, PopoverContent, PopoverTrigger} from "lunalabs-ui"
import {CheckIcon, Hexagon, Tag} from "lucide-react"
import {useState} from "react"
import {allTopics, Topic, TopicBadge} from "@/components/TopicBadge"
import {cn} from "@/lib/utils"

interface TopicSelectProps {
    topic?: Topic | null
}

function TopicSelect({topic}: TopicSelectProps) {
    const [value, setValue] = useState<string| null>(topic?.name ?? null)
    const [open, setOpen] = useState(false)

    const handleTopicChange = (topic: string) => {
        setValue(topic)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    data-state={open ? "open" : "closed"}
                    className={cn("font-normal text-[13px] items-center gap-2 data-[state=open]:bg-inverted/10 data-[state=open]:text-primary px-2", value && "px-1")}
                >
                    {value ? <TopicBadge topicName={value}/> : <Tag size={12} />}
                    {value ? "" : "Topic"}
                </Button>
            </PopoverTrigger>
            <PopoverContent className={"border-0 p-0 w-[160px]"} align={"start"}>
                <Command>
                    <CommandInput placeholder="Select a topic..." />
                    <CommandList>
                        <CommandEmpty>No topic found.</CommandEmpty>
                        <CommandGroup>
                            {allTopics.map((item) => (
                                <CommandItem
                                    key={item.name}
                                    value={item.name}
                                    onSelect={() => handleTopicChange(item.name)}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-2">
                                        <item.badge />
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

export { TopicSelect }