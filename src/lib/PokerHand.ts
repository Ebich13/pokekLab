import PlayCard from './PlayCard';

class PokerHand {
    cards: PlayCard[];

    constructor(cards: PlayCard[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        if (this.isFlush()) {
            return 'Флеш';
        }

        if (this.isStraight()) {
            return 'Стрит';
        }

        if (this.isThreeOfAKind()) {
            return 'Тройка';
        }

        if (this.isTwoPairs()) {
            return 'Две пары';
        }

        if (this.isOnePair()) {
            return 'Одна пара';
        }
        return 'Старшая карта';
    }

    private isFlush(): boolean {
        const firstSuit = this.cards[0].suit;
        return this.cards.every((card) => card.suit === firstSuit);
    }

    private isStraight(): boolean {
        const sortedCards = [...this.cards].sort((a, b) => a.rank.localeCompare(b.rank));
        const uniqueRanks = [...new Set(sortedCards.map((card) => card.rank))];

        if (uniqueRanks.length === 5) {
            return (
                parseInt(uniqueRanks[4]) - parseInt(uniqueRanks[0]) === 4 ||
                (uniqueRanks[0] === '2' && uniqueRanks[4] === 'A')
            );
        }

        return false;
    }

    private isThreeOfAKind(): boolean {
        for (let i = 0; i < this.cards.length; i++) {
            const rankCount = this.cards.filter((card) => card.rank === this.cards[i].rank).length;
            if (rankCount === 3) {
                return true;
            }
        }
        return false;
    }

    private isTwoPairs(): boolean {
        const rankCounts = new Map<string, number>();
        for (const card of this.cards) {
            if (rankCounts.has(card.rank)) {
                rankCounts.set(card.rank, rankCounts.get(card.rank)! + 1);
            } else {
                rankCounts.set(card.rank, 1);
            }
        }

        let pairsCount = 0;
        for (const count of rankCounts.values()) {
            if (count === 2) {
                pairsCount++;
            }
        }

        return pairsCount === 2;
    }

    private isOnePair(): boolean {
        const rankCounts = new Map<string, number>();
        for (const card of this.cards) {
            if (rankCounts.has(card.rank)) {
                rankCounts.set(card.rank, rankCounts.get(card.rank)! + 1);
            } else {
                rankCounts.set(card.rank, 1);
            }
        }

        for (const count of rankCounts.values()) {
            if (count === 2) {
                return true;
            }
        }

        return false;
    }
}

export default PokerHand;
