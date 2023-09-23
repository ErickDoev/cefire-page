'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import styles from './Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export const TextCarousel = () => {
    return (
        <>
            <Swiper
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className={styles['carousel-container']}
            >
                <SwiperSlide>
                    <FontAwesomeIcon icon={faQuoteLeft} pull="left" size="3x" />
                    <p className="italic">
                        Desde la primera terapia procuraron que tuviera
                        movilidad total asistida, lo que me dio mucha confianza,
                        y logró que tuviera una excelente recuperación. Al poco
                        tiempo de mi rehabilitación pude empezar a correr y al
                        cabo de solo un mes pude empezar a nadar. Estoy muy
                        agradecido por el servicio y el profesionalismo de
                        Clínica Recovery.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <FontAwesomeIcon icon={faQuoteLeft} pull="left" size="3x" />
                    <p className="italic">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nostrum, recusandae! Sit cupiditate nobis quisquam
                        esse tenetur incidunt est blanditiis ullam, ipsum
                        temporibus quibusdam, facilis cumque? Nostrum delectus
                        deserunt laboriosam incidunt.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <FontAwesomeIcon icon={faQuoteLeft} pull="left" size="3x" />
                    <p className="italic">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nostrum, recusandae! Sit cupiditate nobis quisquam
                        esse tenetur incidunt est blanditiis ullam, ipsum
                        temporibus quibusdam, facilis cumque? Nostrum delectus
                        deserunt laboriosam incidunt.
                    </p>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
