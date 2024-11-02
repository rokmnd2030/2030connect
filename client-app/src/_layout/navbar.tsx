"use client"

import React from 'react';

import { useRouter } from 'next/navigation';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@nextui-org/react';

import { MainMenu } from './menu';

export default function NavigationBar(): React.ReactNode {

    const router = useRouter();

    return (
        <Navbar maxWidth="xl">
            <NavbarContent className="!grow-0 mr-[35px]">
                <NavbarBrand>
                    <Link color="foreground" href="/"><p className="font-bold text-lg">2030 Connect</p></Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden lg:block lg:flex gap-4">
                <MainMenu />
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <Link href="#" onClick={() => router.push('/user/signin')}>로그인</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat" onClick={() => router.push('/user/signup')}>
                        계정등록
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar >
    )
}