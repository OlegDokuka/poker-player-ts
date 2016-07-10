import GameStrategy from './GameStrategy';
import {GameState, Bet} from '../entity';

export class DefaultGameStrategy implements GameStrategy {
    public gamble(state: GameState, bet: Bet): Bet {
        return bet;
    }
}