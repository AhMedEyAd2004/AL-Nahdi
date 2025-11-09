import { Tailwind_indicator } from "./tailwind-indicator";

export default function ScreenDebugger() {
    if (process.env.NODE_ENV !== "development") return null;
    else return <Tailwind_indicator />
}
