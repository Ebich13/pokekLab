import React, { useState } from 'react';
import Card from './Card';
import CardDeck from './lib/CardDeck';
import PokerHand from './lib/PokerHand';

const App = () => {
  const [hand, setHand] = useState([]);
  const [deck] = useState(new CardDeck());

  const dealCards = () => {
    const drawnCards = deck.getCards(5);
      setHand(drawnCards);
  };

  const getHandOutcome = () => {
    const pokerHand = new PokerHand(hand);
    return pokerHand.getOutcome();
  };

  return (
      <div className="App">
        <button onClick={dealCards}>Раздать карты</button>
        <div className="playingCards faceImages">
          {hand.length === 0 ? (
              <p>Нажмите "Раздать карты" для начала игры</p>
          ) : (
              hand.map((card, index) => (
                  <Card key={index} rank={card.rank} suit={card.suit} />
              ))
          )}
        </div>
        {hand.length === 5 && (
            <p>Покерная комбинация: {getHandOutcome()}</p>
        )}
      </div>
  );
};

export default App;

