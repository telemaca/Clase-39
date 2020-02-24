//TABLERO INICIAL, QUE SE VA ACTUALIZANDO
let board = 
[
    ['🌱', '🌱', '🍎', '🌱', '🌱'],
    ['🍎', '🧱', '🌱', '🧱', '🍎'],
    ['🌱', '🧱', '🐍', '🌱', '🌱'],
    ['🌱', '🍎', '🌱', '🧱', '🌱'],
    ['🍎', '🌱', '🌱', '🍎', '🧱'],
    ['🌱', '🌱', '🌱', '🌱', '🍎'],    
]

// MENSAJE QUE SE REPITE
const message = `\n¿ARRIBA, DERECHA, ABAJO, IZQUIERDA?`

//FLAG VARIABLE
let keepPlaying = true;

//SE JUEGA MIENTRAS HAYA MANZANAS POR COMER
while (keepPlaying) {
    //CUENTO EN CADA VUELTA DEL LOOP CUÁNTAS MANZANAS QUEDAN
    let applesLeft = 0;
    for (let i = 0; i< board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '🍎')
            applesLeft++
        }
    }
    
    if (applesLeft > 0) {
        let direction = prompt(board[0].join("") + "\n" + board[1].join("") + "\n" + board[2].join("") + "\n" + board[3].join("") + "\n" + board[4].join("") + "\n" + board[5].join("") + message)

        switch (direction) {
            case "ARRIBA":
                //IF (NO DINÁMICO) PARA CUANDO VIBORITA ESTÁ EN EL EXTREMO SUPERIOR Y PASA AL INFERIOR// 
                if (board[0][0] === "🐍" || board[0][1] === "🐍" || board[0][2] === "🐍" || board[0][3] === "🐍" || board[0][4] === "🐍") {
                    for (let i = 0; i< board.length; i++) {
                        for (let j = board[i].length - 1; j >= 0; j--) {
                            if (board[i][j] === "🐍" && board[5][j] !== "🧱") {
                                board[5][j] = "🐍"            
                                board[0][j] = "🌱"
                            }
                        }
                    }
                } else {
                    //VIBORITA SUBE SI NO HAY LADRILLO
                    for (let i = 0; i< board.length; i++) {
                        for (let j = 0; j < board[i].length; j++) {
                            if (board[i][j] === "🐍" && board[i-1][j] !== "🧱") {
                                board[i][j] = "🌱"
                                board[i-1][j] = "🐍"           
                            } 
                        }
                    }
                }            
                break;
            case "DERECHA":
                //IF (NO DINÁMICO) PARA CUANDO VIBORITA ESTÁ EN EL EXTREMO DERECHO Y PASA AL IZQUIERDO
                if (board[0][4] === "🐍" || board[1][4] === "🐍" || board[2][4] === "🐍" || board[3][4] === "🐍" || board[4][4] === "🐍" || board[5][4] === "🐍") {
                    for (let i = 0; i< board.length; i++) {
                        for (let j = board[i].length - 1; j >= 0; j--) {
                            if (board[i][j] === "🐍" && board[i][0] !== "🧱") {
                                board[i][0] = "🐍"            
                                board[i][4] = "🌱"
                            }
                        }
                    }
                } else {
                    //VIBORITA VA A LA DERECHA SI NO HAY LADRILLO
                    for (let i = 0; i< board.length; i++) {
                        for (let j = board[i].length - 1; j >= 0; j--) {
                            if (board[i][j] === "🐍" && board[i][j+1] !== "🧱") {
                                board[i][j+1] = "🐍"            
                                board[i][j] = "🌱"
                            }
                        }
                    } 
                }
                break;
            case "ABAJO":
                //IF (NO DINÁMICO) PARA CUANDO VIBORITA ESTÁ EN EL EXTREMO INFERIOR Y PASA AL SUPERIOR
                if (board[5][0] === "🐍" || board[5][1] === "🐍" || board[5][2] === "🐍" || board[5][3] === "🐍" || board[5][4] === "🐍") {
                    for (let i = 0; i< board.length; i++) {
                        for (let j = board[i].length - 1; j >= 0; j--) {
                            if (board[i][j] === "🐍" && board[0][j] !== "🧱") {
                                board[0][j] = "🐍"            
                                board[5][j] = "🌱"
                            }
                        }
                    }
                } else {
                    //VIBORITA BAJA SI NO HAY LADRILLO
                    for (let i = board.length - 1; i >= 0; i--) {
                        for (let j = 0; j < board[i].length; j++) {
                            if (board[i][j] === "🐍" && board[i+1][j] !== "🧱") {
                                board[i+1][j] = "🐍"            
                                board[i][j] = "🌱"
                            }
                        }
                    }
                }
                break;
            case "IZQUIERDA":
                //IF (NO DINÁMICO) PARA CUANDO VIBORITA ESTÁ EN EL EXTREMO IZQUIERDO Y PASA AL DERECHO
                if (board[0][0] === "🐍" || board[1][0] === "🐍" || board[2][0] === "🐍" || board[3][0] === "🐍" || board[4][0] === "🐍" || board[5][0] === "🐍") {
                    for (let i = 0; i< board.length; i++) {
                        for (let j = board[i].length - 1; j >= 0; j--) {
                            if (board[i][j] === "🐍" && board[i][4] !== "🧱") {
                                board[i][4] = "🐍"            
                                board[i][0] = "🌱"
                            }
                        }
                    }
                } else {
                    //VIBORITA VA A LA IZQUIERDA SI NO HAY LADRILLO
                    for (let i = 0; i< board.length; i++) {
                        for (let j = 0; j < board[i].length; j++) {
                            if (board[i][j] === "🐍" && board[i][j-1] !== "🧱") {
                                board[i][j] = "🌱"
                                board[i][j-1] = "🐍"            
                            }
                        }
                    } 
                }
                break;
            //PALABRA CLAVE QUE USO PARA SALIR DEL PROGRAMA
            case "A":
                keepPlaying = false;
                break;
        }

    } else {
        //CANTIDAD DE MANZANAS ES = 0: NO SE JUEGA MÁS.
        alert(`¡¡Te comiste todas las manzanas!!`)
        keepPlaying = false;
    }
}