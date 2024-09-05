"use client";

import Link from "next/link";
import { Link as NextUILink } from "@nextui-org/link";
import { Session } from "next-auth";
import JLogo from "@/components/layout/JLogo";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import UserAvatar from "@/components/layout/UserAvatar";
import { useState } from "react";

export default function NavBar({ session }: { session: Session | null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarLinks = [
    {
      href: "/docs/getting-started",
      text: "Getting started",
    },
    {
      href: "/docs",
      text: "Docs",
      isExternal: true,
      showAnchorIcon: true,
    },
    {
      href: "/blog",
      text: "Blog",
    },
    {
      href: "/contact",
      text: "Contact",
    },
    {
      href: "https://api.jaqpot.org",
      text: "API",
      isExternal: true,
      showAnchorIcon: true,
    },
  ];

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="pr-3 sm:hidden" justify="center">
          <NavbarBrand as={Link} href="/">
            <JLogo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex" justify="start">
          <NavbarBrand as={Link} href="/">
            <JLogo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          {navbarLinks.map((link, index) => (
            <NavbarItem key={index}>
              <NextUILink
                isExternal={link.isExternal}
                showAnchorIcon={link.showAnchorIcon}
                color="foreground"
                href={link.href}
                aria-current="page"
              >
                {link.text}
              </NextUILink>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <UserAvatar session={session} />
        </NavbarContent>

        <NavbarMenu>
          {navbarLinks.map((link, index) => (
            <NavbarMenuItem key={index}>
              <NextUILink
                className="w-full"
                color="foreground"
                href={link.href}
                size="lg"
                isExternal={link.isExternal}
                showAnchorIcon={link.showAnchorIcon}
              >
                {link.text}
              </NextUILink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {/*<div*/}
      {/*  className={`fixed top-0 flex w-full justify-center ${*/}
      {/*    scrolled*/}
      {/*      ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"*/}
      {/*      : "bg-white/0"*/}
      {/*  } z-30 transition-all`}*/}
      {/*>*/}
      {/*  <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">*/}
      {/*    <Link href="/" className="flex items-center font-display text-2xl">*/}
      {/*      <JLogo />*/}
      {/*    </Link>*/}
      {/*    <div className="flex flex-row gap-10">*/}
      {/*      <Link*/}
      {/*        href="/getting-started"*/}
      {/*        className="flex items-center font-display text-2xl hover:underline"*/}
      {/*      >*/}
      {/*        Getting started*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        href="/docs"*/}
      {/*        className="flex items-center font-display text-2xl hover:underline"*/}
      {/*      >*/}
      {/*        Docs*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        href="/blog"*/}
      {/*        className="flex items-center font-display text-2xl hover:underline"*/}
      {/*      >*/}
      {/*        Blog*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        href="/contact"*/}
      {/*        className="flex items-center font-display text-2xl hover:underline"*/}
      {/*      >*/}
      {/*        Contact*/}
      {/*      </Link>*/}
      {/*      <Link*/}
      {/*        href="/api"*/}
      {/*        className="flex items-center font-display text-2xl hover:underline"*/}
      {/*      >*/}
      {/*        API*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      {session ? (*/}
      {/*        <UserDropdown session={session} />*/}
      {/*      ) : (*/}
      {/*        <button*/}
      {/*          className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"*/}
      {/*          onClick={() => signIn("keycloak")}*/}
      {/*        >*/}
      {/*          Sign In*/}
      {/*        </button>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}
