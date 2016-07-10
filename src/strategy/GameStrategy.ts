import {GameState, Bet} from '../entity';

export interface GameStrategy {
    gamble(state: GameState, bet: Bet): Bet;
}

export default GameStrategy;