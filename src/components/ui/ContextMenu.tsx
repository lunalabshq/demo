import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import type { ReactNode } from "react"
import {cn} from "@/lib/utils"
import {Check, ChevronRightIcon} from "lucide-react"
import { CONTAINER_STYLES } from "@/lib/consts"
import KeyboardShortcut from "@/components/ui/KeyboardShortcut"

type MenuItem = {
    label: string
    onSelect: () => void
    icon?: ReactNode
    shortcut?: string
}

interface ContextMenuItemProps {
    item: MenuItem
}

function ContextMenuItem({ item }: ContextMenuItemProps) {
    return (
        <ContextMenuPrimitive.Item
            onSelect={item.onSelect}
            className={cn()}
        >
            {item.icon}
            <p>{item.label}</p>
            {item.shortcut && <KeyboardShortcut keyString={item.shortcut}/>}

        </ContextMenuPrimitive.Item>
    )
}

interface ContextMenuLabelProps {
    label: string
}

function ContextMenuLabel({label}: ContextMenuLabelProps) {
    return (
        <ContextMenuPrimitive.Label
            className={cn()}
        >
            {label}
        </ContextMenuPrimitive.Label>
    )
}

interface ContextMenuCheckboxItemProps {
    onSelect: () => void
    onCheckedChange: (checked: boolean) => void
    label: string
    checked: boolean
}

function ContextMenuCheckboxItem({ onSelect, onCheckedChange, label, checked }: ContextMenuCheckboxItemProps) {
    return (
        <ContextMenuPrimitive.CheckboxItem
            onSelect={onSelect}
            onCheckedChange={onCheckedChange}
            checked={checked}
            className={cn()}
        >
            <ContextMenuPrimitive.ItemIndicator>
                {checked ? <Check size={12}/> : null}
            </ContextMenuPrimitive.ItemIndicator>
            {label}
        </ContextMenuPrimitive.CheckboxItem>
    )
}

function ContextMenuSeperator() {
    return (
        <ContextMenuPrimitive.Separator
            className={cn()}
        />
    )
}

interface ContextMenuSubItemProps {
    item: MenuItem
    width?: string
    children: ReactNode
}

function ContextMenuSubItem({item, width, children}: ContextMenuSubItemProps) {
    return (
        <ContextMenuPrimitive.Sub>
            <ContextMenuPrimitive.SubTrigger className='text-primary data-[highlighted]:bg-tertiary dark:data-[highlighted]:shadow-select-item flex h-8 cursor-pointer items-center gap-1.5 rounded-md !border-0 pl-1.5 pr-1 !ring-0 focus-visible:!border-0 focus-visible:!outline-none focus-visible:!ring-0'>
                {item.icon}
                <ContextMenuPrimitive.Label className='flex-1 text-sm'>
                    {item.label}
                </ContextMenuPrimitive.Label>
                <ChevronRightIcon size={14}/>
            </ContextMenuPrimitive.SubTrigger>
            <ContextMenuPrimitive.Portal>
                <ContextMenuPrimitive.SubContent
                    sideOffset={4}
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

interface ContextMenuProps {
    onOpenChange?: (open: boolean) => void
    asChild?: boolean
    children: ReactNode
}

function ContextMenu({onOpenChange, asChild, children}: ContextMenuProps) {
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
                    {children}
                </ContextMenuPrimitive.Content>
            </ContextMenuPrimitive.Portal>
        </ContextMenuPrimitive.Root>
    )
}

export {
    type MenuItem,
    ContextMenu,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuCheckboxItem,
    ContextMenuSeperator,
    ContextMenuSubItem
}