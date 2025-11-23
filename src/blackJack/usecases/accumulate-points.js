import { cardValue } from "./index";
import { HTMLplayerPoints, HTMLdealerPoints } from "../index";

/**
 *
 * @param {string} card
 * @param {number} turn
 * @param {number} pAces
 * @param {Array<string>} playerPoints
 * @returns
 */
//* Sumar Puntos
//Turno: 0 = primer jugador y el ultimo el dealer
export const accumulatePoints = (card, turn, pAces, playerPoints) => {
  if (!card || card.length === 0) throw new Error("card es obligatiorio como un array de string");
  if (turn === undefined || turn === null) throw new Error("turn es un argumento obligatorio");
  if (pAces == undefined || pAces === null) throw new Error("pAces es un argumento obligatorio");
  if (!playerPoints || playerPoints.length === 0) throw new Error("turn es un argumento obligatorio");

  let thisValue = cardValue(card);
  //Aumentar contador ases
  if (thisValue === 11) pAces++;
  playerPoints[turn] += thisValue;

  //Siempre que el jugador supere 21 y tenga algun as en la mano, este necesitara que valga 1 y no 11, para ello se le restara 10 a los puntos del jugador y quita el as del contador
  while (playerPoints[turn] > 21 && pAces > 0) {
    playerPoints[turn] -= 10;
    pAces--;
  }

  //Insertar los puntos según el turno (0 = jugador, 1 = dealer)
  if (turn === 0) {
    HTMLplayerPoints.innerHTML = playerPoints[turn];
  } else {
    HTMLdealerPoints.innerHTML = playerPoints[turn];
  }

  return { points: playerPoints[turn], pAces };
};
