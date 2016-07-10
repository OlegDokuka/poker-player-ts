import {GameState} from '../entity';

export interface GameService {
     process(state: GameState): any;
}
export default GameService;