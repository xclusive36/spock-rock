import { createContext } from "react";

interface gameType {
    players: number,
    player_one: string,
    player_two: string
}

const defaultGame: gameType = {
    players: 0,
    player_one: '',
    player_two: ''
}

export let game = {...defaultGame}

export const updateGameData = (data: any) => {
    game = {...data};
}

export const resetGameData = () => {
    game = {...defaultGame};
}

export const GameContext = createContext(game);

const WholeContext = (props: any) => {
    
    return (
        <GameContext.Provider value={game}>
            {props.children}
        </GameContext.Provider>
    );
};

export default WholeContext;