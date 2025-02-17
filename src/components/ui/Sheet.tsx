"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const sheetVariants = cva(
    "fixed z-50 gap-4 bg-primary p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 " +
    "data-[state=open]:animate-in data-[state=closed]:animate-out border-main",
    {
        variants: {
            side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
            }
        },
        defaultVariants: {
            side: "right",
        }
    }
)

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

interface SheetOverlayProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> {}

const SheetOverlay = React.forwardRef<React.ComponentRef<typeof SheetPrimitive.Overlay>, SheetOverlayProps>(({ className, ...props }, ref) => {
    return (
        <SheetPrimitive.Overlay
            className={cn(
                "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 " +
                "data-[state=open]:fade-in-0",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ComponentRef<typeof SheetPrimitive.Content>, SheetContentProps>(({ side = "right", className, children, ...props }, ref) => {
    return (
        <SheetPortal>
            <SheetOverlay />
            <SheetPrimitive.Content
                className={cn(sheetVariants({ side }), className)}
                ref={ref}
                {...props}
            >
                <SheetPrimitive.Close
                    className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none
                    data-[state=open]:bg-secondary hover:text-primary"
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </SheetPrimitive.Close>
                {children}
            </SheetPrimitive.Content>
        </SheetPortal>
    )
})
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                "flex flex-col space-y-2 text-center sm:text-left",
                className
            )}
            {...props}
        />
    )
}
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({className, ...props}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
                className
            )}
            {...props}
        />
    )
}
SheetFooter.displayName = "SheetFooter"

interface SheetTitleProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> {}

const SheetTitle = React.forwardRef<React.ComponentRef<typeof SheetPrimitive.Title>, SheetTitleProps>(({ className, ...props }, ref) => {
    return (
        <SheetPrimitive.Title
            className={cn("text-lg font-medium text-primary", className)}
            ref={ref}
            {...props}
        />
    )
})
SheetTitle.displayName = SheetPrimitive.Title.displayName

interface SheetDescriptionProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> {}

const SheetDescription = React.forwardRef<React.ComponentRef<typeof SheetPrimitive.Description>, SheetDescriptionProps>(({ className, ...props }, ref) => {
    return (
        <SheetPrimitive.Description
            className={cn("text-sm text-secondary", className)}
            ref={ref}
            {...props}
        />
    )
})
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription
}
