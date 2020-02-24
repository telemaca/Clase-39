//FLAG VARIABLE
let keepGoing = true;

let songAndArtistArrays = [];

while (keepGoing) {
    const actionToPerform = prompt(`¿Qué desea hacer?\n1) Agregar una canción\n2) Buscar canciones de un artista \n3) Mostrar la lista de artistas\n4) Salir`);
    
    switch (actionToPerform) {
        case "1":
            //AGREGA CANCIONES Y ARTISTAS Y LAS METE EN UN ARRAY, QUE A SU VEZ SE PUSHEA EN UN ARRAY DE ARRAYS
            let songAndArtist = prompt(`Ingrese el nombre de la canción y el nombre del artista (separados por coma)`).split(", ");
            songAndArtistArrays.push(songAndArtist);
            console.log(songAndArtistArrays)
            break;
        case "2": //BUSCAR CANCIONES; SE PIDE INGRESAR UN ARTISTA Y SE BUSCAN SUS CANCIONES; SE MUESTRAN EN UNA LISTA
            let songList = "";
            const artistSearch = prompt(`Ingrese el nombre del artista a buscar:`)
            for (let i = 0; i < songAndArtistArrays.length; i++) {
                if (songAndArtistArrays[i][1] === artistSearch) {
                    songList += "- " + songAndArtistArrays[i][0] + "\n";
                }
            }
            alert(`Canciones de ${artistSearch}:\n` + songList)
            break;

        case "3": //LISTAR ARTISTAS; BUSCA ARTISTAS EN LOS ARRAYS Y LOS MUESTRA EN ORDEN DE APARICIÓN. SI EL ARTISTA SE REPITE, SOLO LO MUESTRA UNA VEZ.           
            let artistList = [];
            for (let i = 0; i < songAndArtistArrays.length; i++) {
                const artist = songAndArtistArrays[i][1];
                if (artistList.indexOf(artist) === -1) {
                    artistList.push(artist);
                }
            }
            artistList = artistList.join("\n")
            
            alert(`Artistas agregados:\n${artistList}`);
            break;

            case "4": //SALIR
                keepGoing = false;
                break;
    }
}