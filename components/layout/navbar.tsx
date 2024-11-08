'use client';

import Link from 'next/link';
import { Link as NextUILink } from '@nextui-org/link';
import { Session } from 'next-auth';
import JLogo from '@/components/layout/JLogo';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import UserAvatar from '@/components/layout/UserAvatar';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function NavBar({ session }: { session: Session | null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navbarLinks = [
    {
      href: '/docs/getting-started',
      text: 'Getting started',
    },
    {
      href: '/docs',
      text: 'Docs',
      isExternal: true,
      showAnchorIcon: true,
    },
    {
      href: '/pricing',
      text: 'Pricing',
    },
    {
      href: '/blog',
      text: 'Blog',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL}/docs/jaqpot-api`,
      text: 'API',
      isExternal: true,
      showAnchorIcon: true,
    },
  ];

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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

        <NavbarContent className="hidden gap-6 sm:flex" justify="center">
          {navbarLinks.map((link, index) => (
            <NavbarItem key={index} isActive={link.href === pathname}>
              <NextUILink
                isExternal={link.isExternal}
                showAnchorIcon={link.showAnchorIcon}
                color="foreground"
                href={link.href}
                aria-current="page"
                className="text-base"
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
    </>
  );
}
