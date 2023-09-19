import { FC } from 'react';
import styles from './ServiceCard.module.css';
import { Image } from '@nextui-org/image';

interface Props {
    title: string;
    text: string;
    image: string;
}

export const ServiceCard: FC<Props> = ({ title, text, image }) => {
    return (
        <div className={styles['card-container']}>
            <div className={styles['card-img-container']}>
                <Image width={300} height={300} src={image} />
            </div>
            <div className={styles['card-text-container']}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};
