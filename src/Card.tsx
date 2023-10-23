import React from 'react';

const Card = ({ rank, suit }) => {
    return (
        <div className={`card ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suit === 'diams' ? '♦' : suit === 'hearts' ? '♥' : suit === 'clubs' ? '♣' : '♠'}</span>
        </div>
    );
};

export default Card;
