export interface Card {
    rank: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";  // Rank of the card. Possible values are numbers 2-10 and J,Q,K,A
    suit: "clubs" | "spades" | "hearts" | "diamonds";  // Suit of the card. Possible values are: clubs,spades,hearts,diamonds
}

export default Card;