/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata
*/

// Recupero gli elementi in pagina
const grid = document.getElementById("grid");
const playButton = document.getElementById("play-button");

function play() {
  //Funzioni interne al gioco
  const createCell = (number) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.append(number);
    return cell;
  };
  //Cambiamo il testo del bottone in 'Ricomincia'
  playButton.innerText = "Ricomincia";
  //Svuota la griglia
  grid.innerHTML = "";
  // Svolgimento effettivo

  for (let i = 1; i <= 100; i++) {
    const cell = createCell(i);
    cell.addEventListener("click", function () {
      cell.classList.add("clicked");
      console.log(i);
    });
    grid.appendChild(cell);
  }
}
playButton.addEventListener("click", play);
