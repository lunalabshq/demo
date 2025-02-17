import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import React, { type ReactNode } from "react"
import {cn} from "@/lib/utils"
import {Check, ChevronRightIcon} from "lucide-react"
import { CONTAINER_STYLES } from "@/lib/consts"
import {KeyboardShortcut} from "@/components/ui/KeyboardShortcut"
import type {CheckboxType, ItemType, LabelType, MenuItem, SubType} from "@/lib/menu-types"

interface ContextMenuItemProps {
    item: ItemType
}

interface ContextMenuLabelProps {
    item: LabelType
}

interface ContextMenuCheckboxProps {
    item: CheckboxType
}

interface ContextMenuSubItemProps {
    item: SubType
    width?: string
    children: ReactNode
}

interface ContextMenuActionsProps {
    items: MenuItem[]
    width?: string
}

interface ContextMenuProps {
    onOpenChange?: (open: boolean) => void
    items: MenuItem[]
    asChild?: boolean
    children: ReactNode
}

const ContextMenuItem = ({ item }: ContextMenuItemProps) => {
    return (
        <ContextMenuPrimitive.Item
            onSelect={item.onSelect}
            className={cn("text-sm border-0 hover:bg-secondary outline-0 px-2 py-1 rounded-md cursor-pointer flex space-x-2 items-center hover:text-primary")}
        >
            {item.icon}
            <p>{item.label}</p>
            {item.shortcut && <KeyboardShortcut keyString={item.shortcut}/>}

        </ContextMenuPrimitive.Item>
    )
}
ContextMenuItem.displayName = "ContextMenuItem"

const ContextMenuLabel = ({item}: ContextMenuLabelProps) => {
    return (
        <ContextMenuPrimitive.Label
            className={cn("text-xs text-tertiary p-1")}
        >
            {item.label}
        </ContextMenuPrimitive.Label>
    )
}
ContextMenuLabel.displayName = "ContextMenuLabel"

const ContextMenuCheckboxItem = ({item, ...props}: ContextMenuCheckboxProps) => {
    return (
        <ContextMenuPrimitive.CheckboxItem
            checked={item.checked}
            onCheckedChange={item.onCheckedChange}
            className={cn("flex flex-row items-center text-sm border-0 hover:bg-secondary outline-0 px-2 py-1 rounded-md cursor-pointer hover:text-primary")}
            {...props}
        >
            <ContextMenuPrimitive.ItemIndicator>
                <Check className="mr-1" size={14}/>
            </ContextMenuPrimitive.ItemIndicator>
            {item.label}
        </ContextMenuPrimitive.CheckboxItem>
    )
}
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem"

const ContextMenuSeperator = () => {
    return (
        <ContextMenuPrimitive.Separator
            className={cn("-mx-1 my-1 h-0 border-b border-main")}
        />
    )
}
ContextMenuSeperator.displayName = "ContextMenuSeperator"

const ContextMenuSubItem = ({item, width, children}: ContextMenuSubItemProps) => {
    return (
        <ContextMenuPrimitive.Sub>
            <ContextMenuPrimitive.SubTrigger className="text-sm border-0 hover:bg-secondary outline-0 px-2 py-1 rounded-md cursor-pointer flex space-x-2 items-center hover:text-primary">
                {item.icon}
                <ContextMenuPrimitive.Label className='flex-1'>
                    {item.label}
                </ContextMenuPrimitive.Label>
                <ChevronRightIcon size={14}/>
            </ContextMenuPrimitive.SubTrigger>
            <ContextMenuPrimitive.Portal>
                <ContextMenuPrimitive.SubContent
                    sideOffset={8}
                    alignOffset={-4}
                    className={cn(
                        'bg-primary max-h-[--radix-context-menu-content-available-height] min-w-[--radix-context-menu-trigger-width] origin-[--radix-context-menu-content-transform-origin] overflow-y-auto rounded-lg border border-main p-1 shadow-md dark:shadow-[0px_0px_0px_0.5px_rgba(0,0,0,1),_0px_4px_4px_rgba(0,0,0,0.24)]',
                        width
                    )}
                >
                    {children}
                </ContextMenuPrimitive.SubContent>
            </ContextMenuPrimitive.Portal>
        </ContextMenuPrimitive.Sub>
    )
}
ContextMenuSubItem.displayName = "ContextMenuSubItem"

const ContextMenuActions = ({ items, width }: ContextMenuActionsProps) => {
    return items.map((item, i) => {
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        if (item.type === 'separator') return <ContextMenuSeperator key={i} />

        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        if (item.type === 'label') return <ContextMenuLabel key={i} item={item} />

        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        if (item.type === 'checkbox') return <ContextMenuCheckboxItem key={i} item={item} />

        if (item.type === 'sub') {
            return (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <ContextMenuSubItem key={i} item={item} width={width}>
                    <ContextMenuActions items={item.items} />
                </ContextMenuSubItem>
            )
        }

        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        return <ContextMenuItem key={i} item={item} />
    })
}
ContextMenuActions.displayName = "ContextMenuActions"

const ContextMenu = ({onOpenChange, items, asChild, children}: ContextMenuProps) => {
    return (
        <ContextMenuPrimitive.Root onOpenChange={onOpenChange}>
            <ContextMenuPrimitive.Trigger asChild={asChild}>
                {children}
            </ContextMenuPrimitive.Trigger>
            <ContextMenuPrimitive.Portal>
                <ContextMenuPrimitive.Content
                    collisionPadding={8}
                    alignOffset={4}
                    className={cn(
                        'focus:outline-none',
                        'max-h-[--radix-context-menu-content-available-height] min-w-[--radix-context-menu-trigger-width]',
                        'bg-primary overflow-y-auto rounded-lg border border-main p-1 shadow dark:shadow-[0px_0px_0px_0.5px_rgba(0,0,0,1),_0px_4px_4px_rgba(0,0,0,0.24)]',
                        CONTAINER_STYLES.animation
                    )}
                >
                    <ContextMenuActions items={items} />
                </ContextMenuPrimitive.Content>
            </ContextMenuPrimitive.Portal>
        </ContextMenuPrimitive.Root>
    )
}
ContextMenu.displayName = "ContextMenu"

export {
    type MenuItem,
    ContextMenu,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuCheckboxItem,
    ContextMenuSeperator,
    ContextMenuSubItem
}