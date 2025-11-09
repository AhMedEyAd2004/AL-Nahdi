"use client";

import { useEffect, useState } from "react";

export const Tailwind_indicator = () => {
    const [size, setSize] = useState({ width: 0, height: 0, breakpoint: "" });

    const getBreakpoint = (width: number) => {
        if (width < 640) return "xs (<sm)";
        if (width < 768) return "sm";
        if (width < 1024) return "md";
        if (width < 1280) return "lg";
        if (width < 1536) return "xl";
        return "2xl";
    };

    useEffect(() => {
        const updateSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
                breakpoint: getBreakpoint(window.innerWidth),
            });
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div className="fixed bottom-2 right-2 z-9999 rounded-lg bg-black/50 text-white px-3 py-2 text-xl font-mono ">
            <div>W: {size.width}px</div>
            <div>H: {size.height}px</div>
            <div>BP: {size.breakpoint}</div>
        </div>
    );
}
