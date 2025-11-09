/* eslint-disable */
// @ts-nocheck
"use client"

import { horizontalLoop } from "@/helpers/seemlessLoop";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode } from "react";

export default function SeemLessLoopGsapWrapper({ children }: { children: ReactNode }) {

    useGSAP(() => {
        const wrapper = document.querySelector(".wrapper");
        const boxes: HTMLDivElement[] = gsap.utils.toArray(".box");
        let activeElement;
        const loop = horizontalLoop(boxes, {
            repeat: -1,
            paused: false,
            draggable: true, // make it draggable
        });


        /*  const boxes: HTMLDivElement[] = gsap.utils.toArray(".box"),
                 loop = horizontalLoop(boxes, { repeat: -1, paused: false });
             console.log('📌loop', loop);
            
             } */

        const handleHover = () => {
            if (loop.isActive())
                loop.paused(true)
            else
                loop.paused(false)
        }
        boxes.forEach((box) => {
            box.querySelector("img")?.addEventListener("mouseenter", handleHover)
            box.querySelector("img")?.addEventListener("mouseleave", handleHover)
        }
        )
        return () => {
            boxes.forEach((box) => {
                box.removeEventListener("mouseenter", handleHover)
                box.removeEventListener("mouseleave", handleHover)
            })
        }

    }, [])
    return (
        <div className="wrapper">{children}</div>
    )
}
