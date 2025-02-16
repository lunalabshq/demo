import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => {
    return (
        <div className="relative w-full overflow-auto ">
            <table
                className={cn("w-full caption-bottom text-sm border-separate border-spacing-x-0 border-spacing-y-1", className)}
                ref={ref}
                {...props}
            />
        </div>
    )
})
Table.displayName = "Table"

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({className, ...props}, ref) => {
    return (
        <thead
            className={cn("[&_tr]:bg-tertiary [&_tr]:hover:bg-tertiary", className)}
            ref={ref}
            {...props}
        />
    )
})
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => {
    return (
        <tbody
            className={cn("[&_tr:last-child]:border-0", className)}
            ref={ref}
            {...props}
        />
    )
})
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => {
    return (
        <tfoot
            className={cn(
                "[&_tr]:bg-tertiary [&_tr]:hover:bg-tertiary",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(({className, ...props }, ref) => {
    return (
        <tr
            className={cn(
                "rounded-md transition-colors hover:bg-white/5 data-[state=selected]:bg-white/5",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(({className, ...props}, ref) => {
    return (
        <th
            className={cn(
                "h-8 px-2 text-left align-middle font-medium text-secondary [&:has([role=checkbox])]:pr-0 " +
                "[&>[role=checkbox]]:translate-y-[2px] first:rounded-l-md last:rounded-r-md border-y " +
                "border-main first:border-l last:border-r",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(({className, ...props}, ref) => {
    return (
        <td
            className={cn(
                "px-2 py-1.5 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] " +
                "first:rounded-l-md last:rounded-r-md",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(({className, ...props}, ref) => {
    return (
        <caption
            ref={ref}
            className={cn("mt-4 text-sm text-secondary", className)}
            {...props}
        />
    )
})
TableCaption.displayName = "TableCaption"

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
}
