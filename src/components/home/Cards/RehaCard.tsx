import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { FC } from 'react';
import styles from './Cards.module.css';

interface Props {
    name: string;
    icon: any;
    text: string;
}

export const RehaCard: FC<Props> = ({ name, icon, text }) => {
    return (
        <Card className={styles['card']}>
            <CardHeader className="justify-center">
                <p className={styles['card-header']}>{name}</p>
            </CardHeader>
            <CardBody className="items-center gap-4">
                <div className={styles['icon']}>
                    <FontAwesomeIcon size="2x" color="white" icon={icon} />
                </div>
                <p className="text-center">{text}</p>
            </CardBody>
            <CardFooter className="flex justify-center">
                <Button radius="full" color="secondary" size="lg">
                    Más información
                </Button>
            </CardFooter>
        </Card>
    );
};
