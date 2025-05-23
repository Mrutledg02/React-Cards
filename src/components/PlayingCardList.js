import React, { useState } from "react";
import { useAxios } from "../hooks";
import formatPlayingCard from "../helpers/formatPlayingCard";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/",
    formatPlayingCard,
    "playingCards"
  );

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
      <button onClick={() => addCard("draw/")}>Add a playing card!</button>
        <button onClick={clearCards}>Clear all cards</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}


export default CardTable;