"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
export const GsapTutorial = () => {

    gsap.registerPlugin(useGSAP)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.to(".text-2", {
            y: -100,
            stagger: {
                yoyo: true,
                amount: 1,
            }
        })
        tl.from("#text-3", {
            y: -100,
            background: "red",
            repeat: -1,
            yoyo: true
        }, "-=10%")
    })


    return (
        <div className="text-black size-screen text-center mt-20 text-6xl flex flex-col gap-20">
            <h1>GsapTutorial</h1>
            <div className="flex justify-center items-center gap-5">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="text-2">{index}</div>
                )
                )}
            </div>
            <div id="text-3">Text #3</div>
        </div>
    )
}
