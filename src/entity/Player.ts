import Card from './Card';

export interface Player {
    id: number;                             // Your own player looks similar, with one extension.
    name: string;
    status: "active" | "folded" | "out";    // Status of the player:
                                            //   - active: the player can make bets, and win the current pot
                                            //   - folded: the player folded, and gave up interest in
                                            //       the current pot. They can return in the next round.
                                            //   - out: the player lost all chips, and is out of this sit'n'go
    version: string;
    stack: number;
    bet: number;
    hole_cards: Card[];
}

export default Player;