import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import {ChevronRight, MoreHorizontal, Slash} from "lucide-react"

import { cn } from "@/lib/utils"
import type {ReactNode} from "react"

interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
    separator?: ReactNode
    children: ReactNode
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(({children, separator, ...props}, ref) => {
    return (
        <nav
            ref={ref}
            aria-label="breadcrumb"
            {...props}
        >
            <ol
                className={cn(
                    "flex flex-row items-center gap-1.5 break-words text-sm text-secondary sm:gap-2.5"
                )}
            >
                {children}
            </ol>
        </nav>
    )
})
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(({className, ...props}, ref) => {
    return (
        <li
            className={cn("inline-flex items-center gap-1.5 mb-1", className)}
            ref={ref}
            {...props}
        />
    )
})
BreadcrumbItem.displayName = "BreadcrumbItem"

interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    asChild?: boolean
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"

    return (
        <Comp
            className={cn("transition-colors hover:text-primary", className)}
            ref={ref}
            {...props}
        />
    )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(({ className, ...props }, ref) => {
    return (
        // biome-ignore lint/a11y/useFocusableInteractive: <explanation>
        <span
            ref={ref}
            role="link"
            aria-disabled="true"
            aria-current="page"
            className={cn("font-normal text-primary", className)}
            {...props}
        />
    )
})
BreadcrumbPage.displayName = "BreadcrumbPage"

interface BreadcrumbSeparatorProps extends React.ComponentProps<"li"> {
    type?: "chevron" | "slash"
}

const BreadcrumbSeparator = ({type = "chevron", className, ...props}: BreadcrumbSeparatorProps) => {
    return (
        <li
            role="presentation"
            aria-hidden="true"
            className={cn("flex items-center", className)}
            {...props}
        >
            {type === "chevron" ? <ChevronRight size={16}/> : <p className={"font-bold mb-1"}>/</p>}
        </li>
    )
}
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({className, ...props}: React.ComponentProps<"span">) => {
    return (
        <span
            role="presentation"
            aria-hidden="true"
            className={cn("flex h-9 w-9 items-center justify-center", className)}
            {...props}
        >
            <MoreHorizontal className="h-4 w-4 text-secondary"/>
            <span className="sr-only">More</span>
        </span>
    )
}
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
}
