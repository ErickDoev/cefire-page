import { Image } from '@nextui-org/image';
import styles from './Nosotros.module.css';
import { ContactForm, Footer, HeaderSection } from '@/components/shared';

const AboutPage = () => {
    return (
        <div className={styles['nosotros']}>
            {/* <section id="nosotros" className={styles['nosotros-section']}>
                <div className={styles['nosotros-bg-blur']}>
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-2 gap-20">
                            <div className="nosotros-img-container">
                                <Image
                                    width={400}
                                    height={400}
                                    alt="logo"
                                    src="/images/pngegg.png"
                                />
                            </div>
                            <div className={styles['nosotros-text-container']}>
                                <h3>Sobre nosotros</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <HeaderSection title="Nosotros" />

            <section
                className={`${styles['info-section']} ${styles['info-bg-gray']}`}
            >
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className={styles['info-text-container']}>
                            <h3>¿Hacia a dónde vamos?</h3>
                            <p>
                                Brindar servicios de Rehabilitación con médicos
                                y fisioterapeutas especializados e
                                infraestructura tecnológica de clase mundial;
                                logrando la satisfacción de los pacientes con el
                                propósito de ayudarlos a mejorar su calidad de
                                vida en el menor tiempo posible.
                            </p>
                        </div>
                        <div className={styles['info-img-container']}>
                            <Image
                                width={500}
                                height={500}
                                alt="logo"
                                src="/images/pngegg.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="info" className={styles['info-section']}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className={styles['info-img-container']}>
                            <Image
                                width={400}
                                height={400}
                                alt="logo"
                                src="/images/pngegg.png"
                            />
                        </div>
                        <div className={styles['info-text-container']}>
                            <h3>¿Qué hacemos?</h3>
                            <p>
                                Ser el modelo de referencia, en América Latina
                                reconocido por su eficiencia operativa y
                                extraordinario acompañamiento y resultado con
                                los pacientes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />

            <Footer />
        </div>
    );
};

export default AboutPage;
