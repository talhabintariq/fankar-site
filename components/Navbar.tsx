"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const services = [
  { href: "/service/web-development", label: "Web Development" },
  { href: "/service/mobile-app-development", label: "Mobile App Development" },
  { href: "/service/custom-app-development", label: "Custom App Development" },
  { href: "/service/ai-ml", label: "AI/ML" },
  { href: "/service/security", label: "Security" },
  { href: "/service/ui-ux-design", label: "UI/UX Design" },
  { href: "/service/quality-assurance", label: "Quality Assurance" },
  { href: "/service/dev-ops", label: "Dev Ops" },
  { href: "/service/game-development", label: "Game Development" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "sticky top-0 z-50",
        "bg-[radial-gradient(120%_120%_at_0%_0%,#1b2a52_0%,#16213e_35%,#0f172a_70%)]",
        "supports-[backdrop-filter]:bg-opacity-90",
        "backdrop-blur-md",
        "shadow-[0_10px_30px_-10px_rgba(10,10,20,0.45)]",
        "border-b border-white/10"
      )}
      style={{ transform: "translateZ(0)" }} // helps with blur performance
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Brand */}
        <motion.div
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="font-semibold tracking-wide"
        >
          <Link href="/" className="text-lg md:text-xl text-white">
            FANKAR
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="rounded-md px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10"
                >
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="navbar-trigger text-sm"
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="
                    grid min-w-[280px] gap-1 p-2 sm:min-w-[520px] sm:grid-cols-2
                    bg-[#0f172a]/95 backdrop-blur-md
                    border border-white/10 shadow-2xl rounded-md
                  "
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="rounded-md px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10"
                    >
                      {s.label}
                    </Link>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/quick-links"
                  className="rounded-md px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10"
                >
                  Quick Links
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="rounded-md px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10"
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport
              className="
                bg-[#0f172a]/95 backdrop-blur-md
                border border-white/10 shadow-2xl
                rounded-md
              "
            />
          </NavigationMenu>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu" className="border-white/20 text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-64 bg-[#0f172a]/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-md"
            >
              <DropdownMenuItem asChild>
                <Link href="/about" className="text-white/90 hover:text-white">About</Link>
              </DropdownMenuItem>

              <div className="px-2 pt-2 text-xs font-medium text-white/60">
                Services
              </div>
              {services.map((s) => (
                <DropdownMenuItem key={s.href} asChild>
                  <Link href={s.href} className="text-white/90 hover:text-white">{s.label}</Link>
                </DropdownMenuItem>
              ))}

              <DropdownMenuItem asChild>
                <Link href="/quick-links" className="text-white/90 hover:text-white">Quick Links</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact" className="text-white/90 hover:text-white">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
