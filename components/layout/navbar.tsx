"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import JLogo from "@/components/layout/JLogo";
import { signIn } from "next-auth/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import UserAvatar from "@/components/layout/UserAvatar";

export default function NavBar({ session }: { session: Session | null }) {
  return (
    <>
      <Navbar>
        <NavbarBrand as={Link} href="/">
          <JLogo />
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem>
            <Link color="foreground" href="getting-started">
              Getting started
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="docs" aria-current="page">
              Docs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="blog">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <UserAvatar session={session} />
        </NavbarContent>
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
