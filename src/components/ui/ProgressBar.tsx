"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressBarProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {}

const ProgressBar = React.forwardRef<React.ComponentRef<typeof ProgressPrimitive.Root>, ProgressBarProps>(({ className, value, ...props }, ref) => {
    return (
        <ProgressPrimitive.Root
            className={cn(
                "relative h-4 w-full overflow-hidden rounded-full bg-white",
                className
            )}
            ref={ref}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className="h-full w-full flex-1 bg-brand transition-all"
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    )
})
ProgressBar.displayName = ProgressPrimitive.Root.displayName

export { ProgressBar }