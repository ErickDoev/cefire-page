import { MainLayout } from "@/layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";

import {
  faBone,
  faRunning,
  faBrain,
  faLungs,
  faPersonCane,
  faChildren,
  faRadiationAlt,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const rehabilitationTypes = [
  {
    name: 'Ortopédica',
    text:'¿Tuviste alguna cirugía o presentas alguna molestia musculoesquelética o alteraciones posturales?Te ayudamos a salir de tu lesión.',
    icon: faBone
  },
  {
    name: 'Deportiva',
    text:'Te ayudamos a recuperarte de una lesión por hacer deporte o a potenciar tu rendimiento para llegar al siguiente nivel.',
    icon: faRunning
  },
  {
    name: 'Neurológica',
    text:'Te ayudamos a mejorar la calidad de vida de personas con eventos cerebro vascular, lesiones en medulares, parkinson, parálisis cerebral, parálisis facial, entre otras.',
    icon: faBrain
  },
  {
    name: 'Pulmonar',
    text:'Te ayudamos a recuperarte de secuelas de Covid, EPOC, fibrosis pulmonar, cáncer pulmonar, entre otras.',
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
      <MainLayout>
        <div>
          <div className="section home py-4">
            <div className="home-bg flex flex-row items-center justify-center">
              <div className="flex flex-row items-center main-section gap-20">
                <div className="home-main-container ">
                  <h1 className="home-main-text">Te acompañamos en el proceso de rehabilitación para reincorporarte a tu vida diaria</h1>
                  <div className="button-group">
                      <ButtonGroup>
                        <Button radius="full" color="default">Quiénes somos</Button>
                        <Button radius="full" color="secondary">Tipo de Rehabilitación</Button>
                      </ButtonGroup>
                  </div>
                </div>
                <div className="home-img flex-1">
                  <Image 
                    alt="logo" 
                    src="/images/pngegg.png"
                    width={400}
                    height={400}/>
                </div>
              </div>
            </div>
          </div>

          <div className="section dif py-4">
            <div className="container">
              <div className="dif-img">
                <Image 
                  alt="logo" 
                  src="/images/pngegg.png"/>
              </div>
              <div className="dif-text text-justify">
                <h2>Nuestros diferenciadores</h2>
                <p className="ft-36">Somos el mejor centro de Rehabilitación Física y Medicina del Deporte en México.</p>
                <div className="ft-14 flex flex-col">
                  <p>Nuestros protocolos están basados en evidencia científica respaldados por fisioterapeutas expertos reconocidos a nivel mundial.</p>
                  <p>Trabajamos de manera conjunta con tu médico especialista en beneficio de tu recuperación.</p>
                  <p>Todos nuestros fisioterapeutas están en capacitación y actualización constante con expertos a nivel mundial.</p>
                </div>
                <Button radius="full" color="secondary">Quiénes somos</Button>
              </div>
            </div>
          </div>

          <div className="section rehabilitation h-auto py-4">
            <div className="flex flex-col">
              <p className="rehabilitation-title text-center my-20">Tenemos lo que necesitas</p>
              <div className="grid grid-cols-4 gap-4">
                {
                  rehabilitationTypes.map(({name, text, icon})=> (
                    <Card className="card">
                      <CardHeader className="justify-center">
                        <p className="card-header">{name}</p>
                      </CardHeader>
                      <CardBody className="items-center gap-4">
                        <div className="icon">
                          <FontAwesomeIcon
                            size="2x"
                            color="white"
                            icon={icon}
                          />
                        </div>
                        <p className="text-center">{text}</p>
                      </CardBody>
                      <CardFooter className="flex justify-center">
                        <Button 
                          radius="full" 
                          color="default"
                          size="lg"
                          >Más información</Button>
                      </CardFooter>
                    </Card>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="section testimonios">
              <div className="flex flex-col">
                <div>
                  <p>Agenda una cita en nuestra Clínica CEFIRE</p>
                </div>
                <div className="flex flex-row gap-20">
                  d
                </div>
              </div>
          </div>

        </div>
      </MainLayout>
  )
}

export default HomePage