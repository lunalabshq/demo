"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"


const Accordion = AccordionPrimitive.Root

interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

const AccordionItem = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Item>, AccordionItemProps>(({ className, ...props }, ref) => {
    return (
        <>
            <AccordionPrimitive.Item
                className={cn("", className)}
                ref={ref}
                {...props}
            />
            <div className={"h-2 border-b border-main mb-2"}/>
        </>
    )
})
AccordionItem.displayName = AccordionPrimitive.Item.displayName

interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {}

const AccordionTrigger = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps>(({ className, children, ...props }, ref) => {
    return (
        <AccordionPrimitive.Header
            className="flex px-2 rounded-md data-[state=open]:text-primary
            data-[state=open]:bg-tertiary"
        >
            <AccordionPrimitive.Trigger
                className={cn(
                    "flex flex-1 items-center justify-between py-2 font-medium transition-all " +
                    "[&[data-state=open]>svg]:rotate-180",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {}

const AccordionContent = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Content>, AccordionContentProps>(({ className, children, ...props }, ref) => {
    return (
        <AccordionPrimitive.Content
            className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up
            data-[state=open]:animate-accordion-down data-[state=open]:bg-tertiary px-2"
            ref={ref}
            {...props}
        >
            <div className={cn("pb-4 pt-0", className)}>
                {children}
            </div>
        </AccordionPrimitive.Content>
    )
})
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
}