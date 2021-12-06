import { useContext, useState } from 'react';
import { IonContent, IonPage, useIonRouter } from '@ionic/react';
import { ReactComponent as Spock } from '../../assets/spock.svg'

import './play.styles.scss';
import { GameContext, updateGameData } from '../../game_context';
import Button from '../../components/button/button.component';

interface ContainerProps {}

const Play: React.FC<ContainerProps> = () => {

    const router = useIonRouter();
    const [playerName, setPlayerName] = useState('Player 1');
    const [playerNumber, setPlayerNumber] = useState(1);

    let game = useContext(GameContext);

    const gamePieces = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    if(game.players === 1) {
        game.player_two = gamePieces[Math.floor(Math.random()*gamePieces.length)];
        updateGameData(game);
    }

    const play = (player: number, choice: string) => {
        
        if(player === 1) {
            game.player_one = choice;
        } 
        if (player === 2) {
            game.player_two = choice;
        }
        if(game.players === player) {
            updateGameData(game);
            router.push("/end", "forward", "push");
        } else {
            setPlayerName('Player 2');
            setPlayerNumber(2);
        }
    }

    return (
        <IonPage className='play-page'>
            <IonContent>
                <Spock className='logo' />
                <div className='play-game ion-text-center'>
                    <h1>{ playerName }</h1>
                    <h2>Make a selection</h2>
                    <Button name='Rock' click={() => play(playerNumber, 'rock')} />
                    <Button name='Paper' click={() => play(playerNumber, 'paper')} />
                    <Button name='Scissors' click={() => play(playerNumber, 'scissors')} />
                    <Button name='Lizard' click={() => play(playerNumber, 'lizard')} />
                    <Button name='Spock' click={() => play(playerNumber, 'spock')} />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Play;
