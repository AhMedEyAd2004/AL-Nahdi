
import { ReactNode } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

type Props = {
    shine?: "fast" | "slow"
    scale_onInteract?: boolean
    children: ReactNode
    className?: string
} & React.ComponentPropsWithoutRef<typeof Button>

const interActionStyles = "transition-transform duration-150 hover:scale-110 active:scale-95"
const shineStyles = "bg-linear-to-t from-white w-full h-2"
//rotate 90 degree to reverse the width and height of the div

export const ButtonAnimation = ({
    shine,
    scale_onInteract,
    children,
    className = "",
    ...props
}: Props) => {

    return (
        <Button
            {...props}
            className={cn('relative overflow-hidden', scale_onInteract && interActionStyles, className)}
        >
            <>
                {shine && (
                    <div className={cn(
                        "absolute top-1/2 right-0 rotate-120",
                        shine === "fast" && "animate-fast-shine",
                        shine === "slow" && "animate-slow-shine",
                        shineStyles
                    )} />
                )}
                {children}
            </>
        </Button>
    )
}
