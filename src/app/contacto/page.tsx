import { ContactForm, HeaderSection } from '@/components/shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope,
    faClock
} from '@fortawesome/free-solid-svg-icons';
import styles from './Contacto.module.css';

const ContactoPage = () => {
    return (
        <div className="contacto">
            <HeaderSection title="Contacto" />
            <section id="contacto-info" className={styles['contacto-section']}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-26">
                        <div className={styles['contacto-info-container']}>
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            <p>Email</p>
                            <p>erick.doev@gmail.com</p>
                        </div>
                        <div className={styles['contacto-info-container']}>
                            <FontAwesomeIcon icon={faClock} size="2x" />
                            <p>Horario de clinica</p>
                            <p>Lunes a Viernes de 10:00 a 18:00</p>
                            <p>Sábados previa cita</p>
                        </div>
                        <div className={styles['contacto-info-container']}>
                            <FontAwesomeIcon icon={faPhone} size="2x" />
                            <p>Teléfono</p>
                            <p>(246) 176 1082</p>
                            <p>(246) 176 1082</p>
                            <p>(246) 176 1082</p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
        </div>
    );
};
export default ContactoPage;
