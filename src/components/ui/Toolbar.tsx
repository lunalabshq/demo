import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import React from "react"
import {cn} from "@/lib/utils"

interface ToolbarProps extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root> {}
interface ToolbarButtonProps extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button> {}
interface ToolbarLinkProps extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link> {}
interface ToolbarToggleItemProps extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem> {}
interface ToolbarSeperatorProps extends React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator> {}

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
Toolbar.displayName = "Toolbar"

const ToolbarButton = React.forwardRef<React.ComponentRef<typeof ToolbarPrimitive.Button>, ToolbarButtonProps>(({ className, ...props }, ref) => {
    return (
        <ToolbarPrimitive.Button
            className={cn(
                "w-max inline-flex items-center justify-center h-8 px-3 rounded-md bg-transparent hover:bg-tertiary text-secondary hover:text-primary",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
ToolbarButton.displayName = "ToolbarButton"

const ToolbarLink = React.forwardRef<React.ComponentRef<typeof ToolbarPrimitive.Link>, ToolbarLinkProps>(({ className, ...props }, ref) => {
    return (
        <ToolbarPrimitive.Link
            className={cn(
                "inline-flex items-center justify-center rounded-md text-xs text-tertiary hover:text-info hover:underline hover:underline-offset-2",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
ToolbarLink.displayName = "ToolbarLink"

const ToolbarToggleItem = React.forwardRef<React.ComponentRef<typeof ToolbarPrimitive.ToggleItem>, ToolbarToggleItemProps>(({ className, ...props }, ref) => {
    return (
        <ToolbarPrimitive.ToggleItem
            className={cn(
                "inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-tertiary data-[state=on]:bg-tertiary data-[state=on]:text-primary",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
ToolbarToggleItem.displayName = "ToolbarToggleItem"

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
ToolbarToggleGroup.displayName = "ToolbarToggleGroup"

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
ToolbarSeparator.displayName = "ToolbarSeparator"

export {
    Toolbar,
    ToolbarButton,
    ToolbarLink,
    ToolbarToggleItem,
    ToolbarToggleGroup,
    ToolbarSeparator
}


