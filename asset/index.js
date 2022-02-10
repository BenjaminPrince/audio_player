/**
 * récupérer le json
 * le parser et le récupérer en tableau javascript
 */

fetch('./album.json')
    .then(response=>response.json())

    .then(function(data){
        //console.log(data)

     const divAlbum = document.querySelector('#album')

        /**
         * boucle sur le tableau
         * pour chaque albums à l'intérieur du tableau
         * 
         * j'affiche une div contenant les informations de l'album
         */

        data.forEach(album => {
            
            divAlbum.innerHTML += 
         `  <div class="albums">
                <div class="card-img">
                    <img src="${album.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="">
                    <div class="card-name">
                        <h5 class="card-description">${album.artiste}</h5>
                    </div>
                </div>
            </div> `
        
        });
    })