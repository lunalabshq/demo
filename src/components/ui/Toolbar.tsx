import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import React from "react"
import {cn} from "@/lib/utils"

interface ToolbarProps extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root> {}

const Toolbar = React.forwardRef<React.ComponentRef<typeof ToolbarPrimitive.Root>, ToolbarProps>(({ className, ...props }, ref) => {
    return (
        <ToolbarPrimitive.Root
            className={cn(
                "flex items-center space-x-2 p-1 rounded-md bg-primary shadow-md",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})

interface ToolbarButtonProps extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button> {}

const ToolbarButton = React.forwardRef<React.ComponentRef<typeof ToolbarPrimitive.Button>, ToolbarButtonProps>(({ className, ...props }, ref) => {
    return (
        <ToolbarPrimitive.Button
            className={cn(
                "w-max inline-flex items-center justify-center h-6 px-3 rounded-md bg-white hover:bg-white/90 text-black/80 hover:text-black",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})

interface ToolbarLinkProps extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link> {}

const ToolbarLink = React.forwardRef<React.ComponentRef<typeof ToolbarPrimitive.Link>, ToolbarLinkProps>(({ className, ...props }, ref) => {
    return (
        <ToolbarPrimitive.Link
            className={cn(
                "inline-flex items-center justify-center rounded-md text-xs text-tertiary hover:text-blue-200 hover:underline hover:underline-offset-2",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})

interface ToolbarToggleItemProps extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem> {}

const ToolbarToggleItem = React.forwardRef<React.ComponentRef<typeof ToolbarPrimitive.ToggleItem>, ToolbarToggleItemProps>(({ className, ...props }, ref) => {
    return (
        <ToolbarPrimitive.ToggleItem
            className={cn(
                "inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-tertiary data-[state=on]:bg-tertiary data-[state=on]:text-white",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})

const ToolbarToggleGroup = React.forwardRef<React.ComponentRef<typeof ToolbarPrimitive.ToggleGroup>, React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleGroup>>(({ className, ...props }, ref) => {
    return (
        <ToolbarPrimitive.ToggleGroup
            className={cn(
                "inline-flex items-center justify-center h-8 rounded-md space-x-1",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})

interface ToolbarSeperatorProps extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator> {}

const ToolbarSeparator = React.forwardRef<React.ComponentRef<typeof ToolbarPrimitive.ToggleGroup>, ToolbarSeperatorProps>(({ className, ...props }, ref) => {
    return (
        <ToolbarPrimitive.Separator
            className={cn(
                "w-0 h-6 bg-tertiary border-r border-main rounded-full",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
export {
    Toolbar,
    ToolbarButton,
    ToolbarLink,
    ToolbarToggleItem,
    ToolbarToggleGroup,
    ToolbarSeparator
}


