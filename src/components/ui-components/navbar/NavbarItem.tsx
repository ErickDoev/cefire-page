'use client'

import { usePathname } from 'next/navigation';
import { FC } from 'react';
import {
  NavbarItem
} from "@nextui-org/react";
import styles from './Navbar.module.css';
import Link from 'next/link';

interface Props {
    path: string;
    name: string;
}

const NavbarItemComponent: FC<Props> = ({path, name}) => {
  
  const pathname = usePathname()
  
  return (
    <NavbarItem>
      <Link href={ path } className={`${path===pathname ? styles.active : styles.deactive} `}>
        { name }
      </Link>
    </NavbarItem>
  )
}

export default NavbarItemComponent;