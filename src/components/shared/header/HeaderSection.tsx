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
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div className="header-img-container">
                            <Image
                                width={400}
                                height={400}
                                alt="logo"
                                src="/images/pngegg.png"
                            />
                        </div>
                        <div className={styles['header-text-container']}>
                            <h3>{title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
