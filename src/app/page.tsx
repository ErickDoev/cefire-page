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
import { RehaCard } from '@/components/home';
import { TextCarousel } from '@/components/home/carousel/TextCarousel';
import { ContactForm } from '@/components/shared';

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
                <div className={styles['principal-bg-blur']}>
                    <div className="container max-auto">
                        <div
                            className={`${styles['home-text-container']} animate__animated animate__slideInDown`}
                        >
                            <h1>Cefire</h1>
                            <h3>
                                Te acompañamos en el proceso de rehabilitación
                                para reincorporarte a tu vida diaria.
                            </h3>
                            <div className={styles['home-buttons-container']}>
                                <Button radius="full" color="primary">
                                    ¿Quiénes somos?
                                </Button>
                                <Button radius="full" color="secondary">
                                    Tipo de Rehabilitación
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="diferenciadores"
                className={styles['diferenciadores-section']}
            >
                <div className="container mx-auto">
                    <div className={styles['diferenciadores-main-container']}>
                        <div
                            className={styles['diferenciadores-img-container']}
                        >
                            <Image
                                width={400}
                                height={400}
                                alt="logo"
                                src="/images/pngegg.png"
                            />
                        </div>
                        <div
                            className={styles['diferenciadores-text-container']}
                        >
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
                                ¿Quiénes somos?
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
                    <div className="rehabilitaciones-main-container">
                        <h3
                            className={`${styles['rehabilitation-title']} text-center`}
                        >
                            Tipos de rehabilitación
                        </h3>
                        <div
                            className={
                                styles['rehabilitaciones-list-container']
                            }
                        >
                            {rehabilitationTypes.map(
                                ({ name, text, icon }, index) => (
                                    <RehaCard
                                        key={`${name}-${index}`}
                                        name={name}
                                        text={text}
                                        icon={icon}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonios" className={styles['testimonios-section']}>
                <div className={styles['testimonios-header-container']}>
                    <p>Agenda una cita en nuestra Clínica Cefire</p>
                </div>
                <div className="container mx-auto">
                    <div className={styles['testimonios-main-container']}>
                        <div className={styles['testimonios-text-container']}>
                            <h3 className={styles['home-subtitle']}>
                                Testimonios
                            </h3>
                            <div
                                className={
                                    styles['testimonios-carousel-container']
                                }
                            >
                                <TextCarousel />
                            </div>
                        </div>
                        <div className={styles['testimonos-img-container']}>
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

            <ContactForm />
        </div>
    );
};

export default HomePage;
