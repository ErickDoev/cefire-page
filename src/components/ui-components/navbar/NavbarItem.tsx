'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import styles from './Navbar.module.css';

interface Props {
    path: string;
    name: string;
}

const NavbarItem: FC<Props> = ({path, name}) => {
  
  const pathname = usePathname()
  console.log(pathname);

  return (
    <div className={`${path===pathname ? styles.active : ''} ${styles['navbar-item']}`}>
        <Link href={path}>
            {name}
        </Link>
    </div>
  )
}

export default NavbarItem