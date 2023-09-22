import { Button } from '@nextui-org/button';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
    return (
        <section id="contacto" className={styles['contacto-section']}>
            <div className="container mx-auto">
                <div className={styles['contacto-main-container']}>
                    <div className={`${styles['contacto-text-container']}`}>
                        <h3>CONTÁCTANOS</h3>
                        <p>¿Tienes alguna duda?</p>
                        <p>¡Escribenos!</p>
                    </div>
                    <div className={`${styles['contacto-form-container']}`}>
                        <form
                            className={`${styles['contacto-form']} flex flex-col items-center justify-between gap-6`}
                        >
                            <input
                                className={`${styles['contacto-input']}`}
                                type="text"
                                placeholder="Nombre"
                            />
                            <input
                                className={`${styles['contacto-input']}`}
                                type="email"
                                placeholder="Email"
                            />
                            <input
                                className={`${styles['contacto-input']}`}
                                type="text"
                                placeholder="Número de telefono"
                            />
                            <textarea
                                className={`${styles['contacto-textarea']}`}
                                name=""
                                placeholder="Tu mensaje"
                                rows={4}
                            ></textarea>
                            <Button
                                className="w-full"
                                radius="full"
                                color="primary"
                            >
                                Enviar
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
