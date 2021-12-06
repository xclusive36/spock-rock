import { useIonRouter } from '@ionic/react';
import { useContext } from 'react';
import Button from '../../components/button/button.component';
import { GameContext, resetGameData } from '../../game_context';

interface ContainerProps {}

const End: React.FC<ContainerProps> = () => {
    const router = useIonRouter();

    const game = useContext(GameContext);
    const { player_one, player_two } = game;

    let how: string = '';
    let whoWon: string = '';

    const gamePiecesWin: any = {
        rock: {
            wins: ['lizard','scissors'],
            how: ['Rock crushes Lizard', 'Rock smashes Scissors']
        },
        paper: {
            wins: ['rock', 'spock'],
            how: ['Paper covers Rock', 'Paper disproves Spock']
        },
        scissors: {
            wins: ['paper', 'lizard'],
            how: ['Scissors cuts Paper', 'Scissors decapitates Lizard']
        },
        lizard: {
            wins: ['spock', 'paper'],
            how: ['Lizard poisons Spock', 'Lizard eats Paper']
        },
        spock: {
            wins: ['scissors', 'rock'],
            how: ['Spock smashes Scissors', 'Spock vaporizes Rock']
        },
    };

    const outputWinner = (winner: string, looser: string) => {
        let obj;
        switch (winner) {
            case 'rock':
                obj = gamePiecesWin.rock;
                break
            case 'paper':
                obj = gamePiecesWin.paper;
                break;
            case 'scissors':
                obj = gamePiecesWin.scissors;
                break;
            case 'lizard':
                obj = gamePiecesWin.lizard;
                break;
            case 'spock':
                obj = gamePiecesWin.spock;
                break;
        }

        const array = obj.wins
        const index = array.indexOf(looser);
        const output = obj.how[index];
        how = output;
    };

    if (player_one === player_two) whoWon = 'Players Tied!';
    else if (gamePiecesWin[player_one].wins.includes(player_two)) {
        whoWon = 'Player One Wins!';
        outputWinner(player_one, player_two);
    } else {
        whoWon = 'Player Two Wins!';
        outputWinner(player_two, player_one);
    }

    const restart = () => {
        resetGameData();
        router.push("/start", "root", "push");
    }

    return (
        <div className='end'>
            <h1>{how}</h1>
            <h2>{whoWon}</h2>
            <h3>Player one choose {player_one}</h3>
            <h3>Player two choose {player_two}</h3>
            <Button name='Restart' click={() => restart()} />
        </div>
    );
}

export default End;