"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimatedNumberProps = {
    value: number;          // target number
    duration?: number;      // animation duration in seconds
    className?: string;
    fixedValue?: number;    // number of decimal places
};

gsap.registerPlugin(ScrollTrigger)
export default function AnimatedNumber({
    value,
    duration = 4,
    className,
    fixedValue = 0,
}: AnimatedNumberProps) {
    const numberRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const obj = { val: 0 };
        gsap.to(obj, {
            val: value,
            duration,
            ease: "expo.out",
            scrollTrigger: {
                trigger: numberRef.current,
                // markers: true,
                start: "top +=500px"
            },
            onUpdate: () => {
                if (numberRef.current) {
                    const val = obj.val
                    if (val >= 1000) {
                        numberRef.current.textContent = (val / 1000).toFixed(fixedValue) + 'K';
                    } else {
                        numberRef.current.textContent = val.toFixed(fixedValue).toString();
                    }
                }
            },
        });
    }, []);

    return <span ref={numberRef} className={className}>{value}</span>;
}
