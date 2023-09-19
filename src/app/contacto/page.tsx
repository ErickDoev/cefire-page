import { ContactForm, Footer, HeaderSection } from '@/components/shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactoPage = () => {
    return (
        <div>
            <HeaderSection title="Contacto" />
            <section>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-26">
                        <div className="contacto-map-container">
                            <p>Tlaxcala</p>
                            <div>
                                <div className="contacto-icon">
                                    <FontAwesomeIcon
                                        color="black"
                                        icon={faPhone}
                                    />
                                </div>
                                <div className="contacto-dir">
                                    <p>Insurgente #3</p>
                                    <p>San Esteban Tizatlan</p>
                                    <p>Tlaxcala Tlax.</p>
                                </div>
                            </div>
                            <div>
                                <div className="contacto-icon">
                                    <FontAwesomeIcon
                                        color="black"
                                        icon={faPhone}
                                    />
                                </div>
                                <div className="contacto-dir">
                                    (246) 137 0462
                                </div>
                            </div>
                            <div>
                                <div className="contacto-icon">
                                    <FontAwesomeIcon
                                        color="black"
                                        icon={faPhone}
                                    />
                                </div>
                                <div className="contacto-dir">
                                    (246) 137 0462
                                </div>
                            </div>
                        </div>
                        <div className="contacto-info-container">map</div>
                    </div>
                </div>
            </section>
            <ContactForm />
            <Footer />
        </div>
    );
};
export default ContactoPage;
