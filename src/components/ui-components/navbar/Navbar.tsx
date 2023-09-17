import styles from './Navbar.module.css';
import NavbarItem from "./NavbarItem";

const routes = [
    {
        name: 'Inicio',
        path: '/'
    },
    {
        name: 'Nosotros',
        path: '/nosotros'
    },
    {
        name: 'Contacto',
        path: '/aviso-de-privacidad'
    },
    {
        name: 'Servicios',
        path: '/servicios'
    }
]

export const Navbar = () => {


  return (
    <div className={`${styles.navbar} w-full flex flex-row items-center justify-center gap-20 absolute`}>
        <div className="logo">Logo</div>
        <div className="routes flex flex-row items-center justify-center">
            {
                routes.map((item) => (
                    <NavbarItem 
                        key={item.path} 
                        name={item.name} 
                        path={item.path}/>
                ))
            }
        </div>
    </div>
  )
}
