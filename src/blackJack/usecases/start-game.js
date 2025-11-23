import { HTMLplayerPoints, btnTake, btnStop, playerCardsDiv, dealerCardsDiv, HTMLdealerPoints } from "..";
import { createDeck, takeCard, createCard, accumulatePoints, createFaceDownDeck } from "./index";

/**
 *
 * @param {Number} players
 * @param {Array<string>} deck
 * @param {Array<Number>} playerPoints
 * @param {Number} dealer
 * @param {Number} playerAces
 * @param {Number} dealerAces
 * @returns
 */
//* Empezar la partida
export const startGame = (players = 2, deck, playerPoints, dealer, playerAces, dealerAces) => {
  deck = createDeck(); //Crear la baraja
  playerPoints = []; //vaciar los puntos

  //Llenar el array con los jugadores deseados
  for (let i = 0; i < players; i++) {
    playerPoints.push(0);
  }
  //El dealer siempre sera el ultimo jugador
  dealer = playerPoints.length - 1;

  //Resetar los ases de los jugadores
  playerAces = 0;
  dealerAces = 0;

  //Limpiar el html
  HTMLplayerPoints.innerHTML = 0; //Puntos del jugador
  HTMLdealerPoints.innerHTML = 0; //Puntos del dealer
  playerCardsDiv.innerHTML = ""; //Cartas del jugador
  dealerCardsDiv.innerHTML = ""; //Cartas del dealer
  document.getElementById("deck-container").innerHTML = ""; //Limpiar baraja visual
  HTMLdealerPoints.style.display = "none"; //Ocultar puntos del dealer

  //Rehabilitar botones
  btnTake.disabled = false;
  btnStop.disabled = false;
  let hiddenCard = null;

  //Ocultar overlays
  document.getElementById("overlay-win").style.display = "none";
  document.getElementById("overlay-lose").style.display = "none";
  document.getElementById("overlay-tie").style.display = "none";

  createFaceDownDeck();

  //Repartir dos cartas al jugador
  for (let i = 0; i < 2; i++) {
    const card = takeCard(deck);
    const result = accumulatePoints(card, 0, playerAces, playerPoints);

    playerAces = result.pAces;

    createCard(card, 0, 1);
  }

  //Repartir dos cartas al Dealer
  for (let i = 0; i < 2; i++) {
    const card = takeCard(deck);
    const result = accumulatePoints(card, 1, dealerAces, playerPoints);

    dealerAces = result.pAces;

    if (i === 1) {
      createCard(card, 1, 0);
      hiddenCard = card;
    } else {
      createCard(card, 1, 1);
    }
  }

  return { playerPoints, deck, dealer, playerAces, dealerAces, hiddenCard };
};
