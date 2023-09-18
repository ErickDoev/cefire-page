'use client';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    Link,
    NavbarMenu,
    NavbarMenuItem
} from '@nextui-org/react';
import { useState } from 'react';
import NavbarItemComponent from './NavbarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
    {
        name: 'Inicio',
        path: '/'
    },
    {
        name: 'Nosotros',
        path: '/nosotros'
    },
    {
        name: 'Servicios',
        path: '/servicios'
    },
    {
        name: 'Contacto',
        path: '/contacto'
    },
    {
        name: 'Aviso de privacidad',
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
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="start">
                <NavbarBrand>
                    <p className="font-bold text-inherit">CEFIRE</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarBrand>
                    <p className="font-bold text-inherit">CEFIRE</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, i) => (
                    <NavbarItemComponent
                        key={i}
                        path={item.path}
                        name={item.name}
                    />
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <FontAwesomeIcon
                        color="black"
                        icon={faPhone}
                        className="mr-3"
                    />
                    <Link href="/">(246) 176 10 82</Link>
                </NavbarItem>
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
