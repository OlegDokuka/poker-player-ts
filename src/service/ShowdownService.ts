import {GameState} from '../entity';
import GameService from './GameService';

export class ShowdownService implements GameService {
    public process(state: GameState): void {
        return;
    }
}
export default ShowdownService;