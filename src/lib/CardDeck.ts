import PlayCard from './PlayCard';

class CardDeck {
    cards: PlayCard[];

    constructor() {
        this.cards = [];

        const suits = ['diams', 'hearts', 'clubs', 'spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        suits.forEach((suit) => {
            ranks.forEach((rank) => {
                this.cards.push(new PlayCard(rank, suit));
            });
        });
    }

    getCard(): PlayCard {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }

    getCards(howMany: number): PlayCard[] {
        const drawnCards: PlayCard[] = [];
        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            drawnCards.push(card);
        }
        return drawnCards;
    }
}

export default CardDeck;

