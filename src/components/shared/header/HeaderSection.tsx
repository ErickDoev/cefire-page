import { Image } from '@nextui-org/image';
import styles from './Header.module.css';
import { FC } from 'react';

interface Props {
    title: string;
    image?: string;
}

export const HeaderSection: FC<Props> = ({ title, image }) => {
    return (
        <section id="nosotros" className={styles['header-section']}>
            <div className={styles['header-bg-blur']}>
                <div className="container mx-auto animate__animated animate__slideInDown">
                    <div className={styles['header-text-container']}>
                        <h3>{title}</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Dolorum nostrum quos esse illo dignissimos hic
                            magnam amet culpa debitis id!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
