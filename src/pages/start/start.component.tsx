import { IonContent, IonPage, useIonRouter } from '@ionic/react';
import { ReactComponent as Spock } from '../../assets/spock.svg'

import './start.styles.scss';
import { updateGameData, game } from '../../game_context';
import Button from '../../components/button/button.component';

interface ContainerProps {}

const Start: React.FC<ContainerProps> = () => {

    const router = useIonRouter();

    const setPlayerCount = (qty: number) => {
        const gameData = {
            ...game,
            players: qty
        }
        updateGameData(gameData);
        router.push("/play", "forward", "push");
    }

    return (
        <IonPage className='start-page'>
            <IonContent>
                <Spock className='logo' />
                <div className='start-game ion-text-center'>
                    <h2>START NEW GAME</h2>
                    <Button click={() => setPlayerCount(1)} name='Single Player' />
                    <Button click={() => setPlayerCount(2)} name='Two Players' />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Start;
