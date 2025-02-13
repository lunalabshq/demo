import {cn} from "@/lib/utils"
import type React from "react"

function Skeleton({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-lg bg-white/5", className)}
            {...props}
        />
    )
}

export { Skeleton }