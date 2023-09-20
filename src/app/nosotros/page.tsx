import { Image } from '@nextui-org/image';
import styles from './Nosotros.module.css';
import { ContactForm, HeaderSection } from '@/components/shared';

const AboutPage = () => {
    return (
        <div className={styles['nosotros']}>
            <HeaderSection title="Nosotros" />

            <section
                className={`${styles['info-section']} ${styles['info-bg-gray']}`}
            >
                <div className="container mx-auto">
                    <div className="flex flex-row items-start justify-center gap-10">
                        <div className={styles['info-head-container']}>
                            <h3>Misión</h3>
                            <p>
                                Ser el modelo de referencia, en América Latina
                                reconocido por su eficiencia operativa y
                                extraordinario acompañamiento y resultado con
                                los pacientes.
                            </p>
                        </div>
                        <div className={styles['info-head-container']}>
                            <h3>Visión</h3>
                            <p>
                                Brindar servicios de Rehabilitación con médicos
                                y fisioterapeutas especializados e
                                infraestructura tecnológica de clase mundial;
                                logrando la satisfacción de los pacientes con el
                                propósito de ayudarlos a mejorar su calidad de
                                vida en el menor tiempo posible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="info" className={styles['info-section']}>
                <div className="container mx-auto">
                    <div className="flex flex-col gap-10">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className={styles['info-img-container']}>
                                <Image
                                    width={550}
                                    height={525}
                                    alt="logo"
                                    src="/images/pngegg.png"
                                />
                            </div>
                            <div className={styles['info-text-container']}>
                                <h2>Lic. Elliut Misael Cruz Trinidad</h2>
                                <h3>Pregrado</h3>
                                <ul>
                                    <li>Neurorehabilitacon</li>
                                </ul>
                                <h3>Certificaciones</h3>
                                <ul>
                                    <li>Diplomados Impants en México.</li>
                                    <li>
                                        Asociación Poblana de Implantología
                                        Bucal.
                                    </li>
                                </ul>
                                <h3>Sociedades</h3>
                                <ul>
                                    <li>American Dental Association.</li>
                                    <li>
                                        Externado e internado en Cirugía Oral en
                                        University Of Texas.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className={styles['info-img-container']}>
                                <Image
                                    width={550}
                                    height={525}
                                    alt="logo"
                                    src="/images/pngegg.png"
                                />
                            </div>
                            <div className={styles['info-text-container']}>
                                <h2>Lic. Paloma Padilla Toledo</h2>
                                <h3>Pregrado</h3>
                                <ul>
                                    <li>Neurorehabilitacon</li>
                                </ul>
                                <h3>Certificaciones</h3>
                                <ul>
                                    <li>Diplomados Impants en México.</li>
                                    <li>
                                        Asociación Poblana de Implantología
                                        Bucal.
                                    </li>
                                </ul>
                                <h3>Sociedades</h3>
                                <ul>
                                    <li>American Dental Association.</li>
                                    <li>
                                        Externado e internado en Cirugía Oral en
                                        University Of Texas.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className={styles['info-img-container']}>
                                <Image
                                    width={550}
                                    height={525}
                                    alt="logo"
                                    src="/images/pngegg.png"
                                />
                            </div>
                            <div className={styles['info-text-container']}>
                                <h2>Lic. Elliut Misael Cruz Trinidad</h2>
                                <h3>Pregrado</h3>
                                <ul>
                                    <li>Neurorehabilitacon</li>
                                </ul>
                                <h3>Certificaciones</h3>
                                <ul>
                                    <li>Diplomados Impants en México.</li>
                                    <li>
                                        Asociación Poblana de Implantología
                                        Bucal.
                                    </li>
                                </ul>
                                <h3>Sociedades</h3>
                                <ul>
                                    <li>American Dental Association.</li>
                                    <li>
                                        Externado e internado en Cirugía Oral en
                                        University Of Texas.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />
        </div>
    );
};

export default AboutPage;
