import { ButtonAnimation } from "@/components/ButtonAnimation";
import { cn } from "@/lib/utils";
import { Heart, Plus, ShoppingCartIcon, User, X } from "lucide-react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { MovingActiveBg } from "./movingActiveBg";
import NahdiLogo from "@/components/nahdiLogo_SVG";

export const links = [
  { name: "Home", href: "/home" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]
export default function Navbar() {

  return (
    <>
      <nav className="max-container w-screen relative bg-transparent flex justify-between xl:gap-5 items-center z-2 px-10 py-5 ">
        <div className="flex justify-center w-fit items-center text-main-600 shrink-0 gap-2 text-3xl font-medium">
          <NahdiLogo className="text-main-600" /> Al-Nahdi
        </div>
        <MovingActiveBg whichNav={0} className="from-main-500/70 to-main-600">
          <ul className="flex xl:gap-3 justify-center max-lg:hidden">
            {links.map((link) => (
              <li key={link.href} className="rounded-full text-foreground hover:bg-main-900/20">
                <Link
                  href={link.href}
                  className={cn(
                    '2xl:text-xl relative z-10 block rounded-full px-6 xl:px-8 py-3 delay-300 transition-colors',
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </MovingActiveBg>

        <div className="flex shrink justify-center items-center xl:gap-3 max-sm:hidden">
          <ButtonAnimation scale_onInteract variant={null} className="py-6">
            <Heart aria-label="favourites" className="stroke-main-600 size-5 2xl:size-6" />
          </ButtonAnimation>

          <ButtonAnimation scale_onInteract variant={null} className="relative py-6">
            <ShoppingCartIcon aria-label="shopping cart" className="size-5 2xl:size-6 stroke-main-600" />
            <span className="absolute text-white  bg-main-800 rounded-full size-5 text-center top-0 right-0">3</span>
          </ButtonAnimation>

          <ButtonAnimation scale_onInteract shine="slow" className="2xl:text-xl ml-3 hover:scale-110 bg-main-600 hover:bg-main-800 text-white ">
            <User className="size-5 2xl:size-6" />
            <p>Sign In</p>
          </ButtonAnimation>
        </div>

        <Drawer direction="right">
          <DrawerTrigger className="size-10 order-4 flex shrink-0 justify-center items-center lg:hidden">
            <NavIcon />
          </DrawerTrigger>
          <DrawerContent className="z-999">
            <nav className="size-full">
              <DrawerClose asChild className="absolute -left-10 top-1/2 -translate-x-1/2 flex justify-center">
                <ButtonAnimation scale_onInteract variant={null} className="size-13 bg-black/30 backdrop-blur-3xl">
                  <X />
                </ButtonAnimation>
              </DrawerClose>
              {/* <DrawerHeader>
                <DrawerTitle>
                

                </DrawerTitle>
                <DrawerDescription className="sr-only">navigation</DrawerDescription>
              </DrawerHeader> */}

              <MovingActiveBg whichNav={1} className="rounded-none! from-main-500/70 to-main-600">
                <ul className="flex flex-col gap-2 my-auto justify-center">
                  {links.map((link) => (
                    <li key={link.href} className="text-main-700 hover:bg-main-900/20">
                      <Link
                        href={link.href}
                        className={cn('relative z-10 block px-8 py-3 delay-300 transition-colors')}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MovingActiveBg>

              <DrawerFooter>
                <ButtonAnimation scale_onInteract shine="fast" className="hover:scale-105 bg-main-600 hover:bg-main-800 text-white ">
                  <User />
                  <p>Sign In</p>
                </ButtonAnimation>

              </DrawerFooter>
            </nav>
          </DrawerContent>
        </Drawer>

      </nav >
    </>
  )
}

const NavIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Menu / Menu_Alt_01">
          <path
            id="Vector"
            d="M12 17H19M5 12H19M5 7H19"
            className="stroke-main-700"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  )
}