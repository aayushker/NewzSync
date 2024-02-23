import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { Button } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";

export default function NavBar() {
  return (
    <Navbar isBordered>
      <NavbarContent className="flex justify-between mw-full">
        <NavbarContent>
          <NavbarBrand className="mr-4">
            <p className="hidden sm:block font-bold text-inherit">NewzSync</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Sports
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              India
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              International
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[20rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <Button
            isIconOnly
            color="danger"
            aria-label="Like"
            href="https://github.com/aayushker/NewzSync"
            target="_blank"
          >
            <HeartIcon />
          </Button>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
