import { Divider } from '@nextui-org/divider';
import styles from './Footer.module.css';

export const FooterComponent = () => {
    return (
        <section
            id="footer"
            className={`${styles['footer-section']} bg-primary text-white`}
        >
            <footer className="container mx-auto mb-10">
                <div className="flex flex-row justify-between justify-items-start">
                    <div className={styles['footer-info-container']}>
                        <h3>CONTACTO</h3>
                        <p className={styles['footer-bg-gray']}>Teléfonos: </p>
                        <p>(246) 176 1082</p>
                        <p>(246) 176 1082</p>
                        <p className="mb-3">(246) 176 1082</p>
                        <p className={styles['footer-bg-gray']}>Whatsapp: </p>
                        <p className="mb-3">(246) 176 1082</p>
                        <p className={styles['footer-bg-gray']}>Correo: </p>
                        <p>erick.doev@gmail.com</p>
                    </div>
                    <div
                        className={`${styles['footer-info-container']} ${styles['footer-link']}`}
                    >
                        <h3>SERVICIOS</h3>
                        <p>Servicio 1</p>
                        <p>Servicio 2</p>
                        <p>Servicio 3</p>
                        <p>Servicio 4</p>
                    </div>
                    <div className={styles['footer-info-container']}>
                        <h3>HORARIO DE ATENCION</h3>
                        <p className={styles['footer-bg-gray']}>
                            Lunes - Viernes
                        </p>
                        <p>3:30 am - 7:30 pm</p>
                        <p className={styles['footer-bg-gray']}>Sabados</p>
                        <p>Previa cita</p>
                    </div>
                    <div
                        className={`${styles['footer-info-container']} ${styles['footer-link']}`}
                    >
                        <h3>MAPA DEL SITIO</h3>
                        <p>Inicio</p>
                        <p>Nosotros</p>
                        <p>Servicios</p>
                        <p>Contacto</p>
                        <p>Aviso de privacidad</p>
                    </div>
                </div>
            </footer>
            <Divider orientation="horizontal" />
            <div className={styles['footer-copy-container']}>
                <span>
                    © Copyright 2018. Clínica Cefire Tlaxcala por Erick.Doev
                </span>
            </div>
        </section>
    );
};
