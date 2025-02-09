import {cva, VariantProps} from "class-variance-authority"
import React from "react"
import {cn} from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center justify-center rounded-full border px-2 text-xs font-medium leading-normal transition-colors border",
    {
        variants: {
            variant: {
                default: "bg-white/50 border-main",
                brand: "bg-brand/60 border-brand/20 ",
                success: "bg-success/60 border-success/20",
                warning: "bg-warning/60 border-warning/20",
                error: "bg-error/60 border-error/20",
                info: "bg-info/60 border-info/20",
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}

const Badge: React.FC<BadgeProps> = ({variant, children, className, ...props}) => {
    return (
        <div className={cn(badgeVariants({variant}), className)} {...props}>
            {children}
        </div>
    )
}

export default Badge