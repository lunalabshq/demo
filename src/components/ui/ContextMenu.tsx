import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import type { ReactNode } from "react"
import {cn} from "@/lib/utils"
import {Check, ChevronRightIcon} from "lucide-react"
import { CONTAINER_STYLES } from "@/lib/consts"
import {KeyboardShortcut} from "@/components/ui/KeyboardShortcut"
import {ContextMenuSeparator} from "@radix-ui/react-context-menu"

interface ContextItem {
    type: 'item'
    label: string
    shortcut?: string
    icon?: ReactNode
    onSelect?: () => void
}

interface ContextSubitem {
    type: 'sub'
    label: string
    items: MenuItem[]
    icon?: ReactNode
}

interface ContextLabel {
    type: 'label'
    label: string
}

interface ContextCheckbox {
    type: 'checkbox'
    label: string
    checked?: boolean
    onCheckedChange?: (checked: boolean) => void
}

interface ContextSeparator {
    type: 'separator'
}

type MenuItem = ContextItem | ContextSubitem | ContextLabel | ContextCheckbox | ContextSeparator


interface ContextMenuItemProps {
    item: ContextItem
}

function ContextMenuItem({ item }: ContextMenuItemProps) {
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

interface ContextMenuLabelProps {
    item: ContextLabel
}

function ContextMenuLabel({item}: ContextMenuLabelProps) {
    return (
        <ContextMenuPrimitive.Label
            className={cn("text-xs text-tertiary p-1")}
        >
            {item.label}
        </ContextMenuPrimitive.Label>
    )
}

interface ContextMenuCheckboxItemProps {
    item: ContextCheckbox
}

function ContextMenuCheckboxItem({item}: ContextMenuCheckboxItemProps) {
    return (
        <ContextMenuPrimitive.CheckboxItem
            onCheckedChange={item.onCheckedChange}
            checked={item.checked}
            className={cn("flex flex-row items-center text-sm border-0 hover:bg-secondary outline-0 px-2 py-1 rounded-md cursor-pointer hover:text-primary")}
        >
            <ContextMenuPrimitive.ItemIndicator>
                {item.checked ? <Check size={14} className={"mr-1"}/> : null}
            </ContextMenuPrimitive.ItemIndicator>
            {item.label}
        </ContextMenuPrimitive.CheckboxItem>
    )
}

function ContextMenuSeperator() {
    return (
        <ContextMenuPrimitive.Separator
            className={cn("-mx-1 my-1 h-0 border-b border-t border-main")}
        />
    )
}

interface ContextMenuSubItemProps {
    item: ContextSubitem
    width?: string
    children: ReactNode
}

function ContextMenuSubItem({item, width, children}: ContextMenuSubItemProps) {
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

interface ContextMenuActionsProps {
    items: MenuItem[]
    width?: string
}

function ContextMenuActions({ items, width }: ContextMenuActionsProps) {
    return items.map((item, i) => {
        if (item.type === 'separator') return <ContextMenuSeparator key={i} />

        if (item.type === 'label') return <ContextMenuLabel key={i} item={item} />

        if (item.type === 'checkbox') return <ContextMenuCheckboxItem key={i} item={item} />

        if (item.type === 'sub') {
            return (
                <ContextMenuSubItem key={i} item={item} width={width}>
                    <ContextMenuActions items={item.items} />
                </ContextMenuSubItem>
            )
        }

        return <ContextMenuItem key={i} item={item} />
    })
}

interface ContextMenuProps {
    onOpenChange?: (open: boolean) => void
    items: MenuItem[]
    asChild?: boolean
    children: ReactNode
}

function ContextMenu({onOpenChange, items, asChild, children}: ContextMenuProps) {
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

export {
    type MenuItem,
    ContextMenu,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuCheckboxItem,
    ContextMenuSeperator,
    ContextMenuSubItem
}