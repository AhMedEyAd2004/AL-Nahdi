"use client"

import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HTMLAttributes, ReactNode, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)
type Props = {
    className?: string, children: ReactNode,
    animateOpacity?: boolean,
    animateDirectionX?: "left" | "right"
    animateDirectionY?: "top" | "bottom"
} & HTMLAttributes<HTMLDivElement>

export default function AnimateComponentFrom({ children, className,
    animateOpacity, animateDirectionX, animateDirectionY, ...props }: Props) {
    const containerRef = useRef<HTMLDivElement>(null)
    const getDirection_animateObj = (x: typeof animateDirectionX, y: typeof animateDirectionY) => {
        //object Literal Tecnique
        const objltr = {
            none: 0,
            top: -100,
            bottom: 100,
            left: -100,
            right: 100,
        }
        return { x: objltr[x ? x : 'none'], y: objltr[y ? y : 'none'] }
    }
    useGSAP(() => {
        gsap.from(containerRef.current, {
            autoAlpha: animateOpacity ? 0 : 1,
            ...getDirection_animateObj(animateDirectionX, animateDirectionY),
            duration: 2,
            scrollTrigger: {
                trigger: containerRef.current,
                // markers: true,
                start: "+=100px +=500px"
            },
        })
    }, [])
    return (
        <div {...props} className={cn(className)} ref={containerRef}>{children}</div>
    )
}
