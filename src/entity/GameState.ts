import Player from './Player';
import Card from './Card';

export interface GameState {
    tournament_id: string;   // Id of the current tournament

    game_id: string;          // Id of the current sit'n'go game. You can use this to link a
    // sequence of game states together for logging purposes, or to
    // make sure that the same strategy is played for an entire game

    round: number;                                      // Index of the current round within a sit'n'go

    bet_index: number;                                  // Index of the betting opportunity within a round

    small_blind: number;                              // The small blind in the current round. The big blind is twice the
    //     small blind

    current_buy_in: number;                          // The amount of the largest current bet from any one player

    pot: number;                                   // The size of the pot (sum of the player bets)

    minimum_raise: number;                           // Minimum raise amount. To raise you have to return at least:
    //     current_buy_in - players[in_action][bet] + minimum_raise

    dealer: number;                                    // The index of the player on the dealer button in this round
    //     The first player is (dealer+1)%(players.length)

    orbits: number;                                    // Number of orbits completed. (The number of times the dealer
    //     button returned to the same player.)

    in_action: number;                                // The index of your player, in the players array

    players: Player[];
    community_cards: Card[];
}
export default GameState;