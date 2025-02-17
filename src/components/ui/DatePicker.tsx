"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/Popover"
import {Button} from "@/components/ui/Button"
import {Calendar} from "@/components/ui/Calendar"
import {useState} from "react"
import {DateRange} from "react-day-picker"

interface DatePickerProps {
    title: string
    value?: Date
    mode?: "single" | "range" | "multiple"
}

function DatePicker({ value, title, mode = "single" }: DatePickerProps) {
    const [date, setDate] = useState<Date | DateRange | Date[] | undefined>(value ?? undefined)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"default"}
                    className={cn(
                        "min-w-[240px] text-sm justify-start text-left font-normal hover:bg-secondary hover:text-secondary",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon size={14} className={"mr-4"} />
                    {!date && <span>{title}</span>}
                    {date && mode === "single" && format(date as Date, "PPP")}
                    {date && mode === "multiple" && `${(date as Date[]).length} Date's selected`}
                    {date && mode === "range" && `${format((date as DateRange).from as Date, "PP")} - ${format((date as DateRange).to as Date, "PP")}`}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 border-0" align="start">
                {mode === "single" &&
                    <Calendar
                        mode={mode}
                        selected={date as Date}
                        onSelect={(date) => {
                            setDate(date)
                            setIsOpen(false)
                        }}
                        autoFocus
                        required
                    />
                }
                {mode === "multiple" &&
                    <Calendar
                        mode={mode}
                        selected={date as Date[]}
                        onSelect={(date) => {
                            setDate(date)
                        }}
                        autoFocus
                    />
                }
                {mode === "range" &&
                    <Calendar
                        mode={mode}
                        selected={date as DateRange}
                        onSelect={(date) => {
                            setDate(date)
                        }}
                        autoFocus
                    />
                }

            </PopoverContent>
        </Popover>
    )
}
DatePicker.displayName = "DatePicker"

export { DatePicker }
