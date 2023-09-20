import { ServiceCard } from '@/components/servicios';
import { ContactForm, HeaderSection } from '@/components/shared';
import styles from './Servicios.module.css';

const services = [
    {
        img: '/images/pngegg.png',
        title: 'Terapia Pulmonar',
        text: 'Contamos con una gama de opciones para rehabilitación pulmonar por enfermedad respiratoria o para mejorar el rendimiento deportivo.'
    },
    {
        img: '/images/pngegg.png',
        title: 'Ultrasonido',
        text: 'El ultrasonido terapéutico se utiliza para disminuir edema, inflamación, espasmo muscular, hematoma, entre otras.'
    },
    {
        img: '/images/pngegg.png',
        title: 'Terapia Laser',
        text: 'El láser terapéutico de baja potencia es un importante regenerador celular, ya que ayuda a mejorar el proceso de cicatrización en los tejidos. Otro de sus efectos importantes es la acción antiinflamatoria y analgésica, así como para recuperar la caída del cabello y pérdida del olfato. '
    },
    {
        img: '/images/pngegg.png',
        title: 'Luz Infraroja',
        text: 'Constituye una forma de calentamiento, con una profundidad entre 2 y 10 mm bajo la piel, uno de sus beneficios es favorecer la relajación muscular, por lo que prepara el músculo para el ejercicio, con un efecto atiespasmódico.'
    },
    {
        img: '/images/pngegg.png',
        title: 'Hidroterapia localizada',
        text: 'Es un método de tratamiento utilizado por la fisioterapia que brinda innumerables beneficios a distintas patologías. Algunos de sus beneficios a favorecer son la circulación sanguínea, produce un efecto de relajación muscular analgésico, disminuye contracturas musculares, etc. Se utiliza una Tina especial para atender diferentes regiones del cuerpo.'
    },
    {
        img: '/images/pngegg.png',
        title: 'Masoterapia',
        text: 'Abarca distintos tipos de masaje, como el terapéutico que nos ayuda a disminuir inflamación, edema y dolor. El masaje relajante nos ayuda a armonizar el sistema nervioso induciéndole a una relajación muscular y ayudando a la persona a recuperar el bienestar. El masaje deportivo prepara a los tejidos para el esfuerzo físico, manteniéndolos en un estado óptimo, previniendo lesiones tanto en entrenamiento como en competición.'
    },
    {
        img: '/images/pngegg.png',
        title: 'Masoterapia',
        text: 'Abarca distintos tipos de masaje, como el terapéutico que nos ayuda a disminuir inflamación, edema y dolor. El masaje relajante nos ayuda a armonizar el sistema nervioso induciéndole a una relajación muscular y ayudando a la persona a recuperar el bienestar. El masaje deportivo prepara a los tejidos para el esfuerzo físico, manteniéndolos en un estado óptimo, previniendo lesiones tanto en entrenamiento como en competición.'
    },
    {
        img: '/images/pngegg.png',
        title: 'Masoterapia',
        text: 'Abarca distintos tipos de masaje, como el terapéutico que nos ayuda a disminuir inflamación, edema y dolor. El masaje relajante nos ayuda a armonizar el sistema nervioso induciéndole a una relajación muscular y ayudando a la persona a recuperar el bienestar. El masaje deportivo prepara a los tejidos para el esfuerzo físico, manteniéndolos en un estado óptimo, previniendo lesiones tanto en entrenamiento como en competición.'
    }
];

const ServiciosPage = () => {
    return (
        <div>
            <HeaderSection title="Servicios" />
            <section id="servicios" className={styles['servicios-section']}>
                <div className="container mx-auto">
                    <div className="flex flex-col gap-16">
                        <div className={styles['servicios-text-container']}>
                            <h3>Servicios de Rehabilitación</h3>
                        </div>
                        {services.map((service, i) => (
                            <ServiceCard
                                key={`${service.title} -${i}`}
                                title={service.title}
                                text={service.text}
                                image={service.img}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <ContactForm />
        </div>
    );
};

export default ServiciosPage;
