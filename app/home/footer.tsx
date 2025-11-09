import { ButtonAnimation } from "@/components/ButtonAnimation";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, X } from "@/components/socialMedia_SVG";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import NahdiLogo from "@/components/nahdiLogo_SVG";

type FooterLink = { name: string; href: string }

const quickLinks: FooterLink[] = [
    { name: "About Us", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faq" },
]

const customerService: FooterLink[] = [
    { name: "Track Order", href: "/track-order" },
    { name: "Returns & Refunds", href: "/returns" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
]

const comms = [
    { icon: <Phone />, value: "+966 50 001 9359" },
    { icon: <Mail />, value: "support@medicare.com" },
    { icon: <MapPin />, value: " Jeddah, Mushrifah Dist., 60th St., Front Al-Baik" }
]


const socialMedia = [
    { href: "https://www.facebook.com", icon: <Facebook /> },
    { href: "https://www.x.com", icon: <X /> },
    { href: "https://www.instagram.com", icon: <Instagram /> },
]

export default function Footer() {
    // bg-linear-to-r from-main-700/80 to-main-700/50
    return (
        <footer className=" text-white bg-gray-900 w-full px-10 pt-15">
            <div className="max-container gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center shrink-0 gap-2 text-xl mb-3">
                        <NahdiLogo />
                        <h1 className="font-urbanist">
                            <div className="2xl:text-xl tracking-tighter">
                                Thabet Ali Saleh Alnahdi Est.
                            </div>
                            <p className="text-[16px] text-center">For Medical Services</p>
                        </h1>
                    </div>
                    <p className="text-sm">Your trusted partner in healthcare. Providing quality medical products and services since 2020.</p>
                    <div className=" flex gap-2">
                        {socialMedia.map((s) => {
                            return (
                                <ButtonAnimation scale_onInteract key={s.href} variant={null} asChild>
                                    <Link href={s.href} className="size-10 flex justify-center items-center rounded-full bg-white
                                     hover:bg-main-500 hover:[&_svg]:fill-white border border-transparent hover:border-main-900 p-1.5 hover:scale-120 transition duration-150">
                                        {s.icon}
                                    </Link>
                                </ButtonAnimation>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="mb-3 font-semibold text-xl">Quick Links</h3>
                    {quickLinks.map((link) =>
                        <Link href={link.href} key={link.href} scroll={true} className="group w-[50%]">
                            <p className="group-hover:translate-x-3 transition duration-150">
                                {link.name}
                            </p>
                        </Link>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="mb-3 font-semibold text-xl">Customer Service</h3>
                    {customerService.map((link) =>
                        <Link href={link.href} key={link.href} scroll={true} className="group w-[50%]">
                            <p className="group-hover:translate-x-3 transition duration-150">
                                {link.name}
                            </p>
                        </Link>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="mb-3 font-semibold text-xl">Stay Updated</h3>
                    <p>Subscribe to our newsletter for health tips and exclusive offers.</p>
                    <Input placeholder="Your email" className="placeholder:text-foreground/80" />
                    <ButtonAnimation scale_onInteract className="text-main-700 hover:scale-110 bg-white hover:bg-white/90">Subscribe</ButtonAnimation>
                    <div className="flex flex-col gap-3">
                        {comms.map((c) =>
                            <div key={c.value} className="flex gap-3">
                                {c.icon}
                                <p>{c.value}</p>
                            </div>
                        )}
                    </div>
                </div>
                <hr className="w-full col-span-full mb-5" />
            </div>
            <div className="flex justify-center items-center pb-5">
                &copy;2025 Al-Nahdi. All rights reserved.
            </div>
        </footer >
    )
}
