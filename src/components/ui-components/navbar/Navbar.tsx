'use client';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    Link,
    NavbarMenu,
    NavbarMenuItem
} from '@nextui-org/react';
import { useState } from 'react';
import NavbarItemComponent from './NavbarItem';

const menuItems = [
    {
        name: 'INICIO',
        path: '/'
    },
    {
        name: 'NOSOTROS',
        path: '/nosotros'
    },
    {
        name: 'SERVICIOS',
        path: '/servicios'
    },
    {
        name: 'CONTACTO',
        path: '/contacto'
    },
    {
        name: 'AVISO DE PRIVACIDAD',
        path: '/aviso-de-privacidad'
    }
];

export const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <Navbar
            shouldHideOnScroll
            isBlurred={true}
            isBordered={true}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden pr-3" justify="start">
                <NavbarBrand>CEFIRE</NavbarBrand>
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarBrand>
                    <p className="font-bold text-inherit">CEFIRE</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                {menuItems.map((item, i) => (
                    <NavbarItemComponent
                        key={i}
                        path={item.path}
                        name={item.name}
                    />
                ))}
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link
                            className="w-full"
                            color="primary"
                            href={item.path}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};
