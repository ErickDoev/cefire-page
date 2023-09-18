import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className="section-padding footer-containet text-white">
                <p>
                    © 2023 Clínica Cefire | Todos los derechos reservados |
                    Erick Cruz Diseño de paginas web
                </p>
            </div>
        </footer>
    );
};
