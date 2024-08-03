"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { signOut, useSession, signIn } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-black">NewzSync</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            National
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" color="foreground">
            International
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Sports
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Olympic Games Paris 2024
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              name="User"
              size="sm"
            />
          </DropdownTrigger>
          {session ? (
            <>
              <DropdownMenu
                aria-label="Profile Actions"
                variant="flat"
                dir="left"
              >
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{session.user?.name}</p>
                </DropdownItem>
                <DropdownItem key="profile">Profile</DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  <div>{session?.user?.name}</div>
                  <Button onClick={() => signOut()}>Log Out</Button>
                </DropdownItem>
              </DropdownMenu>
            </>
          ) : (
            <>
              <DropdownMenu
                aria-label="Profile Actions"
                variant="flat"
                dir="left"
              >
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">Guest</p>
                </DropdownItem>
                <DropdownItem key="logout" color="success">
                  <Button onClick={() => signIn('google')} className="border-0">Log In</Button>
                </DropdownItem>
              </DropdownMenu>
            </>
          )}
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
