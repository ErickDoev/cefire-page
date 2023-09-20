import { ContactForm, Footer, HeaderSection } from '@/components/shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from '@/app/Home.module.css';

const ContactoPage = () => {
    return (
        <div className='contacto'>
            <HeaderSection title="Contacto" />
            <section id='contacto' className={styles['contacto-section']}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-26">
                        <div className='contacto-info-container'>
                            <FontAwesomeIcon 
                                icon={ faEnvelope }
                            />
                            <p>Email</p>
                            <p>erick.doev@gmail.com</p>
                        </div>
                        <div className='contacto-info-container'>
                        <FontAwesomeIcon 
                                icon={ faMapLocationDot }
                            />
                            <p>Email</p>
                            <p>erick.doev@gmail.com</p>
                        </div>
                        <div className='contacto-info-container'>
                        <FontAwesomeIcon 
                                icon={ faPhone }
                            />
                            <p>Email</p>
                            <p>erick.doev@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
            <Footer />
        </div>
    );
};
export default ContactoPage;
