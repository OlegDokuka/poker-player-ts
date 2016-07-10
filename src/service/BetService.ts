import {GameState, Bet} from '../entity';
import strategies from '../strategy';
import GameService from './GameService';

export class BetService implements GameService {
    public process(state: GameState): number {
        return strategies.reduce((b, s) => s.gamble(state, b), new Bet(0)).bet;
    }
}
export default BetService;