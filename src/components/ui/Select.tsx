"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"
import type {ReactNode} from "react"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
    icon?: ReactNode
}

const SelectTrigger = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(({ icon, className, children, ...props }, ref) => {
    return (
        <SelectPrimitive.Trigger
            className={cn(
                "flex h-8 w-full items-center justify-between rounded-md border border-main bg-primary px-2 py-1 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
                className
            )}
            ref={ref}
            {...props}
        >
            {icon}
            {children}
            <SelectPrimitive.Icon asChild>
                <ChevronDown size={12} className="text-secondary"/>
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    )
})
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

interface SelectScrollUpProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> {}

const SelectScrollUpButton = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.ScrollUpButton>, SelectScrollUpProps>(({ className, ...props }, ref) => {
    return (
        <SelectPrimitive.ScrollUpButton
            className={cn(
                "flex cursor-default items-center justify-center py-1",
                className
            )}
            ref={ref}
            {...props}
        >
            <ChevronUp size={12} className="text-secondary"/>
        </SelectPrimitive.ScrollUpButton>
    )
})
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

interface SelectScrollDownProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> {}

const SelectScrollDownButton = React.forwardRef<React.ComponentRef<typeof SelectPrimitive.ScrollDownButton>, SelectScrollDownProps>(({ className, ...props }, ref) => {
    return (
        <SelectPrimitive.ScrollDownButton
            className={cn(
                "flex cursor-default items-center justify-center py-1",
                className
            )}
            ref={ref}
            {...props}
        >
            <ChevronDown size={12} className="text-secondary"/>
        </SelectPrimitive.ScrollDownButton>
    )
})
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName