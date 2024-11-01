"use client"

import React from 'react';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    Link,
    Button,
    NavbarMenuItem,
} from '@nextui-org/react';

import { MainMenuStructure } from '@/_include/menuStructures';

export default function NavigationBar({ menuItems }: Readonly<{ menuItems: MainMenuStructure[] }>): React.ReactNode {

    return (
        <Navbar maxWidth="xl">
            <NavbarContent className="!grow-0 mr-[35px]">
                <NavbarBrand>
                    <Link href="/" color="foreground"><p className="font-bold text-lg">2030 Connect</p></Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden lg:block lg:flex gap-4">
                {menuItems.map((item, index) => (
                    <Link color="foreground" href={item[1]} key={`mainmenu-${index}`}>{item[0]}</Link>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <Link href="#">로그인</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        계정등록
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`mobile-menu-${index}`}>
                        <Link href={item[0]} color="foreground" className="w-full" size="lg">
                            {item[0]}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    )
}