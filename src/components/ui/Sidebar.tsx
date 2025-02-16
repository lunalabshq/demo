"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import {ChevronsUpDown, ChevronUp, EllipsisVertical, PanelLeft} from "lucide-react"
import { isMobile } from "react-device-detect"
import {type ReactNode, useCallback, useEffect, useMemo, useState} from "react"
import TooltipProvider, {useTooltip} from "./TooltipProvider"
import { cn } from "@/lib/utils"
import {Sheet, SheetContent} from "@/components/ui/Sheet"
import Button from "./Button"
import {Input} from "@/components/ui/Input"
import type {TooltipProps} from "@/components/ui/Tooltip"
import {Skeleton} from "@/components/ui/Skeleton"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/Popover"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
    state: "expanded" | "collapsed"
    open: boolean
    setOpen: (open: boolean) => void
    openMobile: boolean
    setOpenMobile: (open: boolean) => void
    isMobile: boolean
    toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
    const context = React.useContext(SidebarContext)
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.")
    }

    return context
}

interface SidebarProviderProps extends React.ComponentProps<"div"> {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

const SidebarProvider = React.forwardRef<HTMLDivElement, SidebarProviderProps>(({defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props}, ref) => {
    const [openMobile, setOpenMobile] = useState(false)
    const [_open, _setOpen] = useState(defaultOpen)

    const open = openProp ?? _open

    const setOpen = useCallback((value: boolean | ((value: boolean) => boolean)) => {
            const openState = typeof value === "function" ? value(open) : value

            if (setOpenProp) setOpenProp(openState)
            else _setOpen(openState)

            document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
        },
        [open, setOpenProp])

    const toggleSidebar = useCallback(() => {
        return isMobile
            ? setOpenMobile((open) => !open)
            : setOpen((open) => !open)
    }, [setOpen])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                event.preventDefault()
                toggleSidebar()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    const state = open ? "expanded" : "collapsed"

    const contextValue = useMemo<SidebarContext>(() =>
            ({state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar,}),
        [open, state, setOpen, openMobile, toggleSidebar]
    )

    return (
        <SidebarContext.Provider value={contextValue}>
            <TooltipProvider>
                <div
                    style={{
                        "--sidebar-width": SIDEBAR_WIDTH,
                        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON, ...style,
                    } as React.CSSProperties
                    }
                    className={cn(
                        "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
                        className
                    )}
                    ref={ref}
                    {...props}
                >
                    {children}
                </div>
            </TooltipProvider>
        </SidebarContext.Provider>
    )
})
SidebarProvider.displayName = "SidebarProvider"

interface SidebarProps extends React.ComponentProps<"div"> {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(({side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props}, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
        return (
            <div
                className={cn(
                    "flex h-full w-[--sidebar-width] flex-col bg-primary text-secondary",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        )
    }

    if (isMobile) {
        return (
            <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
                <SheetContent
                    data-sidebar="sidebar"
                    data-mobile="true"
                    className="w-[--sidebar-width] primary p-0 text-secondary [&>button]:hidden"
                    style={{"--sidebar-width": SIDEBAR_WIDTH_MOBILE} as React.CSSProperties}
                    side={side}
                >
                    <div className="flex h-full w-full flex-col">
                        {children}
                    </div>
                </SheetContent>
            </Sheet>
        )
    }

    return (
        <div
            className="group peer hidden text-secondary md:block"
            data-state={state}
            data-collapsible={state === "collapsed" ? collapsible : ""}
            data-variant={variant}
            data-side={side}
            ref={ref}
        >
            {/* This is what handles the sidebar gap on desktop */}
            <div
                className={cn(
                    "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
                    "group-data-[collapsible=offcanvas]:w-0",
                    "group-data-[side=right]:rotate-180",
                    variant === "floating" || variant === "inset"
                        ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
                        : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
                )}
            />
            <div
                className={cn(
                    "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
                    side === "left"
                        ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                        : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                    // Adjust the padding for floating and inset variants.
                    variant === "floating" || variant === "inset"
                        ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
                        : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l border-main",
                    className
                )}
                {...props}
            >
                <div
                    data-sidebar="sidebar"
                    className={cn(
                        "flex h-full w-full flex-col bg-primary group-data-[variant=floating]:rounded-lg " +
                        "group-data-[variant=floating]:border group-data-[variant=floating]:border-main " +
                        "group-data-[variant=floating]:shadow"
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    )
})
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<React.ComponentRef<typeof Button>, React.ComponentProps<typeof Button>>(({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar()

    return (
        <Button
            data-sidebar="trigger"
            variant="ghost"
            className={cn("h-7 w-7", className)}
            onClick={(event) => {
                onClick?.(event)
                toggleSidebar()
            }}
            ref={ref}
            {...props}
        >
            <PanelLeft />
            <span className="sr-only">Toggle Sidebar</span>
        </Button>
    )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
    return (
        <div
            data-sidebar="header"
            className={cn("flex flex-col gap-2 p-2", className)}
            ref={ref}
            {...props}
        />
    )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
    return (
        <div
            data-sidebar="footer"
            className={cn("flex flex-col gap-2 p-2", className)}
            ref={ref}
            {...props}
        />
    )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<HTMLHRElement, React.ComponentProps<"hr">>(({ className, ...props }, ref) => {
    return (
        <hr
            data-sidebar="separator"
            className={cn("-mx-2 w-auto border-b border-main", className)}
            ref={ref}
            {...props}
        />
    )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
    return (
        <div
            data-sidebar="content"
            className={cn(
                "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
SidebarContent.displayName = "SidebarContent"

//Group & Items---------------------------------------------------------------------------------------------------------
interface SidebarGroupProps extends React.ComponentProps<"div"> {
    label?: string
    children?: React.ReactNode
}

const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(({ children, label, className, ...props }, ref) => {
    return (
        <div
            data-sidebar="group"
            className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
            ref={ref}
            {...props}
        >

            {label &&
                <p data-sidebar="group-label"
                   className={
                       "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-normal text-tertiary " +
                        "outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear " +
                        "focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 " +
                        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0"
                   }
                >
                    {label}
                </p>
            }
            {children}
        </div>
    )
})
SidebarGroup.displayName = "SidebarGroup"

type ActionItem = {
    text: string
    icon?: ReactNode
    onClick: () => void
}

interface SidebarItemProps {
    action?: boolean
    actionItems?: ActionItem[]
    actionTitle?: string
    isActive?: boolean
    tooltip?: Omit<TooltipProps, "trigger">
    showOnHover?: boolean
    badge?: ReactNode
    label: string
    icon?: ReactNode
}

const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(({ actionTitle, actionItems, icon, label, badge, showOnHover = false, isActive = false, tooltip, action = false, ...props }, ref) => {
    const { isMobile, state } = useSidebar()
    const { addTooltip, removeTooltip } = useTooltip()

    return (
        <div
            data-sidebar="menu-item"
            data-active={isActive}
            className={cn(
                "group/item flex flex-row space-x-2 items-center relative justify-between hover:bg-tertiary rounded-md " +
                "pl-4 pr-1 py-1 cursor-pointer"
            )}
            onMouseEnter={(e) => tooltip && addTooltip({ trigger: e.currentTarget.getBoundingClientRect(), ...tooltip })}
            onMouseLeave={() => tooltip && removeTooltip()}
            ref={ref}
            {...props}
        >
            <div className={"flex flex-row space-x-2 items-center text-secondary group-hover/item:text-primary"}>
                {icon &&
                    <div className={"text-secondary"}>
                        {icon}
                    </div>
                }
                <span className={""}>{label}</span>
            </div>

            {action && actionItems && actionItems.length > 0 &&
                <Popover>
                    <PopoverTrigger>
                        <Button
                            data-sidebar="menu-action"
                            variant={"ghost"}
                            className={cn("w-6 h-6 p-1")}
                        >
                            <EllipsisVertical size={16} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className={"w-30 p-1"} side={"right"} align={"start"}>
                        <p className={"p-1 pb-2 text-xs text-tertiary"}>{actionTitle}</p>
                        <div className="flex flex-col space-y-1">
                            {actionItems?.map((item) => (
                                <Button
                                    key={item.text}
                                    variant={"ghost"}
                                    className={"text-left font-normal text-xs w-full px-2 py-0 h-6 justify-start"}
                                    onClick={item.onClick}
                                >
                                    {item.icon}
                                    {item.text}
                                </Button>
                            ))}
                        </div>
                    </PopoverContent>
                </Popover>
            }
            {badge}
        </div>
    )
})
SidebarItem.displayName = "SidebarItem"

interface SidebarCollapsibleProps extends React.ComponentProps<"div"> {
    mainItem: Omit<SidebarItemProps, "action" | "onAction" | "isActive" | "badge">
}

const SidebarCollapsible = React.forwardRef<HTMLDivElement, SidebarCollapsibleProps>(({ children, mainItem, className, ...props }, ref) => {
    const { addTooltip, removeTooltip } = useTooltip()
    const [open, setOpen] = useState(false)

    return (
        <div className={"group/collapsible flex flex-col"}>
            <div
                data-sidebar="menu-item"
                className={cn(
                    "group/item flex flex-row space-x-2 items-center relative justify-between hover:bg-tertiary rounded-md " +
                    "pl-4 pr-1 py-1 cursor-pointer"
                )}
                onClick={() => setOpen(!open)}
                onMouseEnter={(e) => mainItem.tooltip && addTooltip({trigger: e.currentTarget.getBoundingClientRect(), ...mainItem.tooltip})}
                onMouseLeave={() => mainItem.tooltip && removeTooltip()}
                ref={ref}
                {...props}
            >
                <div className={"flex flex-row space-x-2 items-center text-secondary group-hover/item:text-primary"}>
                    {mainItem.icon &&
                        <div className={"text-secondary"}>
                            {mainItem.icon}
                        </div>
                    }
                    <span className={""}>{mainItem.label}</span>
                </div>

                <div
                    data-state={open ? "expanded" : "collapsed"}
                    className={cn(
                        "size-4 flex items-center group-hover/collapsible:text-primary data-[state=expanded]:rotate-180 transition-all"
                    )}
                >
                    <ChevronUp size={16} className={"shrink-0 transition-transform duration-200"}/>
                </div>
            </div>
            {open &&
                <div
                    data-sidebar="collapsible"
                    className={cn("flex flex-row space-x-2", className)}
                    ref={ref}
                    {...props}
                >
                    <div className={"w-7 border-r border-main/50"}/>
                    <div className={"w-full flex flex-col"}>
                        {children}
                    </div>
                </div>
            }
    </div>
)
})

interface SidebarProfileProps extends React.ComponentProps<"div"> {
    name: string
    email: string
    avatar: string
}

const SidebarProfile = React.forwardRef<HTMLDivElement, SidebarProfileProps>(({ name, email, avatar, className, ...props }, ref) => {
    return (
        <div
            data-sidebar="profile"
            className={cn("flex flex-col gap-2 p-2 hover:bg-tertiary rounded-md cursor-pointer overflow-hidden", className)}
            ref={ref}
            {...props}
        >
            <div className="flex items-center space-x-2 justify-between">
                <div className={"flex flex-row space-x-2 items-center"}>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-blue-700"/>
                    <div className="max-w-40 flex flex-col overflow-hidden">
                        <p className="text-sm font-semibold truncate">{name}</p>
                        <p className="text-xs text-tertiary truncate">{email}</p>
                    </div>
                </div>
                <ChevronsUpDown size={16} className="text-tertiary"/>
            </div>
        </div>
    )
})

export {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarItem,
    SidebarProvider,
    SidebarSeparator,
    SidebarCollapsible,
    SidebarTrigger,
    SidebarProfile,
    useSidebar
}
