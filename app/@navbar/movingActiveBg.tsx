"use client"
import { usePathname } from "next/navigation"
import { links } from "./default"
import { HTMLAttributes, ReactNode, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type Props =
    { children: ReactNode, whichNav: number }
    & HTMLAttributes<HTMLDivElement>

export const MovingActiveBg = ({ children, whichNav, ...props }: Props) => {
    const pathname = usePathname()
    // const navRef = useRef<HTMLDivElement>(null)
    const bgRef = useRef<HTMLDivElement>(null)

    //it depends on pathname(which rerenders) so the currentIndex is 
    // storing value that changes on each pathname change no need for state or ref
    const currentIndex = links.findIndex((link) => pathname.startsWith(link.href))



    useEffect(() => {

        function moveBackground(button: HTMLLIElement) {
            //getBoundingClientRect gives the size and position relative to the viewport
            //changing x.style.left is distance from 
            // left to the "relative position parent element" => thats why you subtract nav.left from rect.left
            const nav = document.querySelectorAll('nav')[whichNav]?.getBoundingClientRect()
            if (!bgRef.current || !nav) return
            const rect = button.getBoundingClientRect()

            bgRef.current.style.width = rect.width + 'px'
            bgRef.current.style.height = rect.height + 'px'
            bgRef.current.style.left = (rect.left - nav.left) + 'px'
            bgRef.current.style.top = (rect.top - nav.top) + 'px'
        }

        //its ok to use querySelector to get values, but not changing them 
        //for manipulating the dom, you should use useRef hook
        //currently i'm getting the li children of the navRef component
        const li_list = document.querySelectorAll('nav')[whichNav]?.querySelectorAll('li')
        if (!li_list || li_list.length === 0) return
        li_list.forEach((li) => li.classList.remove('text-white!'))
        li_list[currentIndex].classList.add('text-white!')
        //initial is from pathname,
        //when i press another li.
        //the Link navigates to the new page. the usePathname hook changes,
        //causing a rerender to any component that uses pathname
        //pathname changes so the useEffect reruns changing the values of the bgRef and the transition happens 
        //no need onClick ans stuff like this
        moveBackground(li_list[currentIndex])

        // Handle resize
        const handleResize = () => moveBackground(li_list[currentIndex])
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [pathname, currentIndex, whichNav])

    return (
        <>
            <div
                ref={bgRef}
                {...props}
                className={cn("z-0 absolute transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] rounded-full bg-linear-to-br"
                    , props.className)}
            />
            {children}
        </>
    )
}