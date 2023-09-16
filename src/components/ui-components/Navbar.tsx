
const routes = [
    {
        name: 'Inicio',
        path: '/'
    },
    {
        name: 'Nosotros',
        path: '/about'
    },
    {
        name: 'Contacto',
        path: '/aviso-de-privacidad'
    },
]

export const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center">
        <div className="logo"></div>
        <div className="routes">
            {
                routes.map((item) => (
                    <div key={item.path}>
                        <span>{item.name}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
