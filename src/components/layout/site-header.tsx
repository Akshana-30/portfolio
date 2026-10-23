"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { FileText, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { profile } from "@/content";
import { cn } from "@/lib/utils";
import { LogoMark } from "./logo-mark";
import { HeaderSurface } from "./header-surface";
import { ThemeToggle } from "./theme";

const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/#journey", label: "Journey" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 print:hidden">
      <HeaderSurface />

      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" onClick={closeMenu} className="group flex items-center gap-2.5">
          <LogoMark className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" />
          <span className="font-semibold tracking-tight">{profile.firstName}</span>
        </Link>

        <nav className="flex items-center gap-1">
          {/* Desktop links */}
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                // cn() runs tailwind-merge so `hidden` beats the variant's `inline-flex`.
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "relative hidden md:inline-flex",
                  active && "text-primary",
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary"
                  />
                )}
              </Link>
            );
          })}

          {/* Always visible */}
          <Link
            href="/cv"
            onClick={closeMenu}
            className={cn(buttonVariants({ size: "sm" }), "ml-1")}
          >
            <FileText />
            CV
          </Link>
          <ThemeToggle className="hidden md:inline-flex" />

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon-sm"
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-3">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "w-full justify-start text-base",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-2 flex items-center justify-between border-t px-2.5 pt-3 text-sm text-muted-foreground">
                Theme
                <ThemeToggle />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
