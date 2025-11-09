import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ScreenDebugger from "@/components/debug/ScreenDebugger";
import { ThemeProvider } from "@/components/themeProvider";
import { GsapTutorial } from "@/components/GsapTutorial";
import NavbarGsapWrapper from "./@navbar/navbar-GsapWrapper";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const lufga = localFont({
  src: [
    { path: "../public/fonts/fonnts.com-LufgaRegular.ttf", style: "normal", weight: "400" },
    { path: "../public/fonts/fonnts.com-LufgaMedium.ttf", style: "normal", weight: "500" },
    { path: "../public/fonts/fonnts.com-LufgaSemiBold.ttf", style: "normal", weight: "600" },
    { path: "../public/fonts/fonnts.com-LufgaBold.ttf", style: "normal", weight: "700" },
  ],
  variable: "--font-lufga",
  display: "swap", // optional, for better performance
});


export const metadata: Metadata = {
  title: "MedKit",
  description: "Eccomerce for medical supplies.",
};

type RootlayoutProps = Readonly<{
  children: React.ReactNode;
  navbar: React.ReactNode;
}>

export default function RootLayout({
  children,
  navbar,
}: RootlayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` dark:bg-background
            ${urbanist.variable} ${lufga.variable}
            relative min-w-screen overflow-x-hidden
         font-lufga antialiased`}
      >
        <ThemeProvider
          attribute="class"
          enableSystem
          forcedTheme="light"
          disableTransitionOnChange
        >
          <div className="text-main-500 w-screen">
            <NavbarGsapWrapper>
              {navbar}
            </NavbarGsapWrapper>
          </div>
          {children}


          {/* Background Blobs */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] md:size-160 rounded-full bg-main-600/30 blur-[150px]" />
            <div className="absolute bottom-[-25%] right-[-15%] size-200 rounded-full bg-main-500/25 blur-[200px]" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-140 rounded-full bg-linear-to-tr from-main-400/30 to-main-700/20 blur-[180px]" />
          </div>

          <ScreenDebugger />
        </ThemeProvider>
      </body>
    </html >
  );
}
