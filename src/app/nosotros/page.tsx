import { Image } from '@nextui-org/image';
import styles from './Nosotros.module.css';
import { ContactForm, HeaderSection } from '@/components/shared';

const AboutPage = () => {
    return (
        <div className={styles['nosotros']}>
            <HeaderSection title="Nosotros" />

            {/* <section
                className={`${styles['info-section']} ${styles['info-bg-gray']}`}
            >
                <div className="container mx-auto">
                    <div className={styles['nosotros-main-section']}>
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
            </section> */}

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
                                <h2 className="text-primary">
                                    Lic. Elliut Misael Cruz Trinidad
                                </h2>
                                <h3 className="text-primary">Pregrado</h3>
                                <ul>
                                    <li>Neurorehabilitacon</li>
                                </ul>
                                <h3 className="text-primary">
                                    Certificaciones
                                </h3>
                                <ul>
                                    <li>Diplomados Impants en México.</li>
                                    <li>
                                        Asociación Poblana de Implantología
                                        Bucal.
                                    </li>
                                </ul>
                                <h3 className="text-primary">Sociedades</h3>
                                <ul>
                                    <li>American Dental Association.</li>
                                    <li>
                                        Externado e internado en Cirugía Oral en
                                        University Of Texas.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="grid md:grid-cols-2 gap-10">
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
                        </div> */}
                    </div>
                </div>
            </section>
            <section id="descripcion" className={styles['descripcion-section']}>
                <div className="container mx-auto">
                    <div className={styles['descripcion-main-container']}>
                        <div className={styles['descripcion-left-section']}>
                            <h2>Cefire</h2>
                            <p>
                                Juntos, podemos mejorar su salud y desarrollar
                                una relación basada en la confianza.
                            </p>
                        </div>
                        <div className={styles['descripcion-right-section']}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tempore, doloribus deleniti
                                eos doloremque sed placeat eius odio mollitia
                                consequuntur dolore aliquid repellendus ipsum
                                non cum asperiores animi! Hic, quia aliquid.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Molestiae eum nisi illo
                                mollitia eos aut nulla eligendi accusamus
                                tenetur odit autem odio, dignissimos doloribus,
                                eius, numquam sapiente optio blanditiis?
                                Sapiente.
                            </p>
                            <div
                                className={styles['descripcion-main-container']}
                            >
                                <div
                                    className={
                                        styles[
                                            'descripcion-experiencia-container'
                                        ]
                                    }
                                >
                                    <h2>10+</h2>
                                    <p>Años de experiencia</p>
                                </div>
                                <div
                                    className={
                                        styles[
                                            'descripcion-experiencia-container'
                                        ]
                                    }
                                >
                                    <h2>1,000+</h2>
                                    <p>Pacientes Felices</p>
                                </div>
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
