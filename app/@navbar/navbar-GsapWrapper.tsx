"use client"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactNode, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

export default function NavbarGsapWrapper({ children }: { children: ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    useGSAP(() => {
        const navSize = wrapperRef.current?.getBoundingClientRect().height;
        const showNavbar = gsap.to(wrapperRef.current, { y: navSize, duration: 0.01, paused: true });
        let lastDirection = 0;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                // markers: true,
                start: `+=${navSize} top`,
                pin: wrapperRef.current,
                pinSpacing: false,
                toggleClass: {
                    targets: wrapperRef.current,
                    className: "bg-white"
                },
                onLeaveBack: () => showNavbar.reverse(),
                onUpdate: (self) => {
                    // if (self.progress === 0) showNavbar.restart()
                    if (self.direction !== lastDirection) {
                        if (self.direction === -1) {
                            showNavbar.play()
                        } else {
                            showNavbar.reverse()
                        }
                        lastDirection = self.direction;
                    }
                },

            }
        })
    }, { dependencies: [] })


    return (
        <div ref={wrapperRef} className='absolute transition duration-300 z-999 w-screen '>
            {children}
        </div>
    )
}
