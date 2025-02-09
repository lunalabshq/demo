import {cva, VariantProps} from "class-variance-authority"
import React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cn} from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center h-8 px-4 py-2 whitespace-nowrap transition-colors rounded-md test-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-secondary hover:bg-primary border border-main hover:text-primary",
                brand: "bg-brand hover:bg-brand/80 border border-brand/40",
                ghost: "bg-transparent hover:bg-brand/10",
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({asChild, variant, className, ...props}, ref) => {
    const ButtonComponent = asChild ? Slot : "button";

    return (
        <ButtonComponent
            className={cn(buttonVariants({ variant, className }))}
            ref={ref}
            {...props}
        />
    )
})
Button.displayName = "Button"

export default Button
