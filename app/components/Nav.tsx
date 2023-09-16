'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { useState } from 'react';
import { Input } from '@nextui-org/react';

import { Home, PanelTop, PenSquare, Search } from 'lucide-react';
import Link from 'next/link';
import { TextField } from '@radix-ui/themes';

const Nav = () => {
  const [search, setSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    <Home
      size="35"
      display={'30'}
    />,
    <PanelTop
      size="35"
      display={'30'}
      textAnchor="doo"
    />,
    <PenSquare
      size="35"
      display={'30'}
    />,
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent
        className="sm:hidden"
        justify="start"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent
        className="sm:hidden pr-3"
        justify="center"
      >
        <NavbarBrand>
          {/*}  <AcmeLogo /> {*/}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      >
        <NavbarBrand>
          {/*} <AcmeLogo /> {*/}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="#"
            aria-current="page"
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
          >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <TextField.Root>
            <TextField.Slot>
              <Search
                height="16"
                width="16"
              />
            </TextField.Slot>
            <TextField.Input size={"3"} placeholder="Search the docs…" radius='large' />
          </TextField.Root>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
