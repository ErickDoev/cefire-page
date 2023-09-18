import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import styles from '@/app/Home.module.css';

import {
    faBone,
    faRunning,
    faBrain,
    faLungs,
    faPersonCane,
    faChildren,
    faRadiationAlt,
    faHeart
} from '@fortawesome/free-solid-svg-icons';
import { RehabilitationCard } from '@/components/home';
import { TextCarousel } from '@/components/home/carousel/TextCarousel';

const rehabilitationTypes = [
    {
        name: 'Ortopédica',
        text: '¿Tuviste alguna cirugía o presentas alguna molestia musculoesquelética o alteraciones posturales?Te ayudamos a salir de tu lesión.',
        icon: faBone
    },
    {
        name: 'Deportiva',
        text: 'Te ayudamos a recuperarte de una lesión por hacer deporte o a potenciar tu rendimiento para llegar al siguiente nivel.',
        icon: faRunning
    },
    {
        name: 'Neurológica',
        text: 'Te ayudamos a mejorar la calidad de vida de personas con eventos cerebro vascular, lesiones en medulares, parkinson, parálisis cerebral, parálisis facial, entre otras.',
        icon: faBrain
    },
    {
        name: 'Pulmonar',
        text: 'Te ayudamos a recuperarte de secuelas de Covid, EPOC, fibrosis pulmonar, cáncer pulmonar, entre otras.',
        icon: faLungs
    },
    {
        name: 'Geriátrica',
        text: 'Ayudamos a los pacientes a recuperar movilidad, marcha, mejorar el equilibrio, disminuir dolor. Además contamos con protocolos para prevenir caídas.',
        icon: faPersonCane
    },
    {
        name: 'Pediátrica',
        text: 'Ayudamos al desarrollo psicomotor de niños con patologías congénitas o adquiridas que limitan actividades funcionales y orientamos a la familia sobre la integración del paciente para una mejor adaptación al entorno.',
        icon: faChildren
    },
    {
        name: 'Oncológica',
        text: 'Ayudamos al paciente a mantener y recuperar el bienestar físico-funcional de secuelas, cicatrices, linfedema, fibrosis y contracturas oncológico.',
        icon: faRadiationAlt
    },
    {
        name: 'Cardiaca',
        text: 'Ayudamos a los pacientes que han sufrido un evento cardiovascular, infarto, problemas cardiáco crónico, cirugías bypass.',
        icon: faHeart
    }
];

const HomePage = () => {
    return (
        <div className="dashboard">
            <section id="principal" className={styles['home-section']}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div className={styles['home-text-container']}>
                            <h3>
                                Te acompañamos en el proceso de rehabilitación
                                para reincorporarte a tu vida diaria
                            </h3>
                            <div className="button-group">
                                <Button radius="full" color="primary">
                                    Quiénes somos
                                </Button>
                                <Button radius="full" color="secondary">
                                    Tipo de Rehabilitación
                                </Button>
                            </div>
                        </div>
                        <div className={styles['home-img-container']}>
                            <Image
                                alt="logo"
                                src="/images/pngegg.png"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="diferenciadores"
                className={styles['diferenciadores-section']}
            >
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div className={styles['diferenciadores-img']}>
                            <Image
                                width={400}
                                height={400}
                                alt="logo"
                                src="/images/pngegg.png"
                            />
                        </div>
                        <div className={styles['diferenciadores-text']}>
                            <h3>Nuestros diferenciadores</h3>
                            <p className="ft-36">
                                Somos el mejor centro de Rehabilitación Física y
                                Medicina del Deporte en México.
                            </p>
                            <div className={`${styles['ft-14']} flex flex-col`}>
                                <p>
                                    Nuestros protocolos están basados en
                                    evidencia científica respaldados por
                                    fisioterapeutas expertos reconocidos a nivel
                                    mundial.
                                </p>
                                <p>
                                    Trabajamos de manera conjunta con tu médico
                                    especialista en beneficio de tu
                                    recuperación.
                                </p>
                                <p>
                                    Todos nuestros fisioterapeutas están en
                                    capacitación y actualización constante con
                                    expertos a nivel mundial.
                                </p>
                            </div>
                            <Button radius="full" color="primary">
                                Quiénes somos
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="rehabilitaciones"
                className={styles['rehabilitaciones-section']}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col">
                        <h3
                            className={`${styles['rehabilitation-title']} text-center`}
                        >
                            Tenemos lo que necesitas
                        </h3>
                        <div className="grid grid-cols-4 gap-4">
                            {rehabilitationTypes.map(({ name, text, icon }) => (
                                <RehabilitationCard
                                    name={name}
                                    text={text}
                                    icon={icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonios" className={styles['testimonios-section']}>
                <div className={styles['testimonios-header-container']}>
                    <p>Agenda una cita en nuestra Clínica Cefire</p>
                </div>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-10 mx-36 my-20">
                        <div className={styles['testimonios-text-container']}>
                            <h3 className={styles['home-subtitle']}>
                                Testimonios
                            </h3>
                            <TextCarousel />
                        </div>
                        <div className="testimonos-img-container">
                            <Image
                                width={400}
                                height={400}
                                alt="logo"
                                src="/images/pngegg.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="contacto" className={styles['contacto-section']}>
                <div className="container mx-auto">
                    <div className="flex flex-col">
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

            <footer className={styles['footer']}>
                <div className="section-padding footer-containet text-white">
                    <p>
                        © 2023 Clínica Cefire | Todos los derechos reservados |
                        Erick Cruz Diseño de paginas web
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
