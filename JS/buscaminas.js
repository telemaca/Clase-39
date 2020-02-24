// Buscaminas

//TABLERO INCIIAL
const board = 
[
  ['📦', '💣', '💣'],
  ['📦', '📦', '📦'],
  ['💣', '📦', '📦']
] 

//CANTIDAD DE CAJAS (TAMBIEN LO PUEDO CALCULAR CON UN FOR PARA QUE SEA DINÁMICO)
let boxesAmount = 6;

//TABLERO QUE SE MODIFICA SEGUN COORDENADAS INGRESADAS
let boardToShow = 
[
    ['📦', '📦', '📦'],
    ['📦', '📦', '📦'],
    ['📦', '📦', '📦']
]

//FLAG VARIABLE
let keepPlaying = true;

//VARIABLES DE COORDENADAS INICIALES
let coordinates = "";
let coordinateX = 0;
let coordinateY = 0;

//VARIABLE PARA SABER SI GANA
let notABombAmount = 0;

//WHILE LOOP
while (keepPlaying) {
    coordinates = prompt(`Ingrese una coordenada (2 números --0, 1 o 2-- separados por un espacio)`).split(" ")
    coordinateX = Number(coordinates[0])
    coordinateY = Number(coordinates[1])

    //SE DETERMINA SI HAY BOMBA O NO
    if (board[coordinateX][coordinateY] === '📦') {
        boardToShow[coordinateX][coordinateY] = '💨'
        alert(`¡No había bomba!\n` + boardToShow[0].join("") + "\n" + boardToShow[1].join("") + "\n" + boardToShow[2].join(""))
        notABombAmount++
    } else {
        boardToShow[coordinateX][coordinateY] = '💥'
        alert(`Había una bomba. Perdiste.\n` + boardToShow[0].join("") + "\n" + boardToShow[1].join("") + "\n" + boardToShow[2].join(""))
        keepPlaying = false;
    }

    //GANA (NO DESCUBRE NINGUNA BOMBA)
    if (notABombAmount === boxesAmount) {

        for(let i = 0; i<board.length; i++){
            for(let j = 0; j<board[i].length; j++){
                if(board[i][j] === '📦'){
                    board[i][j] = '💨';
                }
            }
        }
        alert(`¡¡Ganaste!!\n` + board[0].join("") + "\n" + board[1].join("") + "\n" + board[2].join(""))
        keepPlaying = false;
    }
}
